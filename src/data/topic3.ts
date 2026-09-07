import { Chapter } from '../types';

export const topic3: Chapter = {
  id: 'chu-de-3',
  number: 3,
  title: 'Chủ đề 3. Đạo đức, pháp luật và văn hóa trong môi trường số',
  description: 'Quy tắc ứng xử văn minh trên mạng, trách nhiệm khi đăng tải thông tin và nghĩa vụ tôn trọng quyền tác giả, bản quyền số.',
  lessons: [
    // =========================================================================
    // BÀI 11: QUY TẮC ỨNG XỬ VĂN MINH TRÊN KHÔNG GIAN MẠNG VÀ TRÁCH NHIỆM TÔN TRỌNG BẢN QUYỀN TÁC GIẢ
    // =========================================================================
    {
      id: 'bai-11',
      number: 11,
      title: 'Bài 11. Quy tắc ứng xử văn minh trên không gian mạng và trách nhiệm tôn trọng bản quyền tác giả',
      shortTitle: 'Bài 11: Ứng xử số & Bản quyền',
      chapterId: 'chu-de-3',
      pageStart: 55,
      pageEnd: 63,
      slides: [
        {
          id: 'b11-s1',
          slideNumber: 1,
          type: 'title',
          title: 'QUY TẮC ỨNG XỬ VĂN MINH TRÊN KHÔNG GIAN MẠNG VÀ BẢN QUYỀN TÁC GIẢ',
          subtitle: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số | SGK Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Nhận diện các hành vi vi phạm đạo đức, văn hóa và pháp luật trên mạng' },
            { text: 'Hiểu các đặc tính của Internet làm gia tăng tính nghiêm trọng của hành vi xấu' },
            { text: 'Nắm vững quy trình kiểm chứng thông tin trước khi đăng hoặc chia sẻ' },
            { text: 'Phân biệt quyền tác giả, quyền nhân thân, quyền tài sản và bản quyền số' },
          ],
          badge: 'Bài 11 • KHBD Chuẩn',
        },
        {
          id: 'b11-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: MỘT LẦN CHIA SẺ, NHIỀU HỆ QUẢ',
          subtitle: 'Phân tích tình huống mở đầu SGK trang 55',
          lead: 'Tình huống: Một nhóm học sinh mâu thuẫn ở cổng trường. Một bạn đứng ngoài dùng điện thoại quay clip rồi đăng lên mạng xã hội với dòng trạng thái kích động.',
          cardsGrid: [
            {
              title: 'Hành vi vi phạm',
              desc: 'Quay clip và phát tán hình ảnh bạo lực, xúc phạm danh dự người khác lên mạng.',
              tag: 'Hành vi xấu',
              points: [
                'Vi phạm nghiêm trọng đạo đức học sinh',
                'Vi phạm Điều 101 Nghị định 15/2020/NĐ-CP',
              ],
            },
            {
              title: 'Hậu quả khôn lường',
              desc: 'Nạn nhân bị khủng hoảng tâm lí; người đăng bị kỉ luật và xử lý theo pháp luật.',
              tag: 'Hậu quả',
              points: [
                'Dấu chân số tồn tại vĩnh viễn trên mạng',
                'Tốc độ lan truyền toàn cầu không thể thu hồi',
              ],
            },
          ],
        },
        {
          id: 'b11-s3',
          slideNumber: 3,
          type: 'content',
          title: 'CÁC HÀNH VI TIÊU CỰC TRÊN MẠNG (PHẦN 1)',
          subtitle: 'Nhiệm vụ 1: Nhận diện hành vi xấu theo chuẩn SGK trang 56-57',
          cardsGrid: [
            {
              title: '1. Đưa tin giả & Bịa đặt',
              desc: 'Đăng tải thông tin sai sự thật về dịch bệnh, thiên tai để câu view, câu like.',
              tag: 'Tin giả (Fake news)',
              points: [
                'Gây hoang mang, bất an trong xã hội',
                'Bị phạt tiền từ 10 - 20 triệu đồng theo pháp luật',
              ],
            },
            {
              title: '2. Tiết lộ bí mật riêng tư (Doxxing)',
              desc: 'Tự ý đăng số điện thoại, địa chỉ nhà, điểm thi hoặc tin nhắn riêng của người khác.',
              tag: 'Xâm phạm riêng tư',
              points: [
                'Xâm phạm nghiêm trọng quyền bí mật đời tư',
                'Khiến nạn nhân bị quấy rối, đe dọa ngoài đời thực',
              ],
            },
          ],
        },
        {
          id: 'b11-s4',
          slideNumber: 4,
          type: 'content',
          title: 'CÁC HÀNH VI TIÊU CỰC TRÊN MẠNG (PHẦN 2)',
          subtitle: 'Nhiệm vụ 1: Bắt nạt qua mạng và Thư rác phiền toái',
          cardsGrid: [
            {
              title: '3. Thư rác & Tin nhắn rác (Spam)',
              desc: 'Gửi hàng loạt quảng cáo không mong muốn qua email hoặc tin nhắn.',
              tag: 'Spam',
              points: [
                'Làm tắc nghẽn hộp thư và gây ức chế cho người dùng',
                'Tiềm ẩn nguy cơ cài cắm liên kết độc hại lừa đảo',
              ],
            },
            {
              title: '4. Bắt nạt trực tuyến (Cyberbullying)',
              desc: 'Dùng lời lẽ lăng mạ, chế giễu ngoại hình, lập hội nhóm tẩy chay bạn học.',
              tag: 'Bạo lực ngôn từ',
              points: [
                'Gây tổn thương tâm lí sâu sắc và trầm cảm cho nạn nhân',
                'Có thể bị truy cứu trách nhiệm hình sự nếu gây hậu quả nghiêm trọng',
              ],
            },
          ],
        },
        {
          id: 'b11-s5',
          slideNumber: 5,
          type: 'table',
          title: 'THỰC HÀNH: GIAO TIẾP VĂN MINH TRÊN MẠNG',
          subtitle: 'Nhiệm vụ 2: Biến tranh luận công kích thành đối thoại tôn trọng (Phiếu học tập số 2)',
          tableData: {
            caption: 'Đối chiếu cách tranh luận thiếu văn hóa và cách ứng xử chuẩn mực',
            headers: ['Tình huống', 'Cách nói thiếu văn hóa (CẦN TRÁNH)', 'Cách diễn đạt văn minh (NÊN DÙNG)'],
            rows: [
              ['Bất đồng về bài tập Tin học', '"Mày dốt thế, câm miệng đi!"', '"Mình nghĩ cách giải này có thể chưa tối ưu, bạn thử xem lại công thức ở SGK trang 12 xem sao nhé."'],
              ['Khi bạn đăng ảnh dự thi của lớp', '"Ảnh chụp như rác, nhìn là muốn ném đá!"', '"Góc chụp này ánh sáng hơi tối một chút, lần sau nhóm mình căn chỉnh sáng tự nhiên sẽ đẹp hơn nhiều."'],
              ['Khi phát hiện bạn chia sẻ tin sai', '"Thằng này toàn tha rác về group, report nó đi!"', '"Nguồn tin này mình kiểm tra trên báo Tuổi Trẻ chưa thấy xác nhận, bạn tạm thời gỡ xuống để tránh hiểu lầm nhé."'],
            ],
          },
        },
        {
          id: 'b11-s6',
          slideNumber: 6,
          type: 'process',
          title: 'QUY TRÌNH 3 BƯỚC KIỂM CHỨNG TRƯỚC KHI CHIA SẺ',
          subtitle: 'Kĩ năng tự bảo vệ và phòng tránh tiếp tay cho tin giả (Phiếu học tập số 3)',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Kiểm tra nguồn tin',
                desc: 'Tin từ báo chính thống (VTV, Thông tấn xã, Tuổi Trẻ...) hay từ fanpage câu view, nặc danh?',
                tag: 'Nguồn tin',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Kiểm tra nội dung',
                desc: 'Có dấu hiệu ảnh cắt ghép, tiêu đề giật gân sai lệch, nội dung mơ hồ không ngày tháng?',
                tag: 'Xác thực',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Đánh giá tác động',
                desc: 'Thông tin có xúc phạm danh dự ai không? Có vi phạm pháp luật hoặc an ninh trật tự không?',
                tag: 'Trách nhiệm',
              },
            ],
          },
        },
        {
          id: 'b11-s7',
          slideNumber: 7,
          type: 'remember',
          title: 'NGUYÊN TẮC VÀNG VÀ TRÁCH NHIỆM KHI CHIA SẺ THÔNG TIN',
          subtitle: 'Ý thức tự giác và hậu quả pháp lý khi lan truyền tin giả',
          lead: 'Một cú nhấp chuột thiếu suy nghĩ có thể để lại hệ lụy khôn lường:',
          highlightBox: {
            type: 'warning',
            title: 'QUY TẮC VÀNG TRÊN MẠNG XÃ HỘI',
            content: 'NẾU CHƯA HOÀN TOÀN CHẮC CHẮN VỀ ĐỘ CHÍNH XÁC -> DỪNG LẠI, TUYỆT ĐỐI KHÔNG BẤM CHIA SẺ (SHARE)!',
          },
          bullets: [
            {
              title: 'Dấu chân số tồn tại vĩnh viễn:',
              text: 'Dù đã xóa bài đăng, bản sao chụp màn hình và lịch sử lưu vết của nhà mạng vẫn là bằng chứng rõ ràng trước pháp luật.',
            },
            {
              title: 'Chế tài xử phạt theo Nghị định 15/2020/NĐ-CP:',
              text: 'Hành vi cung cấp, chia sẻ thông tin giả mạo, sai sự thật, xúc phạm uy tín người khác bị phạt tiền từ 10 đến 20 triệu đồng.',
            },
          ],
        },
        {
          id: 'b11-s8',
          slideNumber: 8,
          type: 'diagram',
          title: 'QUYỀN TÁC GIẢ: QUYỀN NHÂN THÂN VÀ QUYỀN TÀI SẢN',
          subtitle: 'Nhiệm vụ 5: Cấu trúc quyền tác giả theo Luật Sở hữu trí tuệ Việt Nam',
          svgType: 'copyright-cc',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'NHÓM 1',
                title: 'Quyền nhân thân',
                desc: 'Đặt tên tác phẩm; Đứng tên thật hoặc bút danh; Được nêu tên khi tác phẩm được phổ biến; Bảo vệ sự toàn vẹn của tác phẩm.',
                tag: 'Không thể chuyển nhượng',
              },
              {
                stepNumber: 'NHÓM 2',
                title: 'Quyền tài sản',
                desc: 'Làm tác phẩm phái sinh; Sao chép tác phẩm; Phân phối bản gốc hoặc bản sao; Cho thuê hoặc bán quyền sử dụng tác phẩm.',
                tag: 'Có thể chuyển nhượng / bán',
              },
            ],
          },
        },
        {
          id: 'b11-s9',
          slideNumber: 9,
          type: 'content',
          title: 'BẢN QUYỀN PHẦN MỀM & GIẤY PHÉP SỬ DỤNG (LICENSE)',
          subtitle: 'Phân biệt giữa "Sở hữu bản quyền" và "Quyền sử dụng"',
          lead: 'Phần mềm máy tính là một tác phẩm trí tuệ được pháp luật bảo hộ nghiêm ngặt:',
          imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Tôn trọng quyền sở hữu trí tuệ, bản quyền phần mềm và văn hóa sử dụng công nghệ số',
          bullets: [
            {
              title: 'Bản quyền phần mềm thuộc về ai?:',
              text: 'Thuộc về cá nhân nhà phát triển hoặc tổ chức/doanh nghiệp lập trình tạo ra phần mềm đó.',
            },
            {
              title: 'Giấy phép người dùng cuối (EULA):',
              text: 'Khi mua bản quyền phần mềm, người dùng chỉ mua "quyền được sử dụng" theo điều khoản thỏa thuận, hoàn toàn không sở hữu mã nguồn.',
            },
            {
              title: 'Hành vi vi phạm bản quyền phần mềm nghiêm trọng:',
              text: 'Sử dụng phần mềm bẻ khóa (Crack), chia sẻ key kích hoạt lậu lên mạng, sao chép đĩa cài đặt phần mềm thương mại để bán lại.',
            },
          ],
        },
        {
          id: 'b11-s10',
          slideNumber: 10,
          type: 'remember',
          title: 'LỜI KHUYÊN CHO HỌC SINH: PHẦN MỀM MÃ NGUỒN MỞ (FOSS)',
          subtitle: 'Giải pháp học tập hiện đại, tiết kiệm và tôn trọng pháp luật bản quyền',
          lead: 'Học sinh hoàn toàn có thể sử dụng các công cụ phần mềm đỉnh cao mà không vi phạm bản quyền:',
          highlightBox: {
            type: 'remember',
            title: 'LỜI KHUYÊN CHO HỌC SINH',
            content: 'Ưu tiên sử dụng các phần mềm mã nguồn mở và miễn phí (FOSS) như Inkscape, GIMP, LibreOffice để vừa học tập hiệu quả vừa tôn trọng tuyệt đối pháp luật bản quyền.',
          },
          bullets: [
            {
              title: 'Đồ họa vectơ: Sử dụng Inkscape thay cho Adobe Illustrator',
              text: 'Đầy đủ tính năng vẽ vector, hỗ trợ chuẩn SVG quốc tế, dung lượng nhẹ và không tốn phí bản quyền hàng tháng.',
            },
            {
              title: 'Chỉnh sửa ảnh: Sử dụng GIMP thay cho Photoshop',
              text: 'Mã nguồn mở miễn phí, xử lý ảnh đa lớp chuyên nghiệp và chạy mượt mà trên mọi máy tính học đường.',
            },
          ],
        },
        {
          id: 'b11-s11',
          slideNumber: 11,
          type: 'table',
          title: 'NHẬN DIỆN HÀNH VI XÂM PHẠM BẢN QUYỀN SỐ',
          subtitle: 'Phân tích các tình huống thực tế trong học đường (SGK trang 61-62)',
          tableData: {
            caption: 'Đánh giá tính hợp pháp của các hành vi bản quyền thường gặp',
            headers: ['Hành vi thực tế', 'Đánh giá', 'Quyền bị xâm phạm & Giải thích'],
            rows: [
              ['Mua 1 USB phim có bản quyền rồi sao chép sang máy bạn', 'Vi phạm', 'Xâm phạm quyền sao chép và phân phối tác phẩm'],
              ['Mua phần mềm diệt virus dùng cho 1 máy, cài thêm cho 3 máy khác', 'Vi phạm', 'Vượt quá giới hạn của giấy phép sử dụng (License)'],
              ['Lấy ảnh trên mạng dán vào bài thuyết trình và ghi rõ nguồn tác giả', 'Hợp pháp', 'Sử dụng hợp lí (Fair use) cho mục đích học tập phi thương mại'],
              ['Tải phần mềm bẻ khóa (Crack) hoặc tải key lậu từ diễn đàn', 'Vi phạm nặng', 'Xâm phạm bản quyền và có nguy cơ cao bị cài mã độc Trojan'],
            ],
          },
        },
        {
          id: 'b11-s12',
          slideNumber: 12,
          type: 'practice',
          title: 'TRẮC NGHIỆM: ĐẠO ĐỨC & PHÁP LUẬT TRÊN MÔI TRƯỜNG SỐ',
          subtitle: 'Kiểm tra nhanh nhận thức về quyền tác giả và ứng xử mạng',
          quiz: {
            question: 'Hành vi nào sau đây KHÔNG vi phạm quy tắc đạo đức và pháp luật bản quyền khi sử dụng tư liệu Internet?',
            options: [
              'A. Sao chép một bức tranh trên mạng rồi xóa chữ ký tác giả để nhận là mình vẽ',
              'B. Tải bài viết trên mạng về và dán vào bài thuyết trình nhưng trích dẫn rõ tên tác giả và đường link nguồn',
              'C. Chia sẻ phần mềm đã bẻ khóa (Crack) vào nhóm chat lớp để các bạn cùng dùng',
              'D. Quay lén clip người khác lúc sơ suất rồi đăng lên mạng xã hội để chế giễu',
            ],
            answer: 'Đáp án B: Tải bài viết về và trích dẫn rõ tên tác giả, link nguồn tham khảo hợp pháp.',
            explanation: 'Sử dụng tư liệu cho mục đích học tập phi thương mại kèm theo việc trích dẫn nguồn gốc tác giả đầy đủ là hoàn toàn hợp pháp (nguyên tắc Fair Use).',
          },
        },
        {
          id: 'b11-s13',
          slideNumber: 13,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 11 & THÔNG ĐIỆP CÔNG DÂN SỐ',
          subtitle: 'Quy tắc ứng xử văn minh và trách nhiệm pháp lý',
          bullets: [
            {
              title: '1. Ứng xử văn hóa:',
              text: 'Không gian mạng là thế giới thực tế về mặt pháp lý và đạo đức. Luôn tôn trọng người khác.',
            },
            {
              title: '2. Trách nhiệm chia sẻ:',
              text: 'Luôn kiểm chứng nguồn tin trước khi đăng hoặc chia sẻ. Tuyệt đối không tiếp tay cho tin giả.',
            },
            {
              title: '3. Tôn trọng bản quyền:',
              text: 'Tôn trọng quyền nhân thân và quyền tài sản của tác giả; trích dẫn nguồn gốc đầy đủ khi sử dụng tư liệu.',
            },
          ],
        },
      ],
    },
  ],
};
