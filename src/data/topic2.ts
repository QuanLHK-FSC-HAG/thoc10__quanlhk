import { Chapter } from '../types';

export const topic2: Chapter = {
  id: 'chu-de-2',
  number: 2,
  title: 'Chủ đề 2. Mạng máy tính và Internet',
  description: 'Vai trò mạng máy tính, điện toán đám mây, an toàn thông tin trên không gian mạng và kĩ năng khai thác tài nguyên Internet.',
  lessons: [
    // =========================================================================
    // BÀI 8: VAI TRÒ CỦA HỆ THỐNG MẠNG MÁY TÍNH TRONG THỜI ĐẠI HIỆN ĐẠI
    // =========================================================================
    {
      id: 'bai-8',
      number: 8,
      title: 'Bài 8. Vai trò của hệ thống mạng máy tính trong thời đại hiện đại',
      shortTitle: 'Bài 8: Mạng máy tính & Đám mây',
      chapterId: 'chu-de-2',
      pageStart: 38,
      pageEnd: 43,
      slides: [
        {
          id: 'b8-s1',
          slideNumber: 1,
          type: 'title',
          title: 'VAI TRÒ CỦA HỆ THỐNG MẠNG MÁY TÍNH TRONG THỜI ĐẠI HIỆN ĐẠI',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân biệt chính xác mạng cục bộ (LAN) và mạng diện rộng toàn cầu Internet' },
            { text: 'Hiểu bản chất và các mô hình dịch vụ Điện toán đám mây (Cloud Computing)' },
            { text: 'Khám phá Internet vạn vật (IoT) và kết nối thông minh trong đời sống' },
            { text: 'Nhận thức vai trò trụ cột của hạ tầng mạng trong cuộc cách mạng số 4.0' },
          ],
          badge: 'Bài 8 • KHBD Chuẩn',
        },
        {
          id: 'b8-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: NHẬN DIỆN PHẠM VI KẾT NỐI MẠNG',
          subtitle: 'Phân biệt kết nối mạng nội bộ (LAN) và mạng Internet (SGK trang 38)',
          cardsGrid: [
            {
              title: 'Tình huống 1: In tài liệu văn phòng',
              desc: 'Máy tính gửi lệnh in trực tiếp đến máy in trong phòng qua dây cáp mạng hoặc Wi-Fi nội bộ.',
              tag: 'Mạng LAN',
              points: [
                'Không cần kết nối ra ngoài Internet',
                'Tốc độ truyền cực cao, bảo mật nội bộ',
              ],
            },
            {
              title: 'Tình huống 2: Tra cứu điểm thi Quốc gia',
              desc: 'Điện thoại kết nối Internet truy cập cổng thông tin điện tử của Bộ Giáo dục & Đào tạo.',
              tag: 'Mạng Internet',
              points: [
                'Phạm vi kết nối toàn cầu xuyên quốc gia',
                'Hàng triệu người truy cập đồng thời',
              ],
            },
          ],
        },
        {
          id: 'b8-s3',
          slideNumber: 3,
          type: 'content',
          title: 'PHÂN BIỆT MẠNG CỤC BỘ (LAN) VÀ MẠNG INTERNET',
          subtitle: 'Nhiệm vụ 1: Đối chiếu hai mô hình mạng then chốt (SGK trang 39)',
          compareColumns: {
            left: {
              title: 'Mạng cục bộ (LAN)',
              subtitle: 'Local Area Network',
              badge: 'Nội bộ',
              points: [
                'Phạm vi địa lí: Hẹp (trong một phòng học, một tòa nhà, một trường học).',
                'Quyền quản trị: Thuộc sở hữu của một cơ quan, trường học hoặc gia đình cụ thể.',
                'Mục đích: Chia sẻ tài nguyên dùng chung (máy in, tệp tin dữ liệu chung).',
              ],
            },
            right: {
              title: 'Mạng Internet',
              subtitle: 'Mạng của các mạng toàn cầu',
              badge: 'Toàn cầu',
              points: [
                'Phạm vi địa lí: Toàn thế giới, kết nối hàng tỉ thiết bị qua giao thức TCP/IP.',
                'Quyền quản trị: Không thuộc sở hữu của bất kì cá nhân hay tổ chức duy nhất nào.',
                'Mục đích: Trao đổi thông tin, dịch vụ web, email, hội nghị trực tuyến toàn cầu.',
              ],
            },
          },
        },
        {
          id: 'b8-s4',
          slideNumber: 4,
          type: 'content',
          title: 'ĐIỆN TOÁN ĐÁM MÂY (CLOUD COMPUTING)',
          subtitle: 'Mô hình cung cấp dịch vụ máy tính qua mạng Internet (SGK trang 40)',
          lead: 'Điện toán đám mây là bước chuyển dịch mang tính cách mạng trong ngành Công nghệ thông tin:',
          imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Hạ tầng mạng cáp quang và trung tâm dữ liệu kết nối đám mây',
          bullets: [
            {
              title: 'Bản chất Điện toán đám mây:',
              text: 'Là việc phân phối các tài nguyên máy tính (máy chủ, dung lượng lưu trữ, phần mềm, mạng, cơ sở dữ liệu) theo yêu cầu qua Internet với chính sách trả phí theo mức sử dụng.',
            },
            {
              title: 'Ví dụ phổ biến xung quanh ta:',
              text: 'Google Drive, Microsoft OneDrive, Dropbox lưu trữ tệp; Google Docs, Canva làm việc trực tuyến; Gmail, Outlook quản lý thư tín.',
            },
            {
              title: 'Khả năng cộng tác trực tuyến tức thời:',
              text: 'Nhiều người có thể cùng mở một tệp văn bản hoặc trang tính để cùng chỉnh sửa trong thời gian thực dù ở các địa điểm cách xa nhau.',
            },
          ],
        },
        {
          id: 'b8-s5',
          slideNumber: 5,
          type: 'remember',
          title: 'LỢI ÍCH CỐT LÕI CỦA ĐIỆN TOÁN ĐÁM MÂY',
          subtitle: 'Tại sao cá nhân và doanh nghiệp chuyển đổi mạnh mẽ lên đám mây?',
          lead: 'Những giá trị thiết thực giải phóng người dùng khỏi rào cản phần cứng truyền thống:',
          highlightBox: {
            type: 'remember',
            title: 'LỢI ÍCH CỐT LÕI (SGK TRANG 40)',
            content: 'Dữ liệu được lưu trữ an toàn trên các trung tâm dữ liệu toàn cầu của nhà cung cấp, giải phóng hoàn toàn nỗi lo hỏng ổ cứng hoặc mất tệp cục bộ.',
          },
          bullets: [
            {
              title: '1. Tiết kiệm chi phí đầu tư hạ tầng:',
              text: 'Không cần bỏ số tiền lớn mua máy chủ đắt tiền, giảm chi phí bảo dưỡng và tiền điện vận hành phòng máy.',
            },
            {
              title: '2. Truy cập mọi lúc, mọi nơi:',
              text: 'Chỉ cần thiết bị có kết nối Internet (máy tính, máy tính bảng hay điện thoại) là có thể làm việc trơn tru.',
            },
            {
              title: '3. An toàn và sao lưu tự động:',
              text: 'Dữ liệu được nhân bản trên nhiều cụm máy chủ dự phòng, tự động sao lưu định kì, chống mất mát dữ liệu do thiên tai hay mã độc.',
            },
          ],
        },
        {
          id: 'b8-s6',
          slideNumber: 6,
          type: 'content',
          title: 'BA MÔ HÌNH DỊCH VỤ ĐÁM MÂY TIÊU BIỂU',
          subtitle: 'Phân cấp dịch vụ đám mây từ người dùng đến chuyên gia công nghệ',
          cardsGrid: [
            {
              title: 'SaaS: Phần mềm như dịch vụ',
              desc: 'Người dùng sử dụng trực tiếp ứng dụng trên trình duyệt web.',
              tag: 'SaaS',
              points: [
                'Ví dụ: Gmail, Google Docs, Canva, Zoom',
                'Không cần cài đặt, tự động cập nhật tính năng mới',
              ],
            },
            {
              title: 'IaaS: Hạ tầng như dịch vụ',
              desc: 'Thuê máy chủ ảo, bộ nhớ và mạng để triển khai hệ thống.',
              tag: 'IaaS',
              points: [
                'Ví dụ: Google Cloud, Amazon Web Services (AWS)',
                'Dành cho doanh nghiệp linh hoạt mở rộng quy mô',
              ],
            },
          ],
        },
        {
          id: 'b8-s7',
          slideNumber: 7,
          type: 'diagram',
          title: 'INTERNET VẠN VẬT (IoT) TRONG ĐỜI SỐNG',
          subtitle: 'Mô hình chuỗi kết nối từ cảm biến đến điện toán đám mây',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1',
                title: 'Thu thập dữ liệu',
                desc: 'Thiết bị cảm biến (nhiệt độ, camera, GPS) liên tục ghi nhận dữ liệu thời gian thực.',
                tag: 'Sensor',
              },
              {
                stepNumber: '2',
                title: 'Truyền dẫn mạng',
                desc: 'Dữ liệu được gửi qua mạng không dây (Wi-Fi, 5G, Zigbee) lên máy chủ đám mây.',
                tag: 'Network',
              },
              {
                stepNumber: '3',
                title: 'Xử lí & Tự động hóa',
                desc: 'Hệ thống phân tích và tự động gửi lệnh điều khiển về thiết bị hoặc thông báo cho người dùng.',
                tag: 'Action',
              },
            ],
          },
        },
        {
          id: 'b8-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'TRẮC NGHIỆM: ĐIỆN TOÁN ĐÁM MÂY & MẠNG',
          subtitle: 'Củng cố kiến thức trọng tâm Bài 8',
          quiz: {
            question: 'Dịch vụ nào sau đây là ví dụ điển hình của mô hình Phần mềm như một dịch vụ (SaaS)?',
            options: [
              'A. Mua đĩa DVD phần mềm cài đặt lên máy tính',
              'B. Ổ cứng gắn ngoài kết nối qua cổng USB',
              'C. Ứng dụng Google Docs soạn thảo văn bản trực tuyến trên trình duyệt',
              'D. Thẻ nhớ cắm trong máy quay phim gia đình',
            ],
            answer: 'Đáp án C: Ứng dụng Google Docs soạn thảo văn bản trực tuyến trên trình duyệt.',
            explanation: 'Google Docs hoạt động hoàn toàn trên nền tảng đám mây, người dùng không cần cài đặt phần mềm máy tính, dữ liệu tự động lưu trữ trên máy chủ của Google.',
          },
        },
        {
          id: 'b8-s9',
          slideNumber: 9,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 8 & GHI NHỚ TRỌNG TÂM',
          subtitle: 'Hệ thống hóa kiến thức về Mạng máy tính và Internet',
          bullets: [
            {
              title: '1. Mạng LAN vs Internet:',
              text: 'Mạng LAN có phạm vi hẹp thuộc một cơ quan; Internet là mạng kết nối toàn cầu không biên giới.',
            },
            {
              title: '2. Điện toán đám mây:',
              text: 'Cung cấp tài nguyên và phần mềm qua mạng, tính linh hoạt cao, tiết kiệm chi phí đầu tư hạ tầng.',
            },
            {
              title: '3. Internet vạn vật (IoT):',
              text: 'Kết nối mọi thiết bị thông minh phục vụ tự động hóa gia đình, đô thị và sản xuất công nghiệp.',
            },
          ],
        },
      ],
    },

    // =========================================================================
    // BÀI 9: KIẾN THỨC CƠ BẢN VỀ AN TOÀN THÔNG TIN TRÊN KHÔNG GIAN MẠNG
    // =========================================================================
    {
      id: 'bai-9',
      number: 9,
      title: 'Bài 9. Kiến thức cơ bản về an toàn thông tin trên không gian mạng',
      shortTitle: 'Bài 9: An toàn thông tin mạng',
      chapterId: 'chu-de-2',
      pageStart: 44,
      pageEnd: 49,
      slides: [
        {
          id: 'b9-s1',
          slideNumber: 1,
          type: 'title',
          title: 'KIẾN THỨC CƠ BẢN VỀ AN TOÀN THÔNG TIN TRÊN KHÔNG GIAN MẠNG',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Nhận diện các mối nguy cơ đe dọa an toàn thông tin trên Internet' },
            { text: 'Phân biệt các loại phần mềm độc hại (Malware): Virus, Worm, Trojan' },
            { text: 'Nguyên tắc đặt mật khẩu mạnh và biện pháp xác thực 2 bước (2FA)' },
            { text: 'Quy tắc phòng ngừa lừa đảo trực tuyến (Phishing) và bảo vệ dữ liệu cá nhân' },
          ],
          badge: 'Bài 9 • KHBD Chuẩn',
        },
        {
          id: 'b9-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: CẢNH BÁO MỐI NGUY TRÊN KHÔNG GIAN MẠNG',
          subtitle: 'Tình huống thực tế về các chiêu trò lừa đảo và mã độc (SGK trang 44)',
          cardsGrid: [
            {
              title: 'Email mạo danh trúng thưởng',
              desc: 'Tin nhắn thông báo: "Bạn đã trúng xe SH, bấm vào link để nhận thưởng ngay".',
              tag: 'Lừa đảo (Phishing)',
              points: [
                'Yêu cầu nhập số tài khoản ngân hàng và mã OTP',
                'Mục đích chiếm đoạt tiền và tài khoản cá nhân',
              ],
            },
            {
              title: 'Cài đặt phần mềm bẻ khóa (Crack)',
              desc: 'Tải phần mềm trò chơi miễn phí từ website không rõ nguồn gốc trên mạng.',
              tag: 'Mã độc (Malware)',
              points: [
                'Bị đính kèm mã độc tống tiền (Ransomware) mã hóa toàn bộ ổ cứng',
                'Mất sạch dữ liệu quý giá và ảnh kỉ niệm',
              ],
            },
          ],
        },
        {
          id: 'b9-s3',
          slideNumber: 3,
          type: 'content',
          title: 'PHÂN LOẠI CÁC LOẠI PHẦN MỀM ĐỘC HẠI (MALWARE)',
          subtitle: '3 nhóm mã độc phổ biến nhất đe dọa người dùng máy tính (SGK trang 45)',
          cardsGrid: [
            {
              title: '1. Virus máy tính',
              desc: 'Đoạn mã lây nhiễm bằng cách gắn vào tệp chương trình khác để tự nhân bản khi tệp được chạy.',
              tag: 'Virus',
              points: [
                'Phá hoại tệp dữ liệu, làm chậm hệ thống',
                'Cần người dùng kích hoạt mở tệp bị nhiễm',
              ],
            },
            {
              title: '2. Sâu máy tính (Worm)',
              desc: 'Chương trình độc lập có khả năng tự lây lan qua mạng máy tính mà không cần tệp chủ gắn kèm.',
              tag: 'Worm',
              points: [
                'Tự động lây qua lỗ hổng bảo mật mạng',
                'Chiếm dụng băng thông làm tê liệt mạng',
              ],
            },
          ],
        },
        {
          id: 'b9-s4',
          slideNumber: 4,
          type: 'content',
          title: 'NGỰA THÀNH TROY (TROJAN) VÀ PHẦN MỀM GIÁN ĐIỆP',
          subtitle: 'Hiểm họa ngụy trang tinh vi đánh lừa người sử dụng (SGK trang 46)',
          imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'An ninh mạng, phòng chống mã độc và bảo vệ dữ liệu người dùng',
          bullets: [
            {
              title: 'Trojan (Ngựa thành Troy):',
              text: 'Phần mềm độc hại ngụy trang dưới dạng một ứng dụng hữu ích hoặc trò chơi hấp dẫn. Khi người dùng cài đặt, Trojan bí mật mở cổng hậu (backdoor) cho kẻ tấn công xâm nhập máy tính.',
            },
            {
              title: 'Spyware (Phần mềm gián điệp):',
              text: 'Âm thầm theo dõi thao tác bàn phím (Keylogger), ghi lại mật khẩu ngân hàng, chụp ảnh màn hình và gửi về máy chủ của tin tặc.',
            },
            {
              title: 'Ransomware (Mã độc tống tiền):',
              text: 'Mã hóa toàn bộ tệp tin trên ổ cứng và yêu cầu nạn nhân phải trả tiền chuộc bằng tiền mã hóa để nhận chìa khóa giải mã.',
            },
          ],
        },
        {
          id: 'b9-s5',
          slideNumber: 5,
          type: 'content',
          title: 'BIỆN PHÁP BẢO VỆ MẬT KHẨU & XÁC THỰC 2 BƯỚC (2FA)',
          subtitle: 'Nguyên tắc vàng bảo vệ tài khoản số cá nhân an toàn tuyệt đối',
          bullets: [
            {
              title: 'Quy tắc Mật khẩu mạnh:',
              text: 'Độ dài tối thiểu từ 10 - 12 kí tự, kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt (!@#$%^&*). Không dùng ngày sinh hoặc số điện thoại.',
            },
            {
              title: 'Không dùng chung mật khẩu:',
              text: 'Mỗi tài khoản quan trọng (Email, Ngân hàng, Facebook) phải sử dụng một mật khẩu riêng biệt để tránh rò rỉ dây chuyền.',
            },
            {
              title: 'Bật xác thực 2 bước (2FA):',
              text: 'Sau khi gõ mật khẩu, hệ thống yêu cầu thêm một mã số gửi về điện thoại hoặc ứng dụng Authenticator, ngăn chặn 99% nguy cơ bị xâm nhập.',
            },
          ],
        },
        {
          id: 'b9-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'TRẮC NGHIỆM: AN TOÀN TRÊN KHÔNG GIAN MẠNG',
          subtitle: 'Kiểm tra kỹ năng phòng chống lừa đảo và mã độc',
          quiz: {
            question: 'Khi nhận được một email từ địa chỉ lạ thông báo tài khoản mạng xã hội của em bị khóa kèm một đường link yêu cầu đăng nhập để mở lại, hành động đúng nhất là gì?',
            options: [
              'A. Bấm ngay vào đường link và nhập mật khẩu để kiểm tra',
              'B. Chuyển tiếp email cho tất cả bạn bè trong lớp để cảnh báo',
              'C. Không bấm vào link, kiểm tra lại địa chỉ người gửi và báo cáo thư rác (Spam/Phishing)',
              'D. Tải tệp đính kèm trong email về máy tính để quét virus',
            ],
            answer: 'Đáp án C: Không bấm vào link, kiểm tra lại địa chỉ người gửi và báo cáo thư rác (Spam/Phishing).',
            explanation: 'Đây là chiêu thức tấn công giả mạo (Phishing) kinh điển nhằm đánh cắp tài khoản người dùng qua các trang web đăng nhập giả mạo.',
          },
        },
        {
          id: 'b9-s7',
          slideNumber: 7,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 9 & NGUYÊN TẮC AN TOÀN SỐ',
          subtitle: 'Học sinh trở thành công dân số thông thái và cẩn trọng',
          bullets: [
            {
              title: '1. Cảnh giác trước đường link lạ:',
              text: 'Tuyệt đối không nhấp chuột vào các liên kết bất thường từ tin nhắn hoặc email không xác thực.',
            },
            {
              title: '2. Sử dụng phần mềm diệt virus bản quyền:',
              text: 'Bật tường lửa (Firewall) và cập nhật hệ điều hành Windows/Android thường xuyên.',
            },
            {
              title: '3. Bảo vệ danh tính số:',
              text: 'Không tùy tiện chia sẻ số Căn cước công dân, địa chỉ nhà hoặc mật khẩu cá nhân lên mạng.',
            },
          ],
        },
      ],
    },

    // =========================================================================
    // BÀI 10: KỸ NĂNG THỰC HÀNH TÌM KIẾM VÀ KHAI THÁC TÀI NGUYÊN TRÊN INTERNET
    // =========================================================================
    {
      id: 'bai-10',
      number: 10,
      title: 'Bài 10. Kỹ năng thực hành tìm kiếm và khai thác tài nguyên trên Internet',
      shortTitle: 'Bài 10: Thực hành tìm kiếm & Khai thác Internet',
      chapterId: 'chu-de-2',
      pageStart: 50,
      pageEnd: 53,
      slides: [
        {
          id: 'b10-s1',
          slideNumber: 1,
          type: 'title',
          title: 'KỸ NĂNG THỰC HÀNH TÌM KIẾM VÀ KHAI THÁC TÀI NGUYÊN TRÊN INTERNET',
          subtitle: 'Chủ đề 2: Mạng máy tính và Internet | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Kỹ năng tìm kiếm nâng cao với toán tử và bộ lọc thông minh trên Google' },
            { text: 'Khai thác dịch vụ dịch thuật đa ngữ thông minh (Google Translate)' },
            { text: 'Tiếp cận các nguồn học liệu mở, sách điện tử và video bài giảng chính thống' },
            { text: 'Quy trình thẩm định và đánh giá độ tin cậy của nguồn thông tin số' },
          ],
          badge: 'Bài 10 • Kĩ năng thực hành số',
        },
        {
          id: 'b10-s2',
          slideNumber: 2,
          type: 'process',
          title: 'CÁC TOÁN TỬ TÌM KIẾM NÂNG CAO TRÊN GOOGLE',
          subtitle: 'Kỹ thuật tìm kiếm chính xác tài liệu học tập trong vài giây',
          cardsGrid: [
            {
              title: 'Tìm chính xác cụm từ: "..."',
              desc: 'Đặt từ khóa trong dấu ngoặc kép.',
              tag: 'Toán tử ""',
              points: [
                'Ví dụ: "Tin học 10 Kết nối tri thức"',
                'Chỉ hiển thị kết quả chứa chính xác cụm từ',
              ],
            },
            {
              title: 'Tìm theo định dạng tệp: filetype:...',
              desc: 'Lọc riêng định dạng tệp PDF, PPTX, DOCX.',
              tag: 'filetype',
              points: [
                'Ví dụ: bai giang python filetype:pdf',
                'Tải trực tiếp tài liệu học tập chuẩn mực',
              ],
            },
          ],
        },
        {
          id: 'b10-s3',
          slideNumber: 3,
          type: 'process',
          title: 'KHAI THÁC DỊCH THUẬT ĐA NGỮ GOOGLE TRANSLATE',
          subtitle: '3 phương thức dịch thuật tiện ích phục vụ học tập (SGK trang 50 - 51)',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1',
                title: 'Nhập văn bản',
                desc: 'Gõ hoặc dán văn bản trực tiếp; hệ thống tự nhận diện ngôn ngữ nguồn và dịch tức thời.',
                tag: 'Text',
              },
              {
                stepNumber: '2',
                title: 'Dịch qua giọng nói',
                desc: 'Nói trực tiếp qua micro để luyện phát âm và nghe bản dịch đọc to tự động bằng giọng bản xứ.',
                tag: 'Voice',
              },
              {
                stepNumber: '3',
                title: 'Dịch trọn tệp tài liệu',
                desc: 'Tải lên tệp Word, PDF để dịch nguyên vẹn toàn bộ văn bản mà vẫn giữ cấu trúc tài liệu.',
                tag: 'Document',
              },
            ],
          },
        },
        {
          id: 'b10-s4',
          slideNumber: 4,
          type: 'content',
          title: 'ĐÁNH GIÁ ĐỘ TIN CẬY CỦA NGUỒN TIN TRÊN MẠNG',
          subtitle: 'Bộ tiêu chí thẩm định chất lượng bài viết trước khi sử dụng trong học tập',
          bullets: [
            {
              title: '1. Tác giả & Cơ quan phát hành:',
              text: 'Ưu tiên các website có tên miền uy tín: .gov.vn (cơ quan chính phủ), .edu.vn (trường đại học, viện nghiên cứu), các nhà xuất bản giáo dục chính thống.',
            },
            {
              title: '2. Tính cập nhật (Thời gian công bố):',
              text: 'Kiểm tra ngày đăng bài để tránh sử dụng các thông tin, số liệu đã lỗi thời hoặc chính sách đã hết hiệu lực.',
            },
            {
              title: '3. Kiểm chứng chéo đa nguồn:',
              text: 'Không vội tin vào một bài viết duy nhất; hãy đối chiếu với ít nhất 2 - 3 nguồn tin độc lập đáng tin cậy.',
            },
          ],
        },
        {
          id: 'b10-s5',
          slideNumber: 5,
          type: 'practice',
          title: 'TRẮC NGHIỆM: KỸ NĂNG TÌM KIẾM HỌC LIỆU SỐ',
          subtitle: 'Kiểm tra thao tác sử dụng cú pháp tìm kiếm tài liệu chuẩn',
          quiz: {
            question: 'Để tìm kiếm các tệp bài giảng thuyết trình dạng PowerPoint về chủ đề Python trên trang web giáo dục của trường đại học, cú pháp nào sau đây là hiệu quả nhất?',
            options: [
              'A. bài giảng python hay nhất năm nay',
              'B. python filetype:pptx site:edu.vn',
              'C. tìm cho tôi bài trình chiếu python',
              'D. tải pptx python miễn phí không virus',
            ],
            answer: 'Đáp án B: python filetype:pptx site:edu.vn.',
            explanation: 'Toán tử filetype:pptx lọc riêng tệp trình chiếu, kết hợp site:edu.vn giới hạn phạm vi tìm kiếm trong các website giáo dục uy tín.',
          },
        },
        {
          id: 'b10-s6',
          slideNumber: 6,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 10 & NGUYÊN TẮC KHAI THÁC INTERNET',
          subtitle: 'Học sinh trở thành người học tự chủ trên không gian số',
          bullets: [
            {
              title: '1. Tìm kiếm thông minh:',
              text: 'Sử dụng từ khóa ngắn gọn, chính xác kết hợp các toán tử lọc định dạng tệp và tên miền.',
            },
            {
              title: '2. Khai thác công cụ dịch thuật có chọn lọc:',
              text: 'Sử dụng Google Translate hỗ trợ đọc tài liệu nước ngoài nhưng luôn đối chiếu với từ điển chuyên ngành.',
            },
            {
              title: '3. Tôn trọng bản quyền:',
              text: 'Khi trích dẫn số liệu, hình ảnh hoặc đoạn trích từ Internet vào bài thuyết trình, luôn ghi rõ tác giả và đường link nguồn tham khảo.',
            },
          ],
        },
      ],
    },
  ],
};
