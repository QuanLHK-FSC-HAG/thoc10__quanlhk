import React, { useState, useEffect } from 'react';
import { textbookData } from './data/bookData';
import { Lesson } from './types';
import { AppHeader } from './components/AppHeader';
import { LessonSidebar } from './components/LessonSidebar';
import { SlideViewer } from './components/SlideViewer';

export default function App() {
  // Default to Lesson 1 of Chapter 1
  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    textbookData.chapters[0].lessons[0]
  );
  // Sidebar state: open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });
  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fullscreen toggle handler with browser API support
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {
          // If browser rejects (e.g. inside restrictive iframe), toggle CSS state
          setIsFullscreen((prev) => !prev);
        });
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch(() => setIsFullscreen(false));
      }
    }
  };

  // Listen to browser fullscreenchange events
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="h-screen h-[100dvh] bg-[#F8FAFC] flex flex-col text-[#1E293B] font-['Be_Vietnam_Pro',sans-serif] overflow-hidden">
      {/* Horizontal Top Header */}
      {!isFullscreen && (
        <AppHeader
          book={textbookData}
          currentLesson={currentLesson}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        />
      )}

      {/* Main 2-column or full layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Category Sidebar: Chương -> Bài */}
        {!isFullscreen && (
          <LessonSidebar
            book={textbookData}
            currentLesson={currentLesson}
            onSelectLesson={(lesson) => {
              setCurrentLesson(lesson);
            }}
            isOpen={isSidebarOpen}
            onCloseMobile={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Right Main Presentation Area: 16:9 Slides */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          <SlideViewer
            lesson={currentLesson}
            isFullscreen={isFullscreen}
            onToggleFullscreen={handleToggleFullscreen}
          />
        </main>
      </div>

      {/* Clean Minimalism Footer */}
      {!isFullscreen && (
        <footer
          id="app-footer"
          className="h-8 bg-white border-t border-[#E2E8F0] flex items-center justify-between px-6 shrink-0 z-10 select-none"
        >
          <div className="flex items-center gap-4 text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 border border-[#E2E8F0] rounded bg-[#F8FAFC] text-[9px] font-mono text-[#64748B]">ESC</kbd>
              <span>Thoát</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 border border-[#E2E8F0] rounded bg-[#F8FAFC] text-[9px] font-mono text-[#64748B]">SPACE</kbd>
              <span>Tiếp theo</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 border border-[#E2E8F0] rounded bg-[#F8FAFC] text-[9px] font-mono text-[#64748B]">← / →</kbd>
              <span>Chuyển slide</span>
            </div>
          </div>

          <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
            Designed by <span className="text-[#2563EB]">QuanLHK</span>
          </p>
        </footer>
      )}
    </div>
  );
}
