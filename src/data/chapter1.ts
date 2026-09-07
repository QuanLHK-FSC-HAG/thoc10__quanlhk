import { Chapter } from '../types';

export const chapter1: Chapter = {
  id: 'chu-de-1',
  number: 1,
  title: 'Chủ đề 1. Máy tính và xã hội tri thức',
  description: 'Khám phá bản chất thông tin, dữ liệu, hệ nhị phân, thiết bị thông minh và vai trò của tin học trong thời đại số.',
  lessons: [
    {
      id: 'bai-1',
      number: 1,
      title: 'Bài 1. Thông tin và xử lí thông tin',
      shortTitle: 'Bài 1: Thông tin & Xử lí thông tin',
      chapterId: 'chu-de-1',
      pageStart: 6,
      pageEnd: 10,
      slides: [
        {
          id: 'b1-s1',
          slideNumber: 1,
          type: 'title',
          title: 'THÔNG TIN VÀ XỬ LÍ THÔNG TIN',
          subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết lí thuyết & thảo luận' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 1 - Mở đầu',
        },
        {
          id: 'b1-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ đạt được:',
          bullets: [
            {
              title: 'Phân biệt thông tin và dữ liệu',
              text: 'Hiểu rõ khái niệm thông tin và dữ liệu, phân biệt được tính độc lập tương đối giữa chúng.',
              badge: 'Kiến thức 1',
            },
            {
              title: 'Chuyển đổi đơn vị lưu trữ dữ liệu',
              text: 'Nắm vững các đơn vị đo dung lượng từ Bit, Byte đến KB, MB, GB, TB, PB... và biết cách quy đổi.',
              badge: 'Kiến thức 2',
            },
            {
              title: 'Nhận biết sự ưu việt của thiết bị số',
              text: 'Nêu được các ưu điểm vượt trội của việc lưu trữ, xử lí và truyền thông tin bằng thiết bị số.',
              badge: 'Kĩ năng 3',
            },
          ],
          footerNote: 'Theo yêu cầu cần đạt Chương trình GDPT 2018 - Môn Tin học 10',
        },
        {
          id: 'b1-s3',
          slideNumber: 3,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: ĐẶT VẤN ĐỀ',
          subtitle: 'Mối quan hệ giữa Tin học, Dữ liệu và Thông tin',
          lead: 'Tin học được định nghĩa là khoa học nghiên cứu các phương pháp và quá trình xử lí thông tin tự động bằng các phương tiện kĩ thuật, chủ yếu bằng máy tính.',
          bullets: [
            {
              title: 'Câu hỏi gợi mở:',
              text: 'Ở cấp THCS, ta đã biết thông tin được biểu diễn trong máy tính bằng các dãy bit (0 và 1). Máy tính xử lí dữ liệu là các dãy bit trong bộ nhớ.',
            },
            {
              title: 'Vấn đề thảo luận:',
              text: 'Vậy dữ liệu và thông tin khác nhau như thế nào? Khi nào dữ liệu trở thành thông tin có ích cho con người?',
            },
          ],
          highlightBox: {
            type: 'note',
            title: 'Suy ngẫm',
            content: 'Dãy kí tự "39°C" xuất hiện trên màn hình là thông tin hay dữ liệu? Nó có ý nghĩa gì đối với dự báo thời tiết và đối với một bác sĩ đang xem bệnh án?',
          },
        },
        {
          id: 'b1-s4',
          slideNumber: 4,
          type: 'process',
          title: '1. THÔNG TIN VÀ DỮ LIỆU',
          subtitle: 'a) Quá trình xử lí thông tin bằng máy tính (Hình 1.1 SGK)',
          lead: 'Thông tin là tất cả những gì mang lại cho chúng ta hiểu biết. Máy tính hỗ trợ đắc lực cho con người trong quá trình nhận thức qua 3 bước cốt lõi:',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'Bước 1',
                title: 'Tiếp nhận dữ liệu',
                desc: 'Từ các thiết bị (chuột, quét hình ảnh...) hoặc từ bàn phím do con người nhập vào máy tính chuyển thành dữ liệu số.',
                tag: 'Input',
              },
              {
                stepNumber: 'Bước 2',
                title: 'Xử lí dữ liệu',
                desc: 'Biến đổi dữ liệu trong bộ nhớ máy tính để tạo ra dữ liệu mới (ví dụ tính nhiệt độ trung bình dự báo Trái Đất nóng lên).',
                tag: 'Processing',
              },
              {
                stepNumber: 'Bước 3',
                title: 'Đưa ra kết quả',
                desc: 'Thể hiện dưới dạng văn bản, âm thanh, hình ảnh... để con người hiểu được, hoặc lưu trữ lên vật mang tin cho xử lí tiếp theo.',
                tag: 'Output / Storage',
              },
            ],
          },
          footerNote: 'Trong máy tính, xử lí thông tin chính là xử lí dữ liệu.',
        },
        {
          id: 'b1-s5',
          slideNumber: 5,
          type: 'content',
          title: 'PHÂN BIỆT DỮ LIỆU VÀ THÔNG TIN',
          subtitle: 'b) Tính độc lập tương đối giữa dữ liệu và thông tin',
          bullets: [
            {
              title: 'Cùng thông tin - Nhiều loại dữ liệu:',
              text: 'Một bài giảng có thể ghi lại bằng vở ghi chép (văn bản), tệp Word của cô giáo hoặc tệp video ghi hình.',
            },
            {
              title: 'Tính toàn vẹn của thông tin:',
              text: 'Nếu dữ liệu không đầy đủ thì không xác định được chính xác thông tin (Ví dụ: "39°C" trong thời tiết là "trời rất nóng", trong bệnh án là "sốt cao").',
            },
            {
              title: 'Cùng một dữ liệu - Cho nhiều thông tin khác nhau:',
              text: 'Dữ liệu thời tiết có thể dùng để tổng hợp phân bố lượng mưa theo vùng, hoặc dự báo khả năng bão đổ bộ.',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'HỘP GHI NHỚ SGK (Trang 7)',
            content: [
              '• Trong tin học, dữ liệu là thông tin đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được.',
              '• Thông tin là ý nghĩa của dữ liệu. Cùng một thông tin có thể được thể hiện bởi nhiều loại dữ liệu khác nhau. Ngược lại, một dữ liệu có thể mang nhiều thông tin khác nhau.',
              '• Thông tin có tính toàn vẹn. Dữ liệu không đầy đủ có thể làm thông tin sai lệch, thậm chí không xác định được.',
            ],
          },
        },
        {
          id: 'b1-s6',
          slideNumber: 6,
          type: 'content',
          title: '2. ĐƠN VỊ LƯU TRỮ DỮ LIỆU',
          subtitle: 'Tổ chức bộ nhớ máy tính: Bit và Byte',
          bullets: [
            {
              title: 'Khái niệm Bit (b):',
              text: 'Đơn vị nhỏ nhất để biểu diễn thông tin, chỉ nhận một trong hai giá trị 0 hoặc 1.',
            },
            {
              title: 'Khái niệm Byte (B):',
              text: 'Đơn vị dữ liệu nhỏ nhất mà máy tính có thể truy cập được trong bộ nhớ. 1 Byte gồm 8 bit.',
            },
            {
              title: 'Tổ chức bội số của Byte:',
              text: 'Máy tính truy cập bộ nhớ theo nhóm byte (2, 4, 8 byte). 4 byte biểu diễn một số thực hoặc số nguyên 32 bit, vừa đúng 4 kí tự La-tinh.',
            },
            {
              title: 'Quy tắc tăng bậc 2^10:',
              text: 'Các đơn vị đo dữ liệu trong máy tính hơn kém nhau 2^10 = 1024 lần (khác với hệ thập phân tăng 1000 lần).',
            },
          ],
        },
        {
          id: 'b1-s7',
          slideNumber: 7,
          type: 'table',
          title: 'BẢNG CÁC ĐƠN VỊ LƯU TRỮ DỮ LIỆU',
          subtitle: 'Bảng 1.1 SGK (Trang 8) - Thứ tự từ nhỏ đến lớn',
          tableData: {
            caption: 'Quy chuẩn đơn vị đo dung lượng bộ nhớ máy tính (bước nhảy 2^10 = 1024)',
            headers: ['Đơn vị', 'Kí hiệu', 'Lượng dữ liệu quy đổi', 'Đơn vị lớn hơn', 'Kí hiệu', 'Lượng dữ liệu quy đổi'],
            rows: [
              ['bit', 'b', '1 bit (0 hoặc 1)', 'Terabyte', 'TB', '2^10 GB = 1 024 GB'],
              ['Byte', 'B', '8 bit', 'Petabyte', 'PB', '2^10 TB = 1 024 TB'],
              ['Kilobyte', 'KB', '2^10 B = 1 024 Byte', 'Exabyte', 'EB', '2^10 PB = 1 024 PB'],
              ['Megabyte', 'MB', '2^10 KB = 1 024 KB', 'Zettabyte', 'ZB', '2^10 EB = 1 024 EB'],
              ['Gigabyte', 'GB', '2^10 MB = 1 024 MB', 'Yottabyte', 'YB', '2^10 ZB = 1 024 ZB'],
            ],
          },
        },
        {
          id: 'b1-s8',
          slideNumber: 8,
          type: 'content',
          title: '3. THIẾT BỊ SỐ: LƯU TRỮ, XỬ LÍ & TRUYỀN THÔNG TIN',
          subtitle: 'Những ưu thế vượt trội so với phương thức truyền thống',
          bullets: [
            {
              title: 'Về lưu trữ:',
              text: 'Dung lượng cực lớn, kích thước nhỏ gọn, chi phí thấp. 1 ổ đĩa cứng 2 TB có thể chứa lượng thông tin ngang với một thư viện trường đại học lớn.',
            },
            {
              title: 'Về xử lí:',
              text: 'Tốc độ cực nhanh và độ chính xác tuyệt đối. Máy tính trung bình thực hiện hàng tỉ phép tính/giây. Siêu máy tính đạt hàng trăm triệu tỉ phép tính/giây (dự báo thời tiết toàn cầu, giải mã gen).',
            },
            {
              title: 'Về truyền thông tin:',
              text: 'Cáp quang truyền hàng triệu kí tự/giây, internet kết nối tức thời khắp toàn cầu, xoá nhoà khoảng cách địa lí.',
            },
            {
              title: 'Tự động hoá:',
              text: 'Thực hiện liên tục không mệt mỏi trong nhiều tháng, nhiều năm với chi phí vận hành thấp.',
            },
          ],
        },
        {
          id: 'b1-s9',
          slideNumber: 9,
          type: 'remember',
          title: 'HỘP GHI NHỚ SGK (Trang 10)',
          subtitle: 'Ưu điểm cốt lõi của thiết bị số trong xã hội hiện đại',
          highlightBox: {
            type: 'remember',
            title: '4 ĐẶC ĐIỂM ƯU VIỆT CỦA THIẾT BỊ SỐ',
            content: [
              '1. Giúp xử lí thông tin rất nhanh với độ chính xác cao và có thể làm việc liên tục không ngừng nghỉ.',
              '2. Có khả năng lưu trữ dữ liệu với dung lượng lớn, giá thành rẻ, tìm kiếm nhanh chóng và dễ dàng.',
              '3. Có khả năng truyền tin với tốc độ rất lớn qua mạng cáp quang và sóng không dây.',
              '4. Giúp thực hiện tự động nhiều công việc một cách chính xác, chi phí thấp và tiện lợi.',
            ],
          },
        },
        {
          id: 'b1-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'LUYỆN TẬP: KIỂM TRA HIỂU BIẾT',
          subtitle: 'Câu hỏi củng cố kiến thức theo SGK Trang 8 & 10',
          quiz: {
            question: 'Câu 1: Định nghĩa nào về Byte là đúng nhất?',
            options: [
              'A. Là một kí tự.',
              'B. Là đơn vị dữ liệu gồm 8 bit.',
              'C. Là đơn vị đo tốc độ của máy tính.',
              'D. Là một dãy gồm 8 chữ số thập phân.',
            ],
            answer: 'Đáp án B: Byte là đơn vị dữ liệu gồm 8 bit.',
            explanation: 'Byte là đơn vị dữ liệu nhỏ nhất mà máy tính truy cập được, 1 Byte = 8 bit. Bit là đơn vị nhỏ nhất biểu diễn 0 hoặc 1.',
          },
        },
        {
          id: 'b1-s11',
          slideNumber: 11,
          type: 'practice',
          title: 'LUYỆN TẬP: TÍNH TOÁN QUY ĐỔI DUNG LƯỢNG',
          subtitle: 'Bài tập 2 SGK Trang 8',
          bullets: [
            {
              title: 'a) Đổi 3 MB sang KB:',
              text: '3 MB = 3 × 1 024 KB = 3 072 KB.',
            },
            {
              title: 'b) Đổi 2 GB sang KB:',
              text: '2 GB = 2 × 1 024 MB = 2 048 MB = 2 048 × 1 024 KB = 2 097 152 KB.',
            },
            {
              title: 'c) Đổi 2 048 B sang KB:',
              text: '2 048 B = 2 048 : 1 024 KB = 2 KB.',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'Ghi nhớ cách nhân / chia',
            content: 'Khi đổi từ đơn vị lớn sang đơn vị liền kề nhỏ hơn, nhân với 1 024 (2^10). Khi đổi từ đơn vị nhỏ sang đơn vị liền kề lớn hơn, chia cho 1 024.',
          },
        },
        {
          id: 'b1-s12',
          slideNumber: 12,
          type: 'apply',
          title: 'VẬN DỤNG THỰC TIỄN',
          subtitle: 'Thẻ Căn cước công dân gắn chip điện tử (Trang 10)',
          bullets: [
            {
              title: 'Dữ liệu in trên bề mặt thẻ:',
              text: 'Số CCCD, họ tên, ngày sinh, giới tính, quê quán, nơi thường trú... được thể hiện dưới dạng văn bản và hình ảnh để người bình thường đọc trực tiếp.',
            },
            {
              title: 'Dữ liệu mã hoá trong chip và mã QR:',
              text: 'Được chuyển đổi thành dãy bit nhị phân lưu trong vi mạch của chip để máy quét chuyên dụng đọc tức thời, xác thực vân tay và sinh trắc học.',
            },
            {
              title: 'Lợi ích thực tế:',
              text: 'Chống làm giả, bảo mật cao, tích hợp thông tin bảo hiểm y tế, bằng lái xe, thủ tục hành chính nhanh chóng.',
            },
          ],
        },
        {
          id: 'b1-s13',
          slideNumber: 13,
          type: 'summary',
          title: 'TỔNG KẾT BÀI HỌC',
          subtitle: 'Những kiến thức cốt lõi cần ghi nhớ của Bài 1',
          bullets: [
            {
              title: 'Dữ liệu và Thông tin:',
              text: 'Dữ liệu là đầu vào, xử lí tạo ra thông tin có ý nghĩa đối với người tiếp nhận.',
            },
            {
              title: 'Đơn vị đo dữ liệu:',
              text: 'Bit (0/1), Byte (8 bit), hệ thống nhân 1 024 (KB, MB, GB, TB, PB...).',
            },
            {
              title: 'Thiết bị số:',
              text: 'Lưu trữ cực lớn, tính toán siêu nhanh, truyền tin tức thời, tự động hóa cao.',
            },
          ],
          highlightBox: {
            type: 'note',
            title: 'Chuẩn bị cho Bài 2',
            content: 'Tìm hiểu về các thiết bị thông minh quanh em: Smartphone, Smart TV, Robot hút bụi... và vai trò trong Cách mạng công nghiệp 4.0.',
          },
          badge: 'Hoàn thành Bài 1',
        },
      ],
    },
    {
      id: 'bai-2',
      number: 2,
      title: 'Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội',
      shortTitle: 'Bài 2: Thiết bị thông minh & Tin học',
      chapterId: 'chu-de-1',
      pageStart: 11,
      pageEnd: 15,
      slides: [
        {
          id: 'b2-s1',
          slideNumber: 1,
          type: 'title',
          title: 'VAI TRÒ CỦA THIẾT BỊ THÔNG MINH VÀ TIN HỌC ĐỐI VỚI XÃ HỘI',
          subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 2 - Thiết bị thông minh',
        },
        {
          id: 'b2-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Nhận biết thiết bị thông minh:',
              text: 'Nhận biết được một số thiết bị thông minh thông dụng và nêu được ví dụ cụ thể.',
            },
            {
              title: 'Hiểu vai trò trong CMCN lần thứ tư:',
              text: 'Biết được vai trò của thiết bị thông minh trong xã hội và trong cuộc Cách mạng công nghiệp 4.0.',
            },
            {
              title: 'Đánh giá vai trò của Tin học:',
              text: 'Biết vai trò của tin học đối với xã hội và nêu được các ví dụ minh họa sinh động.',
            },
            {
              title: 'Nắm được các thành tựu nổi bật:',
              text: 'Biết các thành tựu nổi bật của ngành Tin học về phần cứng, phần mềm, mạng, Internet và AI.',
            },
          ],
        },
        {
          id: 'b2-s3',
          slideNumber: 3,
          type: 'content',
          title: '1. THIẾT BỊ THÔNG MINH',
          subtitle: 'a) Thiết bị thông minh là một hệ thống xử lí thông tin',
          lead: 'Thiết bị thông minh là các thiết bị điện tử có thể hoạt động một cách tự chủ trong một mức độ nhất định nhờ các phần mềm điều khiển cài sẵn.',
          bullets: [
            {
              title: 'Khả năng tương tác:',
              text: 'Có khả năng kết nối không dây (Wifi, Bluetooth, 4G/5G...) để tiếp nhận, xử lí và truyền dữ liệu tự động với các thiết bị khác.',
            },
            {
              title: 'Ví dụ tiêu biểu:',
              text: 'Điện thoại thông minh (smartphone), máy tính bảng, camera giám sát tự động nhận dạng khuôn mặt và chuyển động, robot hút bụi thông minh.',
            },
            {
              title: 'Tích hợp Trí tuệ nhân tạo (AI):',
              text: 'Bắt chước tư duy con người: giao tiếp bằng giọng nói (Siri, Google Assistant), xe tự hành nhận diện biển báo và giảm tốc độ tránh va chạm.',
            },
          ],
        },
        {
          id: 'b2-s4',
          slideNumber: 4,
          type: 'diagram',
          title: '4 CUỘC CÁCH MẠNG CÔNG NGHIỆP',
          subtitle: 'Hình 2.2 SGK Trang 12 - Tiến trình phát triển của văn minh nhân loại',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: 'CMCN 1.0 (Cuối TK XVIII)',
                title: 'Động cơ hơi nước',
                desc: 'Chuyển từ lao động thủ công sang cơ giới hoá với dấu ấn là động cơ hơi nước.',
              },
              {
                stepNumber: 'CMCN 2.0 (Cuối TK XIX)',
                title: 'Năng lượng điện',
                desc: 'Điện năng được phổ biến; phát minh dây chuyền sản xuất tập trung hàng loạt.',
              },
              {
                stepNumber: 'CMCN 3.0 (Cuối TK XX)',
                title: 'Máy tính & Điện tử',
                desc: 'Máy tính hỗ trợ con người trong hoạt động trí tuệ; Tin học làm thay đổi toàn diện cuộc sống.',
              },
              {
                stepNumber: 'CMCN 4.0 (Đầu TK XXI)',
                title: 'IoT, AI & Hệ thống thực - ảo',
                desc: 'Hệ thống IoT và thực - ảo phổ biến; tích hợp AI, Điện toán đám mây (Cloud), Dữ liệu lớn (Big Data).',
              },
            ],
          },
        },
        {
          id: 'b2-s5',
          slideNumber: 5,
          type: 'remember',
          title: 'HỘP GHI NHỚ: THIẾT BỊ THÔNG MINH & IOT',
          subtitle: 'Trích Hộp kiến thức cốt lõi SGK Trang 13',
          highlightBox: {
            type: 'remember',
            title: 'KIẾN THỨC CỐT LÕI',
            content: [
              '• Thiết bị thông minh là thiết bị điện tử có thể hoạt động tự chủ không cần sự can thiệp của con người, tự thích ứng với hoàn cảnh và có khả năng kết nối với các thiết bị khác để trao đổi dữ liệu.',
              '• Thiết bị thông minh đóng vai trò chủ chốt trong các hệ thống IoT (Internet of Things - Internet vạn vật) – một nội dung cơ bản của cuộc Cách mạng công nghiệp 4.0.',
            ],
          },
        },
        {
          id: 'b2-s6',
          slideNumber: 6,
          type: 'content',
          title: '2. ĐÓNG GÓP CỦA TIN HỌC VỚI XÃ HỘI',
          subtitle: 'a) Ứng dụng trong mọi lĩnh vực đời sống (Trang 13-14)',
          bullets: [
            {
              title: 'Quản lí:',
              text: 'Trường học quản lí kết quả học tập (sổ điểm điện tử); Ngân hàng quản lí tài khoản; Doanh nghiệp quản lí chuỗi cung ứng, kế toán.',
            },
            {
              title: 'Tự động hoá:',
              text: 'Robot hàn tự động, dây chuyền sản xuất vi mạch, thiết bị thông minh làm việc trong môi trường nguy hiểm (nhà máy hạt nhân, đáy biển).',
            },
            {
              title: 'Khoa học kĩ thuật:',
              text: 'Tính toán mô phỏng thời tiết bão lũ, giải mã hệ gen người, thiết kế máy bay, vũ trụ.',
            },
            {
              title: 'Thay đổi cách làm việc & Giao tiếp:',
              text: 'Dạy học trực tuyến, làm việc từ xa, thương mại điện tử, mạng xã hội kết nối toàn cầu tức thời.',
            },
          ],
        },
        {
          id: 'b2-s7',
          slideNumber: 7,
          type: 'content',
          title: 'MỘT SỐ THÀNH TỰU PHÁT TRIỂN CỦA TIN HỌC',
          subtitle: 'b) Các mốc son lịch sử định hình thế giới số (Trang 14-15)',
          bullets: [
            {
              title: 'Hệ điều hành:',
              text: 'OS/360 (1964 của IBM), tiếp nối là DOS, Windows, macOS, Linux, Android và iOS trên di động.',
            },
            {
              title: 'Mạng máy tính & Internet:',
              text: 'Năm 1983 chuẩn hóa giao thức TCP/IP. Năm 1992 phát minh World Wide Web (WWW) mở ra kỉ nguyên web toàn cầu.',
            },
            {
              title: 'Ngôn ngữ lập trình bậc cao:',
              text: 'FORTRAN (1957), COBOL, Pascal, C, C++, Java và Python giúp lập trình viên viết giải thuật độc lập với phần cứng.',
            },
            {
              title: 'Hệ quản trị cơ sở dữ liệu (DBMS):',
              text: 'Ra đời cuối thập niên 1960; mô hình CSDL quan hệ với DB2, Oracle, MS SQL Server, MySQL.',
            },
            {
              title: 'Trí tuệ nhân tạo & Dữ liệu lớn:',
              text: 'Học máy (Machine Learning), xử lí ngôn ngữ tự nhiên, thị giác máy tính đang bùng nổ mạnh mẽ.',
            },
          ],
        },
        {
          id: 'b2-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'LUYỆN TẬP: NHẬN DIỆN THIẾT BỊ THÔNG MINH',
          subtitle: 'Câu hỏi kiểm tra nhanh theo bài tập SGK',
          quiz: {
            question: 'Trong các thiết bị sau, thiết bị nào KHÔNG PHẢI là thiết bị thông minh?',
            options: [
              'A. Điện thoại iPhone có trợ lí ảo Siri.',
              'B. Camera an ninh tự động phát cảnh báo khi có chuyển động lạ.',
              'C. Đồng hồ cơ dây cót đeo tay truyền thống.',
              'D. Robot hút bụi tự vẽ bản đồ phòng và quay về trạm sạc.',
            ],
            answer: 'Đáp án C: Đồng hồ cơ dây cót đeo tay truyền thống.',
            explanation: 'Đồng hồ cơ chỉ hoạt động theo cơ cấu bánh răng, không có bộ vi xử lí, không kết nối mạng không dây và không tự chủ thích ứng.',
          },
        },
        {
          id: 'b2-s9',
          slideNumber: 9,
          type: 'apply',
          title: 'VẬN DỤNG: GIAO THÔNG THÔNG MINH & XE TỰ HÀNH',
          subtitle: 'Ứng dụng thực tiễn của CMCN 4.0 trong đời sống',
          bullets: [
            {
              title: 'Hệ thống giám sát giao thông bằng camera:',
              text: 'Tự động nhận diện biển số xe vi phạm (phạt nguội), điều chỉnh nhịp đèn tín hiệu theo mật độ xe thực tế giảm ùn tắc.',
            },
            {
              title: 'Xe tự hành (Self-driving car):',
              text: 'Sử dụng cảm biến Lidar, radar, camera cùng thuật toán AI để xử lí dữ liệu thời gian thực, tự động bẻ lái, giữ làn đường và phanh khẩn cấp.',
            },
            {
              title: 'Lợi ích kinh tế - xã hội:',
              text: 'Giảm tai nạn giao thông do yếu tố con người, tối ưu hóa năng lượng, hạn chế ô nhiễm môi trường.',
            },
          ],
          badge: 'Vận dụng thực tiễn',
        },
      ],
    },
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
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 3 - Dữ liệu văn bản',
        },
        {
          id: 'b3-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Phân loại dữ liệu trong tin học:',
              text: 'Nêu được các loại thông tin và các kiểu dữ liệu thường gặp trong chương trình tin học.',
            },
            {
              title: 'Nắm vững các bảng mã chuẩn:',
              text: 'Biết được các bảng mã thông dụng: ASCII và Unicode, hiểu cách biểu diễn tiếng Việt có dấu.',
            },
            {
              title: 'Hiểu về số hoá văn bản:',
              text: 'Giải thích được sơ lược về việc số hoá văn bản trong máy tính điện tử.',
            },
          ],
        },
        {
          id: 'b3-s3',
          slideNumber: 3,
          type: 'diagram',
          title: 'PHÂN LOẠI DỮ LIỆU TRONG MÁY TÍNH',
          subtitle: 'Sơ đồ phân loại các kiểu dữ liệu cơ bản (Hình 3.2 SGK Trang 16)',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: '1',
                title: 'Dữ liệu Văn bản',
                desc: 'Các kí tự, chữ cái, từ, câu văn bản (kí tự, xâu kí tự hay chuỗi string).',
              },
              {
                stepNumber: '2',
                title: 'Dữ liệu Số',
                desc: 'Số nguyên (integer) và số thực (float) phục vụ tính toán toán học và so sánh.',
              },
              {
                stepNumber: '3',
                title: 'Dữ liệu Lôgic',
                desc: 'Chỉ nhận một trong hai giá trị Đúng (True / 1) hoặc Sai (False / 0).',
              },
              {
                stepNumber: '4',
                title: 'Đa phương tiện',
                desc: 'Hình ảnh, âm thanh, video được số hóa thành các chuỗi bit nhị phân.',
              },
            ],
          },
        },
        {
          id: 'b3-s4',
          slideNumber: 4,
          type: 'content',
          title: 'BẢNG MÃ ASCII (MỸ)',
          subtitle: 'Chuẩn mã hóa kí tự đầu tiên trong tin học',
          bullets: [
            {
              title: 'ASCII chuẩn (7 bit):',
              text: 'American Standard Code for Information Interchange. Dùng 7 bit mã hoá 128 kí tự (2^7), đủ cho chữ cái tiếng Anh, chữ số 0-9 và kí tự điều khiển.',
            },
            {
              title: 'ASCII mở rộng (8 bit):',
              text: 'Dùng 8 bit mã hoá 256 kí tự (2^8 = 256), thêm các kí tự đặc biệt và kí hiệu ngôn ngữ châu Âu.',
            },
            {
              title: 'Ví dụ mã hoá kí tự "A":',
              text: 'Kí tự "A" có số thứ tự 65 trong bảng thập phân, biểu diễn thành mã nhị phân 8 bit là 01000001.',
            },
          ],
          highlightBox: {
            type: 'warning',
            title: 'Hạn chế của ASCII',
            content: 'Chỉ có tối đa 256 vị trí mã, không thể đáp ứng cho các ngôn ngữ có dấu như tiếng Việt (134 nguyên âm có dấu) hay chữ tượng hình Trung Quốc, Nhật Bản.',
          },
        },
        {
          id: 'b3-s5',
          slideNumber: 5,
          type: 'content',
          title: 'BẢNG MÃ UNICODE & TIẾNG VIỆT',
          subtitle: 'Bảng mã hợp nhất toàn cầu đa ngôn ngữ (Trang 17-18)',
          bullets: [
            {
              title: 'Bản chất Unicode:',
              text: 'Được thiết kế để mã hoá hàng trăm nghìn kí tự của mọi ngôn ngữ trên thế giới trên cùng một hệ thống mã nhất quán.',
            },
            {
              title: 'Định dạng UTF-8 phổ biến nhất:',
              text: 'Độ dài mã thay đổi linh hoạt từ 1 đến 4 byte. Kí tự La-tinh cơ bản chỉ mất 1 byte (tương thích ASCII); tiếng Việt có dấu mất 2 đến 3 byte.',
            },
            {
              title: 'Quy chuẩn Việt Nam:',
              text: 'Tiêu chuẩn TCVN 6909:2001 quy định bắt buộc sử dụng bộ mã kí tự Unicode cho trao đổi dữ liệu điện tử của cơ quan nhà nước.',
            },
          ],
          highlightBox: {
            type: 'remember',
            title: 'HỘP GHI NHỚ SGK (Trang 18)',
            content: [
              '• Bảng mã ASCII mở rộng sử dụng 8 bit để biểu diễn một kí tự.',
              '• Unicode là bảng mã hợp nhất quốc tế, cho phép tạo ra các ứng dụng đa ngôn ngữ. Mỗi kí tự Unicode có thể được mã hoá bởi nhiều byte (1 đến 4 byte).',
            ],
          },
        },
        {
          id: 'b3-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'LUYỆN TẬP: CÂU HỎI TRẮC NGHIỆM',
          subtitle: 'Kiểm tra kiến thức về Unicode & Kiểu dữ liệu (Trang 19)',
          quiz: {
            question: 'Tại sao cần xây dựng bảng mã Unicode thay vì chỉ dùng bảng mã ASCII?',
            options: [
              'A. Để đảm bảo bình đẳng cho mọi quốc gia trong ứng dụng tin học.',
              'B. Bảng mã ASCII có giá thành thiết bị lưu trữ ngày càng rẻ.',
              'C. Dùng một bảng mã chung cho mọi quốc gia, giải quyết vấn đề thiếu vị trí cho bộ kí tự các nước và dùng đồng thời nhiều ngôn ngữ trong cùng ứng dụng.',
              'D. Dùng riêng cho các quốc gia sử dụng chữ tượng hình.',
            ],
            answer: 'Đáp án C là chính xác nhất theo SGK Trang 18.',
            explanation: 'ASCII mở rộng chỉ có 256 vị trí nên dẫn tới tình trạng mỗi nước tự làm một bảng mã cục bộ (như VNI, TCVN3). Unicode hợp nhất tất cả thành một chuẩn toàn cầu.',
          },
        },
      ],
    },
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
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 4 - Hệ nhị phân',
        },
        {
          id: 'b4-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Hiểu bản chất hệ nhị phân:',
              text: 'Biết được hệ nhị phân và cách biểu diễn số nguyên trong máy tính điện tử.',
            },
            {
              title: 'Kĩ năng chuyển đổi cơ số:',
              text: 'Thực hiện thành thạo phép đổi từ hệ thập phân sang hệ nhị phân và ngược lại.',
            },
            {
              title: 'Cộng nhân số học nhị phân:',
              text: 'Nắm được các quy tắc cộng và nhân hai số nhị phân đơn giản.',
            },
            {
              title: 'Giải thích ứng dụng:',
              text: 'Giải thích được ứng dụng của hệ nhị phân trong thiết kế phần cứng và phần mềm máy tính.',
            },
          ],
        },
        {
          id: 'b4-s3',
          slideNumber: 3,
          type: 'content',
          title: '1. HỆ NHỊ PHÂN & CÁCH BIỂU DIỄN',
          subtitle: 'Cơ số 2: Chỉ dùng hai chữ số 0 và 1',
          bullets: [
            {
              title: 'Khái niệm:',
              text: 'Hệ nhị phân là hệ đếm cơ số 2. Mỗi chữ số ở một hàng có giá trị gấp 2 lần chữ số ở hàng liền kề bên phải nó (lũy thừa 2^k).',
            },
            {
              title: 'Ví dụ biểu diễn số 19 thập phân:',
              text: '19 = 16 + 2 + 1 = 1 × 2^4 + 0 × 2^3 + 0 × 2^2 + 1 × 2^1 + 1 × 2^0 = 10011_2.',
            },
            {
              title: 'Quy ước ghi kí hiệu cơ số:',
              text: 'Để tránh nhầm lẫn giữa hệ thập phân và nhị phân, ta viết cơ số làm chỉ số dưới: 19_10 hay 10011_2.',
            },
          ],
        },
        {
          id: 'b4-s4',
          slideNumber: 4,
          type: 'process',
          title: 'THUẬT TOÁN ĐỔI THẬP PHÂN SANG NHỊ PHÂN',
          subtitle: 'Quy tắc chia liên tiếp cho 2 lấy phần dư (Hình 4.1 SGK Trang 21)',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '19 : 2',
                title: 'Thương = 9, Dư 1',
                desc: 'Phần dư d0 = 1 (chữ số hàng đơn vị cuối cùng)',
              },
              {
                stepNumber: '9 : 2',
                title: 'Thương = 4, Dư 1',
                desc: 'Phần dư d1 = 1',
              },
              {
                stepNumber: '4 : 2',
                title: 'Thương = 2, Dư 0',
                desc: 'Phần dư d2 = 0',
              },
              {
                stepNumber: '2 : 2',
                title: 'Thương = 1, Dư 0',
                desc: 'Phần dư d3 = 0',
              },
              {
                stepNumber: '1 : 2',
                title: 'Thương = 0, Dư 1',
                desc: 'Phần dư d4 = 1. Kết thúc chia!',
              },
            ],
          },
          highlightBox: {
            type: 'remember',
            title: 'Quy tắc ghi kết quả',
            content: 'Viết các số dư theo chiều từ DƯỚI LÊN TRÊN: ta được số nhị phân 10011_2 = 19_10.',
          },
        },
        {
          id: 'b4-s5',
          slideNumber: 5,
          type: 'table',
          title: '2. CÁC PHÉP TÍNH SỐ HỌC TRONG HỆ NHỊ PHÂN',
          subtitle: 'Bảng cộng và nhân cơ bản (Bảng 4.1 SGK Trang 22)',
          tableData: {
            caption: 'Quy tắc cộng và nhân hai bit x và y',
            headers: ['x', 'y', 'Phép cộng: x + y', 'Phép nhân: x × y'],
            rows: [
              ['0', '0', '0', '0'],
              ['0', '1', '1', '0'],
              ['1', '0', '1', '0'],
              ['1', '1', '10 (ghi 0, nhớ 1 sang hàng bên trái)', '1'],
            ],
          },
          footerNote: 'Lưu ý trong hệ nhị phân: 1 + 1 = 10 (đọc là một không, bằng 2 trong hệ thập phân).',
        },
        {
          id: 'b4-s6',
          slideNumber: 6,
          type: 'process',
          title: 'QUY TRÌNH THỰC HIỆN TÍNH TOÁN TRONG MÁY TÍNH',
          subtitle: 'Hình 4.4 SGK Trang 23 - Chu trình 3 giai đoạn của CPU',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'Bước 01',
                title: 'Mã hoá dữ liệu',
                desc: 'Chuyển các số thập phân từ bàn phím sang dạng nhị phân trong bộ nhớ.',
                tag: 'Encode',
              },
              {
                stepNumber: 'Bước 02',
                title: 'Thực hiện phép tính',
                desc: 'Bộ xử lí số học và lôgic (ALU) thực hiện các phép tính cộng, nhân trong hệ nhị phân.',
                tag: 'Binary Compute',
              },
              {
                stepNumber: 'Bước 03',
                title: 'Giải mã kết quả',
                desc: 'Đổi kết quả từ hệ nhị phân sang hệ thập phân hiển thị lên màn hình cho con người.',
                tag: 'Decode',
              },
            ],
          },
        },
        {
          id: 'b4-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'LUYỆN TẬP: THỰC HIỆN PHÉP TÍNH',
          subtitle: 'Bài tập 1 SGK Trang 23: 101101 + 11001',
          bullets: [
            {
              title: 'Cộng từng cột từ phải sang trái:',
              text: '  101101\n+  011001\n= 1000110',
            },
            {
              title: 'Kiểm tra bằng hệ thập phân:',
              text: '101101_2 = 32 + 8 + 4 + 1 = 45\n11001_2 = 16 + 8 + 1 = 25\nTổng = 45 + 25 = 70_10 = 1000110_2 (Chính xác!)',
            },
          ],
          badge: 'Bài tập thực hành',
        },
      ],
    },
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
          title: 'DỮ LIỆU LÔGIC',
          subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 5 - Đại số Boole',
        },
        {
          id: 'b5-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Hiểu giá trị chân lí:',
              text: 'Biết được giá trị chân lí và các phép toán lôgic cơ bản: AND, OR, XOR, NOT.',
            },
            {
              title: 'Biểu diễn dữ liệu lôgic:',
              text: 'Biết cách biểu diễn dữ liệu lôgic trong máy tính bằng bit 1 (True) và bit 0 (False).',
            },
            {
              title: 'Vận dụng biểu thức lôgic:',
              text: 'Biết lập bảng chân trị và ứng dụng trong mạch đóng/mở công tắc điện.',
            },
          ],
        },
        {
          id: 'b5-s3',
          slideNumber: 3,
          type: 'content',
          title: '1. MỆNH ĐỀ & ĐẠI SỐ LÔGIC',
          subtitle: 'Nhà toán học George Boole (1815 - 1864)',
          bullets: [
            {
              title: 'Khái niệm Mệnh đề:',
              text: 'Mệnh đề là một khẳng định có tính chất hoặc đúng hoặc sai. Không thể vừa đúng vừa sai.',
            },
            {
              title: 'Giá trị chân lí (Truth value):',
              text: 'Giá trị "Đúng" thường kí hiệu là True (hoặc 1). Giá trị "Sai" thường kí hiệu là False (hoặc 0).',
            },
            {
              title: 'Ý nghĩa trong máy tính:',
              text: 'Việc thiết kế các vi mạch điện tử tính toán trong CPU dựa hoàn toàn trên đại số lôgic Boole.',
            },
          ],
        },
        {
          id: 'b5-s4',
          slideNumber: 4,
          type: 'table',
          title: 'BẢNG CÁC PHÉP TOÁN LÔGIC CƠ BẢN',
          subtitle: 'Bảng 5.2 SGK Trang 25 - Bảng chân trị các phép toán AND, OR, XOR, NOT',
          tableData: {
            caption: 'Kết quả các phép toán lôgic trên hai mệnh đề p và q',
            headers: ['p', 'q', 'p AND q (VÀ)', 'p OR q (HOẶC)', 'p XOR q (LOẠI TRỪ)', 'NOT p (PHỦ ĐỊNH)'],
            rows: [
              ['1 (Đúng)', '1 (Đúng)', '1', '1', '0', '0 (Sai)'],
              ['1 (Đúng)', '0 (Sai)', '0', '1', '1', '0 (Sai)'],
              ['0 (Sai)', '1 (Đúng)', '0', '1', '1', '1 (Đúng)'],
              ['0 (Sai)', '0 (Sai)', '0', '0', '0', '1 (Đúng)'],
            ],
          },
        },
        {
          id: 'b5-s5',
          slideNumber: 5,
          type: 'remember',
          title: 'HỘP GHI NHỚ: ĐẶC ĐIỂM CÁC PHÉP TOÁN LÔGIC',
          subtitle: 'SGK Trang 26',
          highlightBox: {
            type: 'remember',
            title: 'QUY TẮC NHỚ NHANH',
            content: [
              '• p AND q chỉ đúng khi CẢ p VÀ q ĐỀU ĐÚNG.',
              '• p OR q đúng khi CÓ ÍT NHẤT MỘT TRONG HAI p HOẶC q ĐÚNG.',
              '• p XOR q chỉ đúng khi p VÀ q CÓ GIÁ TRỊ KHÁC NHAU (một đúng một sai).',
              '• NOT p cho giá trị đảo ngược: đúng thành sai, sai thành đúng.',
            ],
          },
        },
        {
          id: 'b5-s6',
          slideNumber: 6,
          type: 'apply',
          title: 'VẬN DỤNG: MẠCH CÔNG TẮC ĐIỆN VÀ BÓNG ĐÈN',
          subtitle: 'Hình 5.5 & 5.6 SGK Trang 27',
          bullets: [
            {
              title: 'Mạch hai công tắc K1 và K2 mắc NỐI TIẾP:',
              text: 'Đèn chỉ sáng khi cả K1 ĐÓNG và K2 ĐÓNG. Đây chính là mô hình vật lí của phép toán AND: Đèn = K1 AND K2.',
            },
            {
              title: 'Mạch hai công tắc K1 và K2 mắc SONG SONG:',
              text: 'Chỉ cần một trong hai công tắc đóng là đèn sáng. Đây là mô hình vật lí của phép toán OR: Đèn = K1 OR K2.',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'Ý nghĩa công nghệ',
            content: 'Hàng tỉ bóng bán dẫn (transistor) trong chip vi xử lí máy tính hoạt động như các công tắc điện siêu nhỏ thực hiện các phép tính lôgic này ở tốc độ nano giây.',
          },
        },
      ],
    },
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
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 6 - Số hóa đa phương tiện',
        },
        {
          id: 'b6-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Số hoá âm thanh:',
              text: 'Giải thích được nguyên lí số hoá âm thanh (phương pháp điều chế mã xung PCM, lấy mẫu, lượng tử hoá).',
            },
            {
              title: 'Số hoá hình ảnh:',
              text: 'Hiểu được cách biểu diễn hình ảnh kĩ thuật số: hệ màu RGB, điểm ảnh (pixel), độ sâu màu (bit depth).',
            },
            {
              title: 'Các định dạng tệp đa phương tiện:',
              text: 'Phân biệt được các định dạng nén có mất mát và không mất mát (WAV, MP3, BMP, JPEG, PNG).',
            },
          ],
        },
        {
          id: 'b6-s3',
          slideNumber: 3,
          type: 'process',
          title: '1. SỐ HOÁ ÂM THANH',
          subtitle: 'Phương pháp điều chế mã xung PCM (Pulse Code Modulation)',
          lead: 'Sóng âm tự nhiên là tín hiệu tương tự (analog) biến thiên liên tục theo thời gian.',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'Bước 1',
                title: 'Lấy mẫu (Sampling)',
                desc: 'Đo biên độ tín hiệu âm thanh ở những chu kì thời gian rời rạc cách đều nhau.',
              },
              {
                stepNumber: 'Bước 2',
                title: 'Lượng tử hoá mẫu',
                desc: 'Quy đổi biên độ đo được vào thang mức rời rạc (ví dụ thang 256 mức = 8 bit, từ 0 đến 255).',
              },
              {
                stepNumber: 'Bước 3',
                title: 'Biểu diễn mã nhị phân',
                desc: 'Lưu chuỗi giá trị nhị phân vào bộ nhớ tạo thành tệp âm thanh số.',
              },
            ],
          },
          footerNote: 'Bộ ADC (Analog to Digital Converter) chuyển tín hiệu micro thành dữ liệu số. DAC làm ngược lại để phát ra loa.',
        },
        {
          id: 'b6-s4',
          slideNumber: 4,
          type: 'content',
          title: 'CÁC ĐỊNH DẠNG TỆP ÂM THANH',
          subtitle: 'Nén không mất mát (Lossless) vs Nén có mất mát (Lossy)',
          bullets: [
            {
              title: 'Định dạng WAV / Lossless:',
              text: 'Không làm giảm chất lượng âm thanh, giữ nguyên vẹn chi tiết sóng âm gốc nhưng tệp có dung lượng rất lớn.',
            },
            {
              title: 'Định dạng MP3 / Lossy:',
              text: 'Lược bỏ một phần thông tin âm thanh ở dải tần mà tai người khó nhận biết. Giảm kích thước tệp khoảng 10 lần so với WAV mà tai thường vẫn nghe tốt.',
            },
            {
              title: 'Tốc độ bit (Bit-rate):',
              text: 'Số bit cần thiết để biểu diễn 1 giây âm thanh (ví dụ: 128 kbps, 320 kbps). Bit-rate càng cao thì âm thanh càng trung thực.',
            },
          ],
        },
        {
          id: 'b6-s5',
          slideNumber: 5,
          type: 'content',
          title: '2. BIỂU DIỄN HÌNH ẢNH TRONG MÁY TÍNH',
          subtitle: 'Hệ màu RGB, Điểm ảnh Pixel và Độ sâu màu',
          bullets: [
            {
              title: 'Hệ màu cộng RGB:',
              text: 'Mọi màu sắc trên màn hình được pha trộn từ 3 màu cơ bản: Đỏ (Red) - Xanh lá (Green) - Xanh dương (Blue).',
            },
            {
              title: 'Điểm ảnh (Pixel):',
              text: 'Phần tử ảnh nhỏ nhất cấu tạo nên bức ảnh bitmap. Ảnh kĩ thuật số là ma trận các điểm ảnh hình chữ nhật.',
            },
            {
              title: 'Độ sâu màu (Bit depth):',
              text: 'Ảnh màu thông dụng 24 bit: mỗi kênh màu R, G, B dùng 8 bit (256 mức từ 0 đến 255). Tổng hợp tạo ra 256 × 256 × 256 ≈ 16,7 triệu sắc màu khác nhau.',
            },
            {
              title: 'Ảnh xám và ảnh đen trắng:',
              text: 'Ảnh xám (grayscale) 8 bit có 256 mức đậm nhạt; Ảnh đen trắng (monochrome) chỉ dùng 1 bit (0: đen, 1: trắng).',
            },
          ],
        },
        {
          id: 'b6-s6',
          slideNumber: 6,
          type: 'table',
          title: 'SO SÁNH CÁC ĐỊNH DẠNG ẢNH PHỔ BIẾN',
          subtitle: 'Lựa chọn định dạng tối ưu theo mục đích sử dụng (Trang 31 SGK)',
          tableData: {
            caption: 'Đặc tính kĩ thuật của BMP, JPEG và PNG',
            headers: ['Định dạng', 'Loại nén', 'Đặc điểm chính', 'Ứng dụng phù hợp'],
            rows: [
              ['BMP (.bmp)', 'Không nén (Raw)', 'Chất lượng nguyên gốc tuyệt đối, dung lượng tệp rất lớn', 'Đồ hoạ kĩ thuật cao, xử lí chuyên sâu'],
              ['JPEG (.jpg)', 'Nén có mất mát', 'Dung lượng cực nhỏ, tải web nhanh, giảm nhẹ chi tiết khó nhận biết', 'Ảnh chụp thực tế, chia sẻ mạng xã hội, web'],
              ['PNG (.png)', 'Nén không mất mát', 'Hỗ trợ nền trong suốt (transparent), giữ sắc nét đường nét', 'Logo, biểu tượng đồ họa, hình vẽ minh hoạ'],
            ],
          },
        },
        {
          id: 'b6-s7',
          slideNumber: 7,
          type: 'remember',
          title: 'HỘP GHI NHỚ SGK (Trang 29 & 31)',
          subtitle: 'Tóm tắt quy tắc số hóa đa phương tiện',
          highlightBox: {
            type: 'remember',
            title: 'KIẾN THỨC CỐT LÕI BÀI 6',
            content: [
              '• Âm thanh được số hoá bằng cách lấy mẫu biên độ tín hiệu theo chu kì. Chu kì lấy mẫu càng nhỏ thì âm thanh càng trung thực nhưng tệp càng tốn bộ nhớ.',
              '• Ảnh màu thông dụng trong máy tính là ảnh theo hệ RGB 24 bit (mỗi màu 8 bit mô tả 0-255).',
              '• Mỗi định dạng ảnh có ưu thế riêng: JPEG tối ưu dung lượng web, PNG tối ưu ảnh đồ họa trong suốt.',
            ],
          },
        },
      ],
    },
    {
      id: 'bai-7',
      number: 7,
      title: 'Bài 7. Thực hành sử dụng thiết bị số thông dụng',
      shortTitle: 'Bài 7: Thực hành thiết bị số thông dụng',
      chapterId: 'chu-de-1',
      pageStart: 33,
      pageEnd: 37,
      slides: [
        {
          id: 'b7-s1',
          slideNumber: 1,
          type: 'title',
          title: 'THỰC HÀNH SỬ DỤNG THIẾT BỊ SỐ THÔNG DỤNG',
          subtitle: 'Chủ đề 1: Máy tính và xã hội tri thức | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết thực hành' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 7 - Thực hành kỹ năng',
        },
        {
          id: 'b7-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI THỰC HÀNH',
          subtitle: 'Sau bài thực hành này, học sinh sẽ:',
          bullets: [
            {
              title: 'Thiết bị số cá nhân:',
              text: 'Biết được các thiết bị số cá nhân thông dụng (PDA, smartphone, tablet, smartwatch).',
            },
            {
              title: 'Tính năng tiêu biểu:',
              text: 'Biết và sử dụng các tính năng tiêu biểu của thiết bị số di động.',
            },
            {
              title: 'Khai thác ứng dụng và dữ liệu:',
              text: 'Khai thác thành thạo ứng dụng học tập, liên lạc, máy ảnh và hệ thống quản lí tệp tin (File Manager).',
            },
          ],
        },
        {
          id: 'b7-s3',
          slideNumber: 3,
          type: 'content',
          title: '1. TRỢ THỦ SỐ CÁ NHÂN (PDA)',
          subtitle: 'Từ máy ghi chú điện tử đến Smartphone hiện đại',
          bullets: [
            {
              title: 'Khái niệm PDA (Personal Digital Assistant):',
              text: 'Thiết bị cầm tay hỗ trợ cá nhân với sổ ghi chép, danh bạ, lịch làm việc, đồng hồ hẹn giờ, máy tính bỏ túi.',
            },
            {
              title: 'Sự tiến hoá thành Điện thoại thông minh:',
              text: 'Tích hợp thêm khả năng nghe gọi, máy ảnh độ nét cao, kết nối Wifi/4G/5G, kho ứng dụng phong phú trên hai hệ điều hành chính: iOS (Apple) và Android (Google).',
            },
            {
              title: 'Đặc điểm quan trọng:',
              text: 'Nhỏ gọn bỏ túi, luôn mang theo người, có khả năng kết nối mạng Internet liên tục mọi lúc mọi nơi.',
            },
          ],
        },
        {
          id: 'b7-s4',
          slideNumber: 4,
          type: 'process',
          title: '2. BỐN NHIỆM VỤ THỰC HÀNH TRÊN LỚP',
          subtitle: 'Quy trình thực hành trải nghiệm thiết bị thông minh (Trang 34-36)',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: 'Nhiệm vụ 1',
                title: 'Nút bấm & Khởi động',
                desc: 'Xác định nút nguồn/khoá màn hình, cụm phím tăng/giảm âm lượng, bật tắt máy an toàn.',
              },
              {
                stepNumber: 'Nhiệm vụ 2',
                title: 'Màn hình làm việc',
                desc: 'Làm quen thanh trạng thái (pin, sóng, giờ), màn hình chính, thanh dock nhanh, cử chỉ vuốt và thanh điều hướng.',
              },
              {
                stepNumber: 'Nhiệm vụ 3',
                title: 'Khám phá ứng dụng',
                desc: 'Mở ứng dụng học tập trực tuyến (Zoom, Google Meet) và ứng dụng lưu trữ đám mây (Google Drive, OneDrive).',
              },
              {
                stepNumber: 'Nhiệm vụ 4',
                title: 'Quản lí tệp tin',
                desc: 'Mở File Manager, tìm thư mục ảnh chụp Camera (DCIM), thực hiện sao chép, chia sẻ và xoá tệp tin.',
              },
            ],
          },
        },
        {
          id: 'b7-s5',
          slideNumber: 5,
          type: 'remember',
          title: 'KỸ NĂNG QUẢN LÍ THƯ MỤC TRÊN ĐIỆN THOẠI',
          subtitle: 'Cấu trúc cây thư mục phân cấp tương tự máy tính',
          bullets: [
            {
              title: 'Thư mục gốc Bộ nhớ trong (Internal Storage):',
              text: 'Chứa các thư mục Documents (tài liệu học tập), Download (tệp tải về từ Internet), DCIM (ảnh chụp từ máy ảnh).',
            },
            {
              title: 'Thao tác chạm và giữ (Long-press):',
              text: 'Giữ lâu vào một tệp/thư mục để hiện thanh công cụ: Di chuyển, Sao chép, Chia sẻ qua Zalo/Drive hoặc Xoá vào thùng rác.',
            },
            {
              title: 'Sao lưu định kì:',
              text: 'Kết nối điện thoại với máy tính qua cáp USB hoặc đồng bộ tự động lên đám mây để giải phóng bộ nhớ và phòng ngừa mất dữ liệu.',
            },
          ],
          badge: 'Kỹ năng thực hành',
        },
      ],
    },
  ],
};
