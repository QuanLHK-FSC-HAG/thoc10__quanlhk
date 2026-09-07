import { Lesson } from '../types';

export const topic1ExtraLessons: Lesson[] = [
  // ==========================================
  // BÀI 3: MỘT SỐ KIỂU DỮ LIỆU VÀ DỮ LIỆU VĂN BẢN (10 SLIDES)
  // ==========================================
  {
    id: 'bai-3',
    number: 3,
    title: 'Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản',
    shortTitle: 'Bài 3: Kiểu dữ liệu & Dữ liệu văn bản',
    chapterId: 'chu-de-1',
    pageStart: 16,
    pageEnd: 19,
    slides: [
      {
        id: 'b3-s1',
        slideNumber: 1,
        type: 'title',
        title: 'MỘT SỐ KIỂU DỮ LIỆU VÀ DỮ LIỆU VĂN BẢN',
        subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Phân loại 4 kiểu dữ liệu cơ bản: Văn bản, Số, Lôgic, Đa phương tiện' },
          { text: 'Nắm vững bảng mã ASCII chuẩn 7-bit và ASCII mở rộng 8-bit' },
          { text: 'Bảng mã Unicode quốc tế và định dạng chuẩn hóa tiếng Việt UTF-8' },
          { text: 'Quy chuẩn TCVN 6909:2001 về trao đổi dữ liệu điện tử tiếng Việt' },
        ],
        badge: 'Chưa có KHBD tương ứng • Chuẩn SGK',
      },
      {
        id: 'b3-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: MÁY TÍNH HIỂU CHỮ VIẾT NHƯ THẾ NÀO?',
        subtitle: 'Bản chất số hóa văn bản trong khoa học máy tính (SGK trang 16)',
        lead: 'Máy tính chỉ gồm các mạch điện tử hiểu hai trạng thái điện áp cao (1) và thấp (0):',
        situation: {
          context: 'Khi gõ chữ "A" trên bàn phím, tín hiệu vật lí là gì và máy tính làm sao hiển thị đúng kí tự "A" trên màn hình?',
          question: 'Làm thế nào để chuyển đổi từ chữ viết của con người sang tín hiệu số trong máy tính?',
          options: [
            {
              label: 'Phương án A',
              action: 'Lưu trực tiếp hình dạng nét chữ của từng phông chữ',
              consequence: 'Chiếm dung lượng khổng lồ, máy tính không thể tìm kiếm, xử lí hay sắp xếp thứ tự chữ cái.',
              isRecommended: false,
            },
            {
              label: 'Phương án B (Chuẩn hóa)',
              action: 'Gán cho mỗi kí tự một số nguyên duy nhất (Mã kí tự), sau đó đổi sang dãy bit',
              consequence: 'Rất gọn nhẹ, tốc độ xử lí tức thời, tương thích trên mọi máy tính và thiết bị trên thế giới.',
              isRecommended: true,
            },
          ],
        },
      },
      {
        id: 'b3-s3',
        slideNumber: 3,
        type: 'content',
        title: 'PHÂN LOẠI 4 KIỂU DỮ LIỆU TRONG MÁY TÍNH',
        subtitle: 'Sơ đồ phân loại các kiểu dữ liệu cơ bản (Hình 3.2 SGK Trang 16)',
        cardsGrid: [
          {
            title: '1. Dữ liệu Văn bản',
            desc: 'Kí tự, xâu kí tự, văn bản số hóa theo bảng mã quy ước quốc tế.',
            tag: 'Text / String',
            points: ['Mã hóa theo ASCII hoặc Unicode', 'Mỗi kí tự tương ứng một mã nhị phân'],
          },
          {
            title: '2. Dữ liệu Số',
            desc: 'Số nguyên (Integer) và số thực dấu phẩy động (Float) trong tính toán.',
            tag: 'Number',
            points: ['Lưu trữ ở dạng bù 2 hoặc chuẩn IEEE 754', 'Phục vụ giải thuật số học và đại số'],
          },
          {
            title: '3. Dữ liệu Lôgic',
            desc: 'Chỉ nhận một trong hai giá trị Đúng (True / 1) hoặc Sai (False / 0).',
            tag: 'Boolean',
            points: ['Nền tảng của cấu trúc rẽ nhánh if...else', 'Tương thích hoàn hảo với mạch điện số'],
          },
          {
            title: '4. Đa phương tiện',
            desc: 'Âm thanh, hình ảnh và video clip được lấy mẫu và nén thành tệp.',
            tag: 'Multimedia',
            points: ['Gồm hàng triệu mẫu sóng âm hoặc pixel', 'Áp dụng các thuật toán nén chuyên dụng'],
          },
        ],
      },
      {
        id: 'b3-s4',
        slideNumber: 4,
        type: 'table',
        title: 'BẢNG MÃ ASCII VÀ SỰ PHÁT TRIỂN',
        subtitle: 'American Standard Code for Information Interchange (SGK Trang 17)',
        tableData: {
          caption: 'So sánh bảng mã ASCII chuẩn và ASCII mở rộng',
          headers: ['Tiêu chí', 'Bảng mã ASCII chuẩn (7 bit)', 'Bảng mã ASCII mở rộng (8 bit)'],
          rows: [
            ['Số bit mã hóa', '7 bit cho mỗi kí tự', '8 bit (1 byte) cho mỗi kí tự'],
            ['Dung lượng mã', '2⁷ = 128 kí tự (mã từ 0 đến 127)', '2⁸ = 256 kí tự (mã từ 0 đến 255)'],
            ['Kí tự bao gồm', 'Bảng chữ cái tiếng Anh, chữ số 0-9, dấu câu, kí tự điều khiển', 'Bao gồm 128 kí tự ASCII chuẩn + 128 kí tự kí hiệu toán, tiếng châu Âu'],
            ['Kí tự nổi bật', 'Mã 32 = Dấu cách, Mã 48 = \'0\', Mã 65 = \'A\', Mã 97 = \'a\'', 'Thêm các kí tự Hy Lạp, kí hiệu đồ họa vẽ khung viền'],
          ],
        },
        highlightBox: {
          type: 'remember',
          title: 'QUY TẮC MÃ HÓA ASCII',
          content: 'Chữ in hoa và chữ thường hơn kém nhau 32 đơn vị mã. Ví dụ: \'A\' có mã 65 -> \'a\' có mã 65 + 32 = 97.',
        },
      },
      {
        id: 'b3-s5',
        slideNumber: 5,
        type: 'content',
        title: 'BẢNG MÃ QUỐC TẾ UNICODE VÀ ĐỊNH DẠNG UTF-8',
        subtitle: 'Chuẩn mã hóa toàn cầu xóa bỏ rào cản đa ngôn ngữ (SGK Trang 18)',
        compareColumns: {
          left: {
            title: 'Hạn chế của ASCII cũ',
            subtitle: 'Chỉ hỗ trợ tiếng Anh',
            badge: 'Cũ & Bất cập',
            points: [
              'Chỉ có 256 vị trí mã, không đủ cho tiếng Việt (có 134 nguyên âm có dấu)',
              'Dẫn đến tình trạng loạn mã (Font TCVN3/.VnTime, VNI-Times không tương thích lẫn nhau)',
              'Mở tài liệu trên máy tính khác thường bị biến thành các kí tự vô nghĩa (lỗi font)',
            ],
          },
          right: {
            title: 'Sức mạnh vượt trội của Unicode',
            subtitle: 'Chuẩn toàn cầu hiện đại',
            badge: 'Chuẩn quốc tế',
            points: [
              'Dung lượng hơn 1.1 triệu vị trí mã, đủ chỗ cho tất cả chữ viết của nhân loại',
              'Định dạng UTF-8 dùng độ dài biến thiên (1 đến 4 byte), tối ưu băng thông web',
              'Hỗ trợ trọn vẹn chữ Quốc ngữ tiếng Việt có dấu chuẩn quốc tế',
              'Được quy định bắt buộc trong các cơ quan nhà nước (TCVN 6909:2001)',
            ],
          },
        },
      },
      {
        id: 'b3-s6',
        slideNumber: 6,
        type: 'process',
        title: 'QUY TRÌNH NHẬP TIẾNG VIỆT VÀ BẢNG MÃ TRÊN MÁY TÍNH',
        subtitle: 'Sự phối hợp giữa Bàn phím - Phần mềm gõ (UniKey) - Phông chữ hiển thị',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: '1',
              title: 'Người dùng gõ phím',
              desc: 'Gõ tổ hợp phím theo kiểu gõ quy ước Telex (vd: a + a -> â, s -> dấu sắc) hoặc VNI.',
              tag: 'Input',
            },
            {
              stepNumber: '2',
              title: 'UniKey xử lí',
              desc: 'Bộ gõ bắt tín hiệu, tra cứu Bảng mã được chọn (Unicode) để chuyển thành mã nhị phân tương ứng.',
              tag: 'Bộ gõ',
            },
            {
              stepNumber: '3',
              title: 'Màn hình hiển thị',
              desc: 'Hệ điều hành dùng phông chữ Unicode (Arial, Times New Roman, Be Vietnam Pro) vẽ kí tự tiếng Việt sắc nét.',
              tag: 'Output',
            },
          ],
        },
        highlightBox: {
          type: 'tip',
          title: 'MẸO XỬ LÍ LỖI FONT',
          content: 'Nếu gõ tiếng Việt bị lỗi chữ: Kiểm tra bảng mã trong UniKey phải là "Unicode" và phông chữ soạn thảo phải là phông chuẩn Unicode.',
        },
      },
      {
        id: 'b3-s7',
        slideNumber: 7,
        type: 'table',
        title: 'PHÂN BIỆT KIỂU GÕ VÀ BẢNG MÃ TIẾNG VIỆT',
        subtitle: 'Học sinh rất dễ nhầm lẫn giữa Kiểu gõ (Telex/VNI) và Bảng mã (Unicode/TCVN3)',
        tableData: {
          caption: 'Phân định rõ ràng giữa Kiểu gõ và Bảng mã',
          headers: ['Tiêu chí', 'Kiểu gõ (Input Method)', 'Bảng mã (Character Encoding)'],
          rows: [
            ['Bản chất', 'Quy ước các phím bấm để tạo nên chữ tiếng Việt có dấu', 'Hệ thống số hóa ánh xạ kí tự sang dãy bit nhị phân'],
            ['Các loại phổ biến', 'Telex (gõ phím lặp aa, oo, ee; s, f, r, x, j) và VNI (dùng phím số 1, 2, 3...)', 'Unicode (chuẩn toàn cầu), TCVN3 (chuẩn cũ Hà Nội), VNI-Windows'],
            ['Phông chữ đi kèm', 'Không phụ thuộc vào phông chữ (kiểu gõ nào cũng tạo ra mã)', 'Bảng mã nào bắt buộc phải dùng đúng họ phông chữ tương ứng'],
          ],
        },
      },
      {
        id: 'b3-s8',
        slideNumber: 8,
        type: 'practice',
        title: 'LUYỆN TẬP: TRẮC NGHIỆM VỀ BẢNG MÃ & KIỂU DỮ LIỆU',
        subtitle: 'Kiểm tra nhanh kiến thức Bài 3 theo chuẩn SGK trang 18',
        quiz: {
          question: 'Vì sao bảng mã Unicode (UTF-8) hiện nay đã thay thế hoàn toàn bảng mã ASCII mở rộng trong việc trao đổi dữ liệu toàn cầu?',
          options: [
            'A. Vì Unicode có dung lượng hàng triệu kí tự, mã hóa trọn vẹn mọi ngôn ngữ thế giới bao gồm tiếng Việt',
            'B. Vì bảng mã ASCII chỉ chạy được trên máy tính của Mỹ, không cài được ở Việt Nam',
            'C. Vì bảng mã ASCII làm hỏng ổ cứng máy tính',
            'D. Vì bảng mã Unicode chỉ có 128 kí tự nên nạp vào bộ nhớ nhanh hơn',
          ],
          answer: 'A. Vì Unicode có dung lượng hàng triệu kí tự, mã hóa trọn vẹn mọi ngôn ngữ thế giới bao gồm tiếng Việt',
          explanation: 'ASCII mở rộng chỉ có 256 kí tự (1 byte), không đủ dung lượng cho các ngôn ngữ tượng hình hoặc có nhiều dấu như tiếng Việt, tiếng Trung, tiếng Nhật. Unicode giải quyết triệt để vấn đề này.',
        },
      },
      {
        id: 'b3-s9',
        slideNumber: 9,
        type: 'apply',
        title: 'VẬN DỤNG: GIẢI CỨU TÀI LIỆU BỊ LỖI PHÔNG CHỮ',
        subtitle: 'Xử lí tình huống thực tế khi mở văn bản cũ thời kì 2000-2010',
        situation: {
          context: 'Em tải một bài văn mẫu trên mạng về, khi mở bằng Microsoft Word thì toàn bộ chữ tiếng Việt bị biến thành các kí tự kì dị như: "Céng hoµ x· héi chñ nghÜa ViÖt Nam".',
          question: 'Em hãy xác định nguyên nhân và nêu giải pháp phục hồi văn bản?',
          options: [
            {
              label: 'Nguyên nhân',
              action: 'Văn bản cũ soạn thảo bằng bảng mã TCVN3 (phông .VnTime) nhưng máy tính hiện nay đang hiển thị bằng phông Unicode',
              consequence: 'Bảng mã nguồn và bảng mã đích lệch nhau dẫn đến hiển thị sai vị trí kí tự.',
              isRecommended: true,
            },
            {
              label: 'Cách khắc phục',
              action: 'Sử dụng công cụ chuyển mã UniKey Toolkit (Ctrl + Shift + F6) để chuyển mã từ TCVN3 sang Unicode',
              consequence: 'Toàn bộ văn bản phục hồi tiếng Việt chuẩn chỉ trong 3 giây mà không cần gõ lại từ đầu.',
              isRecommended: true,
            },
          ],
        },
      },
      {
        id: 'b3-s10',
        slideNumber: 10,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 3',
        subtitle: 'Sơ đồ tư duy cốt lõi về Kiểu dữ liệu & Dữ liệu văn bản',
        mindmap: {
          center: 'KIỂU DỮ LIỆU & DỮ LIỆU VĂN BẢN',
          centerSubtitle: 'SGK Tin học 10 (Trang 16-19)',
          branches: [
            {
              title: '4 Kiểu dữ liệu',
              subItems: ['Văn bản (Text)', 'Số nguyên & Số thực', 'Lôgic (True/False)', 'Đa phương tiện'],
            },
            {
              title: 'Bảng mã ASCII',
              subItems: ['Chuẩn 7-bit (128 kí tự)', 'Mở rộng 8-bit (256 kí tự)', 'Chỉ dùng cho tiếng Anh'],
            },
            {
              title: 'Bảng mã Unicode',
              subItems: ['Hơn 1.1 triệu vị trí', 'Chuẩn toàn cầu UTF-8', 'Bắt buộc TCVN 6909:2001'],
            },
            {
              title: 'Gõ tiếng Việt',
              subItems: ['Kiểu gõ: Telex / VNI', 'Bảng mã: Unicode dựng sẵn', 'Phông chữ chuẩn: Arial, Time...'],
            },
          ],
        },
      },
    ],
  },

  // ==========================================
  // BÀI 4: HỆ NHỊ PHÂN VÀ DỮ LIỆU SỐ NGUYÊN (10 SLIDES)
  // ==========================================
  {
    id: 'bai-4',
    number: 4,
    title: 'Bài 4. Hệ nhị phân và dữ liệu số nguyên',
    shortTitle: 'Bài 4: Hệ nhị phân & Số nguyên',
    chapterId: 'chu-de-1',
    pageStart: 20,
    pageEnd: 23,
    slides: [
      {
        id: 'b4-s1',
        slideNumber: 1,
        type: 'title',
        title: 'HỆ NHỊ PHÂN VÀ DỮ LIỆU SỐ NGUYÊN',
        subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Khái niệm hệ đếm cơ số 2 (Hệ nhị phân) và biểu diễn số nguyên' },
          { text: 'Kĩ năng chuyển đổi hai chiều giữa hệ thập phân (10) và hệ nhị phân (2)' },
          { text: 'Quy tắc cộng và nhân hai số nhị phân trong bộ tính toán ALU' },
          { text: 'Ứng dụng của hệ nhị phân trong thiết kế phần cứng vi mạch máy tính' },
        ],
        badge: 'Chưa có KHBD tương ứng • Chuẩn SGK',
      },
      {
        id: 'b4-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: TẠI SAO MÁY TÍNH DÙNG HỆ NHỊ PHÂN?',
        subtitle: 'Tìm hiểu nguồn gốc phần cứng của hai chữ số 0 và 1 (SGK trang 20)',
        lead: 'Con người dùng hệ thập phân (0-9) vì có 10 ngón tay. Nhưng máy tính chỉ dùng hệ nhị phân:',
        cardsGrid: [
          {
            title: '1. Dễ chế tạo vật lí',
            desc: 'Thiết bị bán dẫn (Transistor) chỉ cần phân biệt 2 mức điện áp: Có điện (1) hoặc Mất điện (0).',
            tag: 'Phần cứng',
            points: ['Không bị nhầm lẫn tín hiệu', 'Độ tin cậy gần như tuyệt đối'],
          },
          {
            title: '2. Chống nhiễu cực tốt',
            desc: 'Điện áp dù có dao động nhẹ thì mạch điện vẫn nhận biết chính xác là 0 hay 1.',
            tag: 'Chống nhiễu',
            points: ['Không sợ méo tín hiệu', 'Truyền xa an toàn'],
          },
          {
            title: '3. Khớp với đại số Boole',
            desc: 'Hệ nhị phân khớp hoàn hảo với 2 giá trị Đúng (1) / Sai (0) của logic toán học.',
            tag: 'Đại số Boole',
            points: ['Thực hiện phép tính logic', 'Thiết kế mạch điều khiển'],
          },
        ],
      },
      {
        id: 'b4-s3',
        slideNumber: 3,
        type: 'content',
        title: 'HỆ ĐẾM CƠ SỐ 2 VÀ TRỌNG SỐ VỊ TRÍ',
        subtitle: 'Mỗi chữ số ở vị trí k (tính từ 0 từ phải sang trái) có trọng số bằng 2^k',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: 'VÍ DỤ',
              title: 'Phân tích số 1011₂',
              desc: '1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀',
              tag: '1011₂ = 11₁₀',
            },
            {
              stepNumber: 'QUY TẮC',
              title: 'Cơ số 2',
              desc: 'Chỉ gồm 2 chữ số {0, 1}. Khi cộng vượt quá 1 thì ghi 0 và nhớ 1 sang hàng kế tiếp.',
              tag: 'Base 2',
            },
            {
              stepNumber: 'DÃY LŨY THỪA',
              title: 'Trọng số quen thuộc',
              desc: 'Các vị trí có giá trị lần lượt: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...',
              tag: '2^k weights',
            },
          ],
        },
      },
      {
        id: 'b4-s4',
        slideNumber: 4,
        type: 'diagram',
        title: 'TRỰC QUAN THANH GHI 8-BIT & BỘ TÍNH TOÁN ALU',
        subtitle: 'Mô phỏng cách bộ vi xử lí CPU lưu trữ và biểu diễn số nhị phân trong mạch số',
        svgType: 'binary-alu',
      },
      {
        id: 'b4-s5',
        slideNumber: 5,
        type: 'process',
        title: 'THUẬT TOÁN ĐỔI THẬP PHÂN SANG NHỊ PHÂN',
        subtitle: 'Phương pháp chia liên tiếp cho 2 và lấy phần dư theo thứ tự ngược',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: 'BƯỚC 1',
              title: 'Chia liên tiếp cho 2',
              desc: 'Lấy số thập phân chia cho 2, ghi lại phần thương và phần dư (chỉ có thể là 0 hoặc 1).',
              tag: 'Phép chia',
            },
            {
              stepNumber: 'BƯỚC 2',
              title: 'Lặp lại đến thương = 0',
              desc: 'Tiếp tục lấy phần thương chia cho 2 cho đến khi phần thương bằng 0 thì dừng lại.',
              tag: 'Vòng lặp',
            },
            {
              stepNumber: 'BƯỚC 3',
              title: 'Đọc ngược phần dư',
              desc: 'Viết các số dư thu được theo thứ tự ngược từ dưới lên trên (từ số dư cuối cùng đến số dư đầu tiên).',
              tag: 'Kết quả',
            },
          ],
        },
        highlightBox: {
          type: 'tip',
          title: 'VÍ DỤ ĐỔI SỐ 13₁₀ SANG NHỊ PHÂN',
          content: '13:2 = 6 dư 1; 6:2 = 3 dư 0; 3:2 = 1 dư 1; 1:2 = 0 dư 1. Đọc ngược từ dưới lên: 1101₂.',
        },
      },
      {
        id: 'b4-s6',
        slideNumber: 6,
        type: 'table',
        title: 'QUY TẮC PHÉP CỘNG VÀ NHÂN NHỊ PHÂN',
        subtitle: 'Nguyên lí số học nhị phân thực thi trong bộ vi xử lí (SGK Trang 22)',
        tableData: {
          caption: 'Bảng quy tắc tính toán nhị phân cơ bản',
          headers: ['Phép toán', 'Kết quả nhị phân', 'Quy tắc ghi nhớ'],
          rows: [
            ['0 + 0', '0', 'Không có nhớ'],
            ['0 + 1', '1', 'Không có nhớ'],
            ['1 + 0', '1', 'Không có nhớ'],
            ['1 + 1', '10 (ghi 0 nhớ 1)', 'Tương đương 5+5=10 trong hệ thập phân'],
            ['1 + 1 + 1 (có nhớ)', '11 (ghi 1 nhớ 1)', 'Ghi 1 và tiếp tục nhớ 1 sang hàng bên trái'],
            ['0 × 1', '0', 'Nhân với 0 luôn bằng 0'],
            ['1 × 1', '1', 'Chỉ bằng 1 khi cả hai thừa số là 1'],
          ],
        },
      },
      {
        id: 'b4-s7',
        slideNumber: 7,
        type: 'content',
        title: 'BIỂU DIỄN SỐ NGUYÊN CÓ DẤU: SỐ BÙ 2',
        subtitle: 'Cách máy tính biểu diễn số âm bằng mạch cộng nhị phân (SGK Trang 23)',
        compareColumns: {
          left: {
            title: 'Số nguyên không dấu',
            subtitle: 'Chỉ biểu diễn số dương và số 0',
            badge: 'Unsigned',
            points: [
              'Với thanh ghi 8 bit: biểu diễn được từ 0 đến 255 (2⁸ - 1)',
              'Với thanh ghi 16 bit: biểu diễn được từ 0 đến 65 535',
              'Toàn bộ 8 bit đều được dùng để chứa độ lớn của số',
            ],
          },
          right: {
            title: 'Số nguyên có dấu (Mã bù 2)',
            subtitle: 'Biểu diễn cả số âm và số dương',
            badge: 'Signed (Bù 2)',
            points: [
              'Bit ngoài cùng bên trái là bit dấu: 0 biểu thị số dương, 1 biểu thị số âm',
              'Số bù 2 của một số = Đảo tất cả các bit (0 <-> 1) rồi cộng thêm 1',
              'Ưu điểm vượt trội: Biến phép trừ (A - B) thành phép cộng (A + Bù 2 của B), không cần thiết kế mạch trừ riêng!',
            ],
          },
        },
      },
      {
        id: 'b4-s8',
        slideNumber: 8,
        type: 'practice',
        title: 'LUYỆN TẬP: TÍNH TOÁN VÀ ĐỔI HỆ ĐẾM',
        subtitle: 'Thực hành tính toán số học nhị phân theo SGK trang 23',
        quiz: {
          question: 'Thực hiện phép cộng hai số nhị phân: 1011₂ + 0101₂. Kết quả thu được là bao nhiêu?',
          options: [
            'A. 10000₂ (tương ứng 16 trong hệ thập phân)',
            'B. 1111₂',
            'C. 10010₂',
            'D. 1100₂',
          ],
          answer: 'A. 10000₂ (11 + 5 = 16₁₀ = 10000₂)',
          explanation: 'Đổi sang thập phân: 1011₂ = 11₁₀, 0101₂ = 5₁₀. Phép cộng: 11 + 5 = 16₁₀. Đổi 16 sang nhị phân ta được 10000₂.',
        },
      },
      {
        id: 'b4-s9',
        slideNumber: 9,
        type: 'apply',
        title: 'VẬN DỤNG: Ý NGHĨA HỆ ĐIỀU HÀNH 32-BIT VÀ 64-BIT',
        subtitle: 'Tại sao máy tính hiện đại đều chuyển dịch hoàn toàn sang kiến trúc 64-bit?',
        cardsGrid: [
          {
            title: 'Kiến trúc 32-bit (x86)',
            desc: 'Độ dài thanh ghi địa chỉ 32 bit, quản lí tối đa 2³² byte = 4 GB RAM.',
            tag: 'Giới hạn 4 GB',
            points: ['Cắm 16 GB RAM thì máy cũng chỉ nhận tối đa 3.5 - 4 GB', 'Không đáp ứng được các phần mềm đồ họa, game hiện đại'],
          },
          {
            title: 'Kiến trúc 64-bit (x64)',
            desc: 'Độ dài thanh ghi 64 bit, quản lí tối đa 2⁶⁴ byte = 16 tỉ Gigabyte (16 EB) RAM.',
            tag: 'Khổng lồ',
            points: ['Mở rộng bộ nhớ không giới hạn', 'Xử lí lượng dữ liệu gấp đôi trong cùng một xung nhịp CPU'],
          },
        ],
      },
      {
        id: 'b4-s10',
        slideNumber: 10,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 4',
        subtitle: 'Sơ đồ tư duy cốt lõi về Hệ nhị phân & Dữ liệu số nguyên',
        mindmap: {
          center: 'HỆ NHỊ PHÂN & SỐ NGUYÊN',
          centerSubtitle: 'SGK Tin học 10 (Trang 20-23)',
          branches: [
            {
              title: 'Bản chất hệ 2',
              subItems: ['Chỉ gồm 2 kí tự {0, 1}', 'Trọng số vị trí 2^k', 'Tối ưu cho mạch bán dẫn'],
            },
            {
              title: 'Chuyển đổi hệ đếm',
              subItems: ['10 -> 2: Chia liên tiếp cho 2', '2 -> 10: Nhân tổng các lũy thừa 2', 'Bảng trọng số: 1, 2, 4, 8, 16...'],
            },
            {
              title: 'Phép toán số học',
              subItems: ['Cộng: 1 + 1 = 10 (nhớ 1)', 'Nhân: Giống hệ thập phân', 'Số âm: Dùng mã bù 2'],
            },
            {
              title: 'Ứng dụng kiến trúc',
              subItems: ['Thanh ghi 32-bit / 64-bit', 'Quản lí không gian bộ nhớ RAM', 'Bộ tính toán ALU trong CPU'],
            },
          ],
        },
      },
    ],
  },

  // ==========================================
  // BÀI 5: DỮ LIỆU LÔGIC (9 SLIDES)
  // ==========================================
  {
    id: 'bai-5',
    number: 5,
    title: 'Bài 5. Dữ liệu lôgic',
    shortTitle: 'Bài 5: Dữ liệu lôgic',
    chapterId: 'chu-de-1',
    pageStart: 24,
    pageEnd: 27,
    slides: [
      {
        id: 'b5-s1',
        slideNumber: 1,
        type: 'title',
        title: 'DỮ LIỆU LÔGIC TRONG MÁY TÍNH',
        subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Khái niệm mệnh đề và hai giá trị chân lí: Đúng (True / 1) và Sai (False / 0)' },
          { text: 'Các phép toán lôgic cơ bản: AND (VÀ), OR (HOẶC), NOT (ĐẢO), XOR' },
          { text: 'Bảng chân trị và ứng dụng trong thiết kế mạch cổng logic' },
          { text: 'Mối liên hệ giữa đại số Boole và câu lệnh điều kiện trong lập trình Python' },
        ],
        badge: 'Chưa có KHBD tương ứng • Chuẩn SGK',
      },
      {
        id: 'b5-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: THẾ NÀO LÀ MỘT MỆNH ĐỀ LÔGIC?',
        subtitle: 'Nhận diện phát biểu có giá trị chân lí khách quan (SGK trang 24)',
        lead: 'Trong cuộc sống có rất nhiều câu nói, nhưng máy tính chỉ quan tâm đến câu khẳng định có tính Đúng/Sai rõ ràng:',
        cardsGrid: [
          {
            title: 'Mệnh đề ĐÚNG (True / 1)',
            desc: '"Hà Nội là thủ đô của Việt Nam" hoặc "2 + 3 = 5"',
            tag: 'True = 1',
            points: ['Mang giá trị chân lí 1 trong máy tính', 'Không phụ thuộc cảm xúc người nói'],
          },
          {
            title: 'Mệnh đề SAI (False / 0)',
            desc: '"Mặt trời mọc ở hướng Tây" hoặc "7 < 4"',
            tag: 'False = 0',
            points: ['Mang giá trị chân lí 0 trong máy tính', 'Hoàn toàn xác định được tính sai'],
          },
          {
            title: 'KHÔNG phải mệnh đề',
            desc: '"Hôm nay trời đẹp quá!" hoặc "Mấy giờ rồi?"',
            tag: 'Câu hỏi / Cảm thán',
            points: ['Không có giá trị Đúng hay Sai', 'Máy tính không thể tính toán logic trực tiếp'],
          },
        ],
      },
      {
        id: 'b5-s3',
        slideNumber: 3,
        type: 'diagram',
        title: 'CÁC CỔNG LÔGIC CƠ BẢN TRONG VI MẠCH MÁY TÍNH',
        subtitle: 'Mô hình vật lí hóa các phép toán logic bằng cổng bán dẫn (Logic Gates)',
        svgType: 'logic-gates',
      },
      {
        id: 'b5-s4',
        slideNumber: 4,
        type: 'table',
        title: 'BẢNG CHÂN TRỊ CÁC PHÉP TOÁN LÔGIC',
        subtitle: 'Bảng 5.2 SGK Trang 25 - Nền tảng của cấu trúc rẽ nhánh if...else',
        tableData: {
          caption: 'Bảng chân trị AND, OR, XOR, NOT cho hai biến logic p và q',
          headers: ['Biến p', 'Biến q', 'p AND q (VÀ)', 'p OR q (HOẶC)', 'p XOR q (LOẠI TRỪ)', 'NOT p (ĐẢO)'],
          rows: [
            ['1 (Đúng)', '1 (Đúng)', '1 (Đúng)', '1 (Đúng)', '0 (Sai)', '0 (Sai)'],
            ['1 (Đúng)', '0 (Sai)', '0 (Sai)', '1 (Đúng)', '1 (Đúng)', '0 (Sai)'],
            ['0 (Sai)', '1 (Đúng)', '0 (Sai)', '1 (Đúng)', '1 (Đúng)', '1 (Đúng)'],
            ['0 (Sai)', '0 (Sai)', '0 (Sai)', '0 (Sai)', '0 (Sai)', '1 (Đúng)'],
          ],
        },
        highlightBox: {
          type: 'remember',
          title: 'GHI NHỚ NHANH',
          content: 'AND chỉ đúng khi TẤT CẢ đều đúng • OR chỉ sai khi TẤT CẢ đều sai • XOR đúng khi HAI BÊN KHÁC NHAU • NOT đảo ngược giá trị.',
        },
      },
      {
        id: 'b5-s5',
        slideNumber: 5,
        type: 'content',
        title: 'ĐẠI SỐ BOOLE VÀ ĐIỀU KIỆN RẼ NHÁNH TRONG LẬP TRÌNH',
        subtitle: 'Cách ngôn ngữ lập trình (Python) chuyển logic toán thành quyết định của máy tính',
        compareColumns: {
          left: {
            title: 'Toán học logic (Boole)',
            subtitle: 'Kí hiệu toán học',
            badge: 'Toán học',
            points: [
              'Biểu diễn: p ∧ q (AND), p ∨ q (OR), ¬ p (NOT)',
              'Bảng chân trị xác định tính đúng sai tuyệt đối',
              'Dùng thiết kế sơ đồ mạch điện tử cổng logic',
            ],
          },
          right: {
            title: 'Lập trình Python',
            subtitle: 'Từ khóa ngôn ngữ',
            badge: 'Lập trình',
            points: [
              'Dùng từ khóa tiếng Anh: and, or, not',
              'Ví dụ: if (diem >= 8.0) and (hanh_kiem == "Tot"): -> Học sinh giỏi',
              'Là linh hồn để máy tính đưa ra quyết định tự động trong mọi phần mềm!',
            ],
          },
        },
      },
      {
        id: 'b5-s6',
        slideNumber: 6,
        type: 'practice',
        title: 'THỰC HÀNH TÍNH GIÁ TRỊ BIỂU THỨC LÔGIC PHỨC HỢP',
        subtitle: 'Quy tắc thứ tự thực hiện: NOT ưu tiên trước -> đến AND -> cuối cùng là OR',
        bullets: [
          {
            title: 'Bài toán 1:',
            text: 'Cho p = 1, q = 0. Tính: (NOT p) OR q.',
            subtext: 'Giải: NOT 1 = 0 -> 0 OR 0 = 0 (Sai).',
            badge: 'Cơ bản',
          },
          {
            title: 'Bài toán 2:',
            text: 'Cho p = 1, q = 0, r = 1. Tính: (p AND q) OR (NOT r).',
            subtext: 'Giải: (1 AND 0) = 0; NOT 1 = 0 -> 0 OR 0 = 0 (Sai).',
            badge: '3 biến',
          },
          {
            title: 'Bài toán 3:',
            text: 'Cho p = 0, q = 1, r = 0. Tính: p OR (q AND (NOT r)).',
            subtext: 'Giải: NOT 0 = 1 -> 1 AND 1 = 1 -> 0 OR 1 = 1 (Đúng).',
            badge: 'Phức hợp',
          },
        ],
      },
      {
        id: 'b5-s7',
        slideNumber: 7,
        type: 'practice',
        title: 'LUYỆN TẬP: TRẮC NGHIỆM ĐẠI SỐ LÔGIC',
        subtitle: 'Kiểm tra kiến thức cốt lõi Bài 5',
        quiz: {
          question: 'Biểu thức logic nào sau đây luôn có giá trị ĐÚNG (True / 1) với mọi giá trị của mệnh đề p?',
          options: [
            'A. p OR (NOT p)',
            'B. p AND (NOT p)',
            'C. p AND p',
            'D. NOT (p OR p)',
          ],
          answer: 'A. p OR (NOT p)',
          explanation: 'Nếu p = 1 thì NOT p = 0 -> 1 OR 0 = 1. Nếu p = 0 thì NOT p = 1 -> 0 OR 1 = 1. Do đó p OR (NOT p) luôn luôn nhận giá trị 1 (Luật triệt tam trong đại số Boole).',
        },
      },
      {
        id: 'b5-s8',
        slideNumber: 8,
        type: 'apply',
        title: 'VẬN DỤNG: TÌM KIẾM NÂNG CAO TRÊN GOOGLE BẰNG TOÁN TỬ LOGIC',
        subtitle: 'Ứng dụng trực tiếp của AND, OR, NOT trong kĩ năng tra cứu thông tin số',
        cardsGrid: [
          {
            title: 'Toán tử AND (Mặc định)',
            desc: 'Gõ: "Tin học 10 Kết nối tri thức". Google sẽ tìm các trang web có CHỨA ĐỦ tất cả các từ.',
            tag: 'Giao tập hợp',
            points: ['Thu hẹp phạm vi tìm kiếm', 'Tăng độ chính xác kết quả'],
          },
          {
            title: 'Toán tử OR (Hoặc)',
            desc: 'Gõ: "Python OR C++ lập trình". Google sẽ hiển thị trang web chứa MỘT TRONG HAI ngôn ngữ.',
            tag: 'Hợp tập hợp',
            points: ['Mở rộng phạm vi tìm kiếm', 'Tìm các khái niệm tương đương'],
          },
          {
            title: 'Toán tử NOT (Dấu trừ -)',
            desc: 'Gõ: "virus -corona". Google tìm kiếm về virus máy tính và LOẠI BỎ mọi bài viết về dịch bệnh Covid.',
            tag: 'Loại trừ',
            points: ['Lọc sạch dữ liệu rác', 'Tiết kiệm thời gian tra cứu'],
          },
        ],
      },
      {
        id: 'b5-s9',
        slideNumber: 9,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 5',
        subtitle: 'Sơ đồ tư duy cốt lõi về Dữ liệu lôgic',
        mindmap: {
          center: 'DỮ LIỆU LÔGIC',
          centerSubtitle: 'SGK Tin học 10 (Trang 24-27)',
          branches: [
            {
              title: 'Mệnh đề logic',
              subItems: ['Chỉ nhận 2 giá trị', '1 (True / Đúng)', '0 (False / Sai)'],
            },
            {
              title: '4 Phép toán cơ bản',
              subItems: ['AND (VÀ): Tất cả đúng', 'OR (HOẶC): Có ít nhất 1 đúng', 'NOT (ĐẢO): Đảo ngược', 'XOR: Khác nhau thì đúng'],
            },
            {
              title: 'Mạch phần cứng',
              subItems: ['Cổng logic bán dẫn', 'Mạch cộng ALU', 'Mạch nhớ Flip-Flop'],
            },
            {
              title: 'Lập trình',
              subItems: ['Câu lệnh if...else', 'Vòng lặp while', 'Tìm kiếm Google nâng cao'],
            },
          ],
        },
      },
    ],
  },

  // ==========================================
  // BÀI 6: DỮ LIỆU ÂM THANH VÀ HÌNH ẢNH (10 SLIDES)
  // ==========================================
  {
    id: 'bai-6',
    number: 6,
    title: 'Bài 6. Dữ liệu âm thanh và hình ảnh',
    shortTitle: 'Bài 6: Âm thanh & Hình ảnh',
    chapterId: 'chu-de-1',
    pageStart: 28,
    pageEnd: 32,
    slides: [
      {
        id: 'b6-s1',
        slideNumber: 1,
        type: 'title',
        title: 'DỮ LIỆU ÂM THANH VÀ HÌNH ẢNH',
        subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Nguyên lí số hóa âm thanh: Lấy mẫu sóng âm, tần số lấy mẫu và bit-rate' },
          { text: 'Phân biệt nén âm thanh có mất mát (MP3) và không mất mát (WAV, FLAC)' },
          { text: 'Biểu diễn hình ảnh số hóa: Ma trận điểm ảnh (Pixel), Độ sâu màu, Hệ RGB' },
          { text: 'So sánh các định dạng tệp ảnh thông dụng: BMP, JPEG, PNG' },
        ],
        badge: 'Chưa có KHBD tương ứng • Chuẩn SGK',
      },
      {
        id: 'b6-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: THẾ GIỚI TƯƠNG TỰ (ANALOG) VÀ SỐ HÓA (DIGITAL)',
        subtitle: 'Làm thế nào để đưa sóng âm thanh và ánh sáng thực tế vào máy tính?',
        lead: 'Thế giới tự nhiên là liên tục (Analog), còn máy tính chỉ lưu trữ rời rạc (Digital 0 và 1):',
        compareColumns: {
          left: {
            title: 'Tín hiệu Tương tự (Analog)',
            subtitle: 'Âm thanh, ánh sáng tự nhiên',
            badge: 'Tự nhiên',
            points: [
              'Tín hiệu biến thiên liên tục theo thời gian',
              'Ví dụ: Sóng âm từ dây đàn ghita, tiếng nói ngoài đời thực, ánh sáng mặt trời',
              'Nhược điểm: Dễ bị suy hao và nhiễu khi truyền xa, khó lưu trữ lâu dài',
            ],
          },
          right: {
            title: 'Tín hiệu Số (Digital)',
            subtitle: 'Máy tính xử lí',
            badge: 'Kĩ thuật số',
            points: [
              'Tín hiệu được lấy mẫu và chuyển thành các dãy số nhị phân 0 và 1',
              'Ví dụ: Tệp âm thanh MP3, ảnh chụp điện thoại JPEG, video YouTube',
              'Ưu điểm: Sao chép triệu bản như một, không giảm chất lượng, chỉnh sửa dễ dàng',
            ],
          },
        },
      },
      {
        id: 'b6-s3',
        slideNumber: 3,
        type: 'process',
        title: 'NGUYÊN LÍ SỐ HÓA ÂM THANH: LẤY MẪU (SAMPLING)',
        subtitle: 'Chu trình chuyển sóng âm thanh liên tục thành chuỗi bit nhị phân (SGK Trang 28)',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: '1',
              title: 'Lấy mẫu (Sampling)',
              desc: 'Đo biên độ sóng âm theo các khoảng thời gian đều đặn (tần số lấy mẫu, vd: 44.1 kHz cho chuẩn đĩa CD).',
              tag: 'Tần số lấy mẫu',
            },
            {
              stepNumber: '2',
              title: 'Lượng tử hóa (Quantizing)',
              desc: 'Làm tròn giá trị biên độ đo được về mức số gần nhất theo thang đo bit (vd: 16 bit hoặc 24 bit).',
              tag: 'Độ sâu bit',
            },
            {
              stepNumber: '3',
              title: 'Mã hóa nhị phân',
              desc: 'Chuyển các giá trị số lượng tử thành chuỗi bit 0 và 1 lưu trữ vào tệp âm thanh số.',
              tag: 'Digital Audio',
            },
          ],
        },
      },
      {
        id: 'b6-s4',
        slideNumber: 4,
        type: 'content',
        title: 'CÁC ĐỊNH DẠNG ÂM THANH SỐ THÔNG DỤNG',
        subtitle: 'So sánh nén có mất mát (Lossy) và nén không mất mát (Lossless)',
        cardsGrid: [
          {
            title: 'WAV (Không nén)',
            desc: 'Lưu trọn vẹn từng mẫu âm thanh gốc từ phòng thu âm.',
            tag: 'Studio Master',
            points: ['Chất lượng hoàn hảo 100%', 'Dung lượng rất nặng (~50 MB cho bài hát 4 phút)'],
          },
          {
            title: 'FLAC (Nén không mất mát)',
            desc: 'Nén bằng thuật toán giống tệp ZIP, giải nén không suy giảm chất lượng.',
            tag: 'Audiophile',
            points: ['Giảm 40-50% dung lượng so với WAV', 'Dành cho người nghe nhạc cao cấp'],
          },
          {
            title: 'MP3 (Nén có mất mát)',
            desc: 'Loại bỏ các dải tần số tai người bình thường không nghe thấy.',
            tag: 'Phổ thông / Internet',
            points: ['Dung lượng siêu nhẹ (chỉ ~4-8 MB/bài)', 'Chia sẻ và tải trên mạng cực nhanh'],
          },
        ],
      },
      {
        id: 'b6-s5',
        slideNumber: 5,
        type: 'diagram',
        title: 'NGUYÊN LÍ SỐ HÓA HÌNH ẢNH: HỆ MÀU RGB 24-BIT',
        subtitle: 'Ma trận điểm ảnh (Pixel) và sự phối màu quang học (SGK Trang 30)',
        svgType: 'rgb-pixels',
      },
      {
        id: 'b6-s6',
        slideNumber: 6,
        type: 'table',
        title: 'SO SÁNH 3 ĐỊNH DẠNG HÌNH ẢNH PHỔ BIẾN NHẤT',
        subtitle: 'Bảng 6.1 SGK Trang 31 - Lựa chọn định dạng đúng mục đích sử dụng',
        tableData: {
          caption: 'So sánh định dạng ảnh BMP, JPEG và PNG',
          headers: ['Định dạng', 'Thuật toán nén', 'Đặc điểm then chốt', 'Ứng dụng tối ưu'],
          rows: [
            ['BMP (Bitmap)', 'Không nén', 'Giữ nguyên giá trị màu của từng pixel, dung lượng cực lớn', 'Lưu trữ bản gốc máy quét, đồ họa y tế'],
            ['JPEG (.jpg)', 'Nén có mất mát', 'Dung lượng rất nhẹ, cho phép chọn mức nén, không hỗ trợ nền trong suốt', 'Ảnh chụp thực tế phong cảnh, con người, chia sẻ mạng'],
            ['PNG (.png)', 'Nén không mất mát', 'Hỗ trợ nền trong suốt (Alpha channel), giữ chữ viết và nét vẽ sắc nét', 'Logo, biểu tượng icon, ảnh chụp màn hình máy tính'],
          ],
        },
      },
      {
        id: 'b6-s7',
        slideNumber: 7,
        type: 'process',
        title: 'CÔNG THỨC TÍNH DUNG LƯỢNG TỆP ẢNH SỐ HÓA',
        subtitle: 'Dung lượng (Byte) = Chiều rộng × Chiều cao × (Độ sâu màu / 8)',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: 'BƯỚC 1',
              title: 'Tính tổng số pixel',
              desc: 'Ví dụ ảnh Full HD: 1920 pixel (rộng) × 1080 pixel (cao) = 2 073 600 pixel (~2 Megapixel).',
              tag: 'Số Pixel',
            },
            {
              stepNumber: 'BƯỚC 2',
              title: 'Nhân với độ sâu màu',
              desc: 'Hệ màu RGB 24 bit tương ứng mỗi pixel chiếm 3 Byte bộ nhớ (24 bit / 8 = 3 Byte).',
              tag: 'Byte / Pixel',
            },
            {
              stepNumber: 'BƯỚC 3',
              title: 'Đổi ra MB',
              desc: '2 073 600 × 3 = 6 220 800 Byte ≈ 5.93 MB (nếu lưu ở dạng ảnh BMP chưa nén).',
              tag: 'Dung lượng gốc',
            },
          ],
        },
        highlightBox: {
          type: 'note',
          title: 'Ý NGHĨA CỦA NÉN JPEG',
          content: 'Cũng bức ảnh 5.93 MB trên, khi nén JPEG chỉ còn khoảng 500 KB - 1 MB (nhẹ hơn 6 - 10 lần), giúp trang web tải tức thì!',
        },
      },
      {
        id: 'b6-s8',
        slideNumber: 8,
        type: 'practice',
        title: 'LUYỆN TẬP: TRẮC NGHIỆM SỐ HÓA HÌNH ẢNH & ÂM THANH',
        subtitle: 'Củng cố kiến thức Bài 6 theo chuẩn SGK trang 31',
        quiz: {
          question: 'Khi thiết kế một logo cho trang web trường học và cần xuất ảnh có phần nền trong suốt để đặt lên banner màu nào cũng đẹp, em nên chọn định dạng tệp nào?',
          options: [
            'A. PNG (.png) vì hỗ trợ kênh màu trong suốt (Alpha channel) và nén không mất nét vẽ',
            'B. JPEG (.jpg) vì dung lượng nhẹ nhất',
            'C. BMP (.bmp) vì chất lượng gốc',
            'D. MP3 (.mp3)',
          ],
          answer: 'A. PNG (.png) vì hỗ trợ kênh màu trong suốt (Alpha channel) và nén không mất nét vẽ',
          explanation: 'Định dạng JPEG không hỗ trợ độ trong suốt (nền luôn bị biến thành màu trắng); định dạng BMP quá nặng. Chỉ có PNG vừa hỗ trợ nền trong suốt vừa giữ nét đồ họa phẳng sắc nét.',
        },
      },
      {
        id: 'b6-s9',
        slideNumber: 9,
        type: 'apply',
        title: 'VẬN DỤNG: TỐI ƯU HÓA ĐA PHƯƠNG TIỆN KHI LÀM BÀI THUYẾT TRÌNH',
        subtitle: 'Kĩ năng thực tế của học sinh khi chèn âm thanh và hình ảnh vào PowerPoint/Canva',
        situation: {
          context: 'Nhóm của em làm bài thuyết trình có chèn 20 bức ảnh chụp điện thoại (mỗi ảnh gốc nặng 15 MB) và 1 bài hát WAV nặng 60 MB. Tệp bài thuyết trình phình to lên hơn 360 MB, không thể gửi qua email hay Zalo!',
          question: 'Em áp dụng kiến thức Bài 6 để tối ưu tệp như thế nào?',
          options: [
            {
              label: 'Xử lí hình ảnh',
              action: 'Nén ảnh hoặc xuất sang định dạng JPEG với kích thước vừa đủ chiếu màn hình (1920x1080)',
              consequence: 'Dung lượng 20 bức ảnh giảm từ 300 MB xuống còn dưới 15 MB mà mắt thường nhìn trên máy chiếu không hề thấy giảm chất lượng.',
              isRecommended: true,
            },
            {
              label: 'Xử lí âm thanh',
              action: 'Chuyển đổi tệp nhạc từ định dạng WAV sang định dạng MP3 (128 - 192 kbps)',
              consequence: 'Dung lượng tệp nhạc giảm từ 60 MB xuống còn 4 MB, gửi bài qua Zalo/Email trong 2 giây!',
              isRecommended: true,
            },
          ],
        },
      },
      {
        id: 'b6-s10',
        slideNumber: 10,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 6',
        subtitle: 'Sơ đồ tư duy cốt lõi về Dữ liệu âm thanh & hình ảnh',
        mindmap: {
          center: 'SỐ HÓA ÂM THANH & HÌNH ẢNH',
          centerSubtitle: 'SGK Tin học 10 (Trang 28-32)',
          branches: [
            {
              title: 'Số hóa âm thanh',
              subItems: ['Lấy mẫu sóng âm (Sampling)', 'Lượng tử hóa biên độ', 'Định dạng: WAV, MP3, FLAC'],
            },
            {
              title: 'Hệ màu RGB',
              subItems: ['3 Kênh: Red, Green, Blue', 'Mỗi kênh 8 bit (0-255)', '24 bit = 16.7 triệu màu'],
            },
            {
              title: 'Định dạng hình ảnh',
              subItems: ['BMP: Không nén, siêu nặng', 'JPEG: Nén nhẹ, ảnh chụp', 'PNG: Nền trong suốt, logo'],
            },
            {
              title: 'Tính dung lượng',
              subItems: ['Số pixel = Rộng × Cao', 'Byte = Pixel × Độ sâu màu / 8', 'Ý nghĩa thuật toán nén số'],
            },
          ],
        },
      },
    ],
  },
];
