import React from 'react';
import { BookOpen, Maximize2, Minimize2, Menu, X } from 'lucide-react';
import { BookData, Lesson } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { VietnamFlag, UKFlag } from '../utils/flags';

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
  const { language, setLanguage, t } = useLanguage();

  return (
    <header
      id="app-header"
      className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-3 sm:px-6 shrink-0 z-20 shadow-xs select-none"
    >
      {/* Left: Sidebar Toggle + Book Brand */}
      <div className="flex items-center gap-3.5 min-w-0">
        <button
          id="btn-toggle-sidebar"
          onClick={onToggleSidebar}
          title={isSidebarOpen ? t('header.collapse_menu') : t('header.open_menu')}
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
                {t('header.book_prefix')} {book.title} - {book.series}
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

      {/* Right: Language Toggle (BEFORE TEACHER), Teacher, Live Status, Fullscreen */}
      <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 text-sm shrink-0">
        {/* Language Selector: VIETNAMESE / ENGLISH with Flags */}
        <div
          id="language-toggle-group"
          className="flex items-center p-1 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl shadow-xs"
          role="group"
          aria-label="Language Selector"
        >
          <button
            id="btn-lang-vi"
            onClick={() => setLanguage('vi')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'vi'
                ? 'bg-white text-[#1E293B] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/50 border border-transparent'
            }`}
            title="Tiếng Việt (Vietnamese)"
          >
            <VietnamFlag className="w-4 h-2.5 sm:h-3 rounded-xs shadow-xs" />
            <span className="tracking-wide">VIETNAMESE</span>
          </button>
          <button
            id="btn-lang-en"
            onClick={() => setLanguage('en')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-white text-[#1E293B] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/50 border border-transparent'
            }`}
            title="English (United Kingdom)"
          >
            <UKFlag className="w-4 h-2.5 sm:h-3 rounded-xs shadow-xs" />
            <span className="tracking-wide">ENGLISH</span>
          </button>
        </div>

        {/* Teacher Info */}
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">
            {t('header.teacher')}
          </span>
          <span className="font-bold text-[#1E293B] text-xs sm:text-sm">
            {book.teacher}
          </span>
        </div>

        <div className="hidden sm:block h-8 w-px bg-[#E2E8F0]" />

        {/* Live indicator */}
        <div className="hidden md:flex items-center gap-2 bg-[#F1F5F9] px-3 py-1.5 rounded-full border border-[#E2E8F0]">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[#475569]">{t('header.presenting')}</span>
        </div>

        {/* Fullscreen Button */}
        <button
          id="btn-fullscreen-toggle"
          onClick={onToggleFullscreen}
          title={isFullscreen ? t('header.exit_fullscreen') : t('header.fullscreen')}
          className="p-2 text-[#475569] hover:text-[#2563EB] hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg shadow-xs transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-4 h-4 text-[#2563EB]" />
              <span className="hidden sm:inline">{t('header.exit_fullscreen')}</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t('header.fullscreen')}</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
