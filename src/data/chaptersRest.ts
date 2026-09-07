import { Chapter } from '../types';

export const chaptersRest: Chapter[] = [
  {
    id: 'chu-de-3',
    number: 3,
    title: 'Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số',
    description: 'Quy tắc ứng xử văn minh trên không gian mạng và nghĩa vụ pháp lí tôn trọng bản quyền sở hữu trí tuệ.',
    lessons: [
      {
        id: 'bai-11',
        number: 11,
        title: 'Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền',
        shortTitle: 'Bài 11: Ứng xử trên môi trường số & Bản quyền',
        chapterId: 'chu-de-3',
        pageStart: 55,
        pageEnd: 62,
        slides: [
          {
            id: 'b11-s1',
            slideNumber: 1,
            type: 'title',
            title: 'ỨNG XỬ TRÊN MÔI TRƯỜNG SỐ & BẢN QUYỀN',
            subtitle: 'Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số | Tin học 10',
            lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Thời lượng: 2 tiết' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 11 - Văn hoá số',
          },
          {
            id: 'b11-s2',
            slideNumber: 2,
            type: 'objective',
            title: 'MỤC TIÊU BÀI HỌC',
            subtitle: 'Sau bài học này, học sinh sẽ:',
            bullets: [
              {
                title: 'Ứng xử có văn hoá:',
                text: 'Trình bày và thực hành được các chuẩn mực đạo đức, văn hoá ứng xử khi giao tiếp trên môi trường số.',
              },
              {
                title: 'Tôn trọng quyền tác giả:',
                text: 'Hiểu được quyền tác giả, bản quyền phần mềm, âm nhạc, hình ảnh và các quy định pháp luật sở hữu trí tuệ.',
              },
              {
                title: 'Giấy phép Creative Commons (CC):',
                text: 'Biết cách khai thác hợp pháp các tài nguyên dùng chung và ghi rõ nguồn gốc tác giả.',
              },
            ],
          },
          {
            id: 'b11-s3',
            slideNumber: 3,
            type: 'content',
            title: '1. VĂN HOÁ ỨNG XỬ TRÊN MÔI TRƯỜNG SỐ',
            subtitle: 'Quy tắc vàng khi giao tiếp và tương tác mạng xã hội',
            bullets: [
              {
                title: 'Tôn trọng người khác:',
                text: 'Giao tiếp lịch sự, không dùng ngôn từ xúc phạm, kích động bạo lực hay phân biệt vùng miền.',
              },
              {
                title: 'Bảo vệ quyền riêng tư:',
                text: 'Không đăng tải ảnh, thông tin cá nhân của bạn bè, người khác khi chưa được họ đồng ý.',
              },
              {
                title: 'Kiểm chứng thông tin trước khi chia sẻ:',
                text: 'Không tiếp tay lan truyền tin giả, tin thất thiệt gây hoang mang trong cộng đồng.',
              },
            ],
          },
          {
            id: 'b11-s4',
            slideNumber: 4,
            type: 'remember',
            title: '2. NGHĨA VỤ TÔN TRỌNG BẢN QUYỀN',
            subtitle: 'Luật Sở hữu trí tuệ và quyền tác giả số',
            highlightBox: {
              type: 'remember',
              title: 'HỘP GHI NHỚ PHÁP LÍ',
              content: [
                '• Mọi tác phẩm sáng tạo (văn bản, tranh vẽ, ảnh chụp, âm nhạc, mã nguồn phần mềm...) đều được pháp luật bảo hộ quyền tác giả ngay khi ra đời.',
                '• Sử dụng tác phẩm của người khác phải xin phép, trả thù lao (nếu có yêu cầu) và bắt buộc phải dẫn nguồn rõ ràng.',
                '• Sử dụng phần mềm bẻ khoá (crack) hoặc sao chép trái phép là vi phạm pháp luật và tiềm ẩn nguy cơ lây nhiễm mã độc cao.',
              ],
            },
          },
          {
            id: 'b11-s5',
            slideNumber: 5,
            type: 'practice',
            title: 'LUYỆN TẬP VÀ VẬN DỤNG',
            subtitle: 'Tình huống thực tế trong học đường',
            quiz: {
              question: 'Khi làm bài thuyết trình, bạn lấy ảnh minh hoạ từ Internet. Hành động nào sau đây là chuẩn mực nhất?',
              options: [
                'A. Cắt bỏ logo hoặc chữ kí của tác giả gốc để slide đẹp hơn.',
                'B. Sử dụng ảnh thuộc phạm vi công cộng hoặc ghi rõ tên tác giả và đường dẫn nguồn ảnh.',
                'C. Khẳng định toàn bộ ảnh trong bài là do mình tự chụp.',
                'D. Chỉ cần không bán bài thuyết trình lấy tiền thì dùng ảnh nào cũng không vi phạm.',
              ],
              answer: 'Đáp án B: Sử dụng ảnh có bản quyền mở hoặc ghi rõ nguồn tác giả.',
              explanation: 'Đây là quy tắc cơ bản thể hiện sự tôn trọng quyền tác giả và tính trung thực trong học thuật.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'chu-de-4',
    number: 4,
    title: 'Chủ đề 4. Ứng dụng tin học',
    description: 'Thiết kế đồ hoạ vector với phần mềm mã nguồn mở Inkscape, tạo hình minh hoạ và xuất bản phẩm số.',
    lessons: [
      {
        id: 'bai-12',
        number: 12,
        title: 'Bài 12. Phần mềm thiết kế đồ hoạ',
        shortTitle: 'Bài 12: Phần mềm thiết kế đồ hoạ',
        chapterId: 'chu-de-4',
        pageStart: 63,
        pageEnd: 68,
        slides: [
          {
            id: 'b12-s1',
            slideNumber: 1,
            type: 'title',
            title: 'PHẦN MỀM THIẾT KẾ ĐỒ HOẠ',
            subtitle: 'Chủ đề 4: Ứng dụng tin học | Sách giáo khoa Tin học 10',
            lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Công cụ thực hành: Phần mềm Inkscape' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 12 - Đồ hoạ vector',
          },
          {
            id: 'b12-s2',
            slideNumber: 2,
            type: 'objective',
            title: 'MỤC TIÊU BÀI HỌC',
            subtitle: 'Sau bài học này, học sinh sẽ:',
            bullets: [
              {
                title: 'Phân biệt ảnh Bitmap và Vector:',
                text: 'Hiểu rõ sự khác nhau giữa đồ hoạ điểm ảnh (raster/bitmap) và đồ hoạ vector.',
              },
              {
                title: 'Làm quen phần mềm Inkscape:',
                text: 'Biết giao diện, các thanh công cụ cơ bản, vùng làm việc và bảng màu của Inkscape.',
              },
              {
                title: 'Vẽ các hình cơ bản:',
                text: 'Thực hiện vẽ hình chữ nhật, hình tròn, hình elip, hình đa giác và tô màu đối tượng.',
              },
            ],
          },
          {
            id: 'b12-s3',
            slideNumber: 3,
            type: 'table',
            title: 'SO SÁNH ĐỒ HOẠ RASTER VÀ ĐỒ HOẠ VECTOR',
            subtitle: 'Đặc tính kĩ thuật cốt lõi trong thiết kế đồ hoạ',
            tableData: {
              caption: 'So sánh Bitmap và Vector',
              headers: ['Tiêu chí so sánh', 'Đồ hoạ điểm ảnh (Raster / Bitmap)', 'Đồ hoạ Vector (Inkscape, Illustrator)'],
              rows: [
                ['Bản chất cấu tạo', 'Ma trận lưới các điểm ảnh (Pixel) có màu sắc cụ thể', 'Các phương trình toán học mô tả đường nét, điểm mốc và góc cong'],
                ['Khi phóng to kích thước', 'Bị vỡ hình, mờ nhoè, răng cưa rõ rệt', 'Không bao giờ bị vỡ hình, luôn sắc nét ở mọi độ phóng đại'],
                ['Ứng dụng điển hình', 'Ảnh chụp kĩ thuật số, tranh phong cảnh (Photoshop, Paint)', 'Logo thương hiệu, icon biểu tượng, poster, bản vẽ kĩ thuật'],
                ['Định dạng phổ biến', '.bmp, .jpg, .png, .gif', '.svg (Scalable Vector Graphics), .eps, .ai'],
              ],
            },
          },
          {
            id: 'b12-s4',
            slideNumber: 4,
            type: 'remember',
            title: 'GIAO DIỆN CHÍNH CỦA INKSCAPE',
            subtitle: 'Các khu vực thao tác giáo viên cần lưu ý học sinh',
            highlightBox: {
              type: 'remember',
              title: 'CÁC VÙNG LÀM VIỆC CỐT LÕI',
              content: [
                '• Hộp công cụ (Toolbox): Nằm ở lề trái, chứa công cụ chọn (Select F1), vẽ hình hộp, hình elip, vẽ tự do (Pen/Bezier).',
                '• Vùng trang vẽ (Canvas): Nằm ở trung tâm, nơi đặt các đối tượng đồ họa.',
                '• Bảng màu (Color Palette): Nằm ở đáy màn hình, click chuột trái để đổi màu Tô (Fill), giữ Shift + click để đổi màu Viền (Stroke).',
              ],
            },
          },
        ],
      },
      {
        id: 'bai-13',
        number: 13,
        title: 'Bài 13. Bổ sung các đối tượng đồ hoạ',
        shortTitle: 'Bài 13: Bổ sung đối tượng đồ hoạ',
        chapterId: 'chu-de-4',
        pageStart: 69,
        pageEnd: 74,
        slides: [
          {
            id: 'b13-s1',
            slideNumber: 1,
            type: 'title',
            title: 'BỔ SUNG CÁC ĐỐI TƯỢNG ĐỒ HOẠ',
            subtitle: 'Chủ đề 4: Ứng dụng tin học | Sách giáo khoa Tin học 10',
            lead: 'Thực hành các phép ghép hình và sắp xếp đối tượng trong Inkscape',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Nội dung: Phép hợp, giao, hiệu và sắp thứ tự lớp' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 13 - Thao tác đối tượng',
          },
          {
            id: 'b13-s2',
            slideNumber: 2,
            type: 'content',
            title: 'CÁC PHÉP TOÁN BOOL TRÊN HÌNH TRONG INKSCAPE',
            subtitle: 'Menu Path (Đường cong) giúp tạo hình phức tạp từ hình đơn giản',
            bullets: [
              {
                title: 'Union (Hợp - Ctrl + +):',
                text: 'Gộp nhiều hình đang chọn thành một hình duy nhất có đường viền bao ngoài.',
              },
              {
                title: 'Difference (Hiệu - Ctrl + -):',
                text: 'Lấy hình nằm dưới trừ đi phần giao nhau với hình nằm trên (ví dụ tạo hình trăng khuyết từ 2 hình tròn).',
              },
              {
                title: 'Intersection (Giao - Ctrl + *):',
                text: 'Chỉ giữ lại phần chung nhau của các hình được chọn.',
              },
              {
                title: 'Exclusion (Hiệu đối xứng - Ctrl + ^):',
                text: 'Giữ lại phần không giao nhau và loại bỏ phần chung nhau.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-14',
        number: 14,
        title: 'Bài 14. Làm việc với đối tượng đường và văn bản',
        shortTitle: 'Bài 14: Đối tượng đường & Văn bản',
        chapterId: 'chu-de-4',
        pageStart: 75,
        pageEnd: 81,
        slides: [
          {
            id: 'b14-s1',
            slideNumber: 1,
            type: 'title',
            title: 'LÀM VIỆC VỚI ĐỐI TƯỢNG ĐƯỜNG VÀ VĂN BẢN',
            subtitle: 'Chủ đề 4: Ứng dụng tin học | Sách giáo khoa Tin học 10',
            lead: 'Công cụ Bezier Pen, tinh chỉnh điểm neo Node và uốn chữ nghệ thuật theo đường dẫn',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 14 - Đường & Văn bản',
          },
          {
            id: 'b14-s2',
            slideNumber: 2,
            type: 'content',
            title: 'CÔNG CỤ BÉZIER & HIỆU CHỈNH ĐIỂM NEO (NODE)',
            subtitle: 'Tạo đường cong mượt mà theo ý muốn',
            bullets: [
              {
                title: 'Công cụ Draw Bezier curves (Shift + F6):',
                text: 'Nhấp chuột để tạo đoạn thẳng, nhấp và kéo rê chuột để tạo đường cong uốn lượn.',
              },
              {
                title: 'Công cụ Edit paths by nodes (F2):',
                text: 'Chọn các điểm neo (node) để di chuyển, đổi góc nhọn thành góc tròn lượn hoặc kéo cần điều khiển tay đòn.',
              },
              {
                title: 'Uốn văn bản theo đường cong (Put on Path):',
                text: 'Chọn đồng thời khối văn bản và một đường cong, vào Text → Put on Path để dòng chữ uốn cong theo viền huy hiệu, logo.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-15',
        number: 15,
        title: 'Bài 15. Hoàn thiện hình ảnh đồ hoạ',
        shortTitle: 'Bài 15: Hoàn thiện hình ảnh đồ hoạ',
        chapterId: 'chu-de-4',
        pageStart: 82,
        pageEnd: 85,
        slides: [
          {
            id: 'b15-s1',
            slideNumber: 1,
            type: 'title',
            title: 'HOÀN THIỆN HÌNH ẢNH ĐỒ HOẠ',
            subtitle: 'Chủ đề 4: Ứng dụng tin học | Sách giáo khoa Tin học 10',
            lead: 'Thiết kế banner, logo trường học và xuất tệp ảnh vector ra định dạng chuẩn',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 15 - Xuất bản đồ hoạ',
          },
          {
            id: 'b15-s2',
            slideNumber: 2,
            type: 'process',
            title: 'QUY TRÌNH XUẤT FILE ẢNH TRONG INKSCAPE',
            subtitle: 'File → Export (Shift + Ctrl + E)',
            diagram: {
              layout: 'horizontal',
              steps: [
                {
                  stepNumber: '1',
                  title: 'Lưu tệp gốc SVG',
                  desc: 'File → Save As để lưu lại tệp vector .svg chỉnh sửa tiếp về sau.',
                },
                {
                  stepNumber: '2',
                  title: 'Chọn vùng xuất',
                  desc: 'Chọn Page (toàn trang) hoặc Selection (chỉ vùng đối tượng đang chọn).',
                },
                {
                  stepNumber: '3',
                  title: 'Cài đặt độ phân giải DPI',
                  desc: 'Mặc định 96 DPI cho web, chọn 300 DPI khi cần in ấn pano khổ lớn.',
                },
                {
                  stepNumber: '4',
                  title: 'Xuất file PNG',
                  desc: 'Bấm Export để tạo ra ảnh PNG trong suốt chất lượng cao.',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'chu-de-5',
    number: 5,
    title: 'Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính',
    description: 'Ngôn ngữ lập trình bậc cao Python: cú pháp cơ bản, biến số, cấu trúc rẽ nhánh, vòng lặp, kiểu danh sách, xâu kí tự và kĩ năng gỡ lỗi.',
    lessons: [
      {
        id: 'bai-16',
        number: 16,
        title: 'Bài 16. Ngôn ngữ lập trình bậc cao và Python',
        shortTitle: 'Bài 16: Lập trình bậc cao & Python',
        chapterId: 'chu-de-5',
        pageStart: 86,
        pageEnd: 90,
        slides: [
          {
            id: 'b16-s1',
            slideNumber: 1,
            type: 'title',
            title: 'NGÔN NGỮ LẬP TRÌNH BẬC CAO VÀ PYTHON',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Ngôn ngữ: Python 3.x' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 16 - Làm quen Python',
          },
          {
            id: 'b16-s2',
            slideNumber: 2,
            type: 'objective',
            title: 'MỤC TIÊU BÀI HỌC',
            subtitle: 'Sau bài học này, học sinh sẽ:',
            bullets: [
              {
                title: 'Khái niệm ngôn ngữ bậc cao:',
                text: 'Biết được ngôn ngữ lập trình bậc cao là gì và ưu điểm so với ngôn ngữ máy, hợp ngữ.',
              },
              {
                title: 'Môi trường Python IDLE:',
                text: 'Biết khởi động và sử dụng Python ở hai chế độ: gõ lệnh trực tiếp (Interactive Mode) và soạn thảo tệp chương trình (Script Mode).',
              },
              {
                title: 'Câu lệnh in đầu tiên:',
                text: 'Viết được chương trình in ra dòng chữ kinh điển: print("Xin chào Python!").',
              },
            ],
          },
          {
            id: 'b16-s3',
            slideNumber: 3,
            type: 'content',
            title: 'TẠI SAO CHỌN PYTHON?',
            subtitle: 'Ngôn ngữ lập trình phổ biến hàng đầu thế giới hiện nay',
            bullets: [
              {
                title: 'Cú pháp rõ ràng, gần gũi tiếng Anh:',
                text: 'Dễ học, dễ đọc, không cần chấm phẩy kết thúc câu hay ngoặc nhọn rườm rà.',
              },
              {
                title: 'Đa nền tảng và mã nguồn mở:',
                text: 'Chạy mượt mà trên Windows, macOS, Linux, hoàn toàn miễn phí.',
              },
              {
                title: 'Thư viện phong phú:',
                text: 'Ứng dụng mạnh mẽ trong Trí tuệ nhân tạo (AI), Khoa học dữ liệu, Lập trình web và Tự động hoá.',
              },
            ],
          },
          {
            id: 'b16-s4',
            slideNumber: 4,
            type: 'remember',
            title: 'HỘP GHI NHỚ: HAI CHẾ ĐỘ LÀM VIỆC CỦA PYTHON',
            subtitle: 'Trích Hộp kiến thức SGK',
            highlightBox: {
              type: 'remember',
              title: 'CẦN NẮM VỮNG',
              content: [
                '1. Chế độ gõ lệnh trực tiếp (Dấu nhắc >>>): Nhập từng câu lệnh và nhấn Enter, kết quả hiển thị ngay lập tức. Thích hợp để tính toán nhanh và thử nghiệm câu lệnh ngắn.',
                '2. Chế độ soạn thảo kịch bản (Script Mode): Viết nhiều dòng lệnh trong một tệp văn bản có đuôi mở rộng .py, lưu lại và bấm F5 (Run Module) để thực thi toàn bộ từ đầu đến cuối.',
              ],
            },
          },
        ],
      },
      {
        id: 'bai-17',
        number: 17,
        title: 'Bài 17. Biến và lệnh gán',
        shortTitle: 'Bài 17: Biến & Lệnh gán',
        chapterId: 'chu-de-5',
        pageStart: 91,
        pageEnd: 96,
        slides: [
          {
            id: 'b17-s1',
            slideNumber: 1,
            type: 'title',
            title: 'BIẾN VÀ LỆNH GÁN TRONG PYTHON',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Khái niệm biến nhớ, quy tắc đặt tên, lệnh gán (=) và các kiểu dữ liệu cơ bản',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 17 - Biến số',
          },
          {
            id: 'b17-s2',
            slideNumber: 2,
            type: 'content',
            title: 'QUY TẮC ĐẶT TÊN BIẾN VÀ LỆNH GÁN',
            subtitle: 'Cú pháp: <tên biến> = <giá trị hoặc biểu thức>',
            bullets: [
              {
                title: 'Quy tắc đặt tên biến:',
                text: 'Chỉ gồm chữ cái, chữ số và dấu gạch dưới (_). Bắt đầu bằng chữ cái hoặc gạch dưới, KHÔNG bắt đầu bằng chữ số. Phân biệt chữ HOA và chữ thường (age khác Age).',
              },
              {
                title: 'Các kiểu dữ liệu cơ sở:',
                text: 'int (số nguyên: 10, -5), float (số thực: 3.14, 0.5), str (xâu kí tự trong ngoặc kép: "Hà Nội"), bool (True, False).',
              },
              {
                title: 'Lệnh gán linh hoạt:',
                text: 'x = 15; a, b = 1, 2 (gán đồng thời); x = x + 1 (tăng biến x lên 1 đơn vị).',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-18',
        number: 18,
        title: 'Bài 18. Các lệnh vào ra đơn giản',
        shortTitle: 'Bài 18: Nhập xuất dữ liệu (input & print)',
        chapterId: 'chu-de-5',
        pageStart: 97,
        pageEnd: 100,
        slides: [
          {
            id: 'b18-s1',
            slideNumber: 1,
            type: 'title',
            title: 'CÁC LỆNH VÀO RA ĐƠN GIẢN',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Tương tác dữ liệu với người dùng qua bàn phím và màn hình trong Python',
            bullets: [
              { text: 'Lệnh xuất: print()' },
              { text: 'Lệnh nhập: input()' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 18 - Vào ra dữ liệu',
          },
          {
            id: 'b18-s2',
            slideNumber: 2,
            type: 'content',
            title: 'LỆNH INPUT() VÀ ÉP KIỂU DỮ LIỆU',
            subtitle: 'Chuyển đổi dữ liệu chuỗi thành số nguyên và số thực',
            bullets: [
              {
                title: 'Đặc điểm của input():',
                text: 'Lệnh input() luôn trả về kiểu chuỗi kí tự (str), kể cả khi người dùng gõ vào các chữ số.',
              },
              {
                title: 'Ép kiểu sang số nguyên int():',
                text: 'n = int(input("Nhập số nguyên n: ")) để có thể thực hiện các phép toán cộng trừ nhân chia.',
              },
              {
                title: 'Ép kiểu sang số thực float():',
                text: 'r = float(input("Nhập bán kính đường tròn: "))',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-19',
        number: 19,
        title: 'Bài 19. Câu lệnh rẽ nhánh if',
        shortTitle: 'Bài 19: Cấu trúc rẽ nhánh (if - else)',
        chapterId: 'chu-de-5',
        pageStart: 101,
        pageEnd: 104,
        slides: [
          {
            id: 'b19-s1',
            slideNumber: 1,
            type: 'title',
            title: 'CÂU LỆNH RẼ NHÁNH IF',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Điều khiển luồng thực thi chương trình dựa trên điều kiện đúng hay sai',
            bullets: [
              { text: 'Dạng thiếu: if <điều kiện>:' },
              { text: 'Dạng đủ: if ... else ...' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 19 - Rẽ nhánh if',
          },
          {
            id: 'b19-s2',
            slideNumber: 2,
            type: 'content',
            title: 'CÚ PHÁP VÀ QUY TẮC THỤT ĐẦU DÒNG (INDENTATION)',
            subtitle: 'Đặc trưng sống còn trong cú pháp của ngôn ngữ Python',
            bullets: [
              {
                title: 'Cú pháp dạng thiếu:',
                text: 'if <điều kiện>:\n    <khối lệnh thực hiện khi điều kiện Đúng>',
              },
              {
                title: 'Cú pháp dạng đủ:',
                text: 'if <điều kiện>:\n    <khối lệnh 1>\nelse:\n    <khối lệnh 2>',
              },
              {
                title: 'Quy tắc thụt lề:',
                text: 'Các câu lệnh cùng khối bắt buộc phải thụt vào trong một khoảng tab (thường là 4 dấu cách) thẳng hàng nhau.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-20',
        number: 20,
        title: 'Bài 20. Câu lệnh lặp for',
        shortTitle: 'Bài 20: Câu lệnh lặp for',
        chapterId: 'chu-de-5',
        pageStart: 105,
        pageEnd: 107,
        slides: [
          {
            id: 'b20-s1',
            slideNumber: 1,
            type: 'title',
            title: 'CÂU LỆNH LẶP FOR VÀ HÀM RANGE()',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Lặp lại công việc với số lần biết trước trong Python',
            bullets: [
              { text: 'Cú pháp: for i in range(n):' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 20 - Vòng lặp for',
          },
          {
            id: 'b20-s2',
            slideNumber: 2,
            type: 'content',
            title: 'HÀM TẠO DÃY SỐ RANGE()',
            subtitle: 'Cách sinh dãy số thứ tự trong Python',
            bullets: [
              {
                title: 'range(n):',
                text: 'Sinh dãy gồm n số nguyên từ 0 đến n - 1. Ví dụ range(5) cho các số: 0, 1, 2, 3, 4.',
              },
              {
                title: 'range(start, stop):',
                text: 'Sinh dãy từ số start đến stop - 1. Ví dụ range(1, 10) cho các số từ 1 đến 9.',
              },
              {
                title: 'range(start, stop, step):',
                text: 'Bước nhảy step. Ví dụ range(1, 10, 2) cho các số lẻ: 1, 3, 5, 7, 9.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-21',
        number: 21,
        title: 'Bài 21. Câu lệnh lặp while',
        shortTitle: 'Bài 21: Câu lệnh lặp while',
        chapterId: 'chu-de-5',
        pageStart: 108,
        pageEnd: 110,
        slides: [
          {
            id: 'b21-s1',
            slideNumber: 1,
            type: 'title',
            title: 'CÂU LỆNH LẶP WHILE',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Vòng lặp với số lần chưa biết trước, lặp chừng nào điều kiện còn Đúng',
            bullets: [
              { text: 'Cú pháp: while <điều kiện>:' },
              { text: 'Lưu ý tránh lặp vô tận' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 21 - Lặp while',
          },
          {
            id: 'b21-s2',
            slideNumber: 2,
            type: 'remember',
            title: 'CƠ CHẾ HOẠT ĐỘNG CỦA VÒNG LẶP WHILE',
            subtitle: 'Kiểm tra điều kiện trước mỗi vòng lặp',
            highlightBox: {
              type: 'warning',
              title: 'CẢNH BÁO LẶP VÔ HẠN',
              content: [
                '• Bước 1: Máy tính kiểm tra <điều kiện>. Nếu Đúng (True), thực hiện khối lệnh bên trong.',
                '• Bước 2: Sau khi chạy xong khối lệnh, quay lại kiểm tra lại <điều kiện>.',
                '• Vòng lặp dừng lại ngay khi <điều kiện> trở thành Sai (False).',
                '• Bắt buộc phải có câu lệnh làm thay đổi giá trị của biến điều kiện bên trong thân vòng lặp, nếu không chương trình sẽ rơi vào lặp vô tận.',
              ],
            },
          },
        ],
      },
      {
        id: 'bai-22',
        number: 22,
        title: 'Bài 22. Kiểu dữ liệu danh sách',
        shortTitle: 'Bài 22: Kiểu danh sách (List)',
        chapterId: 'chu-de-5',
        pageStart: 111,
        pageEnd: 114,
        slides: [
          {
            id: 'b22-s1',
            slideNumber: 1,
            type: 'title',
            title: 'KIỂU DỮ LIỆU DANH SÁCH (LIST)',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Tổ chức tập hợp dữ liệu có thứ tự trong Python',
            bullets: [
              { text: 'Kí hiệu trong ngoặc vuông: [ ]' },
              { text: 'Chỉ số bắt đầu từ 0' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 22 - List',
          },
          {
            id: 'b22-s2',
            slideNumber: 2,
            type: 'content',
            title: 'TRUY CẬP PHẦN TỬ DANH SÁCH BẰNG CHỈ SỐ',
            subtitle: 'Ví dụ: a = [10, 20, 30, 40, 50]',
            bullets: [
              {
                title: 'Chỉ số dương (từ trái qua phải):',
                text: 'a[0] là 10, a[1] là 20, a[4] là 50. Độ dài danh sách len(a) là 5.',
              },
              {
                title: 'Chỉ số âm (từ cuối mảng):',
                text: 'a[-1] là phần tử cuối cùng (50), a[-2] là 40.',
              },
              {
                title: 'Thay đổi giá trị:',
                text: 'Danh sách trong Python có thể thay đổi được (mutable): a[0] = 99 -> danh sách thành [99, 20, 30, 40, 50].',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-24',
        number: 24,
        title: 'Bài 24. Xâu kí tự',
        shortTitle: 'Bài 24: Xâu kí tự (String)',
        chapterId: 'chu-de-5',
        pageStart: 119,
        pageEnd: 122,
        slides: [
          {
            id: 'b24-s1',
            slideNumber: 1,
            type: 'title',
            title: 'XÂU KÍ TỰ TRONG PYTHON',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Xử lí chuỗi văn bản, ghép xâu (+) và nhân bản xâu (*)',
            bullets: [
              { text: 'Kiểu str đặt trong nháy kép hoặc nháy đơn' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 24 - String',
          },
          {
            id: 'b24-s2',
            slideNumber: 2,
            type: 'content',
            title: 'CÁC PHÉP TOÁN CƠ BẢN TRÊN XÂU',
            subtitle: 'Thao tác chuỗi linh hoạt trong Python',
            bullets: [
              {
                title: 'Phép nối xâu (+):',
                text: '"Tin học " + "10" cho kết quả là "Tin học 10".',
              },
              {
                title: 'Phép nhân xâu (*):',
                text: '"Hi " * 3 cho kết quả là "Hi Hi Hi ".',
              },
              {
                title: 'Toán tử kiểm tra in / not in:',
                text: '"học" in "Tin học" cho kết quả True.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-26',
        number: 26,
        title: 'Bài 26. Hàm trong Python',
        shortTitle: 'Bài 26: Khái niệm hàm (def)',
        chapterId: 'chu-de-5',
        pageStart: 127,
        pageEnd: 130,
        slides: [
          {
            id: 'b26-s1',
            slideNumber: 1,
            type: 'title',
            title: 'HÀM TRONG PYTHON',
            subtitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính | Tin học 10',
            lead: 'Đóng gói mã lệnh tái sử dụng với từ khóa def',
            bullets: [
              { text: 'Cú pháp: def <tên hàm>(<tham số>):' },
              { text: 'Lệnh trả kết quả: return' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 26 - Function',
          },
          {
            id: 'b26-s2',
            slideNumber: 2,
            type: 'content',
            title: 'LỢI ÍCH CỦA VIỆC DÙNG HÀM',
            subtitle: 'Tư duy chia để trị trong lập trình chuyên nghiệp',
            bullets: [
              {
                title: 'Tránh lặp lại mã lệnh:',
                text: 'Viết một lần, sử dụng nhiều lần ở nhiều nơi trong chương trình.',
              },
              {
                title: 'Chương trình sáng sủa, dễ đọc:',
                text: 'Chia bài toán lớn phức tạp thành các bài toán con nhỏ gọn, dễ quản lí.',
              },
              {
                title: 'Dễ kiểm thử và bảo trì:',
                text: 'Khi có lỗi phát sinh chỉ cần sửa tại một vị trí định nghĩa hàm.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'chu-de-6',
    number: 6,
    title: 'Chủ đề 6. Hướng nghiệp với tin học',
    description: 'Tìm hiểu thị trường lao động số, định hướng nghề nghiệp: Thiết kế đồ hoạ máy tính và Nghề phát triển phần mềm.',
    lessons: [
      {
        id: 'bai-33',
        number: 33,
        title: 'Bài 33. Nghề thiết kế đồ hoạ máy tính',
        shortTitle: 'Bài 33: Nghề thiết kế đồ hoạ',
        chapterId: 'chu-de-6',
        pageStart: 156,
        pageEnd: 159,
        slides: [
          {
            id: 'b33-s1',
            slideNumber: 1,
            type: 'title',
            title: 'NGHỀ THIẾT KẾ ĐỒ HOẠ MÁY TÍNH',
            subtitle: 'Chủ đề 6: Hướng nghiệp với tin học | Sách giáo khoa Tin học 10',
            lead: 'Khám phá bức tranh nghề nghiệp sáng tạo nghệ thuật số',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 33 - Hướng nghiệp',
          },
          {
            id: 'b33-s2',
            slideNumber: 2,
            type: 'content',
            title: 'CÔNG VIỆC CỦA NHÀ THIẾT KẾ ĐỒ HOẠ',
            subtitle: 'Sự kết hợp giữa tư duy mĩ thuật và công nghệ kĩ thuật số',
            bullets: [
              {
                title: 'Thiết kế nhận diện thương hiệu:',
                text: 'Logo, bộ ấn phẩm văn phòng, bao bì sản phẩm, catalogue giới thiệu.',
              },
              {
                title: 'Thiết kế giao diện người dùng (UI/UX):',
                text: 'Giao diện ứng dụng di động, website thương mại điện tử trực quan, thân thiện.',
              },
              {
                title: 'Kĩ năng cần có:',
                text: 'Tư duy thẩm mĩ màu sắc, bố cục, thông thạo phần mềm đồ họa vector và bitmap, kĩ năng giao tiếp và thấu hiểu khách hàng.',
              },
            ],
          },
        ],
      },
      {
        id: 'bai-34',
        number: 34,
        title: 'Bài 34. Nghề phát triển phần mềm',
        shortTitle: 'Bài 34: Nghề phát triển phần mềm',
        chapterId: 'chu-de-6',
        pageStart: 160,
        pageEnd: 164,
        slides: [
          {
            id: 'b34-s1',
            slideNumber: 1,
            type: 'title',
            title: 'NGHỀ PHÁT TRIỂN PHẦN MỀM',
            subtitle: 'Chủ đề 6: Hướng nghiệp với tin học | Sách giáo khoa Tin học 10',
            lead: 'Kĩ sư lập trình - Kiến tạo thế giới số trong kỉ nguyên chuyển đổi số',
            bullets: [
              { text: 'Môn học: Tin học 10' },
              { text: 'Giáo viên hướng dẫn: QuanLHK' },
            ],
            badge: 'Bài 34 - Hướng nghiệp',
          },
          {
            id: 'b34-s2',
            slideNumber: 2,
            type: 'content',
            title: 'QUY TRÌNH PHÁT TRIỂN PHẦN MỀM VÀ CÁC VỊ TRÍ',
            subtitle: 'Từ ý tưởng người dùng đến sản phẩm chạy trong thực tế',
            bullets: [
              {
                title: 'Lập trình viên (Developer):',
                text: 'Hiện thực hóa các tính năng thành mã lệnh nguồn bằng ngôn ngữ lập trình.',
              },
              {
                title: 'Kĩ sư kiểm thử (Tester / QA):',
                text: 'Tìm kiếm lỗi, kiểm tra tính năng và đảm bảo chất lượng phần mềm hoạt động ổn định trước khi phát hành.',
              },
              {
                title: 'Phẩm chất cần thiết:',
                text: 'Tư duy lôgic sắc bén, khả năng tự học công nghệ mới liên tục, tính kiên nhẫn cẩn thận và kĩ năng làm việc nhóm.',
              },
            ],
          },
        ],
      },
    ],
  },
];
