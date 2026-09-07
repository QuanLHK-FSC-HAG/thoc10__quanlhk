import React, { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { BookData, Chapter, Lesson } from '../types';
import { LessonSearch } from './LessonSearch';

interface LessonSidebarProps {
  book: BookData;
  currentLesson: Lesson;
  onSelectLesson: (lesson: Lesson) => void;
  isOpen: boolean;
  onCloseMobile?: () => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  book,
  currentLesson,
  onSelectLesson,
  isOpen,
  onCloseMobile,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Expanded chapters state
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    book.chapters.forEach((ch) => {
      // Expand chapter 1 and 2 by default, or the active lesson's chapter
      initial[ch.id] = ch.id === currentLesson.chapterId || ch.number <= 2;
    });
    return initial;
  });

  // Ensure current lesson's chapter is expanded when lesson changes
  useEffect(() => {
    if (currentLesson?.chapterId) {
      setExpandedChapters((prev) => ({
        ...prev,
        [currentLesson.chapterId]: true,
      }));
    }
  }, [currentLesson]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Filter lessons based on search query
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return book.chapters;

    const query = searchQuery.toLowerCase().trim();
    return book.chapters
      .map((ch) => {
        const matchingLessons = ch.lessons.filter(
          (l) =>
            l.title.toLowerCase().includes(query) ||
            l.shortTitle.toLowerCase().includes(query) ||
            `bài ${l.number}`.includes(query) ||
            `${l.number}` === query
        );
        return {
          ...ch,
          lessons: matchingLessons,
        };
      })
      .filter((ch) => ch.lessons.length > 0);
  }, [book.chapters, searchQuery]);

  if (!isOpen) return null;

  return (
    <aside
      id="lesson-sidebar"
      className="w-72 sm:w-80 shrink-0 bg-white border-r border-[#E2E8F0] flex flex-col h-[calc(100vh-64px-32px)] z-20 transition-all duration-200 select-none"
    >
      {/* Search & Stats Bar */}
      <div className="p-4 border-b border-[#F1F5F9] space-y-2.5">
        <LessonSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex items-center justify-between text-[11px] text-[#64748B] px-1 font-medium">
          <span className="flex items-center gap-1.5 font-semibold text-[10px] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            {book.chapters.length} Chủ đề • {book.totalLessons} Bài
          </span>
          <button
            onClick={() => {
              const allExpanded: Record<string, boolean> = {};
              const hasClosed = Object.values(expandedChapters).some((v) => !v);
              book.chapters.forEach((ch) => {
                allExpanded[ch.id] = hasClosed;
              });
              setExpandedChapters(allExpanded);
            }}
            className="text-[10px] uppercase tracking-wider font-bold text-[#2563EB] hover:underline cursor-pointer"
          >
            {Object.values(expandedChapters).some((v) => !v) ? 'Mở tất cả' : 'Thu gọn'}
          </button>
        </div>
      </div>

      {/* Chapters & Lessons Tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {filteredChapters.length === 0 ? (
          <div className="py-8 text-center text-xs text-[#94A3B8]">
            Không tìm thấy bài học phù hợp với từ khóa "{searchQuery}".
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isExpanded = !!expandedChapters[chapter.id] || !!searchQuery;
            const hasActiveLesson = chapter.lessons.some((l) => l.id === currentLesson.id);

            return (
              <div key={chapter.id} className="border-b border-[#F1F5F9] last:border-b-0">
                {/* Chapter Title Accordion Header */}
                <button
                  id={`chapter-toggle-${chapter.id}`}
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-[#F8FAFC] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest truncate">
                      Chủ đề {chapter.number}: {chapter.title}
                    </span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#64748B] p-0.5 shrink-0">
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {/* Lessons in Chapter */}
                {isExpanded && (
                  <div className="flex flex-col">
                    {chapter.lessons.map((lesson) => {
                      const isSelected = lesson.id === currentLesson.id;
                      const lessonNumStr = String(lesson.number).padStart(2, '0');

                      return (
                        <button
                          key={lesson.id}
                          id={`lesson-item-${lesson.id}`}
                          onClick={() => {
                            onSelectLesson(lesson);
                            if (onCloseMobile && window.innerWidth < 768) {
                              onCloseMobile();
                            }
                          }}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer text-left ${
                            isSelected
                              ? 'bg-[#EFF6FF] border-r-4 border-[#2563EB] text-[#2563EB]'
                              : 'hover:bg-[#F8FAFC] text-[#475569]'
                          }`}
                        >
                          <span
                            className={`text-xs font-bold shrink-0 w-5 ${
                              isSelected ? 'opacity-70 text-[#2563EB]' : 'text-[#94A3B8]'
                            }`}
                          >
                            {lessonNumStr}
                          </span>
                          <span
                            className={`text-xs leading-tight truncate flex-1 ${
                              isSelected ? 'font-bold text-[#2563EB]' : 'font-medium text-[#475569]'
                            }`}
                            title={lesson.title}
                          >
                            {lesson.title}
                          </span>
                          <span
                            className={`text-[10px] shrink-0 font-mono ${
                              isSelected ? 'text-[#2563EB]/80 font-bold' : 'text-[#94A3B8]'
                            }`}
                          >
                            {lesson.slides.length}s
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer info in sidebar */}
      <div className="px-4 py-2 border-t border-[#F1F5F9] bg-[#F8FAFC] text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider flex items-center justify-between">
        <span>SGK Tin học 10</span>
        <span className="text-[#64748B]">NXB Giáo dục VN</span>
      </div>
    </aside>
  );
};
