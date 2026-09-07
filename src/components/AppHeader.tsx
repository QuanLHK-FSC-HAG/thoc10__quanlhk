import React from 'react';
import { BookOpen, User, Maximize2, Minimize2, Menu, X, GraduationCap } from 'lucide-react';
import { BookData, Lesson } from '../types';

interface AppHeaderProps {
  book: BookData;
  currentLesson: Lesson;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  book,
  currentLesson,
  isSidebarOpen,
  onToggleSidebar,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <header
      id="app-header"
      className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-4 sm:px-6 shrink-0 z-20 shadow-xs select-none"
    >
      {/* Left: Sidebar Toggle + Book Brand */}
      <div className="flex items-center gap-3.5 min-w-0">
        <button
          id="btn-toggle-sidebar"
          onClick={onToggleSidebar}
          title={isSidebarOpen ? 'Thu gọn danh mục bài' : 'Mở danh mục bài'}
          className="p-2 text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg transition-colors cursor-pointer"
        >
          {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-[#2563EB] text-white p-2 rounded-lg shrink-0 shadow-xs">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider truncate">
                SGK {book.title} - {book.series}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                {book.grade}
              </span>
            </div>
            <h1 className="text-sm font-semibold text-[#0F172A] truncate" title={currentLesson.title}>
              {currentLesson.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Right: Teacher & Live status & Fullscreen */}
      <div className="flex items-center gap-4 sm:gap-6 text-sm shrink-0">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">
            Giáo viên
          </span>
          <span className="font-bold text-[#1E293B] text-xs sm:text-sm">
            {book.teacher}
          </span>
        </div>

        <div className="hidden sm:block h-8 w-px bg-[#E2E8F0]" />

        <div className="hidden md:flex items-center gap-2 bg-[#F1F5F9] px-3 py-1.5 rounded-full border border-[#E2E8F0]">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[#475569]">Đang trình chiếu</span>
        </div>

        <button
          id="btn-fullscreen-toggle"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Thoát toàn màn hình (Esc)' : 'Toàn màn hình trình chiếu (F)'}
          className="p-2 text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg shadow-xs transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-4 h-4 text-[#2563EB]" />
              <span className="hidden sm:inline">Thoát</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Toàn màn hình</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
