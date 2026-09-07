import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LessonSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const LessonSearch: React.FC<LessonSearchProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#94A3B8]">
        <Search className="w-4 h-4" />
      </div>
      <input
        id="lesson-search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={t('sidebar.search_placeholder')}
        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md py-2 pl-9 pr-8 text-xs text-[#1E293B] placeholder-[#94A3B8] focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB] outline-hidden transition-all"
      />
      {searchQuery && (
        <button
          id="btn-clear-search"
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#94A3B8] hover:text-[#64748B] cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
