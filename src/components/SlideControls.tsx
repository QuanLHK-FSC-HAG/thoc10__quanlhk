import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Maximize2,
  Minimize2,
  HelpCircle,
  LayoutGrid,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SlideControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showThumbnails: boolean;
  onToggleThumbnails: () => void;
}

export const SlideControls: React.FC<SlideControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onReset,
  isFullscreen,
  onToggleFullscreen,
  showThumbnails,
  onToggleThumbnails,
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSlides - 1;

  return (
    <div
      id="slide-controls-bar"
      className="flex items-center justify-center gap-2 sm:gap-3 select-none transition-all mx-auto"
    >
      {/* Left controls: Home / Reset + Keyboard shortcut hint */}
      <button
        id="btn-first-slide"
        onClick={onReset}
        disabled={isFirst}
        title={t('controls.first_slide')}
        className={`h-11 sm:h-12 px-3 sm:px-4 rounded-full bg-white border border-[#CBD5E1] text-[#475569] shadow-xs flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer ${
          isFirst
            ? 'opacity-30 cursor-not-allowed text-[#94A3B8]'
            : 'hover:bg-[#F8FAFC] hover:text-[#2563EB] active:scale-95'
        }`}
      >
        <RotateCcw className="w-4 h-4" />
        <span className="hidden md:inline">{t('controls.first_slide')}</span>
      </button>

      <button
        id="btn-toggle-thumbnails"
        onClick={onToggleThumbnails}
        title={showThumbnails ? (isEn ? 'Hide slide list' : 'Ẩn danh sách slide') : t('controls.contents')}
        className={`h-11 sm:h-12 px-3 sm:px-4 rounded-full border shadow-xs text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
          showThumbnails
            ? 'bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]'
            : 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#2563EB]'
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="hidden md:inline">{t('controls.contents')}</span>
      </button>

      {/* Divider */}
      <div className="w-px h-7 sm:h-8 bg-[#CBD5E1] mx-0.5 sm:mx-1" />

      {/* Previous Slide Button */}
      <button
        id="btn-prev-slide"
        onClick={onPrev}
        disabled={isFirst}
        title={t('controls.prev_slide')}
        className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-[#CBD5E1] rounded-full text-[#475569] shadow-xs transition-all cursor-pointer ${
          isFirst
            ? 'opacity-30 cursor-not-allowed text-[#94A3B8]'
            : 'hover:bg-[#F8FAFC] hover:text-[#2563EB] active:scale-95'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slide Counter Badge */}
      <div
        id="slide-counter-badge"
        className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#CBD5E1] shadow-xs flex items-center gap-1.5"
        title={isEn ? `Slide ${currentIndex + 1} of ${totalSlides}` : `Slide ${currentIndex + 1} trên tổng số ${totalSlides}`}
      >
        <span className="text-sm font-bold text-[#0F172A] font-mono">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-xs text-[#94A3B8] font-bold font-mono">
          / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* Next Slide Button */}
      <button
        id="btn-next-slide"
        onClick={onNext}
        disabled={isLast}
        title={t('controls.next_slide')}
        className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-[#CBD5E1] rounded-full text-[#475569] shadow-xs transition-all cursor-pointer ${
          isLast
            ? 'opacity-30 cursor-not-allowed text-[#94A3B8]'
            : 'hover:bg-[#F8FAFC] hover:text-[#2563EB] active:scale-95'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Divider */}
      <div className="w-px h-7 sm:h-8 bg-[#CBD5E1] mx-0.5 sm:mx-1" />

      {/* Right controls: Keyboard Help tooltip & Fullscreen toggle */}
      <div className="relative group">
        <button
          id="btn-keyboard-help"
          title={isEn ? 'Keyboard Shortcuts' : 'Hướng dẫn phím tắt'}
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-[#CBD5E1] rounded-full text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] shadow-xs transition-all cursor-pointer"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
        {/* Hover keyboard shortcuts tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-52 p-3 bg-[#0F172A] text-white text-[11px] rounded-xl shadow-xl z-50 pointer-events-none border border-slate-700">
          <div className="font-semibold text-slate-200 mb-1.5 pb-1 border-b border-slate-700 uppercase tracking-wider text-[10px]">
            {isEn ? 'Keyboard Controls:' : 'Phím tắt điều khiển:'}
          </div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between">
              <span>{isEn ? 'Previous slide:' : 'Slide trước:'}</span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-amber-300">←</kbd>
            </div>
            <div className="flex justify-between">
              <span>{isEn ? 'Next slide:' : 'Slide sau:'}</span>
              <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-amber-300">→</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-amber-300">Space</kbd></span>
            </div>
            <div className="flex justify-between">
              <span>{isEn ? 'First slide:' : 'Về slide đầu:'}</span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-amber-300">Home</kbd>
            </div>
            <div className="flex justify-between">
              <span>{isEn ? 'Fullscreen:' : 'Toàn màn hình:'}</span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-amber-300">F</kbd>
            </div>
          </div>
        </div>
      </div>

      <button
        id="btn-slide-fullscreen"
        onClick={onToggleFullscreen}
        title={
          isFullscreen
            ? isEn
              ? 'Exit fullscreen (Esc)'
              : 'Thoát toàn màn hình (Esc)'
            : isEn
            ? 'Fullscreen presentation (F)'
            : 'Toàn màn hình trình chiếu (F)'
        }
        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-[#CBD5E1] rounded-full text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] shadow-xs transition-all cursor-pointer"
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4 text-[#2563EB]" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
