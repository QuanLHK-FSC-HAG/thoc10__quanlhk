import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  vi: {
    // Header
    'header.book_prefix': 'SGK',
    'header.series': 'Kết nối tri thức với cuộc sống',
    'header.grade': 'Lớp 10',
    'header.teacher': 'Giáo viên',
    'header.presenting': 'Đang trình chiếu',
    'header.fullscreen': 'Toàn màn hình',
    'header.exit_fullscreen': 'Thoát',
    'header.collapse_menu': 'Thu gọn danh mục bài',
    'header.open_menu': 'Mở danh mục bài',

    // Sidebar
    'sidebar.search_placeholder': 'Tìm tên bài học...',
    'sidebar.topics': 'Chủ đề',
    'sidebar.lessons': 'Bài',
    'sidebar.expand_all': 'Mở tất cả',
    'sidebar.collapse_all': 'Thu gọn',
    'sidebar.slides_count': 'slide',
    'sidebar.page_prefix': 'Trang',

    // Controls & Viewer
    'controls.first_slide': 'Về đầu',
    'controls.contents': 'Mục lục',
    'controls.prev_slide': 'Slide trước (Phím ←)',
    'controls.next_slide': 'Slide sau (Phím → hoặc Space)',
    'controls.slide_of': 'trên tổng số',
    'viewer.canvas_badge': 'Khung chiếu chuẩn 16:9 • KHBD Giáo khoa',
    'viewer.font_size': 'Cỡ chữ:',
    'viewer.font_normal': 'Chuẩn',
    'viewer.font_large': 'Lớn (28-32px)',
    'viewer.font_extra': 'Cực lớn',
    'viewer.esc_hint': 'Nhấn ESC hoặc click đúp để thoát toàn màn hình',
    'viewer.toc_title': 'Danh sách Slide',

    // Footer
    'footer.esc': 'Thoát',
    'footer.space': 'Tiếp theo',
    'footer.arrow': 'Chuyển slide',
    'footer.designed_by': 'Thiết kế bởi',

    // Slide specific UI
    'slide.badge_standard': 'Bài giảng trình chiếu trực quan • KHBD Chuẩn',
    'slide.source_prefix': 'Nguồn tham khảo: Sách giáo khoa Tin học 10',
    'slide.publisher': 'Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam',
    'slide.show_answer': 'Hiển thị đáp án',
    'slide.hide_answer': 'Ẩn đáp án',
    'slide.correct_answer': 'Đáp án đúng:',
    'slide.scenario_title': 'Tình huống thực tế (SGK):',
    'slide.scenario_question': 'Câu hỏi:',
    'slide.scenario_recommended': 'Nên thực hiện',
    'slide.scenario_caution': 'Hạn chế / Cảnh báo',
    'slide.scenario_consequence': 'Hệ quả:',
    'slide.python_code': 'Mã nguồn Python:',
    'slide.python_output': 'Kết quả chạy:',
  },
  en: {
    // Header
    'header.book_prefix': 'Textbook',
    'header.series': 'Connecting Knowledge to Life',
    'header.grade': 'Grade 10',
    'header.teacher': 'Teacher',
    'header.presenting': 'Live Presenting',
    'header.fullscreen': 'Fullscreen',
    'header.exit_fullscreen': 'Exit',
    'header.collapse_menu': 'Collapse lesson menu',
    'header.open_menu': 'Expand lesson menu',

    // Sidebar
    'sidebar.search_placeholder': 'Search lessons, topics...',
    'sidebar.topics': 'Topics',
    'sidebar.lessons': 'Lessons',
    'sidebar.expand_all': 'Expand all',
    'sidebar.collapse_all': 'Collapse',
    'sidebar.slides_count': 'slides',
    'sidebar.page_prefix': 'Pages',

    // Controls & Viewer
    'controls.first_slide': 'First',
    'controls.contents': 'Contents',
    'controls.prev_slide': 'Previous slide (Key ←)',
    'controls.next_slide': 'Next slide (Key → or Space)',
    'controls.slide_of': 'of',
    'viewer.canvas_badge': 'Standard 16:9 Canvas • Standard Lesson Plan',
    'viewer.font_size': 'Font size:',
    'viewer.font_normal': 'Standard',
    'viewer.font_large': 'Large (28-32px)',
    'viewer.font_extra': 'Extra Large',
    'viewer.esc_hint': 'Press ESC or double-click to exit fullscreen',
    'viewer.toc_title': 'Lesson Slide Overview',

    // Footer
    'footer.esc': 'Exit',
    'footer.space': 'Next',
    'footer.arrow': 'Switch slide',
    'footer.designed_by': 'Designed by',

    // Slide specific UI
    'slide.badge_standard': 'Visual Interactive Presentation • Standard Lesson Plan',
    'slide.source_prefix': 'Reference Source: Informatics 10 Textbook',
    'slide.publisher': 'Connecting Knowledge to Life Series - Vietnam Education Publishing House',
    'slide.show_answer': 'Show answer',
    'slide.hide_answer': 'Hide answer',
    'slide.correct_answer': 'Correct answer:',
    'slide.scenario_title': 'Real-world Scenario (Textbook):',
    'slide.scenario_question': 'Question:',
    'slide.scenario_recommended': 'Recommended Action',
    'slide.scenario_caution': 'Warning / Caution',
    'slide.scenario_consequence': 'Consequence:',
    'slide.python_code': 'Python Source Code:',
    'slide.python_output': 'Execution Output:',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_presentation_language');
      if (saved === 'vi' || saved === 'en') return saved;
    }
    return 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_presentation_language', lang);
    }
  };

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS['vi']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
