import { Chapter } from '../types';

export const topic7: Chapter = {
  id: 'chu-de-7',
  number: 7,
  title: 'Chủ đề 7. Hàm và kỹ thuật gỡ lỗi lập trình',
  description: 'Định nghĩa hàm, cách truyền tham số, phạm vi biến toàn cục và cục bộ, phân loại lỗi lập trình, kiểm thử và thực hành phát triển chương trình Python tổng hợp.',
  lessons: [
    // =========================================================================
    // BÀI 26 & 27: ĐỊNH NGHĨA HÀM VÀ TRUYỀN THAM SỐ
    // =========================================================================
    {
      id: 'bai-26-27',
      number: '26 & 27',
      title: 'Bài 26 & 27. Định nghĩa hàm, cách xây dựng hàm và truyền tham số cho hàm',
      shortTitle: 'Bài 26 & 27: Hàm & Tham số',
      chapterId: 'chu-de-7',
      pageStart: 129,
      pageEnd: 138,
      slides: [
        {
          id: 'b26-s1',
          slideNumber: 1,
          type: 'title',
          title: 'ĐỊNH NGHĨA HÀM, CÁCH XÂY DỰNG HÀM VÀ TRUYỀN THAM SỐ',
          subtitle: 'Chủ đề 7: Hàm và kỹ thuật gỡ lỗi | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Khái niệm hàm, tư duy chia để trị và khả năng tái sử dụng mã nguồn' },
            { text: 'Cú pháp định nghĩa hàm với từ khóa def và câu lệnh trả kết quả return' },
            { text: 'Phân biệt Tham số (Parameters) và Đối số (Arguments) khi gọi hàm' },
            { text: 'Thực hành xây dựng hàm kiểm tra số nguyên tố và giải phương trình' },
          ],
          badge: 'Bài 26 & 27 • Lập trình hàm',
        },
        {
          id: 'b26-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: TẠI SAO LẬP TRÌNH CẦN ĐẾN HÀM?',
          subtitle: 'Tình huống lặp lại cùng một đoạn mã tính toán ở nhiều nơi',
          cardsGrid: [
            {
              title: 'Nếu không dùng hàm',
              desc: 'Sao chép nguyên đoạn mã lệnh 5 lần vào 5 vị trí khác nhau.',
              tag: 'Sao chép mã',
              points: [
                'Chương trình dài lê thê, khó theo dõi',
                'Khi cần sửa lỗi phải sửa thủ công ở cả 5 nơi',
                'Nguy cơ nhầm lẫn và sai sót cực cao',
              ],
            },
            {
              title: 'Khi sử dụng Hàm (Function)',
              desc: 'Gói toàn bộ logic thuật toán vào một khối duy nhất có tên gọi.',
              tag: 'Tối ưu (def)',
              points: [
                'Viết một lần, gọi dùng ở bất kì đâu',
                'Chương trình sáng sủa, module hóa chuyên nghiệp',
                'Dễ dàng kiểm thử, nâng cấp và chia sẻ cho nhóm',
              ],
            },
          ],
        },
        {
          id: 'b26-s3',
          slideNumber: 3,
          type: 'table',
          title: 'PHÂN LOẠI HÀM TRONG PYTHON',
          subtitle: 'Hàm có sẵn (Built-in) và Hàm do lập trình viên tự xây dựng',
          tableData: {
            caption: 'So sánh hai nhóm hàm trong Python',
            headers: ['Tiêu chí', 'Hàm tích hợp sẵn (Built-in)', 'Hàm tự định nghĩa (User-defined)'],
            rows: [
              ['Đặc điểm', 'Được Python cung cấp sẵn, dùng trực tiếp không cần viết mã', 'Do lập trình viên tự thiết kế để giải quyết bài toán riêng'],
              ['Từ khóa định nghĩa', 'Đã được biên dịch sẵn trong nhân Python', 'Bắt đầu bằng từ khóa def'],
              ['Ví dụ tiêu biểu', 'print(), input(), len(), sum(), max(), abs()', 'def tinh_tong(a, b):, def la_so_nguyen_to(n):'],
              ['Mục đích', 'Cung cấp các tác vụ chuẩn cơ bản của ngôn ngữ', 'Tùy biến thuật toán theo yêu cầu của ứng dụng'],
            ],
          },
        },
        {
          id: 'b26-s4',
          slideNumber: 4,
          type: 'content',
          title: 'CÚ PHÁP ĐỊNH NGHĨA HÀM TRONG PYTHON',
          subtitle: 'Cấu trúc khối lệnh chuẩn với từ khóa def và lệnh return',
          bullets: [
            {
              title: 'Cú pháp chuẩn:',
              text: 'def <tên_hàm>(<danh_sách_tham_số>):\n    <khối_lệnh_của_hàm>\n    return <giá_trị_trả_về>',
            },
            {
              title: 'Quy tắc đặt tên và thụt lề:',
              text: 'Tên hàm tuân theo quy tắc đặt tên định danh trong Python. Khối lệnh thân hàm bắt buộc phải thụt lề 4 dấu cách đồng nhất.',
            },
            {
              title: 'Ý nghĩa của return:',
              text: 'Lệnh return kết thúc việc thực thi hàm và trả kết quả về cho vị trí gọi hàm. Nếu không có return, hàm mặc định trả về giá trị None.',
            },
          ],
        },
        {
          id: 'b26-s5',
          slideNumber: 5,
          type: 'diagram',
          title: 'THAM SỐ (PARAMETERS) VÀ ĐỐI SỐ (ARGUMENTS)',
          subtitle: 'Cơ chế truyền dữ liệu đầu vào khi thực thi hàm',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'KHAI BÁO',
                title: 'Tham số hình thức (Parameters)',
                desc: 'Các biến được đặt trong dấu ngoặc tròn khi định nghĩa hàm:\ndef chu_vi(dai, rong):',
                tag: 'Khai báo def',
              },
              {
                stepNumber: 'LỜI GỌI',
                title: 'Đối số thực sự (Arguments)',
                desc: 'Giá trị cụ thể truyền vào khi gọi hàm thực thi:\ncv = chu_vi(10, 5)',
                tag: 'dai = 10, rong = 5',
              },
            ],
          },
          highlightBox: {
            type: 'tip',
            title: 'QUY TẮC TRUYỀN THAM SỐ',
            content: 'Số lượng đối số khi gọi hàm phải khớp chính xác với số lượng tham số khai báo ở định nghĩa hàm, nếu không Python sẽ báo lỗi TypeError.',
          },
        },
        {
          id: 'b26-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'THỰC HÀNH: HÀM KIỂM TRA SỐ NGUYÊN TỐ',
          subtitle: 'Bài toán lập trình kinh điển áp dụng cấu trúc hàm',
          bullets: [
            {
              title: 'Thuật toán kiểm tra số nguyên tố:',
              text: 'Số nguyên tố là số nguyên lớn hơn 1 và chỉ có đúng 2 ước là 1 và chính nó.',
            },
            {
              title: 'Mã nguồn hàm Python (NguyenTo.py):',
              text: 'def la_nguyen_to(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n# Gọi hàm thử nghiệm:\nprint(la_nguyen_to(7))   # True\nprint(la_nguyen_to(10))  # False',
              badge: 'Mã Python',
            },
            {
              title: 'Lợi ích khi có hàm:',
              text: 'Bất cứ khi nào cần kiểm tra số nguyên tố, ta chỉ việc gọi la_nguyen_to(x) trong điều kiện if!',
              badge: 'Tái sử dụng cao',
            },
          ],
        },
        {
          id: 'b26-s7',
          slideNumber: 7,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 26 & 27 VÀ GHI NHỚ TRỌNG TÂM',
          subtitle: 'Hệ thống hóa kiến thức về xây dựng hàm trong Python',
          bullets: [
            {
              title: '1. Khái niệm hàm:',
              text: 'Đóng gói khối lệnh thực hiện một tác vụ cụ thể, giúp tái sử dụng và module hóa mã nguồn.',
            },
            {
              title: '2. Cú pháp định nghĩa:',
              text: 'Dùng def <tên>(<tham_số>):, thụt lề khối lệnh thân hàm và trả kết quả bằng return.',
            },
            {
              title: '3. Gọi hàm:',
              text: 'Truyền đúng số lượng đối số tương ứng vào tham số hình thức của hàm.',
            },
          ],
        },
        {
          id: 'b26-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Xây dựng hàm tính lũy thừa và chuẩn bị bài mới',
          lead: 'Học sinh hoàn thành 2 bài tập rèn luyện kỹ năng viết hàm:',
          bullets: [
            {
              title: 'Bài tập 1: Viết hàm tính chu vi, diện tích tam giác',
              text: 'Viết hàm TamGiac(a, b, c) kiểm tra tính hợp lệ và trả về diện tích tam giác theo công thức Heron: S = sqrt(p * (p-a) * (p-b) * (p-c)) với p là nửa chu vi.',
              badge: 'Heron formula',
            },
            {
              title: 'Bài tập 2: Chuẩn bị Bài 28',
              text: 'Đọc trước Bài 28 trong SGK: Phạm vi của biến. Tìm hiểu sự khác nhau giữa biến cục bộ sinh ra trong hàm và biến toàn cục ở ngoài chương trình.',
              badge: 'Chuẩn bị Bài 28',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'GỢI Ý CÔNG THỨC HERON',
            content: 'import math; p = (a + b + c) / 2; S = math.sqrt(p * (p - a) * (p - b) * (p - c))!',
          },
          footerNote: 'SGK Tin học 10 (trang 129-138) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 28: PHẠM VI CỦA BIẾN (TOÀN CỤC VÀ CỤC BỘ)
    // =========================================================================
    {
      id: 'bai-28',
      number: 28,
      title: 'Bài 28. Khái niệm về phạm vi hoạt động của biến (toàn cục và cục bộ)',
      shortTitle: 'Bài 28: Phạm vi của biến',
      chapterId: 'chu-de-7',
      pageStart: 139,
      pageEnd: 142,
      slides: [
        {
          id: 'b28-s1',
          slideNumber: 1,
          type: 'title',
          title: 'PHẠM VI HOẠT ĐỘNG CỦA BIẾN TRONG PYTHON',
          subtitle: 'Chủ đề 7: Hàm và kỹ thuật gỡ lỗi | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân biệt Biến cục bộ (Local variable) và Biến toàn cục (Global variable)' },
            { text: 'Vòng đời (Lifetime) và phạm vi tác dụng (Scope) của từng loại biến' },
            { text: 'Từ khóa global: Khi nào cần dùng và cách sử dụng an toàn' },
            { text: 'Quy tắc tổ chức biến tránh xung đột tên trong dự án phần mềm' },
          ],
          badge: 'Bài 28 • Phạm vi biến',
        },
        {
          id: 'b28-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: TRÙNG TÊN BIẾN TRONG VÀ NGOÀI HÀM',
          subtitle: 'Thí nghiệm về không gian tên (Scope) trong Python (SGK trang 139)',
          bullets: [
            {
              title: 'Đoạn mã thí nghiệm:',
              text: 'x = 10  # Biến x ở chương trình chính\n\ndef thay_doi():\n    x = 20  # Biến x ở trong thân hàm\n    print("Trong hàm x =", x)\n\nthay_doi()\nprint("Ngoài hàm x =", x)',
            },
            {
              title: 'Kết quả in ra màn hình:',
              text: 'Trong hàm x = 20\nNgoài hàm x = 10',
              badge: 'x ngoài không đổi',
            },
            {
              title: 'Câu hỏi tư duy:',
              text: 'Tại sao sau khi gọi hàm thay_doi(), giá trị biến x bên ngoài vẫn là 10 mà không bị đổi thành 20?',
              badge: 'Bí mật Scope',
            },
          ],
        },
        {
          id: 'b28-s3',
          slideNumber: 3,
          type: 'table',
          title: 'SO SÁNH BIẾN CỤC BỘ VÀ BIẾN TOÀN CỤC',
          subtitle: 'Bảng đối chiếu các tiêu chí cốt lõi theo SGK trang 140',
          tableData: {
            caption: 'Phân biệt Biến cục bộ (Local) và Biến toàn cục (Global)',
            headers: ['Tiêu chí', 'Biến cục bộ (Local)', 'Biến toàn cục (Global)'],
            rows: [
              ['Vị trí khai báo', 'Bên trong thân của một hàm cụ thể', 'Bên ngoài tất cả các hàm (ở chương trình chính)'],
              ['Phạm vi sử dụng', 'Chỉ có hiệu lực bên trong hàm đó', 'Có hiệu lực trong toàn bộ chương trình'],
              ['Vòng đời (Lifetime)', 'Sinh ra khi hàm được gọi; bị hủy khi hàm kết thúc', 'Tồn tại xuyên suốt thời gian chương trình chạy'],
              ['Truy cập từ bên ngoài', 'Báo lỗi NameError: name is not defined', 'Đọc và sử dụng bình thường'],
            ],
          },
        },
        {
          id: 'b28-s4',
          slideNumber: 4,
          type: 'content',
          title: 'TỪ KHÓA GLOBAL VÀ NGUYÊN TẮC THAY ĐỔI BIẾN',
          subtitle: 'Cách chỉnh sửa biến toàn cục từ bên trong thân hàm',
          cardsGrid: [
            {
              title: 'Chỉ đọc giá trị toàn cục',
              desc: 'Không cần từ khóa global.',
              tag: 'Đọc biến',
              points: [
                'diem = 100',
                'def xem_diem():\n    print(diem) # Hợp lệ',
                'Hàm có quyền đọc tự do các biến bên ngoài',
              ],
            },
            {
              title: 'Thay đổi giá trị toàn cục',
              desc: 'Bắt buộc khai báo từ khóa global.',
              tag: 'Sửa biến (global)',
              points: [
                'diem = 100',
                'def cong_diem():\n    global diem\n    diem = diem + 10',
                'Nhắc Python không tạo biến cục bộ mới',
              ],
            },
          ],
          highlightBox: {
            type: 'warning',
            title: 'LỜI KHUYÊN THIẾT KẾ',
            content: 'Hạn chế lạm dụng biến toàn cục và từ khóa global vì dễ gây hiệu ứng phụ (side effect), khiến mã nguồn khó kiểm soát và khó gỡ lỗi.',
          },
        },
        {
          id: 'b28-s5',
          slideNumber: 5,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 28 VÀ GHI NHỚ TRỌNG TÂM',
          subtitle: 'Quy tắc tổ chức phạm vi biến an toàn trong lập trình',
          bullets: [
            {
              title: '1. Biến cục bộ:',
              text: 'Khai báo trong hàm, chỉ dùng trong hàm, giải phóng bộ nhớ ngay khi hàm chạy xong.',
            },
            {
              title: '2. Biến toàn cục:',
              text: 'Khai báo ngoài hàm, dùng chung cho toàn bộ chương trình.',
            },
            {
              title: '3. Từ khóa global:',
              text: 'Chỉ dùng khi bắt buộc phải ghi đè giá trị của biến toàn cục từ bên trong hàm.',
            },
          ],
        },
        {
          id: 'b28-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Kiểm soát phạm vi biến và chuẩn bị bài mới',
          lead: 'Học sinh hoàn thành 2 bài tập rèn luyện tư duy lập trình module:',
          bullets: [
            {
              title: 'Bài tập 1: Dự đoán kết quả mã nguồn',
              text: 'Phân tích đoạn mã gồm 2 hàm có biến cùng tên a. Theo dõi thứ tự thực hiện và ghi lại giá trị biến a ở từng thời điểm ra giấy.',
              badge: 'Trace biến',
            },
            {
              title: 'Bài tập 2: Chuẩn bị Bài 29 & 30',
              text: 'Đọc trước Bài 29 & 30: Phân loại lỗi và kỹ thuật gỡ lỗi (Debugging). Tìm hiểu 3 loại lỗi lập trình thường gặp nhất.',
              badge: 'Chuẩn bị bài mới',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LỜI KHUYÊN KỸ THUẬT',
            content: 'Luôn ưu tiên truyền dữ liệu vào hàm qua tham số và trả dữ liệu ra ngoài qua lệnh return thay vì phụ thuộc vào từ khóa global!',
          },
          footerNote: 'SGK Tin học 10 (trang 139-142) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 29 & 30: PHÂN LOẠI LỖI VÀ KỸ THUẬT GỠ LỖI (DEBUGGING)
    // =========================================================================
    {
      id: 'bai-29-30',
      number: '29 & 30',
      title: 'Bài 29 & 30. Phân loại các lỗi phổ biến, quy trình kiểm thử và kỹ năng gỡ lỗi chương trình',
      shortTitle: 'Bài 29 & 30: Lỗi & Gỡ lỗi (Debug)',
      chapterId: 'chu-de-7',
      pageStart: 143,
      pageEnd: 152,
      slides: [
        {
          id: 'b29-s1',
          slideNumber: 1,
          type: 'title',
          title: 'PHÂN LOẠI LỖI, QUY TRÌNH KIỂM THỬ VÀ KỸ NĂNG GỠ LỖI',
          subtitle: 'Chủ đề 7: Hàm và kỹ thuật gỡ lỗi | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Nhận biết 3 nhóm lỗi phổ biến: Cú pháp (Syntax), Ngoại lệ (Runtime), Ngữ nghĩa (Logic)' },
            { text: 'Kỹ năng đọc thông báo lỗi và dấu vết dòng lệnh (Traceback) của Python' },
            { text: 'Phương pháp gỡ lỗi: Chèn lệnh print theo dõi và đặt điểm dừng (Breakpoint)' },
            { text: 'Quy trình kiểm thử chương trình với các bộ dữ liệu thử (Test Cases)' },
          ],
          badge: 'Bài 29 & 30 • Kiểm thử & Gỡ lỗi',
        },
        {
          id: 'b29-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: LỖI LẬP TRÌNH LÀ ĐIỀU TẤT YẾU',
          subtitle: 'Tâm lý và tư duy của lập trình viên khi đối mặt với lỗi (Bug)',
          cardsGrid: [
            {
              title: 'Nguồn gốc từ "Bug" (Con bọ)',
              desc: 'Năm 1947, một con bướm đêm kẹt vào rơ-le máy tính Mark II gây sự cố phần cứng.',
              tag: 'Lịch sử',
              points: [
                'Từ đó, "Bug" được dùng để chỉ lỗi chương trình',
                '"Debugging" nghĩa là quá trình tìm và diệt lỗi',
              ],
            },
            {
              title: 'Tư duy đúng đắn của người học',
              desc: 'Bất kì lập trình viên nào cũng phải đối mặt với hàng ngàn lỗi mỗi ngày.',
              tag: 'Tư duy',
              points: [
                'Lỗi là cơ hội để hiểu sâu hơn về cơ chế Python',
                'Bình tĩnh đọc thông báo lỗi để tìm nguyên nhân',
              ],
            },
          ],
        },
        {
          id: 'b29-s3',
          slideNumber: 3,
          type: 'diagram',
          title: 'BA NHÓM LỖI CƠ BẢN TRONG LẬP TRÌNH PYTHON',
          subtitle: 'Phân loại lỗi theo thời điểm phát hiện và cơ chế xử lý',
          svgType: 'software-testing',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'LỖI CÚ PHÁP',
                title: 'SyntaxError',
                desc: 'Viết sai ngữ pháp, thiếu dấu hai chấm, thụt lề sai. Phát hiện trước khi chạy.',
                tag: 'Dễ sửa nhất',
              },
              {
                stepNumber: 'LỖI NGOẠI LỆ',
                title: 'RuntimeError',
                desc: 'Chương trình đang chạy thì bị văng lỗi: Chia cho 0, chỉ số ngoài phạm vi, sai kiểu.',
                tag: 'Dừng đột ngột',
              },
              {
                stepNumber: 'LỖI NGỮ NGHĨA',
                title: 'LogicError',
                desc: 'Chương trình chạy trơn tru nhưng in ra kết quả sai lệch so với mong muốn.',
                tag: 'Nguy hiểm nhất',
              },
            ],
          },
        },
        {
          id: 'b29-s4',
          slideNumber: 4,
          type: 'table',
          title: 'CÁC LỖI RUNTIME THƯỜNG GẶP VÀ CÁCH XỬ LÝ',
          subtitle: 'Bảng tổng hợp các thông báo ngoại lệ kinh điển trong Python',
          tableData: {
            caption: 'Danh mục các ngoại lệ thường gặp trong quá trình học Python 10',
            headers: ['Tên lỗi (Exception)', 'Nguyên nhân gây lỗi', 'Cách phòng tránh & khắc phục'],
            rows: [
              ['ZeroDivisionError', 'Thực hiện phép chia một số cho 0 (ví dụ: a / 0)', 'Kiểm tra mẫu số khác 0 trước khi thực hiện phép chia'],
              ['IndexError', 'Truy cập chỉ số vượt quá phạm vi danh sách/xâu', 'Kiểm tra len() để đảm bảo chỉ số từ 0 đến len - 1'],
              ['TypeError', 'Thực hiện phép toán sai kiểu dữ liệu (ví dụ: "3" + 5)', 'Dùng int() hoặc float() ép kiểu dữ liệu phù hợp'],
              ['NameError', 'Gọi một biến hoặc tên hàm chưa từng được khai báo', 'Kiểm tra lại chính tả của tên biến và hàm'],
              ['ValueError', 'Giá trị truyền vào hàm không hợp lệ (ví dụ: int("abc"))', 'Kiểm tra tính hợp lệ của xâu trước khi ép sang số'],
            ],
          },
        },
        {
          id: 'b29-s5',
          slideNumber: 5,
          type: 'process',
          title: 'QUY TRÌNH KIỂM THỬ VÀ GỠ LỖI (DEBUGGING)',
          subtitle: 'Các bước bài bản để xác định và khắc phục lỗi logic',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Tạo bộ dữ liệu thử',
                desc: 'Chuẩn bị các trường hợp kiểm thử (Test cases): Thông thường, biên và đặc biệt.',
                tag: 'Thiết kế Test',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Khoanh vùng vị trí lỗi',
                desc: 'Dùng lệnh print() để in giá trị các biến trung gian ở từng đoạn lệnh.',
                tag: 'Chèn Print',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Sửa lỗi và kiểm tra lại',
                desc: 'Chỉnh sửa thuật toán và chạy lại toàn bộ bộ test để đảm bảo không sinh lỗi mới.',
                tag: 'Hồi quy (Regression)',
              },
            ],
          },
        },
        {
          id: 'b29-s6',
          slideNumber: 6,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 29 & 30 VÀ GHI NHỚ TRỌNG TÂM',
          subtitle: 'Cẩm nang kiểm thử và gỡ lỗi cho học sinh',
          bullets: [
            {
              title: '1. Đọc kĩ thông báo lỗi (Traceback):',
              text: 'Python luôn chỉ rõ dòng gây lỗi và tên lỗi cụ thể ở dòng cuối cùng của thông báo.',
            },
            {
              title: '2. Lỗi Logic là thử thách lớn nhất:',
              text: 'Cần lập bảng theo dõi vết biến (Trace table) hoặc in giá trị trung gian để bắt lỗi.',
            },
            {
              title: '3. Thói quen kiểm thử:',
              text: 'Luôn thử với các giá trị biên như 0, số âm, danh sách rỗng để đảm bảo chương trình hoạt động ổn định.',
            },
          ],
        },
        {
          id: 'b29-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Lập bộ test cases và chuẩn bị dự án thực hành tổng hợp',
          lead: 'Học sinh hoàn thành 2 bài tập rèn luyện kỹ năng kiểm thử:',
          bullets: [
            {
              title: 'Bài tập 1: Lập bộ 4 test cases cho phương trình bậc nhất',
              text: 'Cho phương trình ax + b = 0. Thiết kế 4 bộ dữ liệu thử nghiệm bao gồm: a khác 0 (nghiệm duy nhất), a = 0 và b khác 0 (vô nghiệm), a = 0 và b = 0 (vô số nghiệm), và hệ số âm.',
              badge: 'Bộ Test case',
            },
            {
              title: 'Bài tập 2: Chuẩn bị Bài 31 & 32',
              text: 'Đọc trước Bài 31 & 32: Thực hành tổng hợp. Chuẩn bị ý tưởng cho bài toán quản lí điểm hoặc một trò chơi nhỏ trên console.',
              badge: 'Chuẩn bị Bài 31 & 32',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'GỢI Ý TEST CASE BIÊN',
            content: 'Khi kiểm thử các bài toán chia số hoặc giải phương trình, luôn luôn đưa trường hợp a = 0 vào danh sách kiểm tra bắt buộc!',
          },
          footerNote: 'SGK Tin học 10 (trang 143-152) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 31 & 32: THỰC HÀNH TỔNG HỢP VÀ DỰ ÁN LẬP TRÌNH
    // =========================================================================
    {
      id: 'bai-31-32',
      number: '31 & 32',
      title: 'Bài 31 & 32. Thực hành tổng hợp xây dựng và phát triển chương trình Python đơn giản',
      shortTitle: 'Bài 31 & 32: Thực hành tổng hợp',
      chapterId: 'chu-de-7',
      pageStart: 153,
      pageEnd: 162,
      slides: [
        {
          id: 'b31-s1',
          slideNumber: 1,
          type: 'title',
          title: 'THỰC HÀNH TỔNG HỢP XÂY DỰNG CHƯƠNG TRÌNH PYTHON',
          subtitle: 'Chủ đề 7: Dự án lập trình cuối khóa | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Tổng hợp toàn bộ kiến thức: Biến, rẽ nhánh, vòng lặp, List, Xâu và Hàm' },
            { text: 'Trải nghiệm quy trình 4 bước phát triển phần mềm chuẩn chuyên nghiệp' },
            { text: 'Dự án 1: Ứng dụng Quản lý danh sách học sinh và xếp loại học tập' },
            { text: 'Dự án 2: Trò chơi đoán số may mắn tương tác trên console' },
          ],
          badge: 'Bài 31 & 32 • Dự án thực hành',
        },
        {
          id: 'b31-s2',
          slideNumber: 2,
          type: 'process',
          title: 'QUY TRÌNH 4 BƯỚC XÂY DỰNG CHƯƠNG TRÌNH',
          subtitle: 'Chu trình phát triển phần mềm ứng dụng trong bài toán thực tế',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1. XÁC ĐỊNH',
                title: 'Phân tích bài toán',
                desc: 'Xác định rõ dữ liệu đầu vào (Input) và kết quả mong muốn (Output).',
                tag: 'Input / Output',
              },
              {
                stepNumber: '2. THIẾT KẾ',
                title: 'Thiết kế thuật toán',
                desc: 'Chia nhỏ bài toán thành các hàm con độc lập, chọn cấu trúc dữ liệu phù hợp.',
                tag: 'Module hóa',
              },
              {
                stepNumber: '3. LẬP TRÌNH',
                title: 'Viết mã nguồn',
                desc: 'Hiện thực hóa các hàm bằng cú pháp Python sạch, có chú thích rõ ràng.',
                tag: 'Coding',
              },
              {
                stepNumber: '4. KIỂM THỬ',
                title: 'Kiểm thử & Tinh chỉnh',
                desc: 'Chạy thử với các bộ dữ liệu khác nhau để tìm và sửa toàn bộ lỗi.',
                tag: 'Testing',
              },
            ],
          },
        },
        {
          id: 'b31-s3',
          slideNumber: 3,
          type: 'content',
          title: 'DỰ ÁN 1: QUẢN LÝ ĐIỂM VÀ XẾP LOẠI HỌC SINH',
          subtitle: 'Thiết kế các hàm chức năng xử lý danh sách điểm số',
          bullets: [
            {
              title: 'Hàm 1: tinh_trung_binh(ds_diem)',
              text: 'Nhận vào danh sách điểm, tính và trả về điểm trung bình làm tròn 2 chữ số thập phân.',
            },
            {
              title: 'Hàm 2: xep_loai(dtb)',
              text: 'Dựa trên điểm trung bình để phân loại:\n• dtb >= 8.0: Xếp loại "Tốt"\n• 6.5 <= dtb < 8.0: Xếp loại "Khá"\n• 5.0 <= dtb < 6.5: Xếp loại "Đạt"\n• Còn lại: Xếp loại "Chưa đạt"',
            },
            {
              title: 'Hàm 3: tim_thu_khoa(ds_diem)',
              text: 'Tìm giá trị điểm cao nhất trong danh sách bằng hàm max() hoặc vòng lặp.',
            },
          ],
        },
        {
          id: 'b31-s4',
          slideNumber: 4,
          type: 'practice',
          title: 'MÃ NGUỒN PYTHON HOÀN CHỈNH DỰ ÁN 1',
          subtitle: 'Chương trình quản lý điểm học sinh (QuanLyDiem.py)',
          bullets: [
            {
              title: 'Chương trình chính:',
              text: 'def tinh_tb(ds):\n    return round(sum(ds) / len(ds), 2)\n\ndef xep_loai(dtb):\n    if dtb >= 8.0: return "Tốt"\n    elif dtb >= 6.5: return "Khá"\n    elif dtb >= 5.0: return "Đạt"\n    return "Chưa đạt"\n\n# Dữ liệu thử nghiệm\ndiem_lop = [8.5, 9.0, 7.5, 6.0, 10.0]\ndtb_lop = tinh_tb(diem_lop)\nprint("Điểm TB cả lớp:", dtb_lop)\nprint("Xếp loại chung:", xep_loai(dtb_lop))',
              badge: 'Mã Python',
            },
            {
              title: 'Kết quả thực thi:',
              text: 'Điểm TB cả lớp: 8.2\nXếp loại chung: Tốt',
              badge: 'Chạy thành công',
            },
          ],
        },
        {
          id: 'b31-s5',
          slideNumber: 5,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 31 & 32 VÀ BẾ MẠC CHỦ ĐỀ 7',
          subtitle: 'Đánh giá năng lực phát triển phần mềm của học sinh',
          bullets: [
            {
              title: '1. Năng lực giải quyết vấn đề:',
              text: 'Biết cách chuyển đổi một bài toán thực tế thành các hàm và cấu trúc điều khiển trong Python.',
            },
            {
              title: '2. Kỹ năng gỡ lỗi tự chủ:',
              text: 'Tự tin phát hiện nguyên nhân lỗi cú pháp và lỗi logic thông qua kiểm thử và trace table.',
            },
            {
              title: '3. Bước đệm tương lai:',
              text: 'Sẵn sàng tiếp cận Chủ đề 8: Định hướng nghề nghiệp công nghệ thông tin.',
            },
          ],
        },
        {
          id: 'b31-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'NHIỆM VỤ DỰ ÁN & VẬN DỤNG VỀ NHÀ',
          subtitle: 'Hoàn thiện dự án phần mềm và chuẩn bị Chủ đề 8',
          lead: 'Học sinh hoàn thành 2 nhiệm vụ dự án lập trình cá nhân:',
          bullets: [
            {
              title: 'Dự án thực hành: Bổ sung tính năng cho QuanLyDiem.py',
              text: 'Bổ sung thêm hàm dem_hoc_sinh_tot(ds_diem) đếm số lượng học sinh có điểm >= 8.0 và hàm tim_diem_thap_nhat(ds_diem) dùng hàm min().',
              badge: 'Dự án mở rộng',
            },
            {
              title: 'Chuẩn bị Chủ đề 8: Hướng nghiệp Tin học',
              text: 'Đọc trước Bài 33 & 34: Nghề quản trị cơ sở dữ liệu và các ngành nghề công nghệ thông tin trong kỷ nguyên số.',
              badge: 'Chuẩn bị Chủ đề 8',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LỜI KHUYÊN DỰ ÁN',
            content: 'Hãy lưu trữ mã nguồn các bài thực hành cẩn thận vào một thư mục riêng để làm portfolio học tập môn Tin học 10!',
          },
          footerNote: 'SGK Tin học 10 (trang 153-162) • Giáo viên: QuanLHK',
        },
      ],
    },
  ],
};
