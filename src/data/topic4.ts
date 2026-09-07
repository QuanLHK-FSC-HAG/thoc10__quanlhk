import { Chapter } from '../types';

export const topic4: Chapter = {
  id: 'chu-de-4',
  number: 4,
  title: 'Chủ đề 4: Thiết kế đồ họa máy tính',
  description: 'Khám phá phần mềm Inkscape, kỹ thuật quản lý đối tượng đồ họa, chỉnh sửa đường nét và các bước hoàn thiện sản phẩm đồ họa.',
  lessons: [
    {
      id: 'bai-12',
      number: 12,
      title: 'Bài 12. Giới thiệu và cách sử dụng phần mềm thiết kế đồ họa',
      shortTitle: 'Bài 12: Đồ họa vectơ & Inkscape',
      chapterId: 'chu-de-4',
      pageStart: 85,
      pageEnd: 97,
      slides: [
        {
          id: 'b12-s1',
          slideNumber: 1,
          type: 'title',
          title: 'PHẦN MỀM THIẾT KẾ ĐỒ HOẠ INKSCAPE',
          subtitle: 'Chủ đề 4: Ứng dụng máy tính | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân biệt bản chất đồ họa điểm ảnh (Raster) và đồ họa vectơ (Vector)' },
            { text: 'Làm quen không gian làm việc và các công cụ cơ bản của Inkscape' },
            { text: 'Hiểu nguyên lí thứ tự lớp (Z-order) và thao tác sắp xếp đối tượng' },
            { text: 'Thực hành tạo bông hoa và thiết kế chuẩn Quốc kì Việt Nam (SVG)' },
          ],
          badge: 'Bài 12 • KHBD Chuẩn',
        },
        {
          id: 'b12-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: NHẬN XÉT ẢNH CHỤP VÀ HÌNH VẼ',
          subtitle: 'Quan sát Hình 12.1 SGK khi phóng to nhiều lần (Phiếu học tập số 1)',
          lead: 'Hãy so sánh chất lượng của hai bức hình khi được phóng to lên 500%:',
          bullets: [
            {
              title: 'Hình A (Ảnh chụp bông hoa):',
              text: 'Màu sắc rất tự nhiên, phong phú nhưng khi phóng to lên sẽ thấy rõ các ô vuông li ti (điểm ảnh - pixel), mép hình bị mờ và răng cưa vỡ nét.',
              badge: 'Đồ họa điểm ảnh',
            },
            {
              title: 'Hình B (Hình vẽ biểu tượng bằng phần mềm):',
              text: 'Tạo bởi các đường nét hình học; dù phóng to lên 500% hay 1000% thì đường biên vẫn hoàn toàn sắc nét, không hề bị vỡ hạt.',
              badge: 'Đồ họa vectơ',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'CÂU HỎI TRỌNG TÂM',
            content: 'Tại sao hình vẽ vectơ lại không bị vỡ hạt khi phóng to? Khi nào nên dùng đồ họa điểm ảnh, khi nào nên dùng đồ họa vectơ?',
          },
        },
        {
          id: 'b12-s3',
          slideNumber: 3,
          type: 'table',
          title: 'PHÂN BIỆT ĐỒ HỌA ĐIỂM ẢNH VÀ ĐỒ HỌA VECTƠ',
          subtitle: 'Nhiệm vụ 1: So sánh toàn diện theo 5 tiêu chí chuẩn hóa SGK (Hình 12.1 trang 65)',
          svgType: 'vector-raster',
          sourceCitation: 'Nguồn tham khảo: Hình 12.1 SGK Tin học 10 (trang 65) • Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam',
          tableData: {
            caption: 'Bảng so sánh đồ họa điểm ảnh (Raster) và đồ họa vectơ (Vector)',
            headers: ['Tiêu chí', 'Đồ họa điểm ảnh (Raster / Bitmap)', 'Đồ họa vectơ (Vector Graphics)'],
            rows: [
              ['Cấu tạo bức ảnh', 'Tập hợp lưới các điểm ảnh (pixel) hình vuông mang màu sắc', 'Các đối tượng toán học (điểm, đoạn thẳng, đường cong, hình học)'],
              ['Chất lượng khi co giãn', 'Bị vỡ hình, nhòe răng cưa khi phóng to vượt kích thước gốc', 'Luôn mịn màng, sắc nét tuyệt đối ở mọi kích thước co giãn'],
              ['Mức độ chi tiết màu', 'Rất cao, thể hiện chuyển màu phức tạp của thế giới thực', 'Thường là các mảng màu đồng nhất hoặc dải màu chuyển sắc gọn gàng'],
              ['Dung lượng tệp', 'Khá lớn, tăng theo độ phân giải của bức ảnh', 'Rất nhỏ, chỉ lưu trữ công thức toán học mô tả hình vẽ'],
              ['Ứng dụng tiêu biểu', 'Ảnh chụp kĩ thuật số, tranh sơn dầu số (Photoshop, GIMP)', 'Thiết kế logo, biểu tượng, banner, bản vẽ kĩ thuật (Inkscape, AI)'],
            ],
          },
        },
        {
          id: 'b12-s4',
          slideNumber: 4,
          type: 'diagram',
          title: 'GIAO DIỆN LÀM VIỆC CỦA PHẦN MỀM INKSCAPE',
          subtitle: '6 thành phần giao diện chính trên màn hình làm việc (Hình 12.2 SGK)',
          lead: 'Inkscape là phần mềm thiết kế đồ họa vectơ mã nguồn mở, hoàn toàn miễn phí và chuyên nghiệp:',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: '1',
                title: 'Thanh bảng chọn (Menu Bar)',
                desc: 'Nằm trên cùng (File, Edit, View, Layer, Object, Path, Text) chứa toàn bộ lệnh.',
                tag: 'Bảng chọn',
              },
              {
                stepNumber: '2',
                title: 'Hộp công cụ (Toolbox)',
                desc: 'Nằm ở cột bên trái: công cụ chọn, vẽ hình chữ nhật, hình tròn, ngôi sao, bút vẽ Pen.',
                tag: 'Công cụ',
              },
              {
                stepNumber: '3',
                title: 'Thanh điều khiển thuộc tính',
                desc: 'Nằm dưới Menu Bar, thay đổi động theo từng công cụ đang được chọn để chỉnh thông số.',
                tag: 'Thuộc tính',
              },
              {
                stepNumber: '4',
                title: 'Vùng làm việc & Trang vẽ',
                desc: 'Khung màu trắng ở giữa thể hiện trang giấy in, xung quanh là vùng chứa bản thảo.',
                tag: 'Canvas',
              },
              {
                stepNumber: '5',
                title: 'Bảng màu (Color Palette)',
                desc: 'Dãy các ô màu nằm ở đáy màn hình giúp chọn nhanh màu tô và màu nét vẽ.',
                tag: 'Bảng màu',
              },
              {
                stepNumber: '6',
                title: 'Thanh trạng thái (Status Bar)',
                desc: 'Dưới cùng hiển thị gợi ý phím tắt, tọa độ con trỏ chuột, màu Fill/Stroke hiện hành.',
                tag: 'Trạng thái',
              },
            ],
          },
        },
        {
          id: 'b12-s5',
          slideNumber: 5,
          type: 'process',
          title: '3 BƯỚC CƠ BẢN ĐỂ TẠO ĐỐI TƯỢNG HÌNH KHỐI',
          subtitle: 'Quy trình tạo và thao tác với hình cơ bản trong Inkscape',
          lead: 'Mọi hình khối cơ bản (chữ nhật, elip, sao) đều được tạo theo cùng một quy trình chuẩn:',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Chọn công cụ vẽ',
                desc: 'Nhấp chuột vào biểu tượng hình chữ nhật (R), hình tròn (E) hoặc ngôi sao (*) trên Hộp công cụ.',
                tag: 'Select Tool',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Kéo thả trên trang vẽ',
                desc: 'Nhấn giữ chuột trái và kéo xiên trên trang vẽ để tạo hình có kích thước mong muốn.',
                tag: 'Drag & Draw',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Tô màu cho hình',
                desc: 'Nhấp chuột trái vào ô màu ở Bảng màu để tô màu nền (Fill); nhấn Shift + nhấp màu để tô màu nét (Stroke).',
                tag: 'Fill & Stroke',
              },
            ],
          },
          highlightBox: {
            type: 'tip',
            title: 'PHÍM TẮT THẦN THÁNH',
            content: 'Bấm phím F1 (hoặc phím S) để quay lại công cụ Chọn (Select tool) bất kì lúc nào!',
          },
        },
        {
          id: 'b12-s6',
          slideNumber: 6,
          type: 'content',
          title: 'NGUYÊN LÍ THỨ TỰ LỚP (Z-ORDER)',
          subtitle: 'Quy tắc che khuất giữa các đối tượng đồ họa trên mặt phẳng 2D',
          lead: 'Trong đồ họa vectơ, các đối tượng xếp chồng lên nhau như những mảnh giấy thủ công:',
          imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Sắp xếp thứ tự lớp và quản lý các đối tượng đồ họa vector',
          bullets: [
            {
              title: 'Quy tắc thứ tự tự nhiên:',
              text: 'Đối tượng nào được vẽ sau sẽ tự động nằm ở lớp trên, che khuất một phần hoặc toàn bộ đối tượng được vẽ trước đó.',
            },
            {
              title: 'Trục Z trong không gian đồ họa 2D:',
              text: 'Mỗi đối tượng có một chỉ số độ sâu (Z-index). Đối tượng có Z-index cao hơn sẽ nằm đè lên đối tượng có Z-index thấp hơn.',
            },
            {
              title: 'Ví dụ thực tế:',
              text: 'Khi vẽ Quốc kì Việt Nam, nếu vẽ hình chữ nhật đỏ sau ngôi sao vàng thì nền đỏ sẽ che mất ngôi sao. Người thiết kế phải hạ nền đỏ xuống dưới đáy.',
            },
          ],
        },
        {
          id: 'b12-s7',
          slideNumber: 7,
          type: 'process',
          title: '4 LỆNH ĐIỀU KHIỂN THỨ TỰ LỚP VÀ PHÍM TẮT',
          subtitle: 'Bảng chọn Object (hoặc các phím điều hướng trên bàn phím)',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: 'Home',
                title: 'Raise to Top',
                desc: 'Đưa đối tượng đang chọn lên lớp trên cùng nhất của bản vẽ.',
                tag: 'Lên đỉnh',
              },
              {
                stepNumber: 'Page Up',
                title: 'Raise',
                desc: 'Nâng đối tượng lên trên 1 bậc so với đối tượng nằm liền kề bên dưới.',
                tag: 'Lên 1 lớp',
              },
              {
                stepNumber: 'Page Down',
                title: 'Lower',
                desc: 'Hạ đối tượng xuống dưới 1 bậc so với đối tượng nằm liền kề bên trên.',
                tag: 'Xuống 1 lớp',
              },
              {
                stepNumber: 'End',
                title: 'Lower to Bottom',
                desc: 'Đưa đối tượng đang chọn xuống lớp dưới cùng nhất của bản vẽ.',
                tag: 'Xuống đáy',
              },
            ],
          },
          highlightBox: {
            type: 'tip',
            title: 'MẸO GHI NHỚ PHÍM TẮT',
            content: 'Phím Home đưa lên trên cùng, phím End hạ xuống đáy cùng — hai phím này được dùng nhiều nhất khi xử lý nền và chi tiết!',
          },
        },
        {
          id: 'b12-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'THỰC HÀNH 1: TẠO VÀ CHỈNH SỬA BÔNG HOA',
          subtitle: 'Nhiệm vụ 1 theo Hình 12.5 SGK trang 90 (Năng lực số 3.1NC1a, 3.2NC1a)',
          lead: 'Quy trình các bước vẽ bông hoa cân đối bằng các lệnh nhân bản và xoay:',
          bullets: [
            {
              title: 'Bước 1: Vẽ đài hoa và cánh hoa đầu tiên',
              text: 'Vẽ 1 hình tròn màu vàng làm nhị hoa. Dùng công cụ Elip vẽ 1 hình elip dài màu đỏ làm cánh hoa đầu tiên.',
              badge: 'Tạo hình',
            },
            {
              title: 'Bước 2: Nhân bản cánh hoa (Duplicate)',
              text: 'Chọn cánh hoa, nhấn tổ hợp phím Ctrl + D để nhân bản nhanh một cánh hoa trùng khít lên cánh hoa cũ.',
              badge: 'Ctrl + D',
            },
            {
              title: 'Bước 3: Xoay và di chuyển cánh hoa',
              text: 'Nhấp chuột lần thứ hai vào cánh hoa để xuất hiện các mũi tên xoay ở 4 góc. Kéo tâm xoay về giữa nhị hoa và xoay cánh hoa đều quanh tâm.',
              badge: 'Xoay quanh tâm',
            },
            {
              title: 'Bước 4: Lưu tệp sản phẩm',
              text: 'Chọn File -> Save As -> Đặt tên "BongHoa.svg" vào thư mục của nhóm.',
              badge: 'Lưu SVG',
            },
          ],
        },
        {
          id: 'b12-s9',
          slideNumber: 9,
          type: 'practice',
          title: 'THỰC HÀNH 2: THIẾT KẾ QUỐC KÌ VIỆT NAM',
          subtitle: 'Nhiệm vụ 2 theo Hình 12.6 SGK trang 92 (Năng lực số 3.3NC1a)',
          lead: 'Thiết kế lá cờ Tổ quốc chuẩn tỉ lệ hình học theo quy chuẩn Hiến pháp:',
          bullets: [
            {
              title: 'Bước 1: Tạo nền cờ đỏ',
              text: 'Dùng công cụ Rectangle vẽ hình chữ nhật. Nhập thông số trên thanh điều khiển: Chiều rộng (W) = 300 px, Chiều cao (H) = 200 px (tỉ lệ chuẩn 2 : 3). Tô màu đỏ tươi.',
              badge: 'Nền đỏ 2:3',
            },
            {
              title: 'Bước 2: Tạo ngôi sao vàng năm cánh',
              text: 'Chọn công cụ Stars (*). Trên thanh thuộc tính: Corners = 5, Spoke ratio = 0.400. Giữ phím Ctrl khi kéo chuột để đỉnh ngôi sao hướng thẳng đứng lên trên. Tô màu vàng tươi.',
              badge: 'Sao vàng 5 cánh',
            },
            {
              title: 'Bước 3: Căn giữa và xử lí lớp',
              text: 'Đưa ngôi sao vào chính giữa hình chữ nhật đỏ. Nếu ngôi sao bị che khuất, chọn hình chữ nhật đỏ nhấn phím "End" (Lower to bottom) để đẩy nền đỏ xuống dưới.',
              badge: 'Canh giữa',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'THÔNG SỐ CHUẨN SGK',
            content: 'Spoke ratio = 0.400 là tỉ lệ vàng tạo nên ngôi sao năm cánh sắc cạnh, cân đối hoàn hảo!',
          },
        },
        {
          id: 'b12-s10',
          slideNumber: 10,
          type: 'content',
          title: 'VAI TRÒ VÀ GIỚI HẠN CỦA AI TRONG THIẾT KẾ',
          subtitle: 'Tư duy sử dụng công cụ thông minh (Mã NLa, NLb, NLc)',
          lead: 'Sử dụng AI trong thiết kế đồ họa cần nhận thức rõ ranh giới giữa hỗ trợ và sáng tạo:',
          bullets: [
            {
              title: 'AI hỗ trợ đắc lực ở khâu:',
              text: 'Tra cứu gợi ý từ khóa hình ảnh vector, gợi ý bảng màu phối hợp (Color palette), đề xuất ý tưởng bố cục ban đầu.',
            },
            {
              title: 'Giới hạn của AI:',
              text: 'AI không thể thay thế con người cảm nhận cái đẹp, sự tinh tế trong văn hóa, và kỹ năng thao tác chuẩn xác trên phần mềm đồ họa.',
            },
            {
              title: 'Nguyên tắc nhà thiết kế:',
              text: 'Con người là chủ thể sáng tạo, đưa ra quyết định thẩm mỹ cuối cùng và chịu trách nhiệm với sản phẩm của mình.',
            },
          ],
        },
        {
          id: 'b12-s11',
          slideNumber: 11,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 12: GHI NHỚ CỐT LÕI',
          subtitle: 'Kiến thức then chốt về đồ họa vectơ và phần mềm Inkscape',
          bullets: [
            {
              title: '1. Đặc tính đồ họa vectơ:',
              text: 'Được tạo bởi các công thức toán học, không bị vỡ nét hay nhòe răng cưa khi phóng to thu nhỏ, định dạng chuẩn quốc tế là SVG.',
            },
            {
              title: '2. Thao tác căn bản trong Inkscape:',
              text: 'Vẽ hình khối cơ bản, nhân bản đối tượng (Ctrl + D), chỉnh màu tô (Fill) và màu viền (Stroke), quản lí thứ tự lớp (Home/End).',
            },
            {
              title: '3. Kỹ năng thực hành đã đạt:',
              text: 'Vẽ thành thạo hình Bông hoa bằng phép xoay và hoàn thiện lá cờ Tổ quốc Việt Nam chuẩn tỉ lệ 2:3.',
            },
          ],
        },
        {
          id: 'b12-s12',
          slideNumber: 12,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Thực hành nâng cao kỹ năng tạo hình đồ họa trên máy tính',
          lead: 'Học sinh hoàn thành 2 bài tập rèn luyện kỹ năng sau tiết học:',
          bullets: [
            {
              title: 'Bài tập 1: Hoàn thiện tệp Quốc kì Việt Nam',
              text: 'Mở lại tệp cờ đỏ sao vàng đã vẽ, kiểm tra độ cân xứng của các đỉnh sao và lưu tệp chuẩn "QuocKi_HoTen.svg".',
              badge: 'Lưu SVG',
            },
            {
              title: 'Bài tập 2: Thử tài thiết kế quốc kì khác',
              text: 'Sử dụng công cụ Rectangle và Ellipse/Circle để vẽ quốc kì Nhật Bản (mặt trời đỏ nền trắng) hoặc quốc kì Lào.',
              badge: 'Sáng tạo mở rộng',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LƯU Ý NỘP BÀI',
            content: 'Nộp tệp định dạng .svg vào thư mục chia sẻ Google Drive của lớp trước buổi học tiếp theo.',
          },
          footerNote: 'SGK Tin học 10 (trang 85-97) • Giáo viên: QuanLHK',
        },
      ],
    },
    {
      id: 'bai-13',
      number: 13,
      title: 'Bài 13. Kỹ thuật thêm và quản lý các đối tượng đồ họa',
      shortTitle: 'Bài 13: Ghép hình & Quản lí đối tượng',
      chapterId: 'chu-de-4',
      pageStart: 98,
      pageEnd: 109,
      slides: [
        {
          id: 'b13-s1',
          slideNumber: 1,
          type: 'title',
          title: 'BỔ SUNG CÁC ĐỐI TƯỢNG ĐỒ HOẠ',
          subtitle: 'Chủ đề 4: Ứng dụng máy tính | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân tích hình vẽ phức tạp thành các đối tượng hình khối đơn giản' },
            { text: 'Sử dụng thành thạo hộp thoại Fill and Stroke: Màu chuyển sắc & Nét vẽ' },
            { text: 'Làm chủ 6 phép ghép đối tượng cơ bản trong bảng chọn Path (Boolean)' },
            { text: 'Thực hành tạo hình đám mây, cành cây, dưa hấu và biểu tượng số' },
          ],
          badge: 'Bài 13 • KHBD Chuẩn',
        },
        {
          id: 'b13-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: PHÂN TÍCH HÌNH MIẾNG DƯA HẤU',
          subtitle: 'Quan sát Hình 13.1 SGK - Bóc tách các lớp hình học (Phiếu học tập số 1)',
          lead: 'Hình vẽ miếng dưa hấu được tạo nên từ những hình khối cơ bản nào và xếp theo thứ tự ra sao?',
          bullets: [
            {
              title: 'Lớp 1 (Dưới cùng): Vỏ dưa hấu',
              text: 'Hình quạt tròn hoặc hình bán nguyệt elip có màu xanh lá cây đậm.',
              badge: 'Lớp đáy',
            },
            {
              title: 'Lớp 2: Cùi dưa hấu trắng xanh',
              text: 'Hình bán nguyệt nhỏ hơn đặt đè lên vỏ, có màu xanh nhạt hoặc trắng.',
              badge: 'Lớp giữa',
            },
            {
              title: 'Lớp 3: Ruột dưa hấu đỏ',
              text: 'Hình bán nguyệt nhỏ hơn nữa đè lên cùi, có màu đỏ tươi hấp dẫn.',
              badge: 'Lớp trên',
            },
            {
              title: 'Lớp 4 (Trên cùng): Hạt dưa hấu',
              text: 'Các hình elip nhỏ màu đen đặt rải rác trên bề mặt ruột đỏ.',
              badge: 'Lớp đỉnh',
            },
          ],
        },
        {
          id: 'b13-s3',
          slideNumber: 3,
          type: 'content',
          title: 'THIẾT LẬP MÀU TÔ (FILL) VÀ MÀU ĐƯỜNG VIỀN (STROKE)',
          subtitle: 'Mở hộp thoại chuyên sâu: Bấm phím Shift + Ctrl + F (Hình 13.3 SGK)',
          lead: 'Hộp thoại Fill and Stroke giúp kiểm soát hoàn hảo diện mạo của mọi đối tượng:',
          bullets: [
            {
              title: '1. Trang Fill (Màu tô bên trong hình):',
              text: '• No paint (X): Không tô màu (hình trong suốt nhìn xuyên thấu qua nền).\n• Flat color: Tô màu đồng nhất một mảng.\n• Linear gradient: Màu chuyển tiếp tuyến tính từ màu này sang màu khác theo đường thẳng.\n• Radial gradient: Màu chuyển tiếp tỏa tròn từ tâm ra ngoài viền.',
            },
            {
              title: '2. Trang Stroke paint (Màu đường nét viền bao):',
              text: 'Thiết lập màu sắc cho đường nét bao quanh đối tượng, độc lập hoàn toàn với màu nền Fill bên trong (có thể tô viền mà không tô nền hoặc ngược lại).',
            },
          ],
        },
        {
          id: 'b13-s4',
          slideNumber: 4,
          type: 'content',
          title: 'THIẾT LẬP KIỂU NÉT VẼ (STROKE STYLE) VÀ ĐỘ TRONG SUỐT',
          subtitle: 'Trang Stroke style và thanh trượt Opacity trong hộp thoại Fill and Stroke',
          lead: 'Tùy biến tinh tế đường viền và hiệu ứng mờ sương cho hình vẽ:',
          bullets: [
            {
              title: 'Độ dày nét vẽ (Width):',
              text: 'Nhập giá trị độ rộng viền theo đơn vị px, pt, mm tùy ý trên thanh Width.',
            },
            {
              title: 'Kiểu nét đứt (Dashes):',
              text: 'Hỗ trợ các mẫu nét đứt đoạn, chấm bi rời nhau phục vụ vẽ đường biên, đường may hay dấu cắt.',
            },
            {
              title: 'Kiểu góc nối (Join) và đầu mút (Cap):',
              text: 'Chọn góc nối nhọn (Miter), bo tròn (Round) hoặc vát phẳng (Bevel) để nét vẽ mượt mà.',
            },
            {
              title: 'Độ trong suốt (Opacity):',
              text: 'Kéo thanh trượt Opacity ở đáy hộp thoại từ 100% xuống thấp để tạo hiệu ứng xuyên thấu qua các lớp bên dưới.',
            },
          ],
        },
        {
          id: 'b13-s5',
          slideNumber: 5,
          type: 'diagram',
          title: '6 PHÉP GHÉP ĐỐI TƯỢNG TRONG BẢNG CHỌN PATH',
          subtitle: 'Phép toán Boole (Boolean Operations) tạo hình phức tạp từ hình cơ bản (Hình 13.3 SGK)',
          svgType: 'inkscape-tools',
          sourceCitation: 'Nguồn tham khảo: Hình 13.3 SGK Tin học 10 (trang 71) • Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: 'Ctrl + +',
                title: 'Hợp (Union)',
                desc: 'Hợp nhất 2 đối tượng thành 1 hình duy nhất có chung đường biên ngoài.',
                tag: 'Tạo đám mây',
              },
              {
                stepNumber: 'Ctrl + -',
                title: 'Hiệu (Difference)',
                desc: 'Lấy hình lớp dưới trừ đi phần bị hình lớp trên che khuất (phụ thuộc thứ tự lớp).',
                tag: 'Tạo trăng khuyết',
              },
              {
                stepNumber: 'Ctrl + *',
                title: 'Giao (Intersection)',
                desc: 'Chỉ giữ lại phần chung chồng lên nhau giữa hai hình, xóa bỏ các phần còn lại.',
                tag: 'Tạo cánh hoa',
              },
              {
                stepNumber: 'Ctrl + ^',
                title: 'Hiệu đối xứng (Exclusion)',
                desc: 'Giữ lại phần riêng của 2 hình, đục thủng phần giao nhau ở giữa.',
                tag: 'Đục rỗng',
              },
              {
                stepNumber: 'Ctrl + /',
                title: 'Chia (Division)',
                desc: 'Dùng hình trên như lưỡi dao cắt hình dưới thành các mảnh rời nhau.',
                tag: 'Cắt lát',
              },
              {
                stepNumber: 'Ctrl + Alt + /',
                title: 'Cắt đường (Cut Path)',
                desc: 'Cắt đường biên của hình dưới tại các điểm giao nhau với hình trên.',
                tag: 'Cắt viền',
              },
            ],
          },
        },
        {
          id: 'b13-s6',
          slideNumber: 6,
          type: 'process',
          title: 'THỰC HÀNH: VẼ ĐÁM MÂY BẰNG PHÉP HỢP (UNION)',
          subtitle: 'Nhiệm vụ tạo hình minh họa phong cảnh (Phiếu học tập số 4)',
          lead: 'Quy trình tạo hình đám mây mềm mại tự nhiên:',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Vẽ các hình tròn',
                desc: 'Vẽ 4 - 5 hình tròn và elip có kích thước to nhỏ khác nhau đè lên nhau thành cụm.',
                tag: 'Hình tròn',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Thêm hình chữ nhật đế',
                desc: 'Vẽ 1 hình chữ nhật ngang đặt ở đáy cụm hình tròn để tạo mặt phẳng chân mây.',
                tag: 'Đế phẳng',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Chọn tất cả & Hợp nhất',
                desc: 'Quét chuột chọn tất cả các hình -> Vào bảng chọn Path -> Chọn Union (Ctrl + +).',
                tag: 'Path -> Union',
              },
              {
                stepNumber: 'BƯỚC 4',
                title: 'Tô màu chuyển sắc',
                desc: 'Mở Fill and Stroke -> Chọn Linear Gradient từ trắng sang xanh nhạt để mây sinh động.',
                tag: 'Gradient',
              },
            ],
          },
        },
        {
          id: 'b13-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'LUYỆN TẬP: PHÂN TÍCH PHÉP GHÉP PHÙ HỢP',
          subtitle: 'Kiểm tra nhanh tư duy hình học đồ họa (Phiếu học tập số 4)',
          lead: 'Hãy lựa chọn phép ghép chính xác để hoàn thành các đối tượng sau:',
          quiz: {
            question: 'Để vẽ một vầng trăng khuyết từ hai hình tròn bằng nhau chồng lên nhau, ta sử dụng phép ghép nào trong bảng chọn Path?',
            options: [
              'A. Path -> Union (Hợp)',
              'B. Path -> Difference (Hiệu - lấy hình dưới trừ hình trên)',
              'C. Path -> Intersection (Giao)',
              'D. Path -> Combine (Kết hợp)',
            ],
            answer: 'B. Path -> Difference (Hiệu - lấy hình dưới trừ hình trên)',
            explanation: 'Phép Difference sẽ lấy hình tròn bên dưới trừ đi phần bị hình tròn bên trên đè lên, tạo ra hình lưỡi liềm trăng khuyết hoàn hảo.',
          },
        },
        {
          id: 'b13-s8',
          slideNumber: 8,
          type: 'apply',
          title: 'VẬN DỤNG: TẠO HÌNH CÂY VÀ KHỐI CẦU 3D',
          subtitle: 'Phối hợp công cụ hình khối và hiệu ứng màu (Hình 13.15 SGK)',
          lead: 'Vận dụng tổng hợp các kĩ năng đã học để vẽ cụm cây xanh hoặc quả bóng nổi 3D:',
          bullets: [
            {
              title: 'Vẽ tán cây:',
              text: 'Tạo cụm hình tròn đè lên nhau -> Dùng Path/Union hợp lại thành tán lá -> Dùng tô màu Gradient xanh lục.',
              badge: 'Tán lá',
            },
            {
              title: 'Vẽ thân cây:',
              text: 'Dùng hình chữ nhật kết hợp biến đổi thành hình thang, tô màu nâu đất, hạ xuống lớp dưới cùng (Page Down).',
              badge: 'Thân cây',
            },
            {
              title: 'Hiệu ứng khối cầu 3D:',
              text: 'Vẽ hình tròn -> Chọn Radial Gradient (tỏa tròn) -> Kéo tâm sáng về phía góc trên bên trái để tạo cảm giác ánh sáng chiếu vào quả cầu nổi khối.',
              badge: 'Khối 3D',
            },
          ],
        },
        {
          id: 'b13-s9',
          slideNumber: 9,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 13: GHI NHỚ CỐT LÕI',
          subtitle: 'Hệ thống hóa kỹ năng làm việc với thuộc tính và phép ghép Path',
          bullets: [
            {
              title: '1. Quản lí thuộc tính Fill & Stroke:',
              text: 'Mở hộp thoại Shift+Ctrl+F để điều chỉnh màu tô đơn sắc, màu chuyển sắc Gradient, màu đường viền và độ trong suốt Opacity.',
            },
            {
              title: '2. Thành thạo các phép ghép Path:',
              text: 'Nắm chắc 6 phép biến đổi Boolean: Union (Ctrl++), Difference (Ctrl+-), Intersection (Ctrl+*), Exclusion (Ctrl+^), Division (Ctrl+/).',
            },
            {
              title: '3. Phương pháp tư duy đồ họa:',
              text: 'Mọi hình vẽ phức tạp đều bắt đầu từ việc bóc tách thành các hình khối đơn giản và áp dụng phép ghép thích hợp.',
            },
          ],
        },
        {
          id: 'b13-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Rèn luyện tư duy tạo hình và chuẩn bị bài mới',
          lead: 'Học sinh thực hiện nhiệm vụ thiết kế tại nhà:',
          bullets: [
            {
              title: 'Nhiệm vụ 1: Vẽ biểu tượng Trái tim cân xứng',
              text: 'Vẽ 2 hình tròn và 1 hình vuông nghiêng 45 độ, sau đó áp dụng phép Hợp (Path -> Union) để hoàn thành biểu tượng trái tim.',
              badge: 'Thực hành Path',
            },
            {
              title: 'Nhiệm vụ 2: Chuẩn bị Bài 14',
              text: 'Đọc trước Bài 14 trong SGK: Làm quen với khái niệm Điểm neo (Node) và công cụ Pen vẽ đường cong Bézier.',
              badge: 'Chuẩn bị bài',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'HƯỚNG DẪN NỘP BÀI',
            content: 'Lưu tệp với tên "TraiTim_HoTen.svg" và tải lên thư mục học tập của lớp.',
          },
          footerNote: 'SGK Tin học 10 (trang 98-109) • Giáo viên: QuanLHK',
        },
      ],
    },
    {
      id: 'bai-14',
      number: 14,
      title: 'Bài 14. Thao tác chỉnh sửa với đối tượng đường nét và văn bản',
      shortTitle: 'Bài 14: Điểm neo & Chỉnh sửa văn bản',
      chapterId: 'chu-de-4',
      pageStart: 110,
      pageEnd: 121,
      slides: [
        {
          id: 'b14-s1',
          slideNumber: 1,
          type: 'title',
          title: 'LÀM VIỆC VỚI ĐỐI TƯỢNG ĐƯỜNG VÀ VĂN BẢN',
          subtitle: 'Chủ đề 4: Ứng dụng máy tính | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân biệt hình khối định sẵn và đối tượng tự do dạng đường (Path)' },
            { text: 'Làm chủ điểm neo (Node), điểm chỉ hướng và đường chỉ hướng' },
            { text: 'Chuyển hình khối thành đường và thực hành vẽ chiếc lá uốn lượn' },
            { text: 'Tạo văn bản nghệ thuật và đặt chữ uốn lượn theo đường cong (Put on Path)' },
          ],
          badge: 'Bài 14 • KHBD Chuẩn',
        },
        {
          id: 'b14-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: HÌNH KHỐI VS ĐỐI TƯỢNG ĐƯỜNG',
          subtitle: 'So sánh Hình 14.1 và 14.2 SGK trang 75 (Phiếu học tập số 1)',
          lead: 'Quan sát hai hình chữ nhật trong Inkscape và phát hiện sự khác biệt:',
          bullets: [
            {
              title: 'Hình chữ nhật gốc (Shape):',
              text: 'Được định nghĩa cố định bởi chiều dài, chiều rộng và góc bo tròn. Không thể kéo riêng từng góc thành hình tam giác hay hình chiếc lá.',
              badge: 'Hình khối cố định',
            },
            {
              title: 'Hình đã chuyển sang đường (Path):',
              text: 'Gồm các đoạn thẳng và đoạn cong nối với nhau qua các điểm neo. Có thể tự do kéo từng đoạn, bẻ cong đường viền để tạo hình tùy ý.',
              badge: 'Đường tự do (Path)',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'LỆNH CHUYỂN ĐỔI THEN CHỐT',
            content: 'Vào bảng chọn Path -> Chọn "Object to Path" (Phím tắt: Shift + Ctrl + C) để chuyển bất kì hình khối nào thành đường tự do!',
          },
        },
        {
          id: 'b14-s3',
          slideNumber: 3,
          type: 'diagram',
          title: 'CẤU TRÚC ĐỐI TƯỢNG ĐƯỜNG: ĐIỂM NEO & CHỈ HƯỚNG',
          subtitle: 'Khám phá giải phẫu đường cong Bézier (Bezier curve)',
          lead: 'Dùng công cụ Tinh chỉnh điểm (Node tool - phím F2) để hiển thị cấu trúc đường cong:',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: '1',
                title: 'Điểm neo (Node)',
                desc: 'Điểm nối giữa các đoạn cong hoặc đoạn thẳng; quyết định hình dáng khung sườn của đối tượng.',
                tag: 'Neo',
              },
              {
                stepNumber: '2',
                title: 'Điểm neo góc (Corner / Cusp)',
                desc: 'Điểm neo tạo nên góc nhọn gấp khúc; hai đường chỉ hướng ở hai bên di chuyển độc lập nhau.',
                tag: 'Góc nhọn',
              },
              {
                stepNumber: '3',
                title: 'Điểm neo trơn (Smooth node)',
                desc: 'Điểm neo tạo đường cong mềm mại; hai đường chỉ hướng thẳng hàng nhau, xoay cùng lúc.',
                tag: 'Đường cong',
              },
              {
                stepNumber: '4',
                title: 'Điểm và đường chỉ hướng',
                desc: 'Tay cầm chìa ra từ điểm neo. Kéo dài/ngắn để chỉnh độ vồng; xoay để chỉnh hướng cong.',
                tag: 'Handle',
              },
            ],
          },
        },
        {
          id: 'b14-s4',
          slideNumber: 4,
          type: 'process',
          title: 'CÁC THAO TÁC VỚI CÔNG CỤ TINH CHỈNH ĐIỂM (F2)',
          subtitle: 'Thanh điều khiển thuộc tính công cụ Node tool (Hình 14.2 SGK trang 76)',
          svgType: 'bezier-nodes',
          sourceCitation: 'Nguồn tham khảo: Hình 14.2 SGK Tin học 10 (trang 76) • Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'THÊM / XÓA',
                title: 'Thêm và Xóa điểm neo',
                desc: 'Chạm đúp vào đường cong để thêm điểm neo; chọn điểm neo rồi nhấn phím Delete để xóa bớt neo.',
                tag: 'Insert / Delete',
              },
              {
                stepNumber: 'GỘP / TÁCH',
                title: 'Gộp và Tách điểm neo',
                desc: 'Chọn 2 điểm neo gần nhau -> bấm nút "Join selected nodes" để gộp thành 1 điểm đỉnh nhọn.',
                tag: 'Join / Break',
              },
              {
                stepNumber: 'CHUYỂN LOẠI',
                title: 'Chuyển đổi loại điểm neo',
                desc: 'Bấm nút chuyển neo góc thành neo trơn (Make smooth) hoặc ngược lại (Make cusp).',
                tag: 'Smooth / Cusp',
              },
            ],
          },
        },
        {
          id: 'b14-s5',
          slideNumber: 5,
          type: 'practice',
          title: 'THỰC HÀNH 1: TẠO VÀ CHỈNH SỬA HÌNH CHIẾC LÁ',
          subtitle: 'Nhiệm vụ 1 theo Hình 14.11-14.12 SGK trang 78 (Mã 3.1NC1a)',
          lead: 'Quy trình biến đổi từ hình chữ nhật thành chiếc lá có cuống sắc sảo:',
          bullets: [
            {
              title: 'Bước 1: Vẽ hình chữ nhật đứng & Chuyển sang đường',
              text: 'Vẽ hình chữ nhật -> Chọn Path -> Object to Path (Shift+Ctrl+C) để tạo 4 điểm neo ở 4 góc.',
              badge: 'Chuyển Path',
            },
            {
              title: 'Bước 2: Gộp 2 điểm neo trên đỉnh',
              text: 'Dùng Node tool (F2) quét chọn 2 điểm neo phía trên -> Nhấn biểu tượng "Join selected nodes" để tạo chóp nhọn của lá.',
              badge: 'Tạo chóp lá',
            },
            {
              title: 'Bước 3: Chuyển 2 điểm neo dưới thành neo trơn',
              text: 'Chọn 2 điểm neo phía dưới -> Nhấn "Make selected nodes smooth" -> Kéo các điểm chỉ hướng để bụng lá phình cong tự nhiên.',
              badge: 'Uốn cong bầu lá',
            },
            {
              title: 'Bước 4: Vẽ cuống lá bằng Pen tool',
              text: 'Dùng công cụ Pen (B) vẽ một đường cong từ gốc lá xuống dưới, tô màu xanh đậm, hoàn tất chiếc lá.',
              badge: 'Cuống lá',
            },
          ],
        },
        {
          id: 'b14-s6',
          slideNumber: 6,
          type: 'content',
          title: 'ĐỐI TƯỢNG VĂN BẢN (TEXT TOOL - PHÍM T)',
          subtitle: 'Tạo và định dạng văn bản nghệ thuật trong thiết kế đồ họa',
          lead: 'Chọn biểu tượng chữ A (phím T) để nhập văn bản và tùy biến hiển thị:',
          bullets: [
            {
              title: 'Nhập văn bản tự do:',
              text: 'Nhấp chuột vào trang vẽ rồi gõ chữ. Không nên kéo khung chứa chữ nếu chỉ thiết kế tiêu đề ngắn.',
            },
            {
              title: 'Định dạng phông chữ và kiểu dáng:',
              text: 'Trên thanh thuộc tính: Chọn phông chữ (ưu tiên Be Vietnam Pro, Montserrat, Open Sans có hỗ trợ tiếng Việt), chọn cỡ chữ (Size), in đậm (Bold), in nghiêng (Italic).',
            },
            {
              title: 'Tô màu chữ độc đáo:',
              text: 'Văn bản trong Inkscape cũng là đối tượng đồ họa: có thể tô màu phẳng, màu chuyển sắc Gradient hoặc tô nét viền Stroke.',
            },
          ],
        },
        {
          id: 'b14-s7',
          slideNumber: 7,
          type: 'process',
          title: 'ĐẶT VĂN BẢN THEO ĐƯỜNG CONG (PUT ON PATH)',
          subtitle: 'Kĩ thuật uốn lượn dòng chữ nghệ thuật quanh hình tròn hoặc đường cong',
          lead: 'Quy trình tạo dòng chữ cong chuyên nghiệp (Hình 14.10 SGK trang 77):',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Tạo văn bản và đường dẫn',
                desc: 'Gõ dòng chữ (ví dụ: "TRƯỜNG THPT NGUYỄN DU") và vẽ 1 đường cong hoặc hình tròn làm đường ray.',
                tag: 'Chuẩn bị',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Chọn đồng thời cả hai',
                desc: 'Dùng phím S chọn dòng chữ -> Giữ Shift và nhấp chọn thêm đường cong (cả hai cùng sáng viền chọn).',
                tag: 'Shift + Click',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Lệnh Text -> Put on Path',
                desc: 'Vào bảng chọn Text -> Chọn "Put on Path". Dòng chữ sẽ tự động uốn lượn khớp theo đường cong.',
                tag: 'Put on Path',
              },
              {
                stepNumber: 'BƯỚC 4',
                title: 'Ẩn đường dẫn phụ',
                desc: 'Chọn đường cong -> Chọn Stroke paint = No paint (X) để ẩn đường cong chỉ để lại dòng chữ uốn lượn.',
                tag: 'Ẩn đường ray',
              },
            ],
          },
        },
        {
          id: 'b14-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'LUYỆN TẬP: HOÀN THIỆN BIỂU TRƯNG BẢO VỆ MÔI TRƯỜNG',
          subtitle: 'Phối hợp chiếc lá uốn lượn và dòng chữ cong (Năng lực số 3.2NC1a, 3.3NC1a)',
          lead: 'Nhiệm vụ nhóm: Thiết kế huy hiệu "VÌ MỘT HÀNH TINH XANH"',
          bullets: [
            {
              title: 'Thành phần 1:',
              text: 'Biểu tượng 2 chiếc lá xanh uốn chéo vào nhau tạo ở Nhiệm vụ 1.',
            },
            {
              title: 'Thành phần 2:',
              text: 'Vòng tròn mờ bao quanh biểu tượng.',
            },
            {
              title: 'Thành phần 3:',
              text: 'Dòng chữ "VÌ MỘT HÀNH TINH XANH" uốn lượn theo nửa trên của vòng tròn bằng lệnh Text -> Put on Path.',
            },
            {
              title: 'Tiêu chí đánh giá:',
              text: 'Chữ không bị lộn ngược, khoảng cách chữ đều đặn, màu sắc hài hòa và lưu tệp SVG mở chỉnh sửa được.',
            },
          ],
        },
        {
          id: 'b14-s9',
          slideNumber: 9,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 14: GHI NHỚ TRỌNG TÂM',
          subtitle: 'Kiến thức cốt lõi về điểm neo và văn bản nghệ thuật',
          bullets: [
            {
              title: '1. Đối tượng đường (Path):',
              text: 'Linh hoạt, được điều khiển bởi điểm neo và các tay cầm chỉ hướng. Lệnh chuyển đổi then chốt: Path -> Object to Path (Shift+Ctrl+C).',
            },
            {
              title: '2. Điểm neo góc & Điểm neo trơn:',
              text: 'Neo góc tạo khúc gập nhọn; neo trơn tạo đường cong mềm mại. Thêm, xóa, bẻ cong và uốn nắn bằng công cụ Node tool (F2).',
            },
            {
              title: '3. Uốn chữ theo đường cong:',
              text: 'Chọn đồng thời chữ và đường -> Text -> Put on Path. Muốn hủy bỏ uốn chữ: Text -> Remove from Path.',
            },
          ],
        },
        {
          id: 'b14-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'NHIỆM VỤ THỰC HÀNH VẬN DỤNG VỀ NHÀ',
          subtitle: 'Hoàn thiện huy hiệu và chuẩn bị dự án đồ họa',
          lead: 'Học sinh thực hiện 2 nhiệm vụ sau giờ học:',
          bullets: [
            {
              title: 'Nhiệm vụ 1: Hoàn thiện huy hiệu hành tinh xanh',
              text: 'Chỉnh chu các đường viền chiếc lá, căn chỉnh lại chữ uốn lượn sao cho các chữ cách đều mép vòng tròn, lưu tệp "HuyHieu_Xanh.svg".',
              badge: 'Hoàn thiện SVG',
            },
            {
              title: 'Nhiệm vụ 2: Chuẩn bị tư liệu cho Bài 15',
              text: 'Tìm kiếm ảnh chụp hoặc phác thảo ý tưởng thiết kế Tờ rơi Hội chợ sách hoặc Poster giới thiệu câu lạc bộ trường trên giấy nháp.',
              badge: 'Chuẩn bị ý tưởng',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LƯU Ý KỸ THUẬT',
            content: 'Sau khi uốn chữ theo đường cong, hãy chọn riêng đường ray và ẩn nét viền (Stroke = No paint) để giữ sản phẩm tinh tế!',
          },
          footerNote: 'SGK Tin học 10 (trang 110-121) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 15: CÁC BƯỚC HOÀN THIỆN SẢN PHẨM HÌNH ẢNH ĐỒ HỌA
    // =========================================================================
    {
      id: 'bai-15',
      number: 15,
      title: 'Bài 15. Các bước hoàn thiện sản phẩm hình ảnh đồ họa',
      shortTitle: 'Bài 15: Hoàn thiện sản phẩm đồ họa',
      chapterId: 'chu-de-4',
      pageStart: 82,
      pageEnd: 86,
      slides: [
        {
          id: 'b15-s1',
          slideNumber: 1,
          type: 'title',
          title: 'CÁC BƯỚC HOÀN THIỆN SẢN PHẨM HÌNH ẢNH ĐỒ HỌA',
          subtitle: 'Chủ đề 4: Thiết kế đồ họa máy tính | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Tổng hợp kỹ năng: Vẽ hình khối, chỉnh sửa đường cong Bézier, uốn văn bản' },
            { text: 'Quy trình 4 bước thiết kế ấn phẩm truyền thông (tờ rơi, banner, logo)' },
            { text: 'Kỹ thuật phân lớp (Layers) và nhóm đối tượng (Group/Ungroup)' },
            { text: 'Xuất file ảnh chuẩn: Vector SVG và Bitmap PNG đa độ phân giải (DPI)' },
          ],
          badge: 'Bài 15 • Thực hành dự án',
        },
        {
          id: 'b15-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC DỰ ÁN',
          subtitle: 'Sau bài học này, học sinh sẽ làm chủ quy trình thiết kế hoàn chỉnh:',
          bullets: [
            {
              title: 'Tư duy bố cục & Màu sắc:',
              text: 'Biết cách xác định kích thước trang, phối màu hài hòa theo chủ đề và cân đối các khoảng trống thị giác.',
              badge: 'Mục tiêu 1',
            },
            {
              title: 'Thao tác kỹ thuật nâng cao:',
              text: 'Phối hợp nhịp nhàng các công cụ Selection (F1), Node tool (F2), Text (F8) và căn chỉnh Align & Distribute.',
              badge: 'Mục tiêu 2',
            },
            {
              title: 'Kỹ năng xuất bản đồ họa:',
              text: 'Biết chọn vùng xuất ảnh (Page, Drawing, Selection) và cài đặt DPI phù hợp mục đích hiển thị web hoặc in ấn.',
              badge: 'Mục tiêu 3',
            },
          ],
        },
        {
          id: 'b15-s3',
          slideNumber: 3,
          type: 'content',
          title: 'KHỞI ĐỘNG: CẤU TRÚC MỘT ẤN PHẨM TRUYỀN THÔNG',
          subtitle: 'Bốn thành phần cốt lõi của tờ rơi truyền thông (SGK Trang 82)',
          cardsGrid: [
            {
              title: '1. Nền & Họa tiết trang trí',
              desc: 'Tạo gam màu chủ đạo, sử dụng hình chữ nhật bo góc hoặc dải màu chuyển Gradient nhẹ nhàng.',
              tag: 'Thành phần 1',
              points: [
                'Không dùng màu nền quá chói làm chìm chữ',
                'Nên khóa lớp nền để tránh vô tình xê dịch',
              ],
            },
            {
              title: '2. Hình ảnh vector minh họa',
              desc: 'Các biểu tượng (icon), logo hoặc hình vẽ thể hiện chủ đề của sự kiện.',
              tag: 'Thành phần 2',
              points: [
                'Vẽ bằng công cụ Pen (Bézier) hoặc ghép các hình khối cơ bản',
                'Nhóm (Group - Ctrl+G) các chi tiết để dễ di chuyển',
              ],
            },
            {
              title: '3. Tiêu đề chính nổi bật',
              desc: 'Tên sự kiện hoặc thông điệp lớn nhất, thường được uốn cong theo đường dẫn nghệ thuật.',
              tag: 'Thành phần 3',
              points: [
                'Chọn font chữ nét dày, rõ ràng, dễ đọc từ xa',
                'Sử dụng màu sắc tương phản cao so với nền',
              ],
            },
            {
              title: '4. Thông tin chi tiết',
              desc: 'Thời gian, địa điểm tổ chức, đơn vị tài trợ và thông tin liên hệ.',
              tag: 'Thành phần 4',
              points: [
                'Trình bày bằng font chữ đơn giản, kích cỡ vừa phải',
                'Căn lề ngay ngắn bằng bảng Align & Distribute (Ctrl+Shift+A)',
              ],
            },
          ],
        },
        {
          id: 'b15-s4',
          slideNumber: 4,
          type: 'process',
          title: 'QUY TRÌNH 4 BƯỚC HOÀN THIỆN ẤN PHẨM ĐỒ HỌA',
          subtitle: 'Quy trình chuẩn hóa từ ý tưởng phác thảo đến sản phẩm hoàn thiện',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Chuẩn bị trang',
                desc: 'File → Document Properties, chọn khổ giấy A4/A5, chọn đơn vị mm hoặc pixel.',
                tag: 'Kích thước',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Vẽ nền & Hình ảnh',
                desc: 'Tạo lớp Nền, vẽ khung bao, tạo các hình vector minh họa và sắp xếp thứ tự trước sau.',
                tag: 'Đồ họa',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Thêm & Uốn chữ',
                desc: 'Tạo dòng chữ tiêu đề, áp dụng Text → Put on Path và nhập nội dung thời gian, địa điểm.',
                tag: 'Văn bản',
              },
              {
                stepNumber: 'BƯỚC 4',
                title: 'Căn chỉnh & Xuất',
                desc: 'Kiểm tra lỗi chính tả, căn lề thẳng hàng, lưu file gốc .SVG và xuất ảnh .PNG.',
                tag: 'Hoàn thiện',
              },
            ],
          },
        },
        {
          id: 'b15-s5',
          slideNumber: 5,
          type: 'content',
          title: 'KỸ THUẬT QUẢN LÝ LỚP (LAYERS) VÀ NHÓM ĐỐI TƯỢNG',
          subtitle: 'Bí quyết giúp bản thiết kế chuyên nghiệp và dễ bảo trì',
          imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Thiết kế ấn phẩm truyền thông, poster và logo thương hiệu sắc nét',
          bullets: [
            {
              title: 'Nhóm đối tượng (Group - Ctrl + G):',
              text: 'Gom nhiều hình khối rời rạc thành một thể thống nhất. Khi phóng to, thu nhỏ hoặc xoay thì các chi tiết luôn giữ đúng tỉ lệ. Muốn rã nhóm nhấn Ctrl + Shift + G.',
            },
            {
              title: 'Quản lý lớp (Layers - Ctrl + Shift + L):',
              text: 'Chia bản vẽ thành các tầng độc lập: Tầng Nền (Background), Tầng Hình ảnh (Graphics), Tầng Văn bản (Text).',
            },
            {
              title: 'Khóa lớp an toàn (Lock Layer):',
              text: 'Bấm biểu tượng chiếc khóa trên bảng điều khiển lớp để cố định lớp nền, giúp thoải mái chọn các chi tiết nhỏ ở trên mà không sợ kéo lệch nền.',
            },
          ],
          highlightBox: {
            type: 'note',
            title: 'MẸO THIẾT KẾ CHUYÊN NGHIỆP',
            content: 'Luôn đặt tên rõ ràng cho từng lớp (ví dụ: "Lop_Nen", "Lop_TieuDe") để khi bản vẽ có hàng trăm chi tiết vẫn dễ dàng tìm và chỉnh sửa.',
          },
        },
        {
          id: 'b15-s6',
          slideNumber: 6,
          type: 'process',
          title: 'QUY TRÌNH XUẤT ẢNH TRONG INKSCAPE (FILE → EXPORT)',
          subtitle: 'Phím tắt: Shift + Ctrl + E | Chuyển đổi từ Vector sang Bitmap',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Lưu file gốc .SVG',
                desc: 'Luôn File → Save As lưu tệp vector để có thể chỉnh sửa lại các đối tượng và font chữ bất cứ lúc nào.',
                tag: 'Lưu trữ',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Chọn vùng xuất ảnh',
                desc: 'Page (xuất trọn vẹn trang giấy) hoặc Selection (chỉ xuất các đối tượng đang chọn trên màn hình).',
                tag: 'Vùng chọn',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Cài đặt độ phân giải DPI',
                desc: 'Đặt 96 DPI nếu đăng lên mạng xã hội/web; đặt 300 DPI nếu gửi xưởng in ấn tờ rơi, poster khổ lớn.',
                tag: 'Chất lượng',
              },
              {
                stepNumber: 'BƯỚC 4',
                title: 'Bấm nút Export',
                desc: 'Chọn thư mục lưu và nhấn Export để tạo ra bức ảnh định dạng .PNG trong suốt sắc nét.',
                tag: 'Xuất file',
              },
            ],
          },
        },
        {
          id: 'b15-s7',
          slideNumber: 7,
          type: 'content',
          title: 'TÌNH HUỐNG THỰC HÀNH: BANNER HỘI THI VĂN NGHỆ',
          subtitle: 'Vận dụng tổng hợp kỹ năng thiết kế ấn phẩm cho hoạt động Đoàn trường',
          situation: {
            context: 'Lớp 10A được phân công thiết kế một banner quảng bá "Hội thi Tiếng hát tuổi trẻ". Banner cần có hình ảnh nốt nhạc, hoa sen, dòng chữ uốn cong và thông tin ngày giờ.',
            question: 'Em sẽ áp dụng các công cụ Inkscape nào để hoàn thành banner vừa đẹp mắt vừa đúng thời hạn?',
            options: [
              {
                label: 'Quy trình tối ưu',
                action: 'Vẽ khung chữ nhật làm nền -> Dùng công cụ Pen vẽ nốt nhạc -> Dùng Text on Path uốn chữ tiêu đề -> Căn giữa bằng Align -> Xuất file PNG 300 DPI',
                consequence: 'Banner chuẩn màu, đường nét sắc sảo, in ấn khổ lớn không bị vỡ hạt',
                isRecommended: true,
              },
              {
                label: 'Quy trình thiếu sót',
                action: 'Vẽ tất cả trên cùng 1 lớp không khóa nền, không uốn chữ, chụp ảnh màn hình dán vào Word để in',
                consequence: 'Ảnh chụp màn hình có độ phân giải rất thấp (72 DPI), khi in ra sẽ bị răng cưa mờ nhòe',
                isRecommended: false,
              },
            ],
          },
        },
        {
          id: 'b15-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'TRẮC NGHIỆM: KỸ NĂNG XUẤT BẢN ĐỒ HỌA',
          subtitle: 'Kiểm tra độ hiểu biết về định dạng và độ phân giải hình ảnh',
          quiz: {
            question: 'Khi cần gửi file thiết kế cho xưởng in pano quảng cáo khổ lớn ngoài trời, ta nên cài đặt thông số độ phân giải (DPI) khi xuất ảnh là bao nhiêu để hình in sắc nét nhất?',
            options: [
              'A. 72 DPI',
              'B. 96 DPI',
              'C. 300 DPI',
              'D. 10 DPI',
            ],
            answer: 'Đáp án C: 300 DPI.',
            explanation: 'Chuẩn in ấn công nghiệp đòi hỏi tối thiểu 300 DPI (dots per inch) để các hạt mực in mịn màng, không bị vỡ hạt điểm ảnh như khi hiển thị trên màn hình máy tính (96 DPI).',
          },
        },
        {
          id: 'b15-s9',
          slideNumber: 9,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 15: HOÀN THIỆN CHỦ ĐỀ ĐỒ HỌA',
          subtitle: 'Hệ thống hóa toàn bộ kỹ năng đồ họa vector Inkscape',
          bullets: [
            {
              title: '1. Nắm vững công cụ cơ bản:',
              text: 'Hình chữ nhật, elip, ngôi sao, đường cong Bézier, công cụ chỉnh điểm neo và uốn chữ theo đường.',
            },
            {
              title: '2. Phép ghép hình logic:',
              text: 'Sử dụng thành thạo Union (hợp), Difference (hiệu), Intersection (giao) để tạo hình phức tạp từ hình đơn giản.',
            },
            {
              title: '3. Quy chuẩn xuất bản ấn phẩm:',
              text: 'Luôn lưu giữ file gốc .SVG và xuất file ảnh bitmap .PNG với độ phân giải DPI phù hợp mục đích sử dụng (96 DPI cho web, 300 DPI cho in ấn).',
            },
          ],
        },
        {
          id: 'b15-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'DỰ ÁN HỌC TẬP THỰC TẾ VỀ NHÀ',
          subtitle: 'Vận dụng sáng tạo thiết kế ấn phẩm số cho trường lớp',
          lead: 'Mỗi nhóm từ 3 đến 4 học sinh tự chọn và hoàn thiện 1 trong 2 dự án sau:',
          cardsGrid: [
            {
              title: 'Lựa chọn 1: Thiết kế Logo câu lạc bộ',
              desc: 'Thiết kế logo cho CLB Âm nhạc, CLB Thể thao hoặc CLB Sách của trường.',
              tag: 'Dự án Logo',
              points: [
                'Biểu tượng vector tối giản, ý nghĩa',
                'Tên câu lạc bộ uốn cong nghệ thuật',
                'Xuất file SVG và PNG nền trong suốt',
              ],
            },
            {
              title: 'Lựa chọn 2: Tờ rơi Giới thiệu sách',
              desc: 'Thiết kế tờ rơi khổ A5 quảng bá cuốn sách hay mà nhóm yêu thích.',
              tag: 'Dự án Tờ rơi',
              points: [
                'Bố cục 4 thành phần chuẩn SGK',
                'Màu sắc trang nhã, phân cấp tiêu đề rõ ràng',
                'Cài đặt xuất ảnh chuẩn in ấn 300 DPI',
              ],
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'HẠN NỘP SẢN PHẨM',
            content: 'Nộp tệp thiết kế gốc .svg kèm tệp ảnh .png xuất bản lên liên kết padlet của lớp trước ngày thi kết thúc học phần.',
          },
          footerNote: 'SGK Tin học 10 (trang 82-86) • Giáo viên: QuanLHK',
        },
      ],
    },
  ],
};
