import { Chapter } from '../types';
import { topic5LessonsPartA } from './topic5_a';
import { topic5LessonsPartB } from './topic5_b';
import { topic5LessonsPartC } from './topic5_c';

export const topic5: Chapter = {
  id: 'chu-de-5',
  number: 5,
  title: 'Chủ đề 5. Khái niệm lập trình và ngôn ngữ Python',
  description: 'Tổng quan về ngôn ngữ lập trình bậc cao, môi trường Python, các khái niệm cơ bản về biến số, lệnh nhập xuất, cấu trúc rẽ nhánh if, các vòng lặp for, while, kiểu dữ liệu xâu, danh sách, hàm tự định nghĩa, kiểm thử và gỡ lỗi chương trình.',
  lessons: [...topic5LessonsPartA, ...topic5LessonsPartB, ...topic5LessonsPartC],
};
