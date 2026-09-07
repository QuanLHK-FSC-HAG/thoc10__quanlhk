import { Chapter } from '../types';

export const topic6: Chapter = {
  id: 'chu-de-6',
  number: 6,
  title: 'Chủ đề 6. Cấu trúc dữ liệu và xử lý dữ liệu trong Python',
  description: 'Khái niệm kiểu dữ liệu danh sách (List) và xâu ký tự (String) cùng các phương thức xử lý, biến đổi dữ liệu chuyên sâu trong Python.',
  lessons: [
    // =========================================================================
    // BÀI 22 & 23: DANH SÁCH (LIST) VÀ CÁC PHƯƠNG THỨC XỬ LÝ
    // =========================================================================
    {
      id: 'bai-22-23',
      number: '22 & 23',
      title: 'Bài 22 & 23. Khái niệm kiểu dữ liệu danh sách (List) và các phương thức xử lý dữ liệu danh sách',
      shortTitle: 'Bài 22 & 23: Danh sách (List)',
      chapterId: 'chu-de-6',
      pageStart: 111,
      pageEnd: 120,
      slides: [
        {
          id: 'b22-s1',
          slideNumber: 1,
          type: 'title',
          title: 'KIỂU DỮ LIỆU DANH SÁCH (LIST) VÀ CÁC PHƯƠNG THỨC XỬ LÝ',
          subtitle: 'Chủ đề 6: Cấu trúc dữ liệu trong Python | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Khái niệm kiểu dữ liệu danh sách (List) và cơ chế đánh chỉ số Index' },
            { text: 'Thao tác truy cập, gán đè và kiểm tra thành viên với toán tử in / not in' },
            { text: 'Các phương thức thêm, bớt phần tử: append(), insert(), remove(), pop()' },
            { text: 'Thực hành duyệt danh sách và giải quyết bài toán thống kê dữ liệu' },
          ],
          badge: 'Bài 22 & 23 • Cấu trúc dữ liệu',
        },
        {
          id: 'b22-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: LƯU TRỮ ĐIỂM SỐ CỦA 40 HỌC SINH',
          subtitle: 'Nhu cầu quản lí tập hợp dữ liệu cùng loại (SGK trang 111)',
          cardsGrid: [
            {
              title: 'Cách 1: Khai báo 40 biến riêng lẻ',
              desc: 'd1 = 8.5; d2 = 9.0; d3 = 7.0; ...; d40 = 10.0',
              tag: 'Thủ công',
              points: [
                'Mã nguồn cồng kềnh, khó quản lí',
                'Không thể dùng vòng lặp để tính điểm trung bình',
              ],
            },
            {
              title: 'Cách 2: Sử dụng Danh sách (List)',
              desc: 'Diem = [8.5, 9.0, 7.0, ..., 10.0]',
              tag: 'Tối ưu',
              points: [
                'Gom 40 điểm vào một biến duy nhất',
                'Dễ dàng duyệt, tìm max/min, sắp xếp nhanh chóng',
              ],
            },
          ],
        },
        {
          id: 'b22-s3',
          slideNumber: 3,
          type: 'content',
          title: 'KHÁI NIỆM DANH SÁCH (LIST) TRONG PYTHON',
          subtitle: 'Cú pháp khai báo và đặc tính linh hoạt của danh sách',
          bullets: [
            {
              title: 'Định nghĩa Danh sách:',
              text: 'Danh sách là dãy các phần tử được xếp thứ tự và đặt trong cặp dấu ngoặc vuông [...], phân tách bởi dấu phẩy.',
            },
            {
              title: 'Ví dụ khai báo:',
              text: 'numbers = [1, 3, 5, 7, 9]    # Danh sách số nguyên\nnames = ["Hoa", "Lan", "Mai"]  # Danh sách xâu kí tự\nempty_list = []              # Danh sách rỗng',
            },
            {
              title: 'Hàm len() đo độ dài danh sách:',
              text: 'len(names) trả về 3 (số lượng phần tử hiện có trong danh sách).',
            },
          ],
        },
        {
          id: 'b22-s4',
          slideNumber: 4,
          type: 'diagram',
          title: 'HỆ THỐNG CHỈ SỐ (INDEX) TRONG DANH SÁCH',
          subtitle: 'Cơ chế đánh số vị trí hai chiều: Chỉ số dương và Chỉ số âm',
          svgType: 'python-list',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'CHỈ SỐ DƯƠNG',
                title: 'Từ trái sang phải (0 ➜ n-1)',
                desc: 'Phần tử đầu tiên là A[0], phần tử thứ hai là A[1]... phần tử cuối cùng là A[len-1].',
                tag: 'Index: 0, 1, 2...',
              },
              {
                stepNumber: 'CHỈ SỐ ÂM',
                title: 'Từ phải sang trái (-1 ➜ -n)',
                desc: 'Phần tử cuối cùng là A[-1], áp chót là A[-2]... phần tử đầu tiên là A[-len].',
                tag: 'Index: -1, -2...',
              },
            ],
          },
          highlightBox: {
            type: 'warning',
            title: 'LỖI INDEX ERROR',
            content: 'Nếu danh sách có 4 phần tử (chỉ số 0 đến 3) mà truy cập A[4], Python sẽ báo lỗi "IndexError: list index out of range".',
          },
        },
        {
          id: 'b22-s5',
          slideNumber: 5,
          type: 'table',
          title: 'THAY ĐỔI PHẦN TỬ VÀ TOÁN TỬ THÀNH VIÊN IN',
          subtitle: 'Danh sách trong Python là đối tượng có thể thay đổi (Mutable)',
          tableData: {
            caption: 'Các thao tác truy cập và kiểm tra trên danh sách A = [10, 20, 30, 40]',
            headers: ['Câu lệnh Python', 'Ý nghĩa thao tác', 'Kết quả'],
            rows: [
              ['A[1]', 'Truy cập phần tử tại chỉ số 1', '20'],
              ['A[-1]', 'Truy cập phần tử cuối cùng', '40'],
              ['A[2] = 99', 'Gán đè giá trị 99 vào vị trí chỉ số 2', 'A trở thành [10, 20, 99, 40]'],
              ['20 in A', 'Kiểm tra 20 có nằm trong A không', 'True'],
              ['50 in A', 'Kiểm tra 50 có nằm trong A không', 'False'],
              ['50 not in A', 'Kiểm tra 50 KHÔNG có trong A', 'True'],
            ],
          },
        },
        {
          id: 'b22-s6',
          slideNumber: 6,
          type: 'content',
          title: 'PHƯƠNG THỨC THÊM PHẦN TỬ VÀO DANH SÁCH',
          subtitle: 'Phân biệt hai phương thức quan trọng: append() và insert()',
          cardsGrid: [
            {
              title: 'append(x): Thêm vào cuối',
              desc: 'Thêm phần tử x vào vị trí cuối cùng của danh sách.',
              tag: 'A.append(x)',
              points: [
                'A = [1, 2, 3]',
                'A.append(9) ➜ A = [1, 2, 3, 9]',
                'Độ dài danh sách tăng thêm 1',
              ],
            },
            {
              title: 'insert(i, x): Chèn vào vị trí i',
              desc: 'Chèn phần tử x vào vị trí chỉ số i, các phần tử phía sau lùi lại.',
              tag: 'A.insert(i, x)',
              points: [
                'A = [1, 2, 3]',
                'A.insert(1, 99) ➜ A = [1, 99, 2, 3]',
                'Phần tử tại chỉ số 1 nhận giá trị mới',
              ],
            },
          ],
        },
        {
          id: 'b22-s7',
          slideNumber: 7,
          type: 'content',
          title: 'PHƯƠNG THỨC XÓA PHẦN TỬ KHỎI DANH SÁCH',
          subtitle: 'Ba phương thức xóa phần tử: remove(), pop() và lệnh del',
          bullets: [
            {
              title: 'A.remove(x): Xóa theo giá trị',
              text: 'Xóa phần tử đầu tiên có giá trị bằng x trong danh sách. Nếu x không tồn tại, Python sẽ báo lỗi ValueError.',
            },
            {
              title: 'A.pop(i): Xóa và lấy ra theo chỉ số',
              text: 'Xóa phần tử tại vị trí chỉ số i và trả về giá trị đó. Nếu không truyền i, A.pop() mặc định xóa phần tử cuối cùng.',
            },
            {
              title: 'Lệnh del A[i]: Xóa trực tiếp',
              text: 'Xóa phần tử tại vị trí i mà không cần trả về giá trị. Hoặc del A để xóa hoàn toàn danh sách khỏi bộ nhớ.',
            },
          ],
        },
        {
          id: 'b22-s8',
          slideNumber: 8,
          type: 'process',
          title: 'HAI CÁCH DUYỆT DANH SÁCH BẰNG VÒNG LẶP FOR',
          subtitle: 'Kỹ thuật xử lý từng phần tử trong mảng dữ liệu',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'CÁCH 1',
                title: 'Duyệt theo giá trị',
                desc: 'for x in A:\n    print(x)\nBiến x trực tiếp nhận từng giá trị trong danh sách.',
                tag: 'for x in A',
              },
              {
                stepNumber: 'CÁCH 2',
                title: 'Duyệt theo chỉ số',
                desc: 'for i in range(len(A)):\n    print(i, A[i])\nBiết chính xác vị trí i để cập nhật A[i].',
                tag: 'for i in range(len(A))',
              },
            ],
          },
        },
        {
          id: 'b22-s9',
          slideNumber: 9,
          type: 'practice',
          title: 'THỰC HÀNH: TÍNH ĐIỂM TRUNG BÌNH CẢ LỚP',
          subtitle: 'Bài toán xử lý dữ liệu thực tế bằng Python',
          bullets: [
            {
              title: 'Đề bài:',
              text: 'Cho danh sách điểm thi Tin học: diem = [8.5, 9.0, 7.0, 10.0, 6.5, 8.0]. Viết chương trình tính điểm trung bình cả lớp.',
            },
            {
              title: 'Chương trình mẫu (TinhDiem.py):',
              text: 'diem = [8.5, 9.0, 7.0, 10.0, 6.5, 8.0]\ntong = 0\nfor d in diem:\n    tong = tong + d\ndtb = tong / len(diem)\nprint("Điểm trung bình cả lớp:", round(dtb, 2))',
              badge: 'Mã Python',
            },
            {
              title: 'Kết quả chạy:',
              text: 'Tổng điểm = 49.0; Số học sinh = 6; Điểm trung bình = 8.17.',
              badge: 'Kết quả: 8.17',
            },
          ],
        },
        {
          id: 'b22-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'TRẮC NGHIỆM: KỸ NĂNG XỬ LÝ DANH SÁCH LIST',
          subtitle: 'Kiểm tra nhanh kiến thức về các phương thức của List',
          quiz: {
            question: 'Cho danh sách A = [1, 2, 3]. Sau khi thực hiện lệnh A.append(4) rồi tiếp tục A.insert(1, 9), danh sách A có giá trị là gì?',
            options: [
              'A. [1, 9, 2, 3, 4]',
              'B. [9, 1, 2, 3, 4]',
              'C. [1, 2, 3, 4, 9]',
              'D. [1, 2, 9, 3, 4]',
            ],
            answer: 'Đáp án A: [1, 9, 2, 3, 4].',
            explanation: 'Lệnh A.append(4) biến A thành [1, 2, 3, 4]. Tiếp đó A.insert(1, 9) chèn số 9 vào vị trí chỉ số 1, đẩy các phần tử phía sau sang phải, thu được [1, 9, 2, 3, 4].',
          },
        },
        {
          id: 'b22-s11',
          slideNumber: 11,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 22 & 23 VÀ GHI NHỚ TRỌNG TÂM',
          subtitle: 'Hệ thống hóa toàn bộ kiến thức về kiểu dữ liệu List',
          bullets: [
            {
              title: '1. Bản chất List:',
              text: 'Chứa tập hợp phần tử có thứ tự trong cặp ngoặc [...], chỉ số bắt đầu từ 0 đến len - 1.',
            },
            {
              title: '2. Thêm và xóa:',
              text: 'Thêm bằng append(), insert(); xóa bằng remove(), pop(), del.',
            },
            {
              title: '3. Duyệt danh sách:',
              text: 'Sử dụng vòng lặp for theo giá trị (for x in A) hoặc theo chỉ số (for i in range(len(A))).',
            },
          ],
        },
        {
          id: 'b22-s12',
          slideNumber: 12,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Lập trình quản lí danh sách số và chuẩn bị bài mới',
          lead: 'Học sinh hoàn thành 2 nhiệm vụ củng cố kiến thức Danh sách:',
          bullets: [
            {
              title: 'Bài tập 1: Lọc số chẵn (LocSoChan.py)',
              text: 'Cho danh sách A = [12, 5, 8, 19, 24, 7, 30]. Viết chương trình duyệt qua danh sách A và tạo danh sách mới Chan chứa toàn bộ các số chẵn trong A.',
              badge: 'append()',
            },
            {
              title: 'Bài tập 2: Chuẩn bị Bài 24 & 25',
              text: 'Đọc trước nội dung về Xâu kí tự (String). Tìm hiểu vì sao xâu kí tự trong Python lại là đối tượng bất biến (Immutable).',
              badge: 'Chuẩn bị bài mới',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'GỢI Ý BÀI TẬP 1',
            content: 'Khởi tạo Chan = []. Sử dụng for x in A: if x % 2 == 0: Chan.append(x).',
          },
          footerNote: 'SGK Tin học 10 (trang 111-120) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 24 & 25: XÂU KÝ TỰ (STRING) VÀ CÁC THAO TÁC BIẾN ĐỔI
    // =========================================================================
    {
      id: 'bai-24-25',
      number: '24 & 25',
      title: 'Bài 24 & 25. Kiểu dữ liệu xâu ký tự (String) và các thao tác biến đổi, xử lý xâu',
      shortTitle: 'Bài 24 & 25: Xâu ký tự (String)',
      chapterId: 'chu-de-6',
      pageStart: 121,
      pageEnd: 130,
      slides: [
        {
          id: 'b24-s1',
          slideNumber: 1,
          type: 'title',
          title: 'KIỂU DỮ LIỆU XÂU KÝ TỰ (STRING) VÀ CÁC THAO TÁC XỬ LÝ',
          subtitle: 'Chủ đề 6: Cấu trúc dữ liệu trong Python | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Khái niệm xâu kí tự và TÍNH CHẤT BẤT BIẾN (Immutable) trong Python' },
            { text: 'Các phép toán ghép (+), lặp (*), kiểm tra xâu con (in) và cắt xâu (Slicing)' },
            { text: 'Các phương thức xử lý văn bản: upper(), lower(), split(), join(), find()' },
            { text: 'Thực hành chuẩn hóa họ tên học sinh và đếm tần suất kí tự' },
          ],
          badge: 'Bài 24 & 25 • Xử lý văn bản',
        },
        {
          id: 'b24-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: XỬ LÝ DỮ LIỆU VĂN BẢN TRONG ĐỜI SỐNG',
          subtitle: 'Tầm quan trọng của dữ liệu chuỗi kí tự (SGK trang 121)',
          cardsGrid: [
            {
              title: 'Dữ liệu văn bản thường gặp',
              desc: 'Họ tên, địa chỉ email, mật khẩu, tin nhắn, đoạn văn bản.',
              tag: 'Văn bản',
              points: [
                'Chiếm hơn 80% thông tin trên Internet',
                'Cần các công cụ tìm kiếm, chuẩn hóa và lọc nội dung',
              ],
            },
            {
              title: 'Khái niệm Xâu ký tự (String)',
              desc: 'Dãy tuần tự các kí tự đặt trong cặp dấu nháy đơn \'...\' hoặc nháy kép "...".',
              tag: 'str trong Python',
              points: [
                's = "Tin học 10"',
                'len(s) trả về độ dài tính cả dấu cách (khoảng trắng)',
              ],
            },
          ],
        },
        {
          id: 'b24-s3',
          slideNumber: 3,
          type: 'content',
          title: 'TÍNH CHẤT BẤT BIẾN (IMMUTABLE) CỦA XÂU',
          subtitle: 'Điểm khác biệt then chốt giữa Danh sách (List) và Xâu (String)',
          bullets: [
            {
              title: 'Truy cập phần tử tương tự List:',
              text: 's = "Python"\ns[0] là "P", s[-1] là "n". Chỉ số từ 0 đến len(s) - 1.',
            },
            {
              title: 'KHÔNG THỂ THAY ĐỔI TRỰC TIẾP:',
              text: 'Lệnh gán s[0] = "J" sẽ bị Python báo lỗi ngay: "TypeError: \'str\' object does not support item assignment".',
            },
            {
              title: 'Cách tạo xâu mới khi cần biến đổi:',
              text: 'Muốn đổi chữ đầu thành "J", ta tạo xâu mới: s_moi = "J" + s[1:] ➜ Kết quả: "Jython".',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'LƯU Ý CỐT LÕI',
            content: 'List là đối tượng có thể thay đổi (Mutable); String là đối tượng bất biến (Immutable). Không thể gán đè trực tiếp từng kí tự của xâu.',
          },
        },
        {
          id: 'b24-s4',
          slideNumber: 4,
          type: 'table',
          title: 'CÁC PHÉP TOÁN CƠ BẢN TRÊN XÂU KÝ TỰ',
          subtitle: 'Ghép xâu, lặp xâu, kiểm tra xâu con và cắt xâu (Slicing)',
          tableData: {
            caption: 'Bảng các phép toán trên xâu s = "Tin học 10"',
            headers: ['Phép toán', 'Cú pháp ví dụ', 'Kết quả trả về'],
            rows: [
              ['Ghép xâu (+)', '"Tin" + " " + "học"', '"Tin học"'],
              ['Lặp xâu (*)', '"AB" * 3', '"ABABAB"'],
              ['Kiểm tra xâu con (in)', '"học" in "Tin học"', 'True'],
              ['Kiểm tra vắng mặt (not in)', '"Toán" not in "Tin học"', 'True'],
              ['Cắt xâu con (slicing)', 's[0:3]', '"Tin" (từ chỉ số 0 đến trước 3)'],
            ],
          },
        },
        {
          id: 'b24-s5',
          slideNumber: 5,
          type: 'content',
          title: 'CÁC PHƯƠNG THỨC BIẾN ĐỔI CHỮ HOA & CHỮ THƯỜNG',
          subtitle: 'Chuẩn hóa định dạng văn bản với upper(), lower(), title()',
          cardsGrid: [
            {
              title: 's.upper() & s.lower()',
              desc: 'Chuyển toàn bộ xâu thành in hoa hoặc in thường.',
              tag: 'Hoa / Thường',
              points: [
                '"python".upper() ➜ "PYTHON"',
                '"TIN HOC".lower() ➜ "tin hoc"',
                'Thường dùng khi so sánh xâu không phân biệt hoa thường',
              ],
            },
            {
              title: 's.title() & s.strip()',
              desc: 'Viết hoa chữ cái đầu mỗi từ và xóa khoảng trắng thừa.',
              tag: 'Chuẩn hóa',
              points: [
                '"nguyen van an".title() ➜ "Nguyen Van An"',
                '"  hello  ".strip() ➜ "hello"',
                'Rất hữu ích khi xử lý dữ liệu người dùng nhập vào',
              ],
            },
          ],
        },
        {
          id: 'b24-s6',
          slideNumber: 6,
          type: 'process',
          title: 'TÁCH XÂU VÀ NỐI XÂU: SPLIT() VÀ JOIN()',
          subtitle: 'Hai phương thức then chốt chuyển đổi giữa Xâu và Danh sách',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'TÁCH: s.split()',
                title: 'Từ Xâu thành Danh sách',
                desc: 'Tách xâu thành danh sách các từ dựa trên dấu cách (hoặc kí tự phân cách chỉ định).',
                tag: '"A B C".split() ➜ ["A", "B", "C"]',
              },
              {
                stepNumber: 'NỐI: sep.join(L)',
                title: 'Từ Danh sách thành Xâu',
                desc: 'Nối các phần tử trong danh sách L thành một xâu duy nhất ngăn cách bởi kí tự sep.',
                tag: '" ".join(["A", "B"]) ➜ "A B"',
              },
            ],
          },
        },
        {
          id: 'b24-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'THỰC HÀNH: CHUẨN HÓA HỌ TÊN HỌC SINH',
          subtitle: 'Kết hợp split(), title(), join() để tạo họ tên chuẩn',
          bullets: [
            {
              title: 'Bài toán:',
              text: 'Người dùng nhập vào họ tên có nhiều dấu cách thừa và viết hoa bừa bãi: "   nGuyen    vAn   aN   ". Hãy chuẩn hóa lại thành "Nguyen Van An".',
            },
            {
              title: 'Mã nguồn Python (ChuanHoaTen.py):',
              text: 'ten_raw = "   nGuyen    vAn   aN   "\nwords = ten_raw.split()  # Tách bỏ hết dấu cách thừa\nten_chuan = " ".join(words).title()\nprint("Họ tên sau chuẩn hóa:", ten_chuan)',
              badge: 'Mã Python',
            },
            {
              title: 'Kết quả in ra:',
              text: 'Họ tên sau chuẩn hóa: Nguyen Van An',
              badge: 'Kết quả chính xác',
            },
          ],
        },
        {
          id: 'b24-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'TRẮC NGHIỆM: XỬ LÝ XÂU KÝ TỰ',
          subtitle: 'Kiểm tra thao tác cắt xâu và phương thức split()',
          quiz: {
            question: 'Cho xâu s = "Ha Noi, Viet Nam". Lệnh s.split(", ") sẽ trả về kết quả nào sau đây?',
            options: [
              'A. ["Ha Noi", "Viet Nam"]',
              'B. "Ha Noi Viet Nam"',
              'C. [\'H\', \'a\', \' \', \'N\', \'o\', \'i\']',
              'D. ("Ha Noi", "Viet Nam")',
            ],
            answer: 'Đáp án A: ["Ha Noi", "Viet Nam"].',
            explanation: 'Phương thức s.split(", ") tách xâu s tại vị trí chuỗi phân cách ", " và trả về danh sách gồm 2 phần tử: ["Ha Noi", "Viet Nam"].',
          },
        },
        {
          id: 'b24-s9',
          slideNumber: 9,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 24 & 25 VÀ GHI NHỚ TRỌNG TÂM',
          subtitle: 'Hệ thống hóa các phương thức xử lý xâu ký tự trong Python',
          bullets: [
            {
              title: '1. Tính bất biến:',
              text: 'Xâu không cho phép gán đè trực tiếp kí tự s[i] = ... Muốn thay đổi cần tạo xâu mới.',
            },
            {
              title: '2. Cắt xâu & Tìm kiếm:',
              text: 'Dùng cú pháp s[start:stop] để cắt lát; dùng toán tử in hoặc phương thức find() để tìm kiếm xâu con.',
            },
            {
              title: '3. Tách và nối xâu:',
              text: 'split() chuyển từ xâu sang danh sách từ; join() nối danh sách thành xâu hoàn chỉnh.',
            },
          ],
        },
        {
          id: 'b24-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Lập trình đếm nguyên âm và chuẩn bị Chủ đề 7',
          lead: 'Học sinh hoàn thành 2 nhiệm vụ xử lí văn bản:',
          bullets: [
            {
              title: 'Bài tập 1: Đếm nguyên âm tiếng Anh (DemNguyenAm.py)',
              text: 'Viết chương trình nhập vào một câu tiếng Anh, đếm số lượng nguyên âm (a, e, i, o, u không phân biệt hoa thường) xuất hiện trong câu đó.',
              badge: 'in "aeiou"',
            },
            {
              title: 'Bài tập 2: Chuẩn bị Chủ đề 7',
              text: 'Đọc trước nội dung Chủ đề 7: Phương pháp làm mịn và lập trình theo mô đun (hàm tự định nghĩa trong Python).',
              badge: 'Chuẩn bị Chủ đề 7',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'GỢI Ý BÀI TẬP 1',
            content: 'Duyệt từng kí tự ch trong s.lower(): nếu ch in "aeiou" thì tăng biến đếm lên 1!',
          },
          footerNote: 'SGK Tin học 10 (trang 121-130) • Giáo viên: QuanLHK',
        },
      ],
    },
  ],
};
