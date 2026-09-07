import { Chapter } from '../types';

export const topic1: Chapter = {
  id: 'chu-de-1',
  number: 1,
  title: 'Chủ đề 1. Máy tính và xã hội thông tin',
  description: 'Bản chất thông tin, dữ liệu, thiết bị thông minh, các thành tựu của Tin học và kĩ năng thực hành thiết bị số.',
  lessons: [
    // =========================================================================
    // BÀI 1: TỔNG QUAN VỀ THÔNG TIN VÀ QUÁ TRÌNH XỬ LÝ THÔNG TIN
    // =========================================================================
    {
      id: 'bai-1',
      number: 1,
      title: 'Bài 1. Tổng quan về thông tin và quá trình xử lý thông tin',
      shortTitle: 'Bài 1: Xử lí thông tin',
      chapterId: 'chu-de-1',
      pageStart: 6,
      pageEnd: 10,
      slides: [
        {
          id: 'b1-s1',
          slideNumber: 1,
          type: 'title',
          title: 'TỔNG QUAN VỀ THÔNG TIN VÀ QUÁ TRÌNH XỬ LÝ THÔNG TIN',
          subtitle: 'Chủ đề 1: Máy tính và xã hội thông tin | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Phân biệt bản chất thông tin và dữ liệu, tính độc lập tương đối' },
            { text: 'Mô tả chu trình 3 bước xử lí thông tin bằng máy tính điện tử' },
            { text: 'Nắm vững bảng đơn vị lưu trữ (bội số lũy thừa của 2) và cách quy đổi' },
            { text: 'Nhận biết ưu thế vượt trội của thiết bị số trong đời sống hiện đại' },
          ],
          badge: 'Bài 1 • KHBD Chuẩn',
        },
        {
          id: 'b1-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: DỮ LIỆU NÓI LÊN ĐIỀU GÌ?',
          subtitle: 'Hoạt động quan sát dữ liệu số "39°C" trong các tình huống thực tế',
          lead: 'Cùng một dữ liệu "39°C", khi đặt vào hai ngữ cảnh khác nhau sẽ mang lại thông tin gì?',
          cardsGrid: [
            {
              title: 'Ngữ cảnh 1: Thời tiết mùa hè',
              desc: 'Dữ liệu nhiệt độ 39°C ngoài trời.',
              tag: 'Dự báo thời tiết',
              points: [
                'Thông tin: Trời nắng nóng gay gắt',
                'Hành động: Hạn chế ra đường vào buổi trưa, cần uống nhiều nước',
              ],
            },
            {
              title: 'Ngữ cảnh 2: Y tế - Khám bệnh',
              desc: 'Dữ liệu nhiệt độ thân nhiệt người bệnh.',
              tag: 'Thân nhiệt',
              points: [
                'Thông tin: Bệnh nhân đang bị sốt cao nguy hiểm',
                'Hành động: Cần uống thuốc hạ sốt và theo dõi y tế khẩn cấp',
              ],
            },
          ],
        },
        {
          id: 'b1-s3',
          slideNumber: 3,
          type: 'content',
          title: 'KHÁI NIỆM DỮ LIỆU VÀ THÔNG TIN',
          subtitle: 'Nhiệm vụ 1: Phân tích bản chất và mối liên hệ nhân quả',
          lead: 'Dữ liệu là nguồn gốc tạo nên thông tin; thông tin là ý nghĩa được con người rút ra từ dữ liệu.',
          compareColumns: {
            left: {
              title: 'Dữ liệu (Data)',
              subtitle: 'Đối tượng xử lí của máy tính',
              badge: 'Khách quan',
              points: [
                'Là các tín hiệu, con số, kí tự, hình ảnh, âm thanh ghi nhận từ thế giới khách quan.',
                'Được mã hóa thành các dãy bit (0 và 1) để máy tính có thể lưu trữ và xử lí.',
                'Chưa mang ý nghĩa hoàn chỉnh nếu chưa được đặt vào ngữ cảnh cụ thể.',
              ],
            },
            right: {
              title: 'Thông tin (Information)',
              subtitle: 'Ý nghĩa tiếp nhận bởi con người',
              badge: 'Chủ quan',
              points: [
                'Là ý nghĩa, sự hiểu biết mà con người rút ra được sau khi tiếp nhận dữ liệu.',
                'Có tính chủ quan, phụ thuộc vào nhận thức và ngữ cảnh của người nhận.',
                'Giúp con người gia tăng hiểu biết và đưa ra quyết định đúng đắn.',
              ],
            },
          },
        },
        {
          id: 'b1-s4',
          slideNumber: 4,
          type: 'content',
          title: 'TÍNH ĐỘC LẬP TƯƠNG ĐỐI CỦA THÔNG TIN VÀ DỮ LIỆU',
          subtitle: 'Mối quan hệ hai chiều giữa thông tin và hình thức thể hiện dữ liệu',
          lead: 'Một thông tin có thể biểu diễn qua nhiều dạng dữ liệu, và ngược lại một dữ liệu mang nhiều tầng ý nghĩa:',
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Bộ vi xử lý chuyển đổi dữ liệu tín hiệu nhị phân thành thông tin số',
          bullets: [
            {
              title: 'Một thông tin ➜ Nhiều dạng dữ liệu biểu diễn:',
              text: 'Cùng thông tin "hôm nay trời mưa" có thể biểu diễn bằng chữ viết "Trời mưa", biểu tượng đám mây có giọt nước, âm thanh tiếng mưa rơi hoặc video clip thời sự.',
            },
            {
              title: 'Một dữ liệu ➜ Mang nhiều thông tin khác nhau tùy ngữ cảnh:',
              text: 'Dữ liệu số "10" có thể là điểm kiểm tra môn Tin học của học sinh, có thể là thời điểm 10 giờ sáng, hoặc là số áo của cầu thủ bóng đá.',
            },
          ],
        },
        {
          id: 'b1-s5',
          slideNumber: 5,
          type: 'remember',
          title: 'KẾT LUẬN CỐT LÕI VỀ THÔNG TIN VÀ DỮ LIỆU',
          subtitle: 'Định nghĩa khoa học cốt lõi theo SGK Tin học 10 (Trang 7)',
          lead: 'Nguyên lí nền tảng chi phối toàn bộ hoạt động của ngành Khoa học máy tính:',
          highlightBox: {
            type: 'remember',
            title: 'KẾT LUẬN CỐT LÕI (SGK TRANG 7)',
            content: 'Thông tin là ý nghĩa của dữ liệu. Dữ liệu là thông tin dưới dạng các tín hiệu được đưa vào máy tính để lưu trữ và xử lí.',
          },
          bullets: [
            {
              title: 'Dữ liệu (Data) là vật mang thông tin:',
              text: 'Dữ liệu tồn tại khách quan dưới dạng các dãy bit 0 và 1, được mã hóa để lưu trên ổ cứng, thẻ nhớ hay truyền qua cáp mạng.',
            },
            {
              title: 'Thông tin (Information) là sự hiểu biết:',
              text: 'Được con người tiếp nhận và xử lý trong não bộ để gia tăng nhận thức và làm cơ sở ra quyết định hành động.',
            },
          ],
        },
        {
          id: 'b1-s6',
          slideNumber: 6,
          type: 'diagram',
          title: 'QUÁ TRÌNH XỬ LÍ THÔNG TIN BẰNG MÁY TÍNH',
          subtitle: 'Mô hình ba bước cơ bản của hệ thống tin học (Hình 1.1 SGK trang 7)',
          svgType: 'data-lifecycle',
          sourceCitation: 'Hình 1.1 SGK Tin học 10 (trang 7) • Bộ Kết nối tri thức với cuộc sống',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Tiếp nhận dữ liệu',
                desc: 'Thiết bị vào (bàn phím, chuột, camera, cảm biến) thu nhận tín hiệu và mã hóa thành dãy bit.',
                tag: 'Input',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Xử lí dữ liệu',
                desc: 'Bộ xử lí trung tâm (CPU) thực hiện các phép toán số học và logic theo tập lệnh chương trình.',
                tag: 'Process',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Đưa ra kết quả',
                desc: 'Thiết bị ra (màn hình, loa, máy in) giải mã dãy bit thành dạng thông tin con người nhận biết được.',
                tag: 'Output',
              },
            ],
          },
        },
        {
          id: 'b1-s7',
          slideNumber: 7,
          type: 'table',
          title: 'BẢNG QUY ĐỔI CÁC ĐƠN VỊ LƯU TRỮ DỮ LIỆU',
          subtitle: 'Quy chuẩn dung lượng: Mỗi đơn vị kế tiếp bằng 1 024 đơn vị liền trước (2¹⁰)',
          lead: 'Đơn vị cơ bản nhất là Bit (0 hoặc 1). Byte là đơn vị đo dung lượng thông dụng (1 Byte = 8 bit).',
          tableData: {
            caption: 'Bảng quy chuẩn các bội số dung lượng theo chuẩn SGK Tin học 10',
            headers: ['Tên đơn vị', 'Kí hiệu', 'Quy đổi sang Byte', 'Lũy thừa của 2'],
            rows: [
              ['Byte', 'B', '1 Byte = 8 bit', '2⁰ B'],
              ['Kilobyte', 'KB', '1 024 B', '2¹⁰ B'],
              ['Megabyte', 'MB', '1 024 KB = 1 048 576 B', '2²⁰ B'],
              ['Gigabyte', 'GB', '1 024 MB = 1 073 741 824 B', '2³⁰ B'],
              ['Terabyte', 'TB', '1 024 GB', '2⁴⁰ B'],
              ['Petabyte', 'PB', '1 024 TB', '2⁵⁰ B'],
            ],
          },
        },
        {
          id: 'b1-s8',
          slideNumber: 8,
          type: 'content',
          title: 'Ý NGHĨA & VÍ DỤ VỀ DUNG LƯỢNG LƯU TRỮ TRONG ĐỜI SỐNG',
          subtitle: 'Cảm nhận trực quan về kích thước dữ liệu quen thuộc hàng ngày',
          bullets: [
            {
              title: 'Một bài hát nén MP3 thông dụng:',
              text: 'Dung lượng khoảng 3 - 5 MB (Megabyte), tương đương khoảng 3 đến 5 triệu kí tự văn bản.',
            },
            {
              title: 'Một bức ảnh kĩ thuật số chất lượng cao:',
              text: 'Dung lượng khoảng 4 - 8 MB tùy thuộc vào độ phân giải ống kính điện thoại (12MP - 48MP).',
            },
            {
              title: 'Một bộ phim Full HD thời lượng 120 phút:',
              text: 'Dung lượng khoảng 3 - 5 GB (Gigabyte), tương đương hàng nghìn bài hát MP3 gộp lại.',
            },
            {
              title: 'Khả năng lưu trữ của Trung tâm dữ liệu đám mây:',
              text: 'Các máy chủ Google, Microsoft lưu trữ dữ liệu lên tới hàng nghìn Petabyte (PB) và Exabyte (EB).',
            },
          ],
        },
        {
          id: 'b1-s9',
          slideNumber: 9,
          type: 'remember',
          title: 'QUY TẮC NHỚ NHANH & CÔNG THỨC QUY ĐỔI HỆ NHỊ PHÂN',
          subtitle: 'Nguyên tắc tính toán dung lượng trong kiến trúc máy tính',
          lead: 'Vì sao đơn vị đo dữ liệu gấp nhau 1 024 lần chứ không phải 1 000 lần như hệ mét?',
          bullets: [
            {
              title: 'Bội số của 2 (Hệ nhị phân):',
              text: 'Máy tính hoạt động bằng các bóng bán dẫn có 2 trạng thái bật/tắt (0 và 1). Do đó, các bội số đo dung lượng tính theo lũy thừa của 2: 2¹⁰ = 1 024.',
            },
            {
              title: 'Khác biệt với hệ đo lường thập phân:',
              text: 'Trong đời sống (hệ thập phân): 1 km = 1 000 m, 1 kg = 1 000 g (hơn kém 10³ = 1 000 lần). Trong Tin học (hệ nhị phân): 1 KB = 1 024 B (hơn kém 2¹⁰ = 1 024 lần).',
            },
          ],
          highlightBox: {
            type: 'note',
            title: 'QUY TẮC VÀNG QUY ĐỔI',
            content: 'Đổi từ ĐƠN VỊ LỚN sang ĐƠN VỊ BÉ liền kề: NHÂN VỚI 1 024. Đổi từ ĐƠN VỊ BÉ sang ĐƠN VỊ LỚN liền kề: CHIA CHO 1 024.',
          },
        },
        {
          id: 'b1-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'THỰC HÀNH: TÍNH TOÁN QUY ĐỔI ĐƠN VỊ DỮ LIỆU',
          subtitle: 'Phiếu học tập: Vận dụng công thức chuyển đổi các bội số',
          lead: 'Thực hiện các phép tính chuyển đổi đơn vị và đối chiếu kết quả:',
          bullets: [
            {
              title: 'Bài toán 1: Đổi 3 MB ra Kilobyte (KB)',
              text: 'Phép tính: 3 × 1 024 = 3 072 KB',
              badge: 'Nhân 1 bước',
            },
            {
              title: 'Bài toán 2: Đổi 2 GB ra Kilobyte (KB)',
              text: 'Phép tính: 2 × 1 024 × 1 024 = 2 097 152 KB',
              badge: 'Nhân 2 bước',
            },
            {
              title: 'Bài toán 3: Đổi 2 048 Byte ra Kilobyte (KB)',
              text: 'Phép tính: 2 048 : 1 024 = 2 KB',
              badge: 'Chia ngược',
            },
          ],
        },
        {
          id: 'b1-s11',
          slideNumber: 11,
          type: 'practice',
          title: 'TRẮC NGHIỆM: TÍNH TOÁN DUNG LƯỢNG THỰC TẾ',
          subtitle: 'Kiểm tra nhanh kỹ năng giải bài toán dung lượng thiết bị số',
          quiz: {
            question: 'Một thẻ nhớ MicroSD có dung lượng 16 GB. Hỏi thẻ nhớ này có thể lưu trữ tối đa bao nhiêu bức ảnh, biết mỗi bức ảnh có dung lượng trung bình 4 MB?',
            options: [
              'A. 400 bức ảnh',
              'B. 4 096 bức ảnh',
              'C. 4 000 bức ảnh',
              'D. 1 024 bức ảnh',
            ],
            answer: 'Đáp án B: 4 096 bức ảnh (16 GB = 16 × 1 024 = 16 384 MB; 16 384 : 4 = 4 096 ảnh).',
            explanation: 'Quy đổi: 16 GB = 16 × 1024 = 16 384 MB. Số ảnh lưu được = 16 384 : 4 = 4 096 ảnh.',
          },
        },
        {
          id: 'b1-s12',
          slideNumber: 12,
          type: 'content',
          title: 'ƯU THẾ VƯỢT TRỘI CỦA THIẾT BỊ SỐ (PHẦN 1)',
          subtitle: 'Nhiệm vụ 3: Đột phá trong dung lượng lưu trữ và tốc độ xử lý',
          cardsGrid: [
            {
              title: '1. Dung lượng lưu trữ khổng lồ',
              desc: 'Thay thế hoàn toàn kho tài liệu giấy truyền thống.',
              tag: 'Lưu trữ',
              points: [
                'Một ổ cứng SSD 1 TB nhỏ gọn chứa hàng triệu cuốn sách giáo khoa',
                'Không tốn diện tích kho bãi, không lo mối mọt hay ẩm mốc',
              ],
            },
            {
              title: '2. Tìm kiếm nhanh chóng & tiện lợi',
              desc: 'Truy xuất thông tin tức thời qua từ khóa thông minh.',
              tag: 'Truy xuất',
              points: [
                'Thuật toán quét hàng triệu trang văn bản trong vài phần nghìn giây',
                'Hỗ trợ tìm kiếm theo hình ảnh, giọng nói và nhận dạng chữ viết số',
              ],
            },
          ],
        },
        {
          id: 'b1-s13',
          slideNumber: 13,
          type: 'content',
          title: 'ƯU THẾ VƯỢT TRỘI CỦA THIẾT BỊ SỐ (PHẦN 2)',
          subtitle: 'Nhiệm vụ 3: Tốc độ tính toán, tính liên tục và kết nối toàn cầu',
          cardsGrid: [
            {
              title: '3. Xử lý chính xác & Tốc độ cao',
              desc: 'CPU thực hiện hàng tỉ phép tính mỗi giây không sai sót.',
              tag: 'Xử lý',
              points: [
                'Mô phỏng dự báo bão, thiết kế hàng không vũ trụ',
                'Làm việc 24/7 bền bỉ không bị mệt mỏi như con người',
              ],
            },
            {
              title: '4. Truyền tin tức thời trên toàn cầu',
              desc: 'Mạng Internet kết nối không giới hạn khoảng cách.',
              tag: 'Truyền tin',
              points: [
                'Dữ liệu số hóa truyền qua cáp quang với vận tốc ánh sáng',
                'Chia sẻ tệp dung lượng lớn đến bất kì đâu chỉ sau một cú nhấp chuột',
              ],
            },
          ],
        },
        {
          id: 'b1-s14',
          slideNumber: 14,
          type: 'table',
          title: 'SO SÁNH: THƯ TRUYỀN THỐNG VÀ THƯ ĐIỆN TỬ',
          subtitle: 'Minh chứng thực tế cho cuộc cách mạng số hóa trong đời sống',
          tableData: {
            caption: 'Bảng so sánh Thư bưu điện giấy và Thư điện tử (Email)',
            headers: ['Tiêu chí', 'Thư giấy bưu điện', 'Thư điện tử (Email)'],
            rows: [
              ['Thời gian chuyển', 'Từ 1 đến 7 ngày tùy cự li địa lý', 'Tức thời (vài giây) trên toàn cầu'],
              ['Chi phí gửi', 'Tốn tem thư, phong bì, phí vận chuyển', 'Miễn phí khi có kết nối Internet'],
              ['Định dạng đính kèm', 'Chỉ có chữ viết và hình ảnh trên giấy', 'Văn bản, hình ảnh, âm thanh, video clip, tệp nén'],
              ['Khả năng lưu trữ', 'Chiếm diện tích tủ, dễ thất lạc', 'Lưu trên máy chủ đám mây, tìm kiếm tức thì'],
            ],
          },
        },
        {
          id: 'b1-s15',
          slideNumber: 15,
          type: 'process',
          title: 'TÍCH HỢP AI & NĂNG LỰC SỐ CÓ TRÁCH NHIỆM',
          subtitle: 'Quy trình 3 bước sử dụng AI hỗ trợ học tập và kiểm chứng kiến thức',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: 'BƯỚC 1',
                title: 'Đọc hiểu SGK',
                desc: 'Đọc kĩ SGK trang 6-10, nắm chắc định nghĩa trước khi nhờ AI gợi ý.',
                tag: 'Nền tảng',
              },
              {
                stepNumber: 'BƯỚC 2',
                title: 'Truy vấn AI',
                desc: 'Đặt câu hỏi cụ thể, yêu cầu AI giải thích ví dụ hoặc bài toán quy đổi.',
                tag: 'Công cụ',
              },
              {
                stepNumber: 'BƯỚC 3',
                title: 'Kiểm chứng',
                desc: 'Đối chiếu kết quả của AI với SGK, đánh giá tính chính xác và lưu ý phản biện.',
                tag: 'Phản biện',
              },
            ],
          },
        },
        {
          id: 'b1-s16',
          slideNumber: 16,
          type: 'practice',
          title: 'VẬN DỤNG: BÀI TOÁN SỐ HÓA THƯ VIỆN NHÀ TRƯỜNG',
          subtitle: 'Phân tích dữ liệu thực tế chuyển đổi số trong trường học',
          lead: 'Tình huống: Nhà trường cần số hóa toàn bộ kho 2 000 cuốn sách tham khảo phục vụ bạn đọc tra cứu trực tuyến.',
          bullets: [
            {
              title: 'Số lượng sách cần số hóa:',
              text: 'Tổng cộng 2 000 cuốn sách giáo khoa và tài liệu tham khảo các bộ môn.',
            },
            {
              title: 'Dung lượng tệp sau khi quét (Scan PDF):',
              text: 'Mỗi cuốn sách sau khi quét định dạng PDF có hình ảnh màu đạt dung lượng trung bình 50 MB.',
            },
            {
              title: 'Mục tiêu bài toán cần giải quyết:',
              text: 'Tính tổng dung lượng lưu trữ theo Gigabyte (GB) và lựa chọn thiết bị lưu trữ số phù hợp, nhỏ gọn nhất.',
            },
          ],
        },
        {
          id: 'b1-s17',
          slideNumber: 17,
          type: 'practice',
          title: 'HƯỚNG DẪN GIẢI BÀI TOÁN SỐ HÓA & Ý NGHĨA THỰC TIỄN',
          subtitle: 'Quy trình tính toán chi tiết và nhận xét giá trị của công nghệ số',
          lead: 'Các bước quy đổi dung lượng theo đúng quy tắc SGK:',
          bullets: [
            {
              title: 'Bước 1: Tính tổng dung lượng sách theo MB:',
              text: 'Phép tính: 2 000 cuốn × 50 MB = 100 000 MB.',
              badge: 'Bước 1',
            },
            {
              title: 'Bước 2: Quy đổi từ Megabyte (MB) sang Gigabyte (GB):',
              text: 'Phép tính: 100 000 MB : 1 024 = 97.65625 GB (xấp xỉ 97.66 GB).',
              badge: 'Bước 2',
            },
            {
              title: 'Kết luận thực tiễn & Thiết bị lưu trữ tương ứng:',
              text: 'Chỉ cần một chiếc thẻ nhớ MicroSD 128 GB nhỏ bằng móng tay (giá dưới 200 nghìn đồng) là đã lưu trữ trọn vẹn toàn bộ 2 000 cuốn sách của cả thư viện trường!',
              badge: 'Ý nghĩa số hóa',
            },
          ],
        },
        {
          id: 'b1-s18',
          slideNumber: 18,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 1 & HƯỚNG DẪN TỰ HỌC',
          subtitle: 'Hệ thống hóa kiến thức trọng tâm cần ghi nhớ',
          bullets: [
            {
              title: '1. Thông tin và Dữ liệu:',
              text: 'Thông tin là ý nghĩa của dữ liệu. Máy tính chỉ làm việc trực tiếp với dữ liệu mã hóa dưới dạng dãy bit.',
            },
            {
              title: '2. Chu trình xử lí thông tin:',
              text: 'Tiếp nhận dữ liệu (Input) ➜ Xử lí dữ liệu (CPU) ➜ Đưa ra kết quả (Output).',
            },
            {
              title: '3. Đơn vị lưu trữ:',
              text: '1 Byte = 8 bit. Bảng đơn vị: B ➜ KB ➜ MB ➜ GB ➜ TB ➜ PB (mỗi bậc gấp nhau 1 024 lần).',
            },
            {
              title: '4. Ưu thế số hóa:',
              text: 'Lưu trữ lớn, tìm kiếm nhanh, xử lí chính xác, truyền tin tức thời trên toàn cầu.',
            },
          ],
        },
      ],
    },

    // =========================================================================
    // BÀI 2: TẦM QUAN TRỌNG CỦA CNTT VÀ THIẾT BỊ THÔNG MINH ĐỐI VỚI ĐỜI SỐNG XÃ HỘI
    // =========================================================================
    {
      id: 'bai-2',
      number: 2,
      title: 'Bài 2. Tầm quan trọng của công nghệ thông tin và thiết bị thông minh đối với đời sống xã hội',
      shortTitle: 'Bài 2: Thiết bị thông minh & Xã hội',
      chapterId: 'chu-de-1',
      pageStart: 11,
      pageEnd: 15,
      slides: [
        {
          id: 'b2-s1',
          slideNumber: 1,
          type: 'title',
          title: 'TẦM QUAN TRỌNG CỦA CÔNG NGHỆ THÔNG TIN VÀ THIẾT BỊ THÔNG MINH',
          subtitle: 'Chủ đề 1: Máy tính và xã hội thông tin | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Khái niệm thiết bị thông minh và dấu hiệu nhận biết cốt lõi' },
            { text: 'Vai trò của thiết bị thông minh trong hệ sinh thái Internet vạn vật (IoT)' },
            { text: 'Các thành tựu đột phá của Tin học và vai trò chuyển đổi số trong xã hội' },
            { text: 'Ý thức làm chủ công nghệ, phòng ngừa lệ thuộc vào thiết bị số' },
          ],
          badge: 'Bài 2 • KHBD Chuẩn',
        },
        {
          id: 'b2-s2',
          slideNumber: 2,
          type: 'warmup',
          title: 'KHỞI ĐỘNG: THIẾT BỊ NÀO THỰC SỰ THÔNG MINH?',
          subtitle: 'Phân biệt thiết bị điện tử truyền thống và thiết bị thông minh (SGK trang 11)',
          cardsGrid: [
            {
              title: 'Nồi cơm cơ truyền thống',
              desc: 'Chỉ có rơ-le nhiệt cơ học, bấm nút nấu khi nước cạn tự nhảy nút hâm.',
              tag: 'Thiết bị điện tử',
              points: [
                'Không có vi xử lí tính toán',
                'Không thể kết nối Internet hay điều khiển từ xa',
              ],
            },
            {
              title: 'Nồi cơm điện tử cao tần',
              desc: 'Tích hợp bộ vi xử lí điều khiển vi mạch thông minh, cảm biến nhiệt độ đa điểm.',
              tag: 'Thiết bị thông minh',
              points: [
                'Tự động chọn chu trình nhiệt theo loại gạo',
                'Kết nối Wifi thoại báo cho điện thoại thông minh',
              ],
            },
          ],
        },
        {
          id: 'b2-s3',
          slideNumber: 3,
          type: 'content',
          title: 'KHÁI NIỆM THIẾT BỊ THÔNG MINH',
          subtitle: 'Định nghĩa khoa học theo SGK Tin học 10 (Trang 11)',
          imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Thiết bị thông minh kết nối không dây và tự chủ xử lý dữ liệu',
          bullets: [
            {
              title: 'Định nghĩa cốt lõi:',
              text: 'Thiết bị thông minh (Smart Device) là thiết bị điện tử có khả năng hoạt động tự chủ ở mức độ nhất định, có khả năng kết nối mạng và tương tác với các thiết bị khác hoặc với người dùng.',
            },
            {
              title: 'Trái tim của thiết bị:',
              text: 'Bên trong thiết bị thông minh luôn có một bộ vi xử lí (microprocessor) hoặc chip xử lí tín hiệu đóng vai trò như "bộ não" điều hành.',
            },
            {
              title: 'Khả năng kết nối không dây:',
              text: 'Hỗ trợ các chuẩn giao tiếp mạng như Bluetooth, Wi-Fi, 4G/5G, Zigbee để gửi và nhận dữ liệu trong thời gian thực.',
            },
          ],
        },
        {
          id: 'b2-s4',
          slideNumber: 4,
          type: 'remember',
          title: 'BA DẤU HIỆU NHẬN BIẾT CỐT LÕI CỦA THIẾT BỊ THÔNG MINH',
          subtitle: 'Bộ tiêu chí chuẩn hóa SGK để phân biệt thiết bị thường và thiết bị thông minh',
          lead: 'Một thiết bị được coi là thông minh khi hội tụ đủ 3 yếu tố nền tảng:',
          highlightBox: {
            type: 'remember',
            title: 'DẤU HIỆU NHẬN BIẾT CỐT LÕI (SGK TRANG 11)',
            content: 'Thiết bị thông minh = Có bộ xử lý (tự chủ xử lý dữ liệu) + Có cảm biến tiếp nhận + Có khả năng kết nối mạng tương tác.',
          },
          bullets: [
            {
              title: '1. Khả năng tự chủ (Autonomy):',
              text: 'Tự động phân tích và đưa ra quyết định mà không cần con người can thiệp từng bước.',
            },
            {
              title: '2. Tương tác đa chiều (Interactivity):',
              text: 'Giao tiếp với người dùng qua màn hình cảm ứng, giọng nói, cử chỉ hoặc thông báo ứng dụng.',
            },
            {
              title: '3. Kết nối liên thông (Connectivity):',
              text: 'Đồng bộ hóa dữ liệu với hệ sinh thái Internet vạn vật (IoT) và máy chủ đám mây.',
            },
          ],
        },
        {
          id: 'b2-s5',
          slideNumber: 5,
          type: 'diagram',
          title: 'CƠ CHẾ HOẠT ĐỘNG CỦA THIẾT BỊ THÔNG MINH',
          subtitle: 'Mô hình chu trình thu nhận, tính toán và phản hồi của thiết bị',
          svgType: 'smart-devices',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1',
                title: 'Cảm biến (Sensor)',
                desc: 'Thu thập thông số môi trường (nhiệt độ, ánh sáng, chuyển động, vân tay).',
                tag: 'Thu nhận',
              },
              {
                stepNumber: '2',
                title: 'Vi xử lí (Processor)',
                desc: 'Phân tích dữ liệu cảm biến dựa trên thuật toán cài sẵn để đưa ra quyết định.',
                tag: 'Quyết định',
              },
              {
                stepNumber: '3',
                title: 'Cơ cấu chấp hành',
                desc: 'Thực thi hành động (bật đèn, khóa cửa, điều chỉnh tốc độ quạt) hoặc gửi cảnh báo.',
                tag: 'Thực thi',
              },
            ],
          },
        },
        {
          id: 'b2-s6',
          slideNumber: 6,
          type: 'content',
          title: 'HỆ SINH THÁI INTERNET VẠN VẬT (IoT)',
          subtitle: 'Khi mọi thiết bị trong đời sống đều được kết nối thông minh',
          cardsGrid: [
            {
              title: 'Ngôi nhà thông minh (Smart Home)',
              desc: 'Tự động bật đèn khi có người bước vào phòng; rèm cửa tự mở lúc bình minh; camera AI phát hiện người lạ báo về điện thoại.',
              tag: 'Gia đình',
              points: [
                'Tiết kiệm điện năng thông minh',
                'Đảm bảo an ninh tuyệt đối cho gia đình',
              ],
            },
            {
              title: 'Nông nghiệp thông minh (Smart Agro)',
              desc: 'Cảm biến đo độ ẩm đất, nồng độ pH; hệ thống tưới nhỏ giọt tự động bơm nước khi đất khô; máy bay không người lái phun thuốc.',
              tag: 'Nông nghiệp',
              points: [
                'Tối ưu hóa năng suất mùa màng',
                'Giảm thiểu sức lao động nặng nhọc của nông dân',
              ],
            },
          ],
        },
        {
          id: 'b2-s7',
          slideNumber: 7,
          type: 'content',
          title: 'CÁC THÀNH TỰU ĐỘT PHÁ CỦA TIN HỌC (PHẦN 1)',
          subtitle: 'Nhiệm vụ 2: Máy tính cá nhân, Mạng Internet và Điện toán đám mây',
          bullets: [
            {
              title: '1. Máy tính điện tử siêu nhỏ & mạnh mẽ:',
              text: 'Từ những cỗ máy ENIAC nặng hàng chục tấn, ngày nay máy tính bỏ túi và chip điện thoại thông minh có sức mạnh gấp hàng triệu lần.',
            },
            {
              title: '2. Mạng Internet toàn cầu:',
              text: 'Biến thế giới thành một "ngôi làng toàn cầu", xóa nhòa mọi khoảng cách địa lí, kết nối hơn 5 tỉ người dùng.',
            },
            {
              title: '3. Điện toán đám mây (Cloud Computing):',
              text: 'Dữ liệu và phần mềm được lưu trữ trên các máy chủ tập trung (Google Drive, OneDrive), cho phép làm việc mọi lúc, mọi nơi trên mọi thiết bị.',
            },
          ],
        },
        {
          id: 'b2-s8',
          slideNumber: 8,
          type: 'content',
          title: 'CÁC THÀNH TỰU ĐỘT PHÁ CỦA TIN HỌC: DỮ LIỆU LỚN & AI',
          subtitle: 'Nhiệm vụ 2: Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data)',
          bullets: [
            {
              title: '4. Dữ liệu lớn (Big Data):',
              text: 'Thu thập và phân tích khối lượng dữ liệu khổng lồ từ mạng xã hội, giao dịch ngân hàng để dự báo xu hướng thị trường, dự báo thời tiết và hỗ trợ y tế.',
            },
            {
              title: '5. Trí tuệ nhân tạo (AI):',
              text: 'Máy tính có khả năng học tập từ dữ liệu, thị giác máy tính, nhận diện giọng nói, hỗ trợ bác sĩ chẩn đoán bệnh án và xe tự hành không người lái.',
            },
          ],
        },
        {
          id: 'b2-s9',
          slideNumber: 9,
          type: 'remember',
          title: 'TIN HỌC VÀ CUỘC CÁCH MẠNG CÔNG NGHIỆP 4.0',
          subtitle: 'Tầm vóc và ảnh hưởng sâu rộng của tin học tới nền kinh tế tri thức',
          lead: 'Tin học đã trở thành động lực phát triển then chốt của toàn xã hội loài người:',
          highlightBox: {
            type: 'remember',
            title: 'TẦM ẢNH HƯỞNG CỦA TIN HỌC (SGK TRANG 14)',
            content: 'Tin học không chỉ là một môn khoa học mà đã trở thành động lực then chốt thúc đẩy cuộc Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0), làm thay đổi căn bản phương thức sản xuất và đời sống.',
          },
          bullets: [
            {
              title: 'Chuyển đổi số toàn diện:',
              text: 'Mọi lĩnh vực từ y tế, giáo dục, nông nghiệp đến hành chính công đều được tin học hóa trên môi trường số.',
            },
            {
              title: 'Hình thành kinh tế số và xã hội số:',
              text: 'Thương mại điện tử, thanh toán không dùng tiền mặt, dịch vụ công trực tuyến giúp tiết kiệm hàng triệu giờ lao động.',
            },
          ],
        },
        {
          id: 'b2-s10',
          slideNumber: 10,
          type: 'practice',
          title: 'TRẮC NGHIỆM: PHÂN BIỆT THIẾT BỊ THÔNG MINH',
          subtitle: 'Kiểm tra nhanh nhận thức của học sinh theo tiêu chuẩn SGK',
          quiz: {
            question: 'Thiết bị nào sau đây KHÔNG PHẢI là thiết bị thông minh?',
            options: [
              'A. Điện thoại thông minh (Smartphone)',
              'B. Đồng hồ thông minh đo nhịp tim (Smartwatch)',
              'C. Máy tính bỏ túi cầm tay đơn giản (Casio fx-500MS)',
              'D. Robot hút bụi tự động quét lập bản đồ phòng',
            ],
            answer: 'Đáp án C: Máy tính bỏ túi cầm tay đơn giản (không có khả năng kết nối mạng, chỉ thực hiện phép tính đơn giản cố định).',
            explanation: 'Máy tính bỏ túi đơn giản chỉ hoạt động theo mạch logic cố định, không có khả năng kết nối mạng tương tác hoặc tự chủ ra quyết định như các thiết bị thông minh khác.',
          },
        },
        {
          id: 'b2-s11',
          slideNumber: 11,
          type: 'content',
          title: 'ỨNG XỬ VĂN MINH VỚI THIẾT BỊ SỐ',
          subtitle: 'Tình huống giáo dục thái độ và trách nhiệm công dân số',
          situation: {
            context: 'Trong bữa cơm gia đình hoặc trong giờ học trên lớp, việc sử dụng điện thoại thông minh liên tục làm giảm sự giao tiếp trực tiếp.',
            question: 'Học sinh cần xây dựng thói quen sử dụng thiết bị số như thế nào để vừa tận dụng công nghệ vừa giữ gìn văn hóa gia đình?',
            options: [
              {
                label: 'Phương án A',
                action: 'Tắt chuông hoặc để điện thoại ở chế độ tập trung trong giờ ăn cơm và giờ học',
                consequence: 'Gắn kết tình cảm gia đình, tập trung tiếp thu bài giảng sâu sắc',
                isRecommended: true,
              },
              {
                label: 'Phương án B',
                action: 'Vừa ăn cơm vừa lướt mạng xã hội và xem video ngắn',
                consequence: 'Gây mất tập trung, ảnh hưởng xấu đến tiêu hóa và xa cách người thân',
                isRecommended: false,
              },
            ],
          },
        },
        {
          id: 'b2-s12',
          slideNumber: 12,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 2 & GHI NHỚ TRỌNG TÂM',
          subtitle: 'Hệ thống hóa kiến thức về vai trò của Tin học trong kỉ nguyên số',
          mindmap: {
            center: 'THIẾT BỊ THÔNG MINH & TIN HỌC',
            centerSubtitle: 'Trọng tâm kiến thức Bài 2',
            branches: [
              {
                title: 'Khái niệm',
                subItems: ['Có vi xử lí', 'Tự chủ mức độ nhất định', 'Kết nối mạng tương tác'],
              },
              {
                title: 'Hệ sinh thái',
                subItems: ['Internet of Things (IoT)', 'Nhà thông minh (Smart Home)', 'Thành phố thông minh'],
              },
              {
                title: 'Thành tựu',
                subItems: ['Máy tính siêu nhỏ', 'Mạng Internet toàn cầu', 'Điện toán đám mây & AI'],
              },
              {
                title: 'Trách nhiệm',
                subItems: ['Làm chủ công nghệ', 'Ứng xử có văn hóa', 'Bảo vệ thông tin cá nhân'],
              },
            ],
          },
        },
      ],
    },

    // =========================================================================
    // BÀI 7: KỸ NĂNG THỰC HÀNH KHAI THÁC CÁC THIẾT BỊ SỐ THÔNG DỤNG
    // =========================================================================
    {
      id: 'bai-7',
      number: 7,
      title: 'Bài 7. Kỹ năng thực hành khai thác các thiết bị số thông dụng',
      shortTitle: 'Bài 7: Thực hành thiết bị số',
      chapterId: 'chu-de-1',
      pageStart: 33,
      pageEnd: 37,
      slides: [
        {
          id: 'b7-s1',
          slideNumber: 1,
          type: 'title',
          title: 'KỸ NĂNG THỰC HÀNH KHAI THÁC CÁC THIẾT BỊ SỐ THÔNG DỤNG',
          subtitle: 'Chủ đề 1: Máy tính và xã hội thông tin | Sách giáo khoa Tin học 10',
          lead: 'Bộ sách Kết nối tri thức với cuộc sống • Giáo viên: QuanLHK',
          bullets: [
            { text: 'Làm quen các thiết bị số cá nhân: Smartphone, Tablet, Smartwatch' },
            { text: 'Thực hành 4 nhiệm vụ cốt lõi: Phím bấm, Màn hình, Ứng dụng và Tệp tin' },
            { text: 'Kỹ năng quản lí cây thư mục và lưu trữ dữ liệu an toàn trên đám mây' },
            { text: 'Kết nối thiết bị di động với máy tính qua cáp USB và Wi-Fi' },
          ],
          badge: 'Bài 7 • Thực hành chuẩn SGK',
        },
        {
          id: 'b7-s2',
          slideNumber: 2,
          type: 'content',
          title: 'TRỢ THỦ SỐ CÁ NHÂN (PDA) VÀ SỰ PHÁT TRIỂN CỦA SMARTPHONE',
          subtitle: 'Lịch sử phát triển của thiết bị số di động (SGK Trang 33)',
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Điện thoại thông minh (Smartphone) - thiết bị số cá nhân phổ biến nhất hiện nay',
          bullets: [
            {
              title: 'Khái niệm PDA (Personal Digital Assistant):',
              text: 'Thiết bị cầm tay hỗ trợ cá nhân thời kì đầu với chức năng ghi chép, danh bạ, lịch làm việc, máy tính bỏ túi.',
            },
            {
              title: 'Sự tiến hóa thành Điện thoại thông minh:',
              text: 'Tích hợp kết nối viễn thông 4G/5G, máy ảnh độ nét cao, định vị GPS và hàng triệu ứng dụng trên hai hệ điều hành: Android (Google) và iOS (Apple).',
            },
            {
              title: 'Đặc điểm then chốt:',
              text: 'Nhỏ gọn bỏ túi, theo người dùng 24/7, luôn giữ kết nối mạng Internet liên tục.',
            },
          ],
        },
        {
          id: 'b7-s3',
          slideNumber: 3,
          type: 'process',
          title: 'BỐN NHIỆM VỤ THỰC HÀNH TRÊN LỚP (SGK TRANG 34 - 36)',
          subtitle: 'Quy trình 4 bước trải nghiệm và làm chủ thiết bị số di động',
          diagram: {
            layout: 'horizontal',
            steps: [
              {
                stepNumber: '1',
                title: 'Nút & Nguồn',
                desc: 'Phím nguồn/khóa màn hình, phím âm lượng, thao tác tắt mở máy an toàn.',
                tag: 'Nhiệm vụ 1',
              },
              {
                stepNumber: '2',
                title: 'Giao diện',
                desc: 'Màn hình chính, thanh trạng thái (pin, sóng, giờ), thanh dock và cử chỉ vuốt.',
                tag: 'Nhiệm vụ 2',
              },
              {
                stepNumber: '3',
                title: 'Ứng dụng',
                desc: 'Cài đặt và sử dụng ứng dụng học tập, máy tính, bản đồ, lưu trữ đám mây.',
                tag: 'Nhiệm vụ 3',
              },
              {
                stepNumber: '4',
                title: 'Quản lí tệp',
                desc: 'Mở File Manager, tìm thư mục DCIM/Download, sao chép và di chuyển tệp.',
                tag: 'Nhiệm vụ 4',
              },
            ],
          },
        },
        {
          id: 'b7-s4',
          slideNumber: 4,
          type: 'content',
          title: 'KỸ NĂNG QUẢN LÍ THƯ MỤC TRÊN THIẾT BỊ DI ĐỘNG',
          subtitle: 'Cấu trúc cây thư mục lưu trữ phân cấp tương tự máy tính cá nhân',
          cardsGrid: [
            {
              title: 'Thư mục DCIM (Digital Camera Images)',
              desc: 'Nơi lưu trữ ảnh chụp và video quay từ máy ảnh của thiết bị.',
              tag: 'Ảnh & Video',
              points: [
                'Tự động phân loại theo ngày tháng chụp',
                'Nên đồng bộ định kì lên Google Photos/iCloud',
              ],
            },
            {
              title: 'Thư mục Download (Tải về)',
              desc: 'Chứa tài liệu học tập, sách PDF tải từ trình duyệt web hoặc Zalo.',
              tag: 'Tài liệu',
              points: [
                'Nên phân loại vào thư mục môn học cụ thể',
                'Xóa các tệp tải về không cần thiết để tránh đầy bộ nhớ',
              ],
            },
          ],
        },
        {
          id: 'b7-s5',
          slideNumber: 5,
          type: 'content',
          title: 'THAO TÁC CƠ BẢN VỚI TỆP TRÊN FILE MANAGER',
          subtitle: 'Kỹ năng làm việc chuyên nghiệp với dữ liệu trên điện thoại',
          imageUrl: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80',
          imageCaption: 'Thao tác chụp và quản lý tệp trên thiết bị di động thông minh',
          bullets: [
            {
              title: 'Thao tác Chạm và Giữ (Long-press):',
              text: 'Giữ ngón tay trên tệp khoảng 1 giây để mở thanh menu công cụ: Sao chép (Copy), Di chuyển (Move), Đổi tên (Rename), Chia sẻ (Share) hoặc Xóa (Delete).',
            },
            {
              title: 'Tạo thư mục học tập mới:',
              text: 'Nhấn biểu tượng dấu cộng (+) hoặc menu 3 chấm, chọn "Tạo thư mục mới", đặt tên khoa học như "TinHoc10_QuanLHK".',
            },
            {
              title: 'Sao lưu dữ liệu định kì:',
              text: 'Kết nối điện thoại với máy tính để sao chép dữ liệu quan trọng hoặc bật chế độ tự động đồng bộ đám mây phòng ngừa hỏng hóc thiết bị.',
            },
          ],
        },
        {
          id: 'b7-s6',
          slideNumber: 6,
          type: 'practice',
          title: 'TRẮC NGHIỆM: KỸ NĂNG SỬ DỤNG THIẾT BỊ SỐ',
          subtitle: 'Kiểm tra kiến thức thao tác thực hành thiết bị di động',
          quiz: {
            question: 'Khi chụp ảnh bằng camera của điện thoại thông minh, ảnh chụp mặc định sẽ được lưu vào thư mục nào trong bộ nhớ trong?',
            options: [
              'A. Thư mục Documents',
              'B. Thư mục DCIM',
              'C. Thư mục Download',
              'D. Thư mục Android',
            ],
            answer: 'Đáp án B: Thư mục DCIM (Digital Camera Images).',
            explanation: 'DCIM là chuẩn quốc tế của hệ thống tệp máy ảnh số. Tất cả điện thoại thông minh và máy ảnh đều lưu trữ ảnh chụp trong thư mục này.',
          },
        },
        {
          id: 'b7-s7',
          slideNumber: 7,
          type: 'summary',
          title: 'TỔNG KẾT BÀI 7: BA KỸ NĂNG SỐ CỐT LÕI CẦN ĐẠT',
          subtitle: 'Các kỹ năng làm chủ thiết bị thông minh phục vụ học tập',
          bullets: [
            {
              title: '1. Nhận diện nút và cổng kết nối:',
              text: 'Thành thạo tắt mở máy, điều chỉnh âm lượng, cắm sạc pin và kết nối cáp truyền dữ liệu đúng cách để bảo vệ phần cứng thiết bị.',
            },
            {
              title: '2. Khai thác ứng dụng học tập:',
              text: 'Biết cách tìm kiếm, cài đặt và sử dụng an toàn các ứng dụng học tập trực tuyến, tra cứu từ điển số và máy tính khoa học.',
            },
            {
              title: '3. Quản lí tệp tin khoa học:',
              text: 'Sắp xếp cấu trúc thư mục gọn gàng, lưu trữ ảnh chụp đúng thư mục DCIM, đồng bộ dữ liệu đám mây và kết nối an toàn với máy tính.',
            },
          ],
        },
        {
          id: 'b7-s8',
          slideNumber: 8,
          type: 'practice',
          title: 'NHIỆM VỤ VẬN DỤNG & BÀI TẬP VỀ NHÀ',
          subtitle: 'Rèn luyện thói quen tổ chức tài liệu số khoa học và ngăn nắp',
          lead: 'Học sinh thực hiện 2 nhiệm vụ thực hành trên thiết bị thông minh của bản thân hoặc gia đình:',
          bullets: [
            {
              title: 'Nhiệm vụ 1: Tạo cấu trúc thư mục học tập',
              text: 'Mở ứng dụng Quản lý tệp trên điện thoại, tạo thư mục gốc mang tên "HocTap_Lop10", bên trong tạo thư mục con "TinHoc".',
              badge: 'Thao tác tệp',
            },
            {
              title: 'Nhiệm vụ 2: Chụp và lưu trữ tài liệu',
              text: 'Dùng camera điện thoại chụp lại sơ đồ tư duy Bài 1 và Bài 2 trong vở ghi, sau đó di chuyển tệp ảnh từ thư mục DCIM sang thư mục "TinHoc" vừa tạo.',
              badge: 'Thực hành sao lưu',
            },
          ],
          highlightBox: {
            type: 'tip',
            title: 'LƯU Ý AN TOÀN DỮ LIỆU',
            content: 'Nên kích hoạt tính năng tự động sao lưu ảnh sang Google Drive hoặc iCloud để không bao giờ bị mất tài liệu học tập khi đổi thiết bị.',
          },
        },
      ],
    },
  ],
};
