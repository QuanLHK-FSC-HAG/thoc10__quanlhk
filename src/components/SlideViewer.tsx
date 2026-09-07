import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  LayoutGrid,
  Type,
} from 'lucide-react';
import { Lesson } from '../types';
import { SlideCard } from './SlideCard';
import { SlideControls } from './SlideControls';

interface SlideViewerProps {
  lesson: Lesson;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  lesson,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'extra'>('normal');
  const [showEscHint, setShowEscHint] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 1280, height: 720 });
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 720,
  });
  const hintTimerRef = useRef<number | null>(null);

  // Reset to slide 0 when lesson changes
  useEffect(() => {
    setCurrentSlideIndex(0);
    setShowThumbnails(false);
  }, [lesson.id]);

  // Robust viewport & stage resize observer for 16:9 responsive scaling
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (stageRef.current) {
        const rect = stageRef.current.getBoundingClientRect();
        setStageSize({
          width: Math.max(100, rect.width),
          height: Math.max(100, rect.height),
        });
      }
    };

    // Immediate run + delayed retries to catch browser fullscreen layout transitions
    handleResize();
    const raf = requestAnimationFrame(handleResize);
    const t1 = window.setTimeout(handleResize, 50);
    const t2 = window.setTimeout(handleResize, 150);
    const t3 = window.setTimeout(handleResize, 350);

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleResize);
    document.addEventListener('webkitfullscreenchange', handleResize);

    const observer = stageRef.current ? new ResizeObserver(handleResize) : null;
    if (stageRef.current && observer) {
      observer.observe(stageRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
      document.removeEventListener('webkitfullscreenchange', handleResize);
      observer?.disconnect();
    };
  }, [isFullscreen]);

  // Show a brief hint only when first entering fullscreen, then disappear completely
  useEffect(() => {
    if (isFullscreen) {
      setShowEscHint(true);
      if (hintTimerRef.current) {
        window.clearTimeout(hintTimerRef.current);
      }
      hintTimerRef.current = window.setTimeout(() => {
        setShowEscHint(false);
      }, 1800);
    } else {
      setShowEscHint(false);
      if (hintTimerRef.current) {
        window.clearTimeout(hintTimerRef.current);
      }
    }
    return () => {
      if (hintTimerRef.current) {
        window.clearTimeout(hintTimerRef.current);
      }
    };
  }, [isFullscreen]);

  const totalSlides = lesson.slides.length;
  const currentSlide = lesson.slides[currentSlideIndex] || lesson.slides[0];

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handleReset = useCallback(() => {
    setCurrentSlideIndex(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleReset();
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(totalSlides - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onToggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        onToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, handleReset, onToggleFullscreen, isFullscreen, totalSlides]);

  // Click on slide in fullscreen: left 25% goes to previous, right 75% goes to next
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFullscreen) return;
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.tagName === 'INPUT' ||
      target.closest('input') ||
      target.tagName === 'A' ||
      target.closest('a')
    ) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.25) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleStageDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFullscreen) {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('input')) return;
      onToggleFullscreen();
    }
  };

  // Compute 16:9 viewport scale
  // IN FULLSCREEN MODE: Fill the screen 100% using viewport dimensions
  const BASE_WIDTH = 1280;
  const BASE_HEIGHT = 720;
  const availW = isFullscreen
    ? viewportSize.width
    : Math.max(100, stageSize.width - 32);
  const availH = isFullscreen
    ? viewportSize.height
    : Math.max(100, stageSize.height - 24);
  const scale = Math.min(availW / BASE_WIDTH, availH / BASE_HEIGHT);
  const scaledWidth = Math.round(BASE_WIDTH * scale);
  const scaledHeight = Math.round(BASE_HEIGHT * scale);

  return (
    <div
      id="slide-viewer-container"
      className={`relative select-none overflow-hidden ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-0 m-0 w-screen h-screen'
          : 'w-full h-full p-2 sm:p-4 bg-[#E2E8F0] flex flex-col justify-between'
      }`}
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP UTILITY BAR: ONLY RENDERED IN WINDOWED / NON-FULLSCREEN   */}
      {/* ------------------------------------------------------------- */}
      {!isFullscreen && (
        <div className="flex items-center justify-between gap-3 mb-1.5 shrink-0 px-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold px-3.5 py-1 rounded-full bg-white border border-[#CBD5E1] text-[#0F172A] shadow-xs">
              {lesson.shortTitle}
            </span>
            <span className="hidden sm:inline text-xs text-[#64748B] font-medium">
              Khung chiếu chuẩn 16:9 • KHBD Giáo khoa
            </span>
          </div>

          {/* Font scale buttons */}
          <div className="flex items-center gap-1 bg-white border border-[#CBD5E1] rounded-full p-1 shadow-xs">
            <span className="text-xs text-[#475569] px-2 font-bold hidden md:inline flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-[#2563EB]" /> Cỡ chữ:
            </span>
            <button
              onClick={() => setFontScale('normal')}
              className={`px-3 py-1 text-xs font-bold rounded-full cursor-pointer transition-colors ${
                fontScale === 'normal'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#475569] hover:bg-[#F1F5F9]'
              }`}
              title="Cỡ chữ 24px - 28px"
            >
              Chuẩn
            </button>
            <button
              onClick={() => setFontScale('large')}
              className={`px-3 py-1 text-xs font-bold rounded-full cursor-pointer transition-colors ${
                fontScale === 'large'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#475569] hover:bg-[#F1F5F9]'
              }`}
              title="Cỡ chữ lớn 28px - 32px"
            >
              Lớn (28-32px)
            </button>
            <button
              onClick={() => setFontScale('extra')}
              className={`px-3 py-1 text-xs font-bold rounded-full cursor-pointer transition-colors ${
                fontScale === 'extra'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#475569] hover:bg-[#F1F5F9]'
              }`}
              title="Cỡ chữ cực lớn 32px+"
            >
              Cực lớn
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MAIN 16:9 STAGE: In Fullscreen, ONLY the slide is visible     */}
      {/* ------------------------------------------------------------- */}
      <div
        ref={stageRef}
        onClick={handleStageClick}
        onDoubleClick={handleStageDoubleClick}
        className={`relative flex items-center justify-center overflow-hidden w-full ${
          isFullscreen
            ? 'w-full h-full cursor-default select-none'
            : 'flex-1 min-h-0 min-w-0 my-auto'
        }`}
      >
        {/* Floating Side Arrow: Previous - ONLY SHOWN IN WINDOWED MODE */}
        {!isFullscreen && (
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            title="Slide trước (←)"
            className={`absolute left-3 z-30 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all bg-white/90 hover:bg-white text-[#475569] hover:text-[#2563EB] shadow-md border border-[#CBD5E1] ${
              currentSlideIndex === 0
                ? 'opacity-0 pointer-events-none'
                : 'hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Floating Side Arrow: Next - ONLY SHOWN IN WINDOWED MODE */}
        {!isFullscreen && (
          <button
            onClick={handleNext}
            disabled={currentSlideIndex === totalSlides - 1}
            title="Slide sau (→ hoặc Phím cách)"
            className={`absolute right-3 z-30 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all bg-white/90 hover:bg-white text-[#475569] hover:text-[#2563EB] shadow-md border border-[#CBD5E1] ${
              currentSlideIndex === totalSlides - 1
                ? 'opacity-0 pointer-events-none'
                : 'hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* ============================================================ */}
        {/* THE 16:9 SLIDE FRAME: PURE FRAME IN FULLSCREEN MODE          */}
        {/* ============================================================ */}
        <div
          id="slide-card-wrapper"
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
            position: 'relative',
          }}
          className={`overflow-hidden shrink-0 ${
            isFullscreen
              ? 'rounded-none shadow-none border-0 bg-white'
              : 'rounded-2xl shadow-2xl border border-[#CBD5E1] bg-white transition-all'
          }`}
        >
          <div
            style={{
              width: `${BASE_WIDTH}px`,
              height: `${BASE_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            className="overflow-hidden flex flex-col"
          >
            <SlideCard
              slide={currentSlide}
              lesson={lesson}
              totalSlides={totalSlides}
              fontScale={fontScale}
              isFullscreen={isFullscreen}
            />
          </div>
        </div>

        {/* Brief fading toast hint upon entering fullscreen, then 100% hidden */}
        {isFullscreen && showEscHint && (
          <div className="absolute top-4 right-4 z-40 bg-black/80 backdrop-blur-md text-white/90 text-xs px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl transition-opacity duration-300 pointer-events-none font-medium">
            Nhấn ESC hoặc click đúp để thoát toàn màn hình
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM CONTROLS BAR: ONLY RENDERED IN WINDOWED / NON-FULLSCREEN */}
      {/* ------------------------------------------------------------- */}
      {!isFullscreen && (
        <div className="mt-1.5 shrink-0">
          <SlideControls
            currentIndex={currentSlideIndex}
            totalSlides={totalSlides}
            onPrev={handlePrev}
            onNext={handleNext}
            onReset={handleReset}
            isFullscreen={isFullscreen}
            onToggleFullscreen={onToggleFullscreen}
            showThumbnails={showThumbnails}
            onToggleThumbnails={() => setShowThumbnails(!showThumbnails)}
          />
        </div>
      )}

      {/* Slide Thumbnails Drawer / Modal */}
      {showThumbnails && (
        <div className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-xs z-50 flex flex-col justify-end p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-h-[70vh] flex flex-col max-w-5xl mx-auto w-full border border-[#CBD5E1]">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] mb-3">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-[#2563EB]" />
                <h3 className="font-bold text-[#0F172A] text-base">
                  Danh sách Slide: {lesson.title} ({totalSlides} slide)
                </h3>
              </div>
              <button
                onClick={() => setShowThumbnails(false)}
                className="p-1.5 text-[#94A3B8] hover:text-[#475569] hover:bg-[#F8FAFC] rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-1">
              {lesson.slides.map((s, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={s.id}
                    id={`thumb-slide-${idx}`}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setShowThumbnails(false);
                    }}
                    className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between aspect-video relative group ${
                      isActive
                        ? 'border-[#2563EB] bg-[#EFF6FF] shadow-sm ring-2 ring-[#2563EB]/30'
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-[#F8FAFC] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#2563EB] text-white'
                            : 'bg-[#E2E8F0] text-[#475569]'
                        }`}
                      >
                        Slide {s.slideNumber}
                      </span>
                      {s.badge && (
                        <span className="text-[10px] text-[#64748B] font-medium truncate max-w-[80px]">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-[#1E293B] line-clamp-2 leading-tight">
                      {s.title}
                    </p>
                    <span className="text-[10px] text-[#94A3B8] mt-1 uppercase font-mono font-semibold">
                      {s.type}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
