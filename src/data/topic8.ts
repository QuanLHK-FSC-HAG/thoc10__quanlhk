import { Chapter } from '../types';

export const topic8: Chapter = {
  id: 'chu-de-8',
  number: 8,
  title: 'Chủ đề 8. Định hướng nghề nghiệp',
  description: 'Tìm hiểu thị trường lao động số, đặc thù công việc và định hướng phát triển trong hai nhóm ngành nghề mũi nhọn: Thiết kế đồ họa máy tính và Phát triển phần mềm.',
  lessons: [
    // =========================================================================
    // BÀI 33: NGHỀ THIẾT KẾ ĐỒ HỌA MÁY TÍNH
    // =========================================================================
    {
      id: 'bai-33',
      number: 33,
      title: 'Bài 33. Tìm hiểu tổng quan về nhóm nghề thiết kế đồ họa máy tính',
      shortTitle: 'Bài 33: Nhóm nghề Thiết kế đồ họa',
      chapterId: 'chu-de-8',
      pageStart: 163,
      pageEnd: 168,
      slides: [
        {
          id: 'b33-s1',
          slideNumber: 1,
          type: 'title',
          title: 'TÌM HIỂU TỔNG QUAN VỀ NHÓM NGHỀ THIẾT KẾ ĐỒ HỌA MÁY TÍNH',
          subtitle: 'Chủ đề 8: Định hướng nghề nghiệp | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Bản chất, vai trò và vị trí của nghề thiết kế đồ họa trong kỉ nguyên số' },
            { text: 'Các lĩnh vực chuyên môn: Nhận diện thương hiệu, Xuất bản in ấn, UI/UX và Hoạt hình' },
            { text: 'Yêu cầu năng lực: Kiến thức thẩm mỹ, làm chủ công cụ số và tư duy sáng tạo' },
            { text: 'Lộ trình rèn luyện, học tập và cơ hội việc làm dành cho học sinh THPT' },
          ],
          badge: 'Bài 33 • Hướng nghiệp số',
        },
        {
          id: 'b33-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: ĐỒ HỌA XUNG QUANH CHÚNG TA',
          subtitle: 'Quan sát các sản phẩm đồ họa trong đời sống hàng ngày (SGK trang 163)',
          cardsGrid: [
            {
              title: 'Xuất bản & Sách báo',
              desc: 'Bìa sách giáo khoa, tạp chí thời trang, truyện tranh, poster phim.',
              tag: 'In ấn truyền thống',
              points: [
                'Bố cục cân đối, hài hòa',
                'Nghệ thuật chữ (Typography) tinh tế',
              ],
            },
            {
              title: 'Thương hiệu & Truyền thông',
              desc: 'Logo doanh nghiệp, bao bì sản phẩm, banner quảng cáo Facebook/TikTok.',
              tag: 'Thương hiệu số',
              points: [
                'Truyền tải bản sắc thương hiệu',
                'Thu hút thị giác người tiêu dùng tức thì',
              ],
            },
            {
              title: 'Giao diện số (UI/UX)',
              desc: 'Giao diện các ứng dụng di động, website mua sắm trực tuyến, trò chơi điện tử.',
              tag: 'Trải nghiệm số',
              points: [
                'Tương tác thân thiện, trực quan',
                'Nâng cao trải nghiệm người dùng',
              ],
            },
          ],
        },
        {
          id: 'b33-s3',
          slideNumber: 3,
          type: 'content',
          title: 'BẢN CHẤT CỦA NGHỀ THIẾT KẾ ĐỒ HỌA',
          subtitle: 'Giao thoa giữa nghệ thuật thẩm mỹ thị giác và công nghệ máy tính',
          imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Không gian làm việc sáng tạo của chuyên viên thiết kế đồ họa máy tính',
          bullets: [
            {
              title: 'Định nghĩa thiết kế đồ họa:',
              text: 'Là ngành nghệ thuật ứng dụng, kết hợp giữa hình ảnh, chữ viết và ý tưởng sáng tạo để truyền đạt thông điệp thị giác hiệu quả đến công chúng.',
            },
            {
              title: 'Sự khác biệt với hội họa truyền thống:',
              text: 'Họa sĩ vẽ tranh thể hiện cảm xúc cá nhân; nhà thiết kế đồ họa tạo ra sản phẩm phục vụ mục đích truyền thông, kinh doanh và giải quyết bài toán của khách hàng.',
            },
            {
              title: 'Môi trường làm việc:',
              text: 'Làm việc chủ yếu trên máy tính với các phần mềm đồ họa chuyên dụng: Inkscape, Illustrator, Photoshop, Figma, Blender...',
            },
          ],
        },
        {
          id: 'b33-s4',
          slideNumber: 4,
          type: 'table',
          title: 'CÁC CHUYÊN NGÀNH HẸP TRONG THIẾT KẾ ĐỒ HỌA',
          subtitle: 'Bảng đối chiếu 4 hướng đi nghề nghiệp phổ biến nhất hiện nay',
          tableData: {
            caption: 'Phân loại chuyên ngành thiết kế đồ họa',
            headers: ['Chuyên ngành', 'Sản phẩm chủ lực', 'Công cụ phần mềm tiêu biểu'],
            rows: [
              ['Thiết kế nhận diện thương hiệu', 'Logo, cẩm nang thương hiệu, danh thiếp, phong bì, bao bì sản phẩm', 'Inkscape, Adobe Illustrator, CorelDraw'],
              ['Thiết kế xuất bản & in ấn', 'Bìa sách, tạp chí, brochure, báo in, catalogue, lịch để bàn', 'Adobe InDesign, QuarkXPress'],
              ['Thiết kế giao diện số (UI/UX)', 'Giao diện app điện thoại, layout website, icon tương tác', 'Figma, Adobe XD, Sketch'],
              ['Đồ họa chuyển động & hoạt hình', 'Kỹ xảo video, motion graphics quảng cáo, hoạt hình 2D/3D', 'After Effects, Premiere, Blender'],
            ],
          },
        },
        {
          id: 'b33-s5',
          slideNumber: 5,
          type: 'content',
          title: 'YÊU CẦU NĂNG LỰC VÀ PHẨM CHẤT NGHỀ NGHIỆP',
          subtitle: 'Những tố chất cần rèn luyện để trở thành nhà thiết kế đồ họa giỏi',
          cardsGrid: [
            {
              title: 'Tư duy thẩm mỹ & Bố cục',
              desc: 'Cảm thụ màu sắc, luật xa gần, tỉ lệ vàng và sự phân cấp thị giác.',
              tag: 'Năng khiếu & Rèn luyện',
              points: [
                'Hiểu nguyên lý phối màu (Bánh xe màu)',
                'Cân bằng khoảng trống âm (Negative space)',
              ],
            },
            {
              title: 'Làm chủ công nghệ số',
              desc: 'Thành thạo công cụ vẽ vectơ, xử lý điểm ảnh và định dạng tệp.',
              tag: 'Kỹ năng kỹ thuật',
              points: [
                'Nắm vững công cụ Bezier, layer, mask',
                'Hiểu rõ chuẩn xuất file in (CMYK, 300DPI) và web (RGB, 96DPI)',
              ],
            },
            {
              title: 'Kỹ năng mềm & Giao tiếp',
              desc: 'Thấu hiểu mong muốn khách hàng và khả năng thuyết trình ý tưởng.',
              tag: 'Kỹ năng bổ trợ',
              points: [
                'Lắng nghe và tiếp thu phản hồi phản biện',
                'Quản lý thời gian, đáp ứng đúng hạn (deadline)',
              ],
            },
          ],
        },
        {
          id: 'b33-s6',
          slideNumber: 6,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 33 VÀ ĐỊNH HƯỚNG TƯƠNG LAI',
          subtitle: 'Hành trang chuẩn bị cho học sinh THPT yêu thích đồ họa',
          bullets: [
            {
              title: '1. Rèn luyện từ sớm:',
              text: 'Tận dụng môn Tin học 10 (Chủ đề 4 Inkscape) và môn Mỹ thuật để thực hành sáng tạo các sản phẩm cho lớp, trường.',
            },
            {
              title: '2. Xây dựng hồ sơ năng lực (Portfolio):',
              text: 'Lưu trữ các bản vẽ, logo, poster tự thiết kế làm minh chứng khi xét tuyển vào các trường đại học, cao đẳng chuyên ngành.',
            },
            {
              title: '3. Cơ hội nghề nghiệp rộng mở:',
              text: 'Có thể làm việc tại các công ty quảng cáo, tòa soạn, hãng game hoặc làm việc tự do (Freelancer) toàn cầu.',
            },
          ],
        },
        {
          id: 'b33-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & TÌM HIỂU THỰC TẾ',
          subtitle: 'Tìm hiểu một sản phẩm đồ họa thực tế và chuẩn bị Bài 34',
          lead: 'Học sinh hoàn thành 2 nhiệm vụ khám phá nghề nghiệp:',
          bullets: [
            {
              title: 'Nhiệm vụ 1: Phân tích một ấn phẩm đồ họa',
              text: 'Chọn một logo hoặc bao bì sản phẩm em yêu thích, quan sát và ghi chép nhận xét về: màu sắc chủ đạo, kiểu chữ, bố cục hình ảnh và thông điệp mà thương hiệu muốn gửi gắm.',
              badge: 'Phân tích thẩm mỹ',
            },
            {
              title: 'Nhiệm vụ 2: Chuẩn bị Bài 34',
              text: 'Đọc trước Bài 34: Nhóm nghề phát triển phần mềm và lập trình. Tìm hiểu quy trình để tạo nên một ứng dụng như Zalo hay Facebook.',
              badge: 'Chuẩn bị Bài 34',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LỜI KHUYÊN HƯỚNG NGHIỆP',
            content: 'Thiết kế đồ họa đòi hỏi sự kiên trì thực hành hàng ngày. Hãy bắt đầu từ việc thiết kế thiệp chúc mừng, slide thuyết trình hoặc poster hoạt động Đoàn trường!',
          },
          footerNote: 'SGK Tin học 10 (trang 163-168) • Giáo viên: QuanLHK',
        },
      ],
    },

    // =========================================================================
    // BÀI 34: NGHỀ PHÁT TRIỂN PHẦN MỀM VÀ LẬP TRÌNH
    // =========================================================================
    {
      id: 'bai-34',
      number: 34,
      title: 'Bài 34. Tìm hiểu về nhóm nghề phát triển phần mềm và lập trình',
      shortTitle: 'Bài 34: Nghề phát triển phần mềm',
      chapterId: 'chu-de-8',
      pageStart: 169,
      pageEnd: 176,
      slides: [
        {
          id: 'b34-s1',
          slideNumber: 1,
          type: 'title',
          title: 'TÌM HIỂU VỀ NHÓM NGHỀ PHÁT TRIỂN PHẦN MỀM VÀ LẬP TRÌNH',
          subtitle: 'Chủ đề 8: Định hướng nghề nghiệp | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Vai trò then chốt của kỹ sư phần mềm trong cuộc Cách mạng công nghiệp 4.0' },
            { text: 'Quy trình phát triển phần mềm (SDLC) và các vị trí việc làm chuyên sâu' },
            { text: 'Phẩm chất cốt lõi: Tư duy logic, tự học bền bỉ và đạo đức nghề nghiệp' },
            { text: 'Định hướng học tập và con đường phát triển sự nghiệp trong ngành CNTT' },
          ],
          badge: 'Bài 34 • Kỹ sư số',
        },
        {
          id: 'b34-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: THẾ GIỚI ĐƯỢC VẬN HÀNH BỞI PHẦN MỀM',
          subtitle: 'Tầm ảnh hưởng sâu rộng của mã lệnh trong xã hội hiện đại (SGK trang 169)',
          cardsGrid: [
            {
              title: 'Ngân hàng & Tài chính',
              desc: 'Ứng dụng Mobile Banking, hệ thống thanh toán quét mã QR, giao dịch chứng khoán.',
              tag: 'FinTech',
              points: [
                'An toàn bảo mật tối cao',
                'Xử lý hàng triệu giao dịch mỗi giây',
              ],
            },
            {
              title: 'Giao thông & Đặt xe',
              desc: 'Ứng dụng Grab, Google Maps điều hướng, hệ thống điều khiển bay tự động.',
              tag: 'Smart Logistics',
              points: [
                'Thuật toán tìm đường ngắn nhất',
                'Kết nối cung cầu theo thời gian thực',
              ],
            },
            {
              title: 'Y tế & Giáo dục',
              desc: 'Hồ sơ bệnh án điện tử, robot hỗ trợ phẫu thuật, lớp học trực tuyến LMS.',
              tag: 'EdTech & MedTech',
              points: [
                'Chuyển đổi số toàn diện',
                'Tối ưu hóa nguồn lực nhân loại',
              ],
            },
          ],
        },
        {
          id: 'b34-s3',
          slideNumber: 3,
          type: 'process',
          title: 'VÒNG ĐỜI PHÁT TRIỂN PHẦN MỀM (SDLC)',
          subtitle: 'Quy trình sản xuất phần mềm chuyên nghiệp từ ý tưởng đến triển khai',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1. KHẢO SÁT',
                title: 'Phân tích yêu cầu',
                desc: 'Lấy yêu cầu từ khách hàng và xác định phạm vi chức năng của hệ thống.',
                tag: 'Business Analyst (BA)',
              },
              {
                stepNumber: '2. THIẾT KẾ',
                title: 'Thiết kế kiến trúc',
                desc: 'Thiết kế cơ sở dữ liệu, giao diện và sơ đồ luồng dữ liệu của hệ thống.',
                tag: 'System Architect',
              },
              {
                stepNumber: '3. LẬP TRÌNH',
                title: 'Viết mã nguồn',
                desc: 'Chuyển thiết kế thành mã lệnh cụ thể bằng các ngôn ngữ như Python, Java, C++.',
                tag: 'Developer / Coder',
              },
              {
                stepNumber: '4. KIỂM THỬ',
                title: 'Kiểm thử chất lượng',
                desc: 'Tìm kiếm lỗi, thử nghiệm bảo mật và hiệu năng trước khi bàn giao.',
                tag: 'Tester / QA QC',
              },
              {
                stepNumber: '5. VẬN HÀNH',
                title: 'Triển khai & Bảo trì',
                desc: 'Cài đặt lên máy chủ đám mây, sửa lỗi phát sinh và cập nhật tính năng mới.',
                tag: 'DevOps & Support',
              },
            ],
          },
        },
        {
          id: 'b34-s4',
          slideNumber: 4,
          type: 'table',
          title: 'CÁC VỊ TRÍ NGHỀ NGHIỆP TRONG DỰ ÁN PHẦN MỀM',
          subtitle: 'Phân công lao động theo chuyên môn trong một công ty công nghệ',
          tableData: {
            caption: 'Bảng mô tả các vị trí nhân sự phát triển phần mềm',
            headers: ['Vị trí công việc', 'Nhiệm vụ chính', 'Kỹ năng & Ngôn ngữ chủ đạo'],
            rows: [
              ['Lập trình viên giao diện (Front-end)', 'Xây dựng giao diện web/app người dùng tương tác trực tiếp', 'HTML, CSS, JavaScript, React, Flutter'],
              ['Lập trình viên hệ thống (Back-end)', 'Xử lý logic nghiệp vụ, quản trị cơ sở dữ liệu và bảo mật', 'Python, Java, NodeJS, SQL, API'],
              ['Kỹ sư kiểm thử (Tester / QA)', 'Viết kịch bản kiểm thử, phát hiện lỗi phần mềm và báo cáo', 'Tư duy chi tiết, Postman, Selenium, Unit Test'],
              ['Kỹ sư dữ liệu / Trí tuệ nhân tạo (AI/Data)', 'Xử lý dữ liệu lớn, huấn luyện các mô hình học máy (Machine Learning)', 'Python, Pandas, TensorFlow, Toán xác suất'],
              ['Quản lý dự án (Project Manager)', 'Lên kế hoạch, phân bổ nguồn lực, theo dõi tiến độ hoàn thành', 'Kỹ năng quản trị, giao tiếp, Agile/Scrum'],
            ],
          },
        },
        {
          id: 'b34-s5',
          slideNumber: 5,
          type: 'content',
          title: 'PHẨM CHẤT VÀ NĂNG LỰC CẦN THIẾT CỦA LẬP TRÌNH VIÊN',
          subtitle: 'Những tố chất quyết định sự thành công lâu dài trong ngành phần mềm',
          cardsGrid: [
            {
              title: 'Tư duy logic & Giải quyết vấn đề',
              desc: 'Khả năng bẻ nhỏ bài toán phức tạp thành các bước thuật toán cụ thể.',
              tag: 'Tư duy cốt lõi',
              points: [
                'Không ngại thử thách khó khăn',
                'Suy nghĩ mạch lạc, chính xác tuyệt đối',
              ],
            },
            {
              title: 'Khả năng tự học không ngừng',
              desc: 'Công nghệ phần mềm đổi mới từng ngày; học tập là việc suốt đời.',
              tag: 'Tự học bền bỉ',
              points: [
                'Đọc hiểu tài liệu tiếng Anh chuyên ngành',
                'Nhanh chóng làm chủ thư viện/ngôn ngữ mới',
              ],
            },
            {
              title: 'Tính cẩn thận & Đạo đức nghề nghiệp',
              desc: 'Một dấu chấm phẩy sai có thể làm sập toàn bộ hệ thống ngân hàng.',
              tag: 'Trách nhiệm cao',
              points: [
                'Kiên trì dò vết từng dòng mã lệnh',
                'Bảo mật thông tin dữ liệu của người dùng',
              ],
            },
          ],
        },
        {
          id: 'b34-s6',
          slideNumber: 6,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 34 VÀ LỘ TRÌNH ĐỊNH HƯỚNG BẢN THÂN',
          subtitle: 'Khép lại chương trình Tin học 10 Kết nối tri thức với cuộc sống',
          bullets: [
            {
              title: '1. Nền móng vững chắc từ lớp 10:',
              text: 'Kiến thức lập trình Python (Chủ đề 5, 6, 7) chính là bước đệm cơ bản nhất để bước vào thế giới phát triển phần mềm.',
            },
            {
              title: '2. Nâng cao ngoại ngữ:',
              text: 'Tiếng Anh là ngôn ngữ chung của thế giới lập trình. Hãy tập đọc các diễn đàn công nghệ (Stack Overflow, GitHub).',
            },
            {
              title: '3. Định hướng nghề nghiệp tương lai:',
              text: 'Dù em lựa chọn Thiết kế đồ họa máy tính (Bài 33) hay Phát triển phần mềm (Bài 34), Tin học sẽ luôn là công cụ đắc lực chắp cánh cho ước mơ của em.',
            },
          ],
        },
        {
          id: 'b34-s7',
          slideNumber: 7,
          type: 'practice',
          title: 'TỔNG KẾT MÔN TIN HỌC 10 & NHIỆM VỤ HÈ',
          subtitle: 'Kế hoạch học tập và phát triển kỹ năng số trong kỳ nghỉ hè',
          lead: 'Chúc mừng các em đã hoàn thành xuất sắc toàn bộ 8 Chủ đề SGK Tin học 10!',
          bullets: [
            {
              title: 'Dự án mùa hè: Xây dựng ứng dụng Python mini cá nhân',
              text: 'Tự lên ý tưởng và viết một chương trình Python nhỏ (quản lý chi tiêu, sổ từ vựng tiếng Anh, game đố vui trắc nghiệm) và đưa lên GitHub.',
              badge: 'Portfolio cá nhân',
            },
            {
              title: 'Chuẩn bị cho Tin học 11',
              text: 'Lựa chọn định hướng chuyên đề học tập lớp 11: Khoa học máy tính (CS) hoặc Tin học ứng dụng (ICT) theo sở thích và năng khiếu của bản thân.',
              badge: 'Định hướng lớp 11',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LỜI CHÚC TỪ GIÁO VIÊN',
            content: 'Chúc các em luôn giữ vững ngọn lửa đam mê công nghệ, không ngừng học hỏi và sáng tạo để trở thành những công dân số toàn cầu tài năng!',
          },
          footerNote: 'SGK Tin học 10 Kết nối tri thức • Giáo viên: QuanLHK • Năm học 2024-2025',
        },
      ],
    },
  ],
};
