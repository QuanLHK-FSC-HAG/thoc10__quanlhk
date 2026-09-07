import { BookData } from '../types';
import { topic1 } from './topic1';
import { topic2 } from './topic2';
import { topic3 } from './topic3';
import { topic4 } from './topic4';
import { topic5 } from './topic5';
import { topic6 } from './topic6';
import { topic7 } from './topic7';
import { topic8 } from './topic8';

const allChapters = [
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  topic7,
  topic8,
];

const totalLessonsCount = allChapters.reduce(
  (total, ch) => total + ch.lessons.length,
  0
);

export const textbookData: BookData = {
  title: 'Tin học 10',
  series: 'Kết nối tri thức với cuộc sống',
  subject: 'Tin học',
  grade: 'Lớp 10',
  publisher: 'Nhà xuất bản Giáo dục Việt Nam',
  teacher: 'QuanLHK',
  totalChapters: allChapters.length,
  totalLessons: totalLessonsCount,
  chapters: allChapters,
};
