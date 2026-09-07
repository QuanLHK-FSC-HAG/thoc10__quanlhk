import { Slide, Lesson, Chapter, BookData } from '../types';
import { Language } from '../context/LanguageContext';
import { ALL_SLIDE_OVERRIDES_EN } from './slideOverrides';
import { EXACT_SENTENCES_EN, COMMON_PHRASE_TRANSLATIONS } from './dictionary_en';

// Comprehensive dictionary for chapters, lessons, and content
const CHAPTER_TITLES_EN: Record<string, { title: string; desc: string }> = {
  'chu-de-1': {
    title: 'Topic 1. Computers and Information Society',
    desc: 'Nature of information and data, smart devices, achievements of Informatics, and digital device practice.',
  },
  'chu-de-2': {
    title: 'Topic 2. Computer Networks and the Internet',
    desc: 'Local area networks, Internet connectivity, cloud services, and cybersecurity defense.',
  },
  'chu-de-3': {
    title: 'Topic 3. Ethics, Law and Culture in Digital Environment',
    desc: 'Digital etiquette, intellectual property rights, Creative Commons licenses, and online safety.',
  },
  'chu-de-4': {
    title: 'Topic 4. Applied Informatics (Vector Graphics & Inkscape)',
    desc: 'Raster vs Vector graphics, Inkscape tools, path operations, Bézier curves, and design projects.',
  },
  'chu-de-5': {
    title: 'Topic 5. Problem Solving with Computers (Python Programming)',
    desc: 'Python environment, variables, conditionals, loops, lists, strings, functions, and debugging.',
  },
  'chu-de-6': {
    title: 'Topic 6. Data Structures and Data Processing in Python',
    desc: 'List and String data types, indexing, and comprehensive manipulation methods in Python.',
  },
  'chu-de-7': {
    title: 'Topic 7. Functions and Debugging Techniques',
    desc: 'Function definitions, parameter passing, variable scopes, error classification, testing, and capstone programming practice.',
  },
  'chu-de-8': {
    title: 'Topic 8. Career Orientation in Informatics',
    desc: 'Exploring the digital labor market, job profiles, and development roadmaps in Computer Graphic Design and Software Development.',
  },
};

const LESSON_TITLES_EN: Record<string, { title: string; shortTitle: string }> = {
  'bai-1': {
    title: 'Lesson 1. Overview of Information and Data Processing',
    shortTitle: 'L1: Information Processing',
  },
  'bai-2': {
    title: 'Lesson 2. Role of Smart Devices and Informatics in Society',
    shortTitle: 'L2: Smart Devices',
  },
  'bai-3': {
    title: 'Lesson 3. Data Types and Text Representation',
    shortTitle: 'L3: Text Data',
  },
  'bai-4': {
    title: 'Lesson 4. Binary System and Multimedia Data',
    shortTitle: 'L4: Binary Data',
  },
  'bai-5': {
    title: 'Lesson 5. Audio and Image Data Representation',
    shortTitle: 'L5: Audio & Images',
  },
  'bai-6': {
    title: 'Lesson 6. Video Data and Data Compression',
    shortTitle: 'L6: Video & Compression',
  },
  'bai-7': {
    title: 'Lesson 7. Practical Use of Common Digital Devices',
    shortTitle: 'L7: Digital Devices',
  },
  'bai-8': {
    title: 'Lesson 8. Computer Networks in Modern Life',
    shortTitle: 'L8: Computer Networks',
  },
  'bai-9': {
    title: 'Lesson 9. Cybersecurity and Online Safety',
    shortTitle: 'L9: Cyber Safety',
  },
  'bai-10': {
    title: 'Lesson 10. Practical Resource Exploitation on the Internet',
    shortTitle: 'L10: Internet Resources',
  },
  'bai-11': {
    title: 'Lesson 11. Digital Etiquette and Copyright Respect',
    shortTitle: 'L11: Digital Copyright',
  },
  'bai-12': {
    title: 'Lesson 12. Graphic Design Software',
    shortTitle: 'L12: Graphic Design',
  },
  'bai-13': {
    title: 'Lesson 13. Adding Graphic Objects in Inkscape',
    shortTitle: 'L13: Inkscape Objects',
  },
  'bai-14': {
    title: 'Lesson 14. Working with Paths and Text Objects',
    shortTitle: 'L14: Paths & Text',
  },
  'bai-15': {
    title: 'Lesson 15. Finalizing Graphic Artwork',
    shortTitle: 'L15: Finalizing Artwork',
  },
  'bai-16': {
    title: 'Lesson 16. High-Level Programming Languages and Python',
    shortTitle: 'L16: Python Intro',
  },
  'bai-17': {
    title: 'Lesson 17. Variables and Assignment Statements',
    shortTitle: 'L17: Variables & Assignment',
  },
  'bai-18': {
    title: 'Lesson 18. Basic Input and Output Statements',
    shortTitle: 'L18: Input & Output',
  },
  'bai-19': {
    title: 'Lesson 19. Conditional Statement if',
    shortTitle: 'L19: Conditional if',
  },
  'bai-20': {
    title: 'Lesson 20. Loop Statement for',
    shortTitle: 'L20: Loop for',
  },
  'bai-21': {
    title: 'Lesson 21. Loop Statement while',
    shortTitle: 'L21: Loop while',
  },
  'bai-22': {
    title: 'Lesson 22. List Data Type in Python',
    shortTitle: 'L22: Python Lists',
  },
  'bai-23': {
    title: 'Lesson 23. List Operations and Methods',
    shortTitle: 'L23: List Operations',
  },
  'bai-24': {
    title: 'Lesson 24. String Data Type in Python',
    shortTitle: 'L24: Python Strings',
  },
  'bai-25': {
    title: 'Lesson 25. String Operations and Methods',
    shortTitle: 'L25: String Operations',
  },
  'bai-26': {
    title: 'Lesson 26. Functions in Python',
    shortTitle: 'L26: Python Functions',
  },
  'bai-27': {
    title: 'Lesson 27. Function Parameters and Arguments',
    shortTitle: 'L27: Parameters',
  },
  'bai-28': {
    title: 'Lesson 28. Variable Scope in Functions',
    shortTitle: 'L28: Variable Scope',
  },
  'bai-29': {
    title: 'Lesson 29. Identifying Program Errors',
    shortTitle: 'L29: Program Errors',
  },
  'bai-30': {
    title: 'Lesson 30. Testing and Debugging Programs',
    shortTitle: 'L30: Testing & Debugging',
  },
  'bai-31': {
    title: 'Lesson 31. Practical Programming Project',
    shortTitle: 'L31: Coding Project',
  },
  'bai-32': {
    title: 'Lesson 32. Knowledge Synthesis and Review',
    shortTitle: 'L32: Synthesis Review',
  },
  'bai-33': {
    title: 'Lesson 33. Overview of Computer Graphic Design Careers',
    shortTitle: 'L33: Graphic Design Careers',
  },
  'bai-34': {
    title: 'Lesson 34. Software Development and Programming Careers',
    shortTitle: 'L34: Software Dev Careers',
  },
  // Composite lessons in Chapter 6 & Chapter 7
  'bai-22-23': {
    title: 'Lessons 22 & 23. List Data Type and Processing in Python',
    shortTitle: 'L22-23: Python Lists',
  },
  'bai-24-25': {
    title: 'Lessons 24 & 25. String Data Type and Text Processing',
    shortTitle: 'L24-25: Python Strings',
  },
  'bai-26-27': {
    title: 'Lessons 26 & 27. Function Definition, Construction, and Parameters',
    shortTitle: 'L26-27: Functions & Params',
  },
  'bai-29-30': {
    title: 'Lessons 29 & 30. Error Classification, Testing, and Debugging',
    shortTitle: 'L29-30: Testing & Debugging',
  },
  'bai-31-32': {
    title: 'Lessons 31 & 32. Practical Synthesis Project in Python',
    shortTitle: 'L31-32: Synthesis Project',
  },
};

// Common terms and sentence translation replacements
const PHRASE_REPLACEMENTS: Array<[RegExp, string]> = [
  // Badges & Labels
  [/KHBD Chuẩn/g, 'Standard Lesson Plan'],
  [/Bài (\d+) • KHBD Chuẩn/g, 'Lesson $1 • Standard Lesson Plan'],
  [/Khởi động:?/gi, 'Warm-up:'],
  [/Khởi động/gi, 'Warm-up'],
  [/Khám phá:?/gi, 'Explore:'],
  [/Khám phá/gi, 'Explore'],
  [/Luyện tập:?/gi, 'Practice:'],
  [/Luyện tập/gi, 'Practice'],
  [/Vận dụng:?/gi, 'Application:'],
  [/Vận dụng/gi, 'Application'],
  [/Ghi nhớ:?/gi, 'Remember:'],
  [/Ghi nhớ/gi, 'Remember'],
  [/Em cần biết:?/gi, 'Key Takeaway:'],
  [/Em cần biết/gi, 'Key Takeaway'],
  [/Tóm tắt trọng tâm/gi, 'Key Summary'],
  [/Nhiệm vụ (\d+):?/gi, 'Task $1:'],
  [/Hoạt động (\d+):?/gi, 'Activity $1:'],
  [/Ví dụ minh họa:?/gi, 'Illustrative Example:'],
  [/Ví dụ/gi, 'Example'],
  [/Tình huống thực tế/gi, 'Real-world Scenario'],
  [/Câu hỏi trắc nghiệm/gi, 'Multiple Choice Quiz'],
  [/Giải thích sư phạm:?/gi, 'Pedagogical Explanation:'],
  [/Đáp án đúng:?/gi, 'Correct Answer:'],
  [/Thông tin:/gi, 'Information:'],
  [/Dữ liệu:/gi, 'Data:'],
  [/Hành động:/gi, 'Action:'],
  [/Hệ quả:/gi, 'Consequence:'],
  [/Ngữ cảnh (\d+):?/gi, 'Context $1:'],
  [/Bước (\d+):?/gi, 'Step $1:'],

  // Textbook Titles & Subjects
  [/Tin học 10 • Kết nối tri thức với cuộc sống/gi, 'Informatics 10 • Connecting Knowledge to Life'],
  [/Chủ đề (\d+): Máy tính và xã hội thông tin/gi, 'Topic $1: Computers and Information Society'],
  [/Chủ đề (\d+): Mạng máy tính và Internet/gi, 'Topic $1: Computer Networks and the Internet'],
  [/Chủ đề (\d+): Đạo đức, pháp luật và văn hóa trong môi trường số/gi, 'Topic $1: Ethics, Law and Culture in Digital Environment'],
  [/Chủ đề (\d+): Ứng dụng tin học/gi, 'Topic $1: Applied Informatics'],
  [/Chủ đề (\d+): Giải quyết vấn đề với sự trợ giúp của máy tính/gi, 'Topic $1: Problem Solving with Computers'],
  [/Chủ đề (\d+): Hướng nghiệp với Tin học/gi, 'Topic $1: Career Orientation in Informatics'],
  [/Sách giáo khoa Tin học 10/gi, 'Informatics 10 Textbook'],
  [/Bộ sách Kết nối tri thức với cuộc sống/gi, 'Connecting Knowledge to Life Series'],
  [/Giáo viên: QuanLHK/gi, 'Teacher: QuanLHK'],
  [/Nhà xuất bản Giáo dục Việt Nam/gi, 'Vietnam Education Publishing House'],
  [/trang (\d+) - (\d+)/gi, 'pages $1 - $2'],
  [/trang (\d+)/gi, 'page $1'],
  [/SGK Trang (\d+)/gi, 'Textbook p.$1'],
  [/SGK/gi, 'Textbook'],

  // Pedagogical & Technical Concepts
  [/Tổng quan về thông tin và quá trình xử lý thông tin/gi, 'Overview of Information and Data Processing'],
  [/Bản chất thông tin, dữ liệu, thiết bị thông minh/gi, 'Nature of information, data, smart devices'],
  [/Thu nhận \(Input\)/gi, 'Capture (Input)'],
  [/Xử lí & Lưu trữ/gi, 'Processing & Storage'],
  [/Xuất tin \(Output\)/gi, 'Output'],
  [/DỮ LIỆU ĐẦU VÀO/gi, 'INPUT DATA'],
  [/BỘ XỬ LÍ \(CPU\)/gi, 'PROCESSOR (CPU)'],
  [/THÔNG TIN KẾT QUẢ/gi, 'OUTPUT INFORMATION'],
  [/Mô hình chu trình 3 bước xử lí thông tin/gi, '3-Step Information Processing Cycle Model'],
  [/Phân biệt bản chất thông tin và dữ liệu/gi, 'Distinguish the nature of information and data'],
  [/tính độc lập tương đối/gi, 'relative independence'],
  [/Mô tả chu trình 3 bước xử lí thông tin bằng máy tính điện tử/gi, 'Describe the 3-step computer information processing cycle'],
  [/Nắm vững bảng đơn vị lưu trữ \(bội số lũy thừa của 2\) và cách quy đổi/gi, 'Master storage capacity units (powers of 2) and conversions'],
  [/Nhận biết ưu thế vượt trội của thiết bị số trong đời sống hiện đại/gi, 'Recognize the superior advantages of digital devices in modern life'],
  [/Dữ liệu nói lên điều gì\?/gi, 'What Does Data Tell Us?'],
  [/Khái niệm dữ liệu và thông tin/gi, 'Concept of Data and Information'],
  [/Tính độc lập tương đối giữa thông tin và dữ liệu/gi, 'Relative Independence Between Information and Data'],
  [/Mô hình 3 bước xử lí thông tin bằng máy tính/gi, '3-Step Computer Information Processing Model'],
  [/Bảng đơn vị đo dung lượng lưu trữ dữ liệu/gi, 'Data Storage Capacity Measurement Units Table'],
  [/Ưu thế vượt trội của thiết bị số/gi, 'Superior Advantages of Digital Devices'],
  [/Tổng kết và ghi nhớ trọng tâm/gi, 'Summary and Key Takeaways'],
  [/Đơn vị đo/gi, 'Unit'],
  [/Kí hiệu/gi, 'Symbol'],
  [/Giá trị quy đổi/gi, 'Conversion Value'],
  [/Ý nghĩa thực tế/gi, 'Practical Significance'],
  [/Bội số byte/gi, 'Byte Multiple'],
  [/Tương đương/gi, 'Equivalent to'],

  // Common verbs and phrasing
  [/Không nên/gi, 'Do not'],
  [/Nên thực hiện/gi, 'Recommended'],
  [/Hạn chế \/ Cảnh báo/gi, 'Caution / Warning'],
  [/Đúng/gi, 'True / Correct'],
  [/Sai/gi, 'False / Incorrect'],
];

/**
 * Translates any Vietnamese string into clean, academic English.
 */
export function translateText(text: string | undefined, lang: Language): string {
  if (!text || lang === 'vi') return text || '';

  // Check exact sentence match first
  if (EXACT_SENTENCES_EN[text]) {
    return EXACT_SENTENCES_EN[text];
  }
  const trimmed = text.trim();
  if (EXACT_SENTENCES_EN[trimmed]) {
    return EXACT_SENTENCES_EN[trimmed];
  }

  let result = text;
  // Apply specific common phrase translations
  for (const [regex, replacement] of COMMON_PHRASE_TRANSLATIONS) {
    result = result.replace(regex, replacement);
  }
  // Apply standard phrase replacements
  for (const [regex, replacement] of PHRASE_REPLACEMENTS) {
    result = result.replace(regex, replacement);
  }
  return result;
}

/**
 * Returns a translated version of a Slide when lang === 'en'.
 */
export function getTranslatedSlide(slide: Slide, lang: Language, lessonId?: string): Slide {
  if (lang === 'vi') return slide;

  // 1. Check if scoped override exists for this lesson and slide (e.g. 'bai-22-23_b22-s1')
  if (lessonId) {
    const scopedKey = `${lessonId}_${slide.id}`;
    if (ALL_SLIDE_OVERRIDES_EN[scopedKey]) {
      return ALL_SLIDE_OVERRIDES_EN[scopedKey];
    }
  }

  // 2. Check if complete high-fidelity translation exists for this slide
  if (ALL_SLIDE_OVERRIDES_EN[slide.id]) {
    return ALL_SLIDE_OVERRIDES_EN[slide.id];
  }

  // 2. Fallback to comprehensive field-by-field translation
  return {
    ...slide,
    title: translateText(slide.title, lang),
    subtitle: slide.subtitle ? translateText(slide.subtitle, lang) : undefined,
    lead: slide.lead ? translateText(slide.lead, lang) : undefined,
    badge: slide.badge ? translateText(slide.badge, lang) : undefined,
    illustrationTitle: slide.illustrationTitle ? translateText(slide.illustrationTitle, lang) : undefined,
    imageCaption: slide.imageCaption ? translateText(slide.imageCaption, lang) : undefined,
    sourceCitation: slide.sourceCitation ? translateText(slide.sourceCitation, lang) : undefined,
    footerNote: slide.footerNote ? translateText(slide.footerNote, lang) : undefined,

    bullets: slide.bullets?.map((b) => ({
      ...b,
      title: b.title ? translateText(b.title, lang) : undefined,
      text: translateText(b.text, lang),
      subtext: b.subtext ? translateText(b.subtext, lang) : undefined,
      badge: b.badge ? translateText(b.badge, lang) : undefined,
    })),

    highlightBox: slide.highlightBox
      ? {
          ...slide.highlightBox,
          title: translateText(slide.highlightBox.title, lang),
          content: Array.isArray(slide.highlightBox.content)
            ? slide.highlightBox.content.map((c) => translateText(c, lang))
            : translateText(slide.highlightBox.content, lang),
        }
      : undefined,

    cardsGrid: slide.cardsGrid?.map((card) => ({
      ...card,
      title: translateText(card.title, lang),
      desc: translateText(card.desc, lang),
      tag: card.tag ? translateText(card.tag, lang) : undefined,
      points: card.points?.map((pt) => translateText(pt, lang)),
    })),

    compareColumns: slide.compareColumns
      ? {
          left: {
            ...slide.compareColumns.left,
            title: translateText(slide.compareColumns.left.title, lang),
            subtitle: slide.compareColumns.left.subtitle
              ? translateText(slide.compareColumns.left.subtitle, lang)
              : undefined,
            badge: slide.compareColumns.left.badge
              ? translateText(slide.compareColumns.left.badge, lang)
              : undefined,
            points: slide.compareColumns.left.points.map((p) => translateText(p, lang)),
          },
          right: {
            ...slide.compareColumns.right,
            title: translateText(slide.compareColumns.right.title, lang),
            subtitle: slide.compareColumns.right.subtitle
              ? translateText(slide.compareColumns.right.subtitle, lang)
              : undefined,
            badge: slide.compareColumns.right.badge
              ? translateText(slide.compareColumns.right.badge, lang)
              : undefined,
            points: slide.compareColumns.right.points.map((p) => translateText(p, lang)),
          },
        }
      : undefined,

    tableData: slide.tableData
      ? {
          headers: slide.tableData.headers.map((h) => translateText(h, lang)),
          rows: slide.tableData.rows.map((row) => row.map((cell) => translateText(cell, lang))),
          caption: slide.tableData.caption ? translateText(slide.tableData.caption, lang) : undefined,
        }
      : undefined,

    diagram: slide.diagram
      ? {
          ...slide.diagram,
          steps: slide.diagram.steps.map((st) => ({
            ...st,
            title: translateText(st.title, lang),
            desc: translateText(st.desc, lang),
            tag: st.tag ? translateText(st.tag, lang) : undefined,
          })),
        }
      : undefined,

    quiz: slide.quiz
      ? {
          ...slide.quiz,
          question: translateText(slide.quiz.question, lang),
          options: slide.quiz.options?.map((o) => translateText(o, lang)),
          answer: slide.quiz.answer ? translateText(slide.quiz.answer, lang) : undefined,
          explanation: slide.quiz.explanation ? translateText(slide.quiz.explanation, lang) : undefined,
        }
      : undefined,

    situation: slide.situation
      ? {
          context: translateText(slide.situation.context, lang),
          question: translateText(slide.situation.question, lang),
          options: slide.situation.options.map((opt) => ({
            ...opt,
            label: translateText(opt.label, lang),
            action: translateText(opt.action, lang),
            consequence: translateText(opt.consequence, lang),
          })),
        }
      : undefined,

    mindmap: slide.mindmap
      ? {
          center: translateText(slide.mindmap.center, lang),
          centerSubtitle: slide.mindmap.centerSubtitle
            ? translateText(slide.mindmap.centerSubtitle, lang)
            : undefined,
          branches: slide.mindmap.branches.map((b) => ({
            ...b,
            title: translateText(b.title, lang),
            subItems: b.subItems.map((si) => translateText(si, lang)),
          })),
        }
      : undefined,
  };
}

/**
 * Returns a translated Lesson when lang === 'en'.
 */
export function getTranslatedLesson(lesson: Lesson, lang: Language): Lesson {
  if (lang === 'vi') return lesson;

  const englishMeta = LESSON_TITLES_EN[lesson.id];
  const translatedTitle = englishMeta ? englishMeta.title : translateText(lesson.title, lang);
  const translatedShortTitle = englishMeta ? englishMeta.shortTitle : translateText(lesson.shortTitle, lang);

  return {
    ...lesson,
    title: translatedTitle,
    shortTitle: translatedShortTitle,
    slides: lesson.slides.map((s) => getTranslatedSlide(s, lang, lesson.id)),
  };
}

/**
 * Returns a translated Chapter when lang === 'en'.
 */
export function getTranslatedChapter(chapter: Chapter, lang: Language): Chapter {
  if (lang === 'vi') return chapter;

  const englishMeta = CHAPTER_TITLES_EN[chapter.id];
  return {
    ...chapter,
    title: englishMeta ? englishMeta.title : translateText(chapter.title, lang),
    description: englishMeta ? englishMeta.desc : (chapter.description ? translateText(chapter.description, lang) : undefined),
    lessons: chapter.lessons.map((l) => getTranslatedLesson(l, lang)),
  };
}

/**
 * Returns a full translated BookData when lang === 'en'.
 */
export function getTranslatedBook(book: BookData, lang: Language): BookData {
  if (lang === 'vi') return book;

  return {
    ...book,
    title: 'Informatics 10',
    series: 'Connecting Knowledge to Life',
    subject: 'Informatics',
    grade: 'Grade 10',
    publisher: 'Vietnam Education Publishing House',
    chapters: book.chapters.map((ch) => getTranslatedChapter(ch, lang)),
  };
}
