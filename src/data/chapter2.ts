import { Chapter } from '../types';

export const chapter2: Chapter = {
  id: 'chu-de-2',
  number: 2,
  title: 'Chủ đề 2. Mạng máy tính và Internet',
  description: 'Khám phá mạng cục bộ LAN, Internet toàn cầu, dịch vụ Điện toán đám mây, IoT và văn hoá bảo vệ an toàn trên không gian số.',
  lessons: [
    {
      id: 'bai-8',
      number: 8,
      title: 'Bài 8. Mạng máy tính trong cuộc sống hiện đại',
      shortTitle: 'Bài 8: Mạng máy tính trong cuộc sống',
      chapterId: 'chu-de-2',
      pageStart: 38,
      pageEnd: 43,
      slides: [
        {
          id: 'b8-s1',
          slideNumber: 1,
          type: 'title',
          title: 'MẠNG MÁY TÍNH TRONG CUỘC SỐNG HIỆN ĐẠI',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 8 - Mạng & Internet',
        },
        {
          id: 'b8-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Phân biệt LAN và Internet:',
              text: 'Hiểu được sự khác biệt về quy mô địa lí, cách kết nối và quyền sở hữu giữa mạng LAN và Internet.',
            },
            {
              title: 'Tác động xã hội của Internet:',
              text: 'Trình bày được những thay đổi về chất lượng cuộc sống, phương thức học tập và làm việc trong xã hội mạng.',
            },
            {
              title: 'Điện toán đám mây & IoT:',
              text: 'Nêu được một số công nghệ dựa trên Internet như dịch vụ điện toán đám mây (Cloud) và kết nối vạn vật (IoT).',
            },
          ],
        },
        {
          id: 'b8-s3',
          slideNumber: 3,
          type: 'table',
          title: '1. MẠNG LAN VÀ INTERNET',
          subtitle: 'So sánh mạng cục bộ (LAN) và mạng diện rộng toàn cầu (Internet)',
          tableData: {
            caption: 'Bảng so sánh đặc điểm cốt lõi giữa Mạng cục bộ LAN và Internet (Trang 39 SGK)',
            headers: ['Đặc tính', 'Mạng cục bộ (LAN)', 'Internet (Toàn cầu)'],
            rows: [
              ['Phạm vi, quy mô', 'Hẹp: Cơ quan, trường học, gia đình', 'Toàn cầu, liên kết hàng triệu mạng khắp thế giới'],
              ['Cách kết nối', 'Trực tiếp thông qua Hub, Switch, sóng Wifi', 'Kết nối thông qua các bộ định tuyến (Router) và nhà cung cấp dịch vụ mạng (ISP)'],
              ['Quyền sở hữu', 'Có chủ sở hữu cụ thể (cá nhân, cơ quan)', 'Không có ai là chủ sở hữu duy nhất; điều phối bởi tổ chức phi lợi nhuận quốc tế'],
            ],
          },
          footerNote: 'Bộ chuyển mạch (Switch/Hub) chuyển tiếp nội bộ trong LAN. Bộ định tuyến (Router) quyết định gửi dữ liệu ra cổng Internet.',
        },
        {
          id: 'b8-s4',
          slideNumber: 4,
          type: 'content',
          title: '2. VAI TRÒ CỦA INTERNET VỚI XÃ HỘI',
          subtitle: 'Kho tri thức khổng lồ và phương thức giao tiếp thời gian thực',
          bullets: [
            {
              title: 'Giao tiếp cộng đồng:',
              text: 'Internet đã thay đổi cách mọi người tương tác: thư điện tử, mạng xã hội (Facebook, Zalo, YouTube), chia sẻ ý tưởng và phản hồi tức thì.',
            },
            {
              title: 'Cách mạng trong giáo dục:',
              text: 'Kho thông tin khổng lồ thường xuyên cập nhật. Nền tảng học trực tuyến giúp học mọi lúc, mọi nơi, hướng tới học tập suốt đời.',
            },
            {
              title: 'Kinh tế & Dịch vụ số:',
              text: 'Thương mại điện tử, thanh toán không dùng tiền mặt, dịch vụ công trực tuyến giảm thiểu thủ tục hành chính giấy tờ.',
            },
          ],
        },
        {
          id: 'b8-s5',
          slideNumber: 5,
          type: 'content',
          title: '3. ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)',
          subtitle: 'a) Khái niệm và các mô hình dịch vụ chính (Trang 40-41)',
          lead: 'Điện toán đám mây là việc phân phối các tài nguyên Công nghệ thông tin theo nhu cầu qua Internet với chính sách thanh toán theo mức sử dụng.',
          bullets: [
            {
              title: 'SaaS (Software as a Service - Phần mềm như dịch vụ):',
              text: 'Người dùng sử dụng trực tiếp ứng dụng trên web mà không cần cài đặt (Google Docs, Zoom, Gmail, Canva...).',
              badge: 'SaaS',
            },
            {
              title: 'PaaS (Platform as a Service - Nền tảng như dịch vụ):',
              text: 'Cung cấp môi trường nền tảng để phát triển và triển khai phần mềm (quản trị CSDL, bản đồ số Google Maps API...).',
              badge: 'PaaS',
            },
            {
              title: 'IaaS (Infrastructure as a Service - Hạ tầng như dịch vụ):',
              text: 'Cho thuê tài nguyên máy chủ ảo, hạ tầng mạng, lưu trữ trực tuyến (Google Drive, AWS, Azure, Dropbox...).',
              badge: 'IaaS',
            },
          ],
        },
        {
          id: 'b8-s6',
          slideNumber: 6,
          type: 'remember',
          title: 'LỢI ÍCH CỦA ĐIỆN TOÁN ĐÁM MÂY',
          subtitle: 'Trích Hộp kiến thức cốt lõi SGK Trang 41',
          highlightBox: {
            type: 'remember',
            title: '3 LỢI ÍCH VƯỢT TRỘI',
            content: [
              '1. Tính mềm dẻo và độ sẵn sàng cao: Người dùng làm việc mọi lúc, mọi nơi chỉ cần có kết nối mạng Internet.',
              '2. Chất lượng cao: Được bảo trì bởi các tập đoàn công nghệ chuyên nghiệp, sao lưu an toàn và dự phòng lớn.',
              '3. Tiết kiệm chi phí: Không cần mua máy chủ vật lí tốn kém, chỉ trả tiền theo dung lượng và tính năng thực tế sử dụng.',
            ],
          },
        },
        {
          id: 'b8-s7',
          slideNumber: 7,
          type: 'content',
          title: '4. INTERNET VẠN VẬT (IOT - INTERNET OF THINGS)',
          subtitle: 'Kết nối các thiết bị thông minh phục vụ đời sống (Trang 42-43)',
          bullets: [
            {
              title: 'Định nghĩa IoT:',
              text: 'Là hệ thống liên mạng bao gồm các phương tiện, vật dụng, thiết bị được gắn cảm biến và phần mềm điều khiển để tự động thu thập và chia sẻ dữ liệu qua mạng mà không cần tương tác trực tiếp của con người.',
            },
            {
              title: 'Ví dụ 1 - Thu phí không dừng (ETC) bằng thẻ RFID:',
              text: 'Đầu đọc sóng vô tuyến ở trạm thu phí tự nhận diện mã xe gắn kính lái, trừ tiền tài khoản tự động và mở thanh chắn mà xe không cần dừng lại.',
            },
            {
              title: 'Ví dụ 2 - Nhà thông minh (Smart Home):',
              text: 'Cảm biến tự bật điều hoà, rèm cửa khi trời nóng; khóa cửa báo động về điện thoại khi có người lạ tiếp cận.',
            },
            {
              title: 'Ví dụ 3 - Công tơ điện tử thông minh:',
              text: 'Tự động gửi chỉ số điện về trung tâm dữ liệu EVN qua sóng mạng, loại bỏ việc công nhân phải đi ghi thủ công.',
            },
          ],
        },
        {
          id: 'b8-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'LUYỆN TẬP: CỦNG CỐ BÀI HỌC',
          subtitle: 'Câu hỏi kiểm tra nhanh theo SGK Trang 43',
          quiz: {
            question: 'Dịch vụ nào dưới đây là ví dụ điển hình của mô hình SaaS (Software as a Service)?',
            options: [
              'A. Soạn thảo văn bản trực tuyến Google Docs trên trình duyệt web.',
              'B. Mua một ổ cứng di động 2 TB cắm vào máy tính.',
              'C. Thuê máy chủ vật lí đặt tại văn phòng công ty.',
              'D. Nâng cấp thanh RAM cho laptop cá nhân.',
            ],
            answer: 'Đáp án A: Google Docs là dịch vụ phần mềm SaaS.',
            explanation: 'SaaS cho phép dùng phần mềm trực tiếp trên đám mây qua kết nối Internet, không phải cài đặt và lưu dữ liệu an toàn trên máy chủ của nhà cung cấp.',
          },
        },
      ],
    },
    {
      id: 'bai-9',
      number: 9,
      title: 'Bài 9. An toàn trên không gian mạng',
      shortTitle: 'Bài 9: An toàn không gian mạng',
      chapterId: 'chu-de-2',
      pageStart: 44,
      pageEnd: 49,
      slides: [
        {
          id: 'b9-s1',
          slideNumber: 1,
          type: 'title',
          title: 'AN TOÀN TRÊN KHÔNG GIAN MẠNG',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 9 - An toàn số',
        },
        {
          id: 'b9-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI HỌC',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Nhận diện nguy cơ trên mạng:',
              text: 'Nêu được những nguy cơ và tác hại khi tham gia hoạt động trên Internet một cách thiếu hiểu biết.',
            },
            {
              title: 'Phòng chống bắt nạt & bảo vệ dữ liệu:',
              text: 'Nêu được cách phòng vệ khi bị bắt nạt trên mạng và biện pháp bảo vệ thông tin cá nhân.',
            },
            {
              title: 'Hiểu biết về phần mềm độc hại (Malware):',
              text: 'Trình bày được sơ lược về Virus, Worm, Trojan và biết sử dụng công cụ phòng chống phần mềm xấu (Windows Defender).',
            },
          ],
        },
        {
          id: 'b9-s3',
          slideNumber: 3,
          type: 'content',
          title: '1. MỘT SỐ NGUY CƠ TRÊN KHÔNG GIAN MẠNG',
          subtitle: 'Các rủi ro thường gặp khi sử dụng Internet thiếu cảnh giác (Trang 44-45)',
          bullets: [
            {
              title: 'Tin giả và thông tin độc hại:',
              text: 'Bài viết sai sự thật, giật gân, bạo lực gây hoang mang dư luận và định hướng sai lệch nhận thức.',
            },
            {
              title: 'Lừa đảo trực tuyến (Phishing):',
              text: 'Chiếm đoạt tài khoản mạng xã hội mạo danh vay mượn tiền, gửi tin nhắn trúng thưởng giả mạo nhằm chiếm đoạt tài sản.',
            },
            {
              title: 'Lộ lọt thông tin cá nhân:',
              text: 'Số CCCD, số điện thoại, mật khẩu, tài khoản ngân hàng bị kẻ xấu thu thập để mạo danh thực hiện hành vi phi pháp.',
            },
            {
              title: 'Bắt nạt trên mạng (Cyberbullying):',
              text: 'Bôi nhọ, nhục mạ, đe dọa, tẩy chay tập thể trên mạng gây chấn thương tâm lí nặng nề cho nạn nhân.',
            },
            {
              title: 'Nghiện mạng & trò chơi điện tử:',
              text: 'Dành quá nhiều thời gian chơi game, lướt mạng dẫn tới suy giảm sức khoẻ thể chất và tinh thần.',
            },
          ],
        },
        {
          id: 'b9-s4',
          slideNumber: 4,
          type: 'remember',
          title: 'BIỆN PHÁP BẢO VỆ THÔNG TIN CÁ NHÂN & PHÒNG CHỐNG BẮT NẠT',
          subtitle: 'Cẩm nang an toàn học đường theo SGK Trang 44 & 45',
          highlightBox: {
            type: 'remember',
            title: 'NGUYÊN TẮC PHÒNG VỆ CỐT LÕI',
            content: [
              '• Không ghi chép, chia sẻ mật khẩu ở nơi người khác có thể đọc được; đặt mật khẩu mạnh kết hợp chữ hoa, chữ thường, số và kí tự đặc biệt.',
              '• Cẩn trọng khi kết nối vào mạng Wifi công cộng không có mật khẩu; không giao dịch ngân hàng trên mạng công cộng.',
              '• Không kết bạn dễ dãi với người lạ; Không đôi co, tranh luận với kẻ bắt nạt trên diễn đàn.',
              '• Hãy chụp màn hình lưu giữ bằng chứng và tâm sự ngay với bố mẹ, thầy cô hoặc báo cho cơ quan công an khi bị đe doạ.',
            ],
          },
        },
        {
          id: 'b9-s5',
          slideNumber: 5,
          type: 'table',
          title: '2. PHÂN LOẠI PHẦN MỀM ĐỘC HẠI (MALWARE)',
          subtitle: 'So sánh cơ chế hoạt động của Virus, Worm và Trojan (Trang 46-47 SGK)',
          tableData: {
            caption: 'Đặc điểm phân biệt 3 loại mã độc phổ biến nhất',
            headers: ['Loại mã độc', 'Tính hoàn chỉnh', 'Cơ chế lây nhiễm', 'Hậu quả và Tác hại'],
            rows: [
              ['Virus máy tính', 'Không hoàn chỉnh (chỉ là đoạn mã độc)', 'Phải kí sinh gắn vào một tệp chương trình hoặc tài liệu khác mới phát tán được', 'Làm hỏng tệp tin, xoá dữ liệu, chiếm bộ nhớ làm đơ máy'],
              ['Worm (Sâu máy tính)', 'Chương trình hoàn chỉnh độc lập', 'Lợi dụng lỗ hổng bảo mật của hệ điều hành hoặc qua email để tự động lây lan sang máy khác trong mạng', 'Lây lan diện rộng cực nhanh, làm tê liệt hệ thống mạng (Melissa, WannaCry)'],
              ['Trojan (Ngựa Troy)', 'Chương trình hoàn chỉnh ngụy trang', 'Giả dạng phần mềm hữu ích hoặc trò chơi dụ dỗ người dùng tải về cài đặt', 'Cài Spyware đánh cắp thông tin, Keylogger ghi lại phím bấm, mở Backdoor điều khiển máy từ xa'],
            ],
          },
        },
        {
          id: 'b9-s6',
          slideNumber: 6,
          type: 'process',
          title: 'THỰC HÀNH: QUÉT VIRUS VỚI WINDOWS DEFENDER',
          subtitle: 'Các chế độ quét an toàn tích hợp sẵn trong Windows 10/11 (Trang 48-49)',
          diagram: {
            layout: 'grid',
            steps: [
              {
                stepNumber: '1',
                title: 'Quick scan (Quét nhanh)',
                desc: 'Quét các thư mục hệ thống quan trọng nơi mã độc thường hay trú ngụ nhất (chỉ mất 1-2 phút).',
              },
              {
                stepNumber: '2',
                title: 'Full scan (Quét toàn bộ)',
                desc: 'Kiểm tra kĩ lưỡng toàn bộ các tệp tin trên tất cả các ổ đĩa cứng của máy tính.',
              },
              {
                stepNumber: '3',
                title: 'Custom scan (Quét tuỳ chọn)',
                desc: 'Chỉ định quét một thư mục hoặc ổ đĩa USB cụ thể trước khi sao chép tài liệu.',
              },
              {
                stepNumber: '4',
                title: 'Offline scan (Quét ngoại tuyến)',
                desc: 'Khởi động lại máy vào môi trường độc lập để diệt những loại mã độc cứng đầu.',
              },
            ],
          },
        },
        {
          id: 'b9-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'LUYỆN TẬP: TỔNG KẾT VÀ TỰ ĐÁNH GIÁ',
          subtitle: 'Bảng củng cố kiến thức SGK Trang 47',
          quiz: {
            question: 'Một người nhận được email thông báo trúng thưởng xe máy kèm đường link yêu cầu nhập số CCCD và mật khẩu ngân hàng để nhận thưởng. Hành vi an toàn nhất là gì?',
            options: [
              'A. Nhấp vào đường link và nhập ngay thông tin để nhận giải thưởng.',
              'B. Chuyển tiếp email cho các bạn cùng lớp để cùng tham gia.',
              'C. Tuyệt đối không bấm link lạ, báo cáo thư rác (spam) hoặc xoá ngay email.',
              'D. Nhắn tin hỏi lại người gửi xem có cần nộp thêm lệ phí gì không.',
            ],
            answer: 'Đáp án C: Tuyệt đối không bấm link lạ, báo cáo thư rác hoặc xoá ngay email.',
            explanation: 'Đây là thủ đoạn lừa đảo Phishing kinh điển nhằm chiếm đoạt tài khoản và thông tin tài chính của nạn nhân.',
          },
        },
      ],
    },
    {
      id: 'bai-10',
      number: 10,
      title: 'Bài 10. Thực hành khai thác tài nguyên trên Internet',
      shortTitle: 'Bài 10: Thực hành khai thác tài nguyên Internet',
      chapterId: 'chu-de-2',
      pageStart: 50,
      pageEnd: 51,
      slides: [
        {
          id: 'b10-s1',
          slideNumber: 1,
          type: 'title',
          title: 'THỰC HÀNH KHAI THÁC TÀI NGUYÊN TRÊN INTERNET',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống - Nhà xuất bản Giáo dục Việt Nam',
          bullets: [
            { text: 'Môn học: Tin học 10' },
            { text: 'Thời lượng: 2 tiết thực hành' },
            { text: 'Giáo viên hướng dẫn: QuanLHK' },
          ],
          badge: 'Bài 10 - Kĩ năng số',
        },
        {
          id: 'b10-s2',
          slideNumber: 2,
          type: 'objective',
          title: 'MỤC TIÊU BÀI THỰC HÀNH',
          subtitle: 'Sau bài học này, học sinh sẽ:',
          bullets: [
            {
              title: 'Khai thác dịch vụ tiện ích:',
              text: 'Sử dụng thành thạo dịch vụ dịch thuật đa ngữ thông minh (Google Translate) phục vụ học tập ngoại ngữ và tra cứu tài liệu quốc tế.',
            },
            {
              title: 'Tìm kiếm tài nguyên học tập số:',
              text: 'Biết tìm kiếm và tiếp cận các nguồn học liệu mở, sách tham khảo, video bài giảng trực tuyến chính thống.',
            },
            {
              title: 'Đánh giá độ tin cậy:',
              text: 'Rèn luyện kĩ năng thẩm định và kiểm tra nguồn thông tin trước khi sử dụng trong học tập.',
            },
          ],
        },
        {
          id: 'b10-s3',
          slideNumber: 3,
          type: 'process',
          title: 'NHIỆM VỤ 1: SỬ DỤNG GOOGLE TRANSLATE',
          subtitle: '3 phương thức nhập văn bản dịch thuật thông minh (Trang 50-51)',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'Cách 1',
                title: 'Nhập văn bản trực tiếp',
                desc: 'Gõ hoặc dán đoạn văn bản cần dịch vào khung nguồn bên trái, hệ thống tự phát hiện ngôn ngữ và hiển thị bản dịch bên phải.',
              },
              {
                stepNumber: 'Cách 2',
                title: 'Nhập bằng giọng nói (Mic)',
                desc: 'Bấm biểu tượng micro và nói to, rõ ràng vào mic để nhận dạng âm thanh thành văn bản và dịch tự động.',
              },
              {
                stepNumber: 'Cách 3',
                title: 'Dịch nguyên tệp tài liệu',
                desc: 'Chọn thẻ "Tài liệu", tải lên tệp .pdf, .docx, .xlsx để dịch toàn bộ tệp mà vẫn giữ nguyên bố cục.',
              },
            ],
          },
        },
        {
          id: 'b10-s4',
          slideNumber: 4,
          type: 'remember',
          title: 'LƯU Ý KHI SỬ DỤNG DỊCH THUẬT TỰ ĐỘNG BẰNG AI',
          subtitle: 'Khai thác thông minh và có chọn lọc',
          bullets: [
            {
              title: 'Hiểu bản chất công cụ dịch máy:',
              text: 'AI dịch theo ngữ cảnh xác suất thống kê nên có thể dịch sai nghĩa bóng, thành ngữ hoặc từ chuyên ngành sâu.',
            },
            {
              title: 'Kết hợp tra từ điển uy tín:',
              text: 'Với các thuật ngữ Tin học chuyên sâu, cần đối chiếu với Bảng giải thích thuật ngữ (cuối SGK Trang 166) hoặc từ điển Oxford/Cambridge.',
            },
            {
              title: 'Kiểm tra ngữ pháp và văn phong:',
              text: 'Luôn đọc lại và biên tập lại bản dịch cho phù hợp với lối diễn đạt tự nhiên của tiếng Việt.',
            },
          ],
          badge: 'Mẹo học tập',
        },
      ],
    },
  ],
};
