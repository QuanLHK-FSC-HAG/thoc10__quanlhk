export type SlideType = 
  | 'title' 
  | 'objective' 
  | 'warmup' 
  | 'content' 
  | 'table' 
  | 'process' 
  | 'diagram'
  | 'remember' 
  | 'practice' 
  | 'apply' 
  | 'summary';

export interface SlideBullet {
  title?: string;
  text: string;
  subtext?: string;
  badge?: string;
}

export interface SlideHighlightBox {
  type: 'remember' | 'note' | 'tip' | 'warning';
  title: string;
  content: string | string[];
}

export interface SlideTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface DiagramStep {
  stepNumber: string;
  title: string;
  desc: string;
  tag?: string;
}

export interface SlideQuiz {
  question: string;
  options?: string[];
  answer?: string;
  explanation?: string;
}

export interface SlideExample {
  title: string;
  content: string;
  result?: string;
}

export interface SlideCodeSnippet {
  language: string;
  code: string;
  output?: string;
  explanation?: string;
}

export interface SlideCompareColumns {
  left: {
    title: string;
    subtitle?: string;
    badge?: string;
    points: string[];
    color?: string;
  };
  right: {
    title: string;
    subtitle?: string;
    badge?: string;
    points: string[];
    color?: string;
  };
}

export interface SlideCardItem {
  title: string;
  desc: string;
  icon?: string;
  tag?: string;
  badgeColor?: string;
  points?: string[];
}

export interface SlideSituation {
  context: string;
  question: string;
  options: Array<{
    label: string;
    action: string;
    consequence: string;
    isRecommended?: boolean;
  }>;
}

export interface SlideMindmap {
  center: string;
  centerSubtitle?: string;
  branches: Array<{
    title: string;
    subItems: string[];
    color?: string;
  }>;
}

export interface Slide {
  id: string;
  slideNumber: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  lead?: string;
  bullets?: SlideBullet[];
  highlightBox?: SlideHighlightBox;
  tableData?: SlideTable;
  diagram?: {
    layout?: 'horizontal' | 'grid';
    steps: DiagramStep[];
  };
  quiz?: SlideQuiz;
  example?: SlideExample;
  footerNote?: string;
  badge?: string;
  codeSnippet?: SlideCodeSnippet;
  compareColumns?: SlideCompareColumns;
  cardsGrid?: SlideCardItem[];
  svgType?:
    | 'binary-alu'
    | 'logic-gates'
    | 'rgb-pixels'
    | 'network-lan'
    | 'vector-raster'
    | 'python-flowchart'
    | 'data-lifecycle'
    | 'cloud-models'
    | 'inkscape-layers'
    | 'software-lifecycle'
    | 'mindmap-concept'
    | 'smart-devices'
    | 'cyber-security'
    | 'copyright-cc'
    | 'inkscape-tools'
    | 'bezier-nodes'
    | 'python-runtime'
    | 'python-list'
    | 'software-testing';
  situation?: SlideSituation;
  mindmap?: SlideMindmap;
  sourceCitation?: string;
  illustrationTitle?: string;
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
  imagePosition?: 'right' | 'left' | 'bottom';
}

export interface Lesson {
  id: string;
  number: number | string;
  title: string;
  shortTitle: string;
  chapterId: string;
  pageStart: number;
  pageEnd: number;
  slides: Slide[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface BookData {
  title: string;
  series: string;
  subject: string;
  grade: string;
  publisher: string;
  teacher: string;
  totalChapters: number;
  totalLessons: number;
  chapters: Chapter[];
}
