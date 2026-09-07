import { Lesson } from '../types';

export const topic5LessonsPartC: Lesson[] = [
  {
    id: 'bai-28',
    number: 28,
    title: 'Bài 28. Phạm vi của biến',
    shortTitle: 'Bài 28: Biến cục bộ & Toàn cục',
    chapterId: 'chu-de-5',
    pageStart: 139,
    pageEnd: 142,
    slides: [
      {
        id: 'b28-s1',
        slideNumber: 1,
        type: 'title',
        title: 'PHẠM VI CỦA BIẾN TRONG PYTHON',
        subtitle: 'Chủ đề 5: Giải quyết vấn đề với máy tính | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Phân biệt Biến cục bộ (Local variable) và Biến toàn cục (Global variable)' },
          { text: 'Vòng đời (Lifetime) và phạm vi tác dụng (Scope) của từng loại biến' },
          { text: 'Từ khóa global và kĩ thuật thay đổi biến toàn cục bên trong hàm' },
          { text: 'Quy tắc tổ chức biến an toàn, tránh xung đột tên trong dự án phần mềm' },
        ],
        badge: 'Bài 28 • KHBD Chuẩn',
      },
      {
        id: 'b28-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: TRÙNG TÊN BIẾN TRONG VÀ NGOÀI HÀM',
        subtitle: 'Thí nghiệm thú vị về không gian tên (Phiếu học tập số 1)',
        lead: 'Quan sát đoạn mã Python sau và dự đoán giá trị in ra:',
        bullets: [
          {
            title: 'Đoạn mã thí nghiệm:',
            text: 'x = 10  # Biến x ở ngoài hàm\n\ndef ThayDoi():\n    x = 20  # Biến x ở trong hàm\n    print("Trong hàm x =", x)\n\nThayDoi()\nprint("Ngoài hàm x =", x)',
          },
          {
            title: 'Kết quả chạy thực tế:',
            text: 'Trong hàm x = 20\nNgoài hàm x = 10',
            badge: 'Kết quả chạy',
          },
          {
            title: 'Câu hỏi tư duy:',
            text: 'Tại sao sau khi gọi hàm ThayDoi(), giá trị của biến x ở ngoài hàm vẫn giữ nguyên là 10 mà không bị biến thành 20?',
            badge: 'Câu hỏi',
          },
        ],
      },
      {
        id: 'b28-s3',
        slideNumber: 3,
        type: 'table',
        title: 'PHÂN BIỆT BIẾN CỤC BỘ VÀ BIẾN TOÀN CỤC',
        subtitle: 'Nhiệm vụ 1: Bảng đối chiếu 4 tiêu chí cốt lõi (SGK trang 139-140)',
        lead: 'Mỗi biến trong Python đều có một phạm vi tồn tại riêng biệt:',
        tableData: {
          caption: 'So sánh Biến cục bộ (Local) và Biến toàn cục (Global)',
          headers: ['Tiêu chí', 'Biến cục bộ (Local Variable)', 'Biến toàn cục (Global Variable)'],
          rows: [
            ['Nơi khai báo', 'Khai báo BÊN TRONG thân của một hàm', 'Khai báo BÊN NGOÀI tất cả các hàm (ở chương trình chính)'],
            ['Phạm vi sử dụng', 'CHỈ CÓ HIỆU LỰC bên trong hàm đó; bên ngoài hàm không thể nhìn thấy hay gọi đến', 'CÓ HIỆU LỰC ở toàn bộ chương trình, bất kì hàm nào cũng có thể đọc được'],
            ['Vòng đời (Lifetime)', 'Sinh ra khi hàm được gọi; TỰ ĐỘNG BỊ HỦY BỎ khi hàm kết thúc thực thi', 'Tồn tại xuyên suốt từ lúc chương trình bắt đầu đến khi kết thúc hoàn toàn'],
            ['Khi cố tình gọi ngoài hàm', 'Báo lỗi NameError: name "..." is not defined', 'Sử dụng bình thường'],
          ],
        },
      },
      {
        id: 'b28-s4',
        slideNumber: 4,
        type: 'content',
        title: 'TỪ KHÓA GLOBAL VÀ THAY ĐỔI BIẾN TOÀN CỤC',
        subtitle: 'Kĩ thuật cho phép hàm sửa đổi giá trị biến của chương trình chính',
        lead: 'Mặc định, bên trong hàm chỉ có quyền ĐỌC biến toàn cục, KHÔNG ĐƯỢC GÁN LẠI giá trị:',
        bullets: [
          {
            title: 'Khi muốn gán lại biến toàn cục bên trong hàm:',
            text: 'Bắt buộc phải dùng từ khóa global khai báo ở đầu thân hàm:\ndef TangDiem():\n    global diem  # Báo cho Python biết: diem này là biến toàn cục bên ngoài!\n    diem = diem + 1',
          },
          {
            title: 'Ví dụ chương trình hoàn chỉnh:',
            text: 'diem = 0\ndef CapNhat():\n    global diem\n    diem = 100\n\nCapNhat()\nprint(diem)  # In ra kết quả: 100 (biến toàn cục đã bị thay đổi thành công!)',
          },
        ],
        highlightBox: {
          type: 'warning',
          title: 'LỜI KHUYÊN KĨ THUẬT LẬP TRÌNH',
          content: 'Nên hạn chế lạm dụng từ khóa global. Cách lập trình chuyên nghiệp nhất là truyền biến vào qua Tham số và nhận kết quả ra qua lệnh Return!',
        },
      },
      {
        id: 'b28-s5',
        slideNumber: 5,
        type: 'practice',
        title: 'LUYỆN TẬP: TRUY VẾT PHẠM VI BIẾN',
        subtitle: 'Phiếu học tập số 3: Dự đoán chính xác kết quả hiển thị',
        lead: 'Em hãy phân tích giá trị in ra của đoạn chương trình sau:',
        bullets: [
          {
            title: 'Đoạn mã:',
            text: 'a = 5\nb = 15\ndef TinhToan(a):\n    b = 20\n    a = a + b\n    print("Trong hàm a =", a, ", b =", b)\n\nTinhToan(a)\nprint("Ngoài hàm a =", a, ", b =", b)',
          },
          {
            title: 'Phân tích từng bước:',
            text: '1. Biến a trong hàm là tham số hình thức (cục bộ), b trong hàm là biến cục bộ (b=20).\n2. Trong hàm: a = 5 + 20 = 25; b = 20 -> In ra: Trong hàm a = 25 , b = 20.\n3. Khi hàm kết thúc, a và b cục bộ biến mất hoàn toàn. Ngoài hàm a và b toàn cục vẫn là 5 và 15 -> In ra: Ngoài hàm a = 5 , b = 15.',
            badge: 'Phân tích chi tiết',
          },
        ],
      },
      {
        id: 'b28-s6',
        slideNumber: 6,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 28: GHI NHỚ TRỌNG TÂM',
        subtitle: 'Kiến thức cốt lõi về biến cục bộ, biến toàn cục và từ khóa global',
        bullets: [
          {
            title: '1. Biến cục bộ (Local Variable):',
            text: 'Được khai báo bên trong hàm; chỉ có hiệu lực và giá trị bên trong hàm đó; tự động bị thu hồi bộ nhớ khi hàm kết thúc thực thi.',
          },
          {
            title: '2. Biến toàn cục (Global Variable):',
            text: 'Được khai báo ở chương trình chính bên ngoài mọi hàm; có hiệu lực trong toàn bộ chương trình; muốn gán lại giá trị từ trong hàm bắt buộc dùng từ khóa global.',
          },
          {
            title: '3. Nguyên tắc an toàn mã nguồn:',
            text: 'Hạn chế tối đa dùng biến toàn cục; ưu tiên truyền dữ liệu vào qua tham số và nhận dữ liệu ra qua câu lệnh return.',
          },
        ],
      },
      {
        id: 'b28-s7',
        slideNumber: 7,
        type: 'practice',
        title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
        subtitle: 'Phân tích phạm vi biến và chuẩn bị bài mới',
        lead: 'Học sinh hoàn thành 2 bài tập rèn luyện tư duy không gian tên:',
        bullets: [
          {
            title: 'Bài tập 1: Giải bài tập 1, 2 SGK trang 142',
            text: 'Xác định phạm vi tác dụng của các biến trong đoạn mã cho trước, giải thích vì sao câu lệnh gây ra lỗi NameError.',
            badge: 'SGK trang 142',
          },
          {
            title: 'Bài tập 2: Chuẩn bị Bài 29',
            text: 'Đọc trước Bài 29 trong SGK: Nhận biết lỗi chương trình. Tìm hiểu 3 loại lỗi kinh điển: Lỗi cú pháp (Syntax), Lỗi ngoại lệ (Runtime) và Lỗi ngữ nghĩa (Logic).',
            badge: 'Chuẩn bị Bài 29',
          },
        ],
        highlightBox: {
          type: 'tip',
          title: 'LƯU Ý QUAN TRỌNG',
          content: 'Không đặt trùng tên biến cục bộ với biến toàn cục để tránh gây nhầm lẫn khi đọc hiểu và bảo trì mã nguồn!',
        },
        footerNote: 'SGK Tin học 10 (trang 139-142) • Giáo viên: QuanLHK',
      },
    ],
  },
  {
    id: 'bai-29',
    number: 29,
    title: 'Bài 29. Nhận biết lỗi chương trình',
    shortTitle: 'Bài 29: Nhận biết lỗi',
    chapterId: 'chu-de-5',
    pageStart: 143,
    pageEnd: 146,
    slides: [
      {
        id: 'b29-s1',
        slideNumber: 1,
        type: 'title',
        title: 'NHẬN BIẾT LỖI CHƯƠNG TRÌNH TRONG PYTHON',
        subtitle: 'Chủ đề 5: Giải quyết vấn đề với máy tính | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Nhận diện và phân loại 3 nhóm lỗi kinh điển: Cú pháp, Ngoại lệ, Ngữ nghĩa' },
          { text: 'Kĩ năng đọc hiểu thông báo lỗi Traceback của Python' },
          { text: 'Nhận biết các lỗi ngoại lệ phổ biến: ZeroDivisionError, ValueError, IndexError' },
          { text: 'Thực hành phân tích và sửa lỗi cho các chương trình thực tế' },
        ],
        badge: 'Bài 29 • KHBD Chuẩn',
      },
      {
        id: 'b29-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: KHI CHƯƠNG TRÌNH KHÔNG CHẠY NHƯ Ý',
        subtitle: 'Ba tình huống trục trặc thường gặp của học sinh (Phiếu học tập số 1)',
        lead: 'Khi gõ mã và nhấn F5 chạy chương trình, ta thường gặp 3 trường hợp hỏng hóc:',
        bullets: [
          {
            title: 'Trường hợp A: Vừa bấm F5 là hiện bảng đỏ chót',
            text: 'Chương trình chưa kịp chạy dòng nào đã báo lỗi SyntaxError và bôi đỏ một dòng lệnh.',
            badge: 'Lỗi cú pháp',
          },
          {
            title: 'Trường hợp B: Đang chạy vui vẻ thì đột ngột dừng giữa chừng',
            text: 'Chương trình đã chạy được vài lệnh, người dùng nhập số 0 vào thì bị văng lỗi ZeroDivisionError.',
            badge: 'Lỗi ngoại lệ',
          },
          {
            title: 'Trường hợp C: Chạy trơn tru không lỗi nhưng KẾT QUẢ SAI BÉT',
            text: 'Nhập chiều dài 4, chiều rộng 5 để tính diện tích hình chữ nhật thì máy in ra kết quả: 9 (thay vì 20)!',
            badge: 'Lỗi ngữ nghĩa / logic',
          },
        ],
      },
      {
        id: 'b29-s3',
        slideNumber: 3,
        type: 'table',
        title: 'PHÂN LOẠI 3 NHÓM LỖI LẬP TRÌNH KINH ĐIỂN',
        subtitle: 'Nhiệm vụ 1: Bảng đối chiếu bản chất 3 loại lỗi theo chuẩn SGK trang 143-144',
        lead: 'Phân loại chính xác giúp lập trình viên xác định đúng phương pháp sửa lỗi:',
        tableData: {
          caption: 'Bảng phân biệt 3 loại lỗi trong lập trình Python',
          headers: ['Loại lỗi', 'Thời điểm phát hiện', 'Nguyên nhân gây lỗi', 'Mức độ nguy hiểm'],
          rows: [
            ['1. Lỗi cú pháp (Syntax Error)', 'Phát hiện ngay TRƯỚC KHI chạy chương trình (khi biên dịch/phân tích cú pháp)', 'Vi phạm quy tắc ngữ pháp: quên dấu :, sai thụt lề, đóng mở ngoặc sai, sai từ khóa', 'Dễ sửa nhất vì Python chỉ rõ dòng bị lỗi'],
            ['2. Lỗi ngoại lệ / khi chạy (Runtime Error / Exception)', 'Phát hiện TRONG KHI chương trình ĐANG CHẠY', 'Thực hiện phép toán vô lí: chia cho 0, ép kiểu sai, tràn chỉ số danh sách', 'Dừng đột ngột chương trình làm gián đoạn người dùng'],
            ['3. Lỗi ngữ nghĩa / Logic (Logic Error / Semantic Error)', 'KHÔNG CÓ THÔNG BÁO LỖI! Chương trình vẫn chạy bình thường từ đầu đến cuối', 'Sai thuật toán, nhầm lẫn công thức toán học, sai điều kiện rẽ nhánh', 'NGUY HIỂM NHẤT vì rất khó phát hiện, có thể gây hậu quả nghiêm trọng!'],
          ],
        },
      },
      {
        id: 'b29-s4',
        slideNumber: 4,
        type: 'table',
        title: 'CÁC LỖI NGOẠI LỆ (EXCEPTIONS) PHỔ BIẾN NHẤT',
        subtitle: 'Đọc thông báo lỗi dòng cuối cùng của Python Traceback để định bệnh',
        lead: 'Bảng tra cứu nhanh các thông báo lỗi ngoại lệ thường gặp:',
        tableData: {
          caption: 'Các tên lỗi ngoại lệ thường gặp trong Python',
          headers: ['Tên lỗi ngoại lệ', 'Nguyên nhân thực tế phát sinh', 'Ví dụ câu lệnh gây lỗi'],
          rows: [
            ['ZeroDivisionError', 'Thực hiện phép chia một số cho số 0', 'x = 10 / 0  hoặc a % 0'],
            ['ValueError', 'Giá trị truyền vào không phù hợp với kiểu dữ liệu', 'n = int("12.5")  hoặc int("abc")'],
            ['TypeError', 'Toán tử không áp dụng được cho kiểu dữ liệu này', '"Tuổi của bạn là: " + 16'],
            ['IndexError', 'Truy cập chỉ số vượt quá độ dài danh sách', 'A = [1, 2]; print(A[5])'],
            ['NameError', 'Sử dụng biến hoặc tên hàm chưa được định nghĩa', 'print(x)  (khi chưa gán x = ...)'],
          ],
        },
      },
      {
        id: 'b29-s5',
        slideNumber: 5,
        type: 'practice',
        title: 'THỰC HÀNH: NHẬN DIỆN VÀ SỬA LỖI MÃ NGUỒN',
        subtitle: 'Phiếu học tập số 2: Phân tích 3 đoạn mã lỗi (Mã 5.3NC1a)',
        lead: 'Hãy xác định loại lỗi và cách sửa đúng cho các đoạn mã sau:',
        bullets: [
          {
            title: 'Đoạn mã 1: if x > 0 print(x)',
            text: 'Lỗi: SyntaxError: invalid syntax.\nNguyên nhân: Thiếu dấu hai chấm (:) sau điều kiện if và thiếu xuống dòng thụt lề.\nSửa đúng: if x > 0:\n    print(x)',
            badge: 'Lỗi cú pháp',
          },
          {
            title: 'Đoạn mã 2: A = [10, 20, 30]; print(A[3])',
            text: 'Lỗi: IndexError: list index out of range.\nNguyên nhân: Danh sách A có 3 phần tử, chỉ số chỉ từ 0 đến 2. A[3] vượt ngoài danh sách.\nSửa đúng: print(A[2]) nếu muốn lấy phần tử cuối.',
            badge: 'Lỗi ngoại lệ',
          },
          {
            title: 'Đoạn mã 3: Chu vi hình chữ nhật: cv = a + b * 2',
            text: 'Lỗi: Lỗi ngữ nghĩa / Logic (không báo lỗi đỏ).\nNguyên nhân: Phép nhân * ưu tiên trước phép cộng +, máy tính sẽ tính a + (b * 2) thay vì (a + b) * 2.\nSửa đúng: cv = (a + b) * 2',
            badge: 'Lỗi logic',
          },
        ],
      },
      {
        id: 'b29-s6',
        slideNumber: 6,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 29: GHI NHỚ TRỌNG TÂM',
        subtitle: 'Kiến thức cốt lõi về phân loại và nhận biết lỗi lập trình',
        bullets: [
          {
            title: '1. Ba loại lỗi căn bản:',
            text: 'Lỗi cú pháp (báo trước khi chạy); Lỗi ngoại lệ Runtime (phát sinh khi đang chạy gây dừng đột ngột); Lỗi logic (chạy xong nhưng cho ra kết quả sai).',
          },
          {
            title: '2. Kĩ năng đọc thông báo Traceback:',
            text: 'Chú ý số dòng chỉ ra nơi xảy ra sự cố (Line ...) và đọc tên lỗi ở dòng cuối cùng để biết chính xác nguyên nhân kỹ thuật.',
          },
          {
            title: '3. Luôn cảnh giác với lỗi logic:',
            text: 'Cần kiểm tra kỹ ngoặc đơn trong các công thức số học và kiểm thử các ca thử biên đặc biệt.',
          },
        ],
      },
      {
        id: 'b29-s7',
        slideNumber: 7,
        type: 'practice',
        title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
        subtitle: 'Nhận diện lỗi trong công thức toán học và chuẩn bị bài mới',
        lead: 'Học sinh hoàn thành 2 bài tập rèn luyện kỹ năng phân tích lỗi:',
        bullets: [
          {
            title: 'Bài tập 1: Kiểm tra tính diện tích tam giác',
            text: 'Đoạn mã S = 1/2 * a * h. Hãy viết chương trình nhập đáy a và chiều cao h, kiểm tra điều kiện dữ liệu nhập (a > 0 và h > 0) để ngăn chặn nhập sai logic.',
            badge: 'Kiểm tra dữ liệu vào',
          },
          {
            title: 'Bài tập 2: Chuẩn bị Bài 30',
            text: 'Đọc trước Bài 30 trong SGK: Kiểm thử và gỡ lỗi chương trình. Tìm hiểu khái niệm ca thử (Test case), các ca thử thông thường, ca thử biên và phương pháp in debug.',
            badge: 'Chuẩn bị Bài 30',
          },
        ],
        highlightBox: {
          type: 'tip',
          title: 'GỢI Ý PHÒNG NGỪA LỖI',
          content: 'Luôn kiểm tra dữ liệu người dùng nhập bằng các câu lệnh if trước khi thực hiện các phép tính nhạy cảm như chia số (/) hoặc tính căn bậc hai!',
        },
        footerNote: 'SGK Tin học 10 (trang 143-146) • Giáo viên: QuanLHK',
      },
    ],
  },
  {
    id: 'bai-30',
    number: 30,
    title: 'Bài 30. Kiểm thử và gỡ lỗi chương trình',
    shortTitle: 'Bài 30: Kiểm thử & Gỡ lỗi',
    chapterId: 'chu-de-5',
    pageStart: 147,
    pageEnd: 151,
    slides: [
      {
        id: 'b30-s1',
        slideNumber: 1,
        type: 'title',
        title: 'KIỂM THỬ VÀ GỠ LỖI CHƯƠNG TRÌNH',
        subtitle: 'Chủ đề 5: Giải quyết vấn đề với máy tính | Sách giáo khoa Tin học 10',
        lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
        bullets: [
          { text: 'Khái niệm kiểm thử (Testing) và cách xây dựng bộ dữ liệu thử (Test cases)' },
          { text: 'Kĩ thuật kiểm thử các giá trị thông thường, giá trị biên và trường hợp đặc biệt' },
          { text: 'Phương pháp gỡ lỗi kinh điển bằng chèn lệnh in trung gian print()' },
          { text: 'Sử dụng công cụ gỡ lỗi chuyên nghiệp (Debugger: Breakpoint, Step)' },
        ],
        badge: 'Bài 30 • KHBD Chuẩn',
      },
      {
        id: 'b30-s2',
        slideNumber: 2,
        type: 'warmup',
        title: 'KHỞI ĐỘNG: CHẠY THỬ 1 LẦN CÓ ĐỦ ĐỂ KHẲNG ĐỊNH ĐÚNG?',
        subtitle: 'Cạm bẫy của việc chỉ kiểm tra một trường hợp thuận lợi (Phiếu học tập số 1)',
        lead: 'Xét bài toán: Tìm số lớn nhất (Max) trong hai số a và b:',
        bullets: [
          {
            title: 'Chương trình của bạn Nam:',
            text: 'a = int(input())\nb = int(input())\nif a > b:\n    m = a\nelse:\n    m = a  # Nam gõ nhầm chữ b thành a!\nprint("Max là:", m)',
          },
          {
            title: 'Thử nghiệm lần 1:',
            text: 'Nam nhập a = 10, b = 5 -> Điều kiện 10 > 5 Đúng -> m = 10 -> In ra "Max là: 10". Nam reo lên: "Chương trình chạy chuẩn rồi!"',
            badge: 'Ảo tưởng đúng',
          },
          {
            title: 'Cái bẫy lộ diện ở lần 2:',
            text: 'Thầy giáo nhập a = 3, b = 8 -> Điều kiện 3 > 8 Sai -> nhảy vào else: m = 3 -> In ra "Max là: 3"! SAI HOÀN TOÀN!',
            badge: 'Bộc lộ lỗi',
          },
        ],
        highlightBox: {
          type: 'remember',
          title: 'BÀI HỌC SÂU SẮC',
          content: 'Kiểm thử với 1 ca thử không bao giờ chứng minh được chương trình hoàn toàn đúng. Cần phải kiểm thử nhiều ca thử khác nhau, đặc biệt là các ca thử rẽ nhánh!',
        },
      },
      {
        id: 'b30-s3',
        slideNumber: 3,
        type: 'process',
        title: '3 NHÓM DỮ LIỆU KIỂM THỬ (TEST CASES)',
        subtitle: 'Quy trình thiết kế bộ dữ liệu thử nghiệm toàn diện (Hình 30.1 SGK trang 148)',
        svgType: 'software-testing',
        sourceCitation: 'Nguồn tham khảo: Hình 30.1 SGK Tin học 10 (trang 148) • Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam',
        diagram: {
          layout: 'horizontal',
          steps: [
            {
              stepNumber: 'NHÓM 1',
              title: 'Dữ liệu thông thường',
              desc: 'Các giá trị ngẫu nhiên điển hình, dễ quan sát (ví dụ: a = 5, b = 7).',
              tag: 'Typical case',
            },
            {
              stepNumber: 'NHÓM 2',
              title: 'Dữ liệu biên (Boundary)',
              desc: 'Các giá trị nằm ngay ranh giới rẽ nhánh (ví dụ: a = b; tuổi = 18; điểm = 5.0).',
              tag: 'Border case',
            },
            {
              stepNumber: 'NHÓM 3',
              title: 'Dữ liệu đặc biệt',
              desc: 'Các trường hợp cực đoan: số 0, số âm, danh sách rỗng, xâu rỗng, số cực lớn.',
              tag: 'Special case',
            },
          ],
        },
      },
      {
        id: 'b30-s4',
        slideNumber: 4,
        type: 'content',
        title: 'PHƯƠNG PHÁP GỠ LỖI BẰNG LỆNH IN PRINT()',
        subtitle: 'Kĩ thuật soi đường đơn giản nhưng hiệu quả bậc nhất của mọi lập trình viên',
        lead: 'Khi chương trình cho ra kết quả sai mà không rõ sai ở dòng nào:',
        bullets: [
          {
            title: 'Nguyên lí thực hiện:',
            text: 'Chèn thêm các lệnh print("DEBUG: biến =", biến) vào các vị trí then chốt (trước vòng lặp, trong thân if, sau phép tính) để theo dõi giá trị trung gian biến đổi từng bước.',
          },
          {
            title: 'Ví dụ định vị lỗi:',
            text: 'for i in range(1, 5):\n    S = S * i\n    print("DEBUG: lượt i =", i, ", S hiện tại =", S)  # Soi giá trị từng vòng\nNhìn vào màn hình sẽ thấy ngay S bị giữ nguyên bằng 0 nếu ban đầu khởi tạo S = 0!',
          },
          {
            title: 'Dọn dẹp sau khi gỡ lỗi xong:',
            text: 'Sau khi đã tìm ra lỗi và sửa xong, hãy xóa hoặc thêm dấu # biến các dòng print DEBUG thành chú thích.',
          },
        ],
      },
      {
        id: 'b30-s5',
        slideNumber: 5,
        type: 'practice',
        title: 'THỰC HÀNH: BẢNG KIỂM THỬ BÀI TOÁN TÍNH TIỀN ĐIỆN',
        subtitle: 'Phiếu học tập số 4: Thiết kế bộ test case cho biểu giá điện lũy tiến',
        lead: 'Quy tắc: 50 kWh đầu giá 1678 đ/kWh; từ kWh thứ 51 trở lên giá 1734 đ/kWh:',
        tableData: {
          caption: 'Bộ ca thử nghiệm toàn diện cho chương trình tính tiền điện',
          headers: ['Ca thử', 'Số kWh tiêu thụ (n)', 'Loại ca thử', 'Kết quả mong đợi (đồng)', 'Ý nghĩa kiểm tra'],
          rows: [
            ['Test 1', 'n = 30', 'Thông thường (< 50)', '30 * 1678 = 50 340', 'Kiểm tra nhánh 1 bậc 1'],
            ['Test 2', 'n = 50', 'Điểm biên (ngưỡng 50)', '50 * 1678 = 83 900', 'Kiểm tra ranh giới chính xác'],
            ['Test 3', 'n = 70', 'Thông thường (> 50)', '50*1678 + 20*1734 = 118 580', 'Kiểm tra tách nhánh 2 bậc'],
            ['Test 4', 'n = 0', 'Trường hợp đặc biệt', '0', 'Kiểm tra không dùng điện'],
          ],
        },
      },
      {
        id: 'b30-s6',
        slideNumber: 6,
        type: 'summary',
        title: 'TỔNG KẾT BÀI 30: GHI NHỚ TRỌNG TÂM',
        subtitle: 'Kiến thức cốt lõi về kiểm thử (Testing) và gỡ lỗi (Debugging)',
        bullets: [
          {
            title: '1. Kiểm thử phần mềm (Testing):',
            text: 'Chạy chương trình với nhiều ca thử khác nhau: ca thông thường, ca ranh giới biên và ca đặc biệt để phát hiện sai sót.',
          },
          {
            title: '2. Gỡ lỗi bằng in trung gian (Debugging):',
            text: 'Tìm nguyên nhân và sửa chữa lỗi logic; dùng lệnh print() in các biến trung gian để theo dõi dữ liệu từng bước thực thi.',
          },
          {
            title: '3. Phẩm chất lập trình viên:',
            text: 'Cẩn trọng, kiên nhẫn và luôn hoài nghi về tính hoàn hảo của mã nguồn do chính mình viết ra để kiểm thử triệt để.',
          },
        ],
      },
      {
        id: 'b30-s7',
        slideNumber: 7,
        type: 'practice',
        title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
        subtitle: 'Thiết kế ca thử cho tam giác và chuẩn bị bài mới',
        lead: 'Học sinh hoàn thành 2 bài tập rèn luyện kỹ năng kiểm thử:',
        bullets: [
          {
            title: 'Bài tập 1: Thiết kế 4 ca thử cho bài toán tam giác',
            text: 'Thiết kế 4 ca thử (thông thường, biên, không thỏa mãn, đặc biệt số âm) cho bài toán xét 3 số a, b, c có tạo thành 3 cạnh của tam giác hay không.',
            badge: 'Thiết kế Test cases',
          },
          {
            title: 'Bài tập 2: Chuẩn bị Bài 31 & 32',
            text: 'Đọc trước Bài 31 và Bài 32: Thực hành viết chương trình giải quyết các bài toán thực tế và ôn tập tổng kết Chủ đề 5.',
            badge: 'Chuẩn bị Bài 31-32',
          },
        ],
        highlightBox: {
          type: 'tip',
          title: 'GỢI Ý 4 CA THỬ TAM GIÁC',
          content: 'Test 1: (3, 4, 5) -> Đúng; Test 2: (1, 2, 3) -> Biên (1+2=3 không tạo thành tam giác); Test 3: (2, 5, 8) -> Sai; Test 4: (-1, 4, 5) -> Dữ liệu đặc biệt không hợp lệ!',
        },
        footerNote: 'SGK Tin học 10 (trang 147-151) • Giáo viên: QuanLHK',
      },
    ],
  },
];
