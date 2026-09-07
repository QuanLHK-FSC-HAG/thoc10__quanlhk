import React from 'react';

interface SvgIllustrationProps {
  type: string;
}

export const SlideSvgIllustration: React.FC<SvgIllustrationProps> = ({ type }) => {
  switch (type) {
    // ==========================================
    // BÀI 1: CHU TRÌNH XỬ LÍ THÔNG TIN (SGK TRANG 7)
    // ==========================================
    case 'data-lifecycle':
    case 'thong-tin-du-lieu':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-cyan-300 mb-6 uppercase tracking-wider flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse" />
            Mô hình chu trình 3 bước xử lí thông tin bằng máy tính (SGK Trang 7)
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl items-center">
            {/* Bước 1: INPUT */}
            <div className="bg-slate-800/90 border-2 border-blue-500/60 rounded-2xl p-5 text-center flex flex-col items-center shadow-lg">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/30 text-blue-300 font-bold text-[18px] uppercase tracking-wide mb-3">
                1. Thu nhận (Input)
              </span>
              <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400 flex items-center justify-center text-3xl mb-3">
                ⌨️
              </div>
              <h4 className="text-[22px] font-bold text-white mb-2">DỮ LIỆU ĐẦU VÀO</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Bàn phím, chuột, micro, camera, cảm biến nhiệt độ / GPS
              </p>
            </div>

            {/* Bước 2: PROCESSING & MEMORY */}
            <div className="bg-gradient-to-b from-blue-900/80 to-indigo-900/80 border-2 border-cyan-400 rounded-2xl p-5 text-center flex flex-col items-center shadow-2xl relative">
              <div className="absolute -top-3.5 px-4 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-black text-[16px] uppercase tracking-wider">
                Trọng tâm xử lí
              </div>
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-[18px] uppercase tracking-wide mb-3 mt-1">
                2. Xử lí & Lưu trữ
              </span>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/30 border border-cyan-300 flex items-center justify-center text-3xl mb-3">
                ⚙️
              </div>
              <h4 className="text-[22px] font-bold text-cyan-200 mb-2">BỘ XỬ LÍ (CPU)</h4>
              <p className="text-[18px] text-slate-200 leading-snug">
                Tính toán số học ALU, điều khiển logic, lưu tạm trong RAM & Ổ đĩa
              </p>
            </div>

            {/* Bước 3: OUTPUT */}
            <div className="bg-slate-800/90 border-2 border-emerald-500/60 rounded-2xl p-5 text-center flex flex-col items-center shadow-lg">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-[18px] uppercase tracking-wide mb-3">
                3. Xuất tin (Output)
              </span>
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/30 border border-emerald-400 flex items-center justify-center text-3xl mb-3">
                🖥️
              </div>
              <h4 className="text-[22px] font-bold text-white mb-2">THÔNG TIN KẾT QUẢ</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Màn hình hiển thị, máy in, loa âm thanh, điều khiển máy móc
              </p>
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 2: HỆ SINH THÁI THIẾT BỊ THÔNG MINH & IOT (SGK TRANG 12)
    // ==========================================
    case 'smart-devices':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-amber-300 mb-5 uppercase tracking-wider">
            Hệ sinh thái thiết bị thông minh & Internet vạn vật (IoT) - SGK Trang 12
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { icon: '📱', name: 'Smartphone & Tablet', desc: 'Trợ thủ số cá nhân, điều khiển trung tâm', tag: 'Di động' },
              { icon: '⌚', name: 'Smartwatch sức khỏe', desc: 'Đo nhịp tim, oxy SpO2, bước đi 24/7', tag: 'Đeo tay' },
              { icon: '🤖', name: 'Robot & Tự động hóa', desc: 'Hút bụi thông minh, cánh tay lắp ráp xe hơi', tag: 'Công nghiệp' },
              { icon: '🚗', name: 'Xe tự hành & Smart Car', desc: 'Cảm biến lidar, camera nhận diện làn đường', tag: 'Giao thông' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/90 border border-slate-700 hover:border-amber-400/60 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[15px] mb-2">
                  {item.tag}
                </span>
                <h4 className="text-[20px] font-bold text-white mb-1.5">{item.name}</h4>
                <p className="text-[17px] text-slate-300 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // ==========================================
    // BÀI 8: MẠNG CỤC BỘ LAN & INTERNET (SGK TRANG 39)
    // ==========================================
    case 'network-lan':
      return (
        <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-blue-300 mb-5 uppercase tracking-wider">
            Kiến trúc mạng nội bộ (LAN) kết nối Internet toàn cầu (SGK Trang 39)
          </div>
          <div className="flex items-center justify-between w-full max-w-4xl gap-4">
            {/* Cụm thiết bị LAN */}
            <div className="bg-slate-800/90 border-2 border-blue-500/50 p-5 rounded-2xl flex flex-col gap-2.5 text-center flex-1">
              <span className="text-[18px] font-bold uppercase text-blue-400 bg-blue-500/20 py-1 rounded-lg">
                Mạng nội bộ (LAN)
              </span>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                💻 Máy tính lớp học
              </div>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                📱 Điện thoại Wi-Fi
              </div>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                🖨️ Máy in dùng chung
              </div>
            </div>

            {/* Mũi tên kết nối Switch */}
            <div className="text-blue-400 font-bold text-[20px] flex flex-col items-center">
              <span>Cáp / Wi-Fi</span>
              <span className="text-2xl">➔</span>
            </div>

            {/* Switch & Access Point */}
            <div className="bg-blue-950 border-2 border-blue-400 p-5 rounded-2xl text-center min-w-[170px] shadow-lg">
              <div className="text-3xl mb-1">🔀</div>
              <span className="text-[22px] font-bold text-blue-200 block">Switch / AP</span>
              <span className="text-[17px] text-slate-300 mt-1 block">Tập trung kết nối</span>
            </div>

            {/* Mũi tên Router */}
            <div className="text-emerald-400 font-bold text-[20px] flex flex-col items-center">
              <span>Định tuyến</span>
              <span className="text-2xl">➔</span>
            </div>

            {/* Đám mây Internet */}
            <div className="bg-emerald-950/80 border-2 border-emerald-400 p-5 rounded-2xl text-center flex-1 shadow-lg">
              <div className="text-3xl mb-1">🌐</div>
              <span className="text-[22px] font-bold text-emerald-300 block">INTERNET</span>
              <span className="text-[17px] text-slate-200 mt-1 block">
                Máy chủ Web, Email, Điện toán đám mây Cloud (SaaS, IaaS)
              </span>
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 9: AN TOÀN TRÊN KHÔNG GIAN MẠNG (SGK TRANG 45)
    // ==========================================
    case 'cyber-security':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-rose-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-rose-300 mb-5 uppercase tracking-wider">
            Lá chắn an toàn thông tin số & Phòng thủ mạng (SGK Trang 45)
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { icon: '🛡️', title: 'Tường lửa (Firewall)', desc: 'Ngăn chặn truy cập trái phép, lọc gói tin độc hại', tag: 'Bảo vệ' },
              { icon: '🔑', title: 'Xác thực 2 bước (2FA)', desc: 'Mật khẩu mạnh + Mã OTP gửi về điện thoại', tag: 'Tài khoản' },
              { icon: '🔒', title: 'Mã hóa dữ liệu HTTPS', desc: 'Mã hóa thông tin giao dịch ngân hàng & mật khẩu', tag: 'Đường truyền' },
              { icon: '⚠️', title: 'Cảnh giác lừa đảo (Phishing)', desc: 'Không bấm liên kết lạ mạo danh trúng thưởng, tặng quà', tag: 'Nhận thức' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/90 border border-slate-700 hover:border-rose-400 rounded-2xl p-4 flex flex-col items-center text-center">
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[15px] mb-2">
                  {item.tag}
                </span>
                <h4 className="text-[20px] font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-[17px] text-slate-300 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // ==========================================
    // BÀI 11: BẢN QUYỀN SỐ & CREATIVE COMMONS (SGK TRANG 58)
    // ==========================================
    case 'copyright-cc':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-indigo-300 mb-5 uppercase tracking-wider">
            Các biểu tượng giấy phép bản quyền Creative Commons (CC) - SGK Trang 58
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { code: 'BY', icon: '👤', title: 'Ghi nhận tác giả (Attribution)', desc: 'Bắt buộc phải dẫn tên tác giả gốc và nguồn xuất bản', color: 'border-blue-400 text-blue-300' },
              { code: 'NC', icon: '💲⃠', title: 'Phi thương mại (Non-Commercial)', desc: 'Chỉ được dùng cho học tập, không bán kiếm tiền', color: 'border-amber-400 text-amber-300' },
              { code: 'ND', icon: '🚫', title: 'Không phái sinh (No-Derivatives)', desc: 'Giữ nguyên gốc tác phẩm, không được cắt ghép sửa đổi', color: 'border-rose-400 text-rose-300' },
              { code: 'SA', icon: '🔄', title: 'Chia sẻ tương tự (Share-Alike)', desc: 'Nếu tạo bản mới phải cấp cùng giấy phép ban đầu', color: 'border-emerald-400 text-emerald-300' },
            ].map((item, idx) => (
              <div key={idx} className={`bg-slate-800/90 border-2 ${item.color.split(' ')[0]} rounded-2xl p-4 flex flex-col items-center text-center`}>
                <span className="text-4xl mb-1">{item.icon}</span>
                <span className="font-mono font-black text-[22px] text-white my-1">CC {item.code}</span>
                <h4 className="text-[19px] font-bold text-slate-100 mb-1.5">{item.title}</h4>
                <p className="text-[17px] text-slate-300 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // ==========================================
    // BÀI 12: ĐỒ HỌA VECTOR VS RASTER (SGK TRANG 65)
    // ==========================================
    case 'vector-raster':
      return (
        <div className="w-full h-full flex items-center justify-around p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          {/* Raster side */}
          <div className="flex-1 max-w-md bg-slate-800/95 border-2 border-rose-500/60 rounded-2xl p-6 text-center shadow-lg">
            <span className="text-[18px] font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40">
              Đồ họa Raster (Điểm ảnh - Bitmap)
            </span>
            <div className="my-4 h-28 flex flex-col items-center justify-center bg-slate-950 rounded-xl border border-rose-900/60 text-rose-400 font-mono text-[20px] p-2">
              <span className="text-3xl mb-1">🏁 █ ▓ ░</span>
              <span>[ Phóng to 500% BỊ VỠ NÉT RĂNG CƯA ]</span>
            </div>
            <h4 className="text-[22px] font-bold text-white mb-2">Định dạng: JPG, PNG, GIF</h4>
            <p className="text-[18px] text-slate-300 leading-snug">
              Cấu tạo từ các hạt pixel màu. Dung lượng lớn, chỉ thích hợp ảnh chụp thực tế.
            </p>
          </div>

          <div className="text-cyan-400 font-black text-3xl px-4 animate-pulse">VS</div>

          {/* Vector side */}
          <div className="flex-1 max-w-md bg-slate-800/95 border-2 border-cyan-400 rounded-2xl p-6 text-center shadow-2xl">
            <span className="text-[18px] font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
              Đồ họa Vector (Inkscape - Đường toán học)
            </span>
            <div className="my-4 h-28 flex flex-col items-center justify-center bg-slate-950 rounded-xl border border-cyan-900/60 text-cyan-300 font-mono text-[20px] p-2">
              <span className="text-3xl mb-1">📐 ∿ ☍ ◯</span>
              <span>[ Phóng to vô hạn VẪN SẮC NÉT TUYỆT ĐỐI ]</span>
            </div>
            <h4 className="text-[22px] font-bold text-white mb-2">Định dạng: SVG, AI, EPS</h4>
            <p className="text-[18px] text-slate-300 leading-snug">
              Định nghĩa bằng phương trình toán học. Dung lượng nhẹ, chuyên thiết kế logo, banner, font chữ.
            </p>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 13: HỘP CÔNG CỤ INKSCAPE & PHÉP GHÉP HÌNH (SGK TRANG 71)
    // ==========================================
    case 'inkscape-tools':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-cyan-300 mb-5 uppercase tracking-wider">
            6 Phép toán ghép hình học (Path Operations) trong Inkscape - SGK Trang 71
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-4xl text-center">
            {[
              { name: 'Hợp nhất (Union)', shortcut: 'Ctrl + +', desc: 'Gộp 2 hay nhiều hình thành 1 đối tượng duy nhất', icon: '⚪+⚪ ➔ 🔘' },
              { name: 'Hiệu (Difference)', shortcut: 'Ctrl + -', desc: 'Lấy hình dưới trừ đi phần giao với hình trên (cắt khoét)', icon: '⚪-⚫ ➔ 🌙' },
              { name: 'Giao nhau (Intersection)', shortcut: 'Ctrl + *', desc: 'Chỉ giữ lại phần chung chồng lên nhau giữa các hình', icon: '⚪∩⚪ ➔ 🕳️' },
              { name: 'Loại trừ (Exclusion)', shortcut: 'Ctrl + ^', desc: 'Xóa bỏ phần giao nhau, giữ lại phần không trùng lặp', icon: '⚪⊕⚪ ➔ 👓' },
              { name: 'Chia cắt (Division)', shortcut: 'Ctrl + /', desc: 'Dùng hình trên cắt hình dưới thành các mảnh rời', icon: '⚪/✂️ ➔ 🌗' },
              { name: 'Cắt đường (Cut Path)', shortcut: 'Ctrl + Alt + /', desc: 'Cắt nét viền của hình thành các đoạn hở độc lập', icon: '◯➔‿ ⁀' },
            ].map((op, idx) => (
              <div key={idx} className="bg-slate-800/90 border border-slate-700 hover:border-cyan-400 rounded-2xl p-4 flex flex-col items-center">
                <span className="text-2xl mb-1">{op.icon}</span>
                <h4 className="text-[20px] font-bold text-white mb-1">{op.name}</h4>
                <span className="font-mono text-[16px] px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold mb-1.5">
                  {op.shortcut}
                </span>
                <p className="text-[17px] text-slate-300 leading-snug">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // ==========================================
    // BÀI 14: ĐIỂM NEO VÀ ĐƯỜNG CONG BÉZIER (SGK TRANG 76)
    // ==========================================
    case 'bezier-nodes':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-cyan-300 mb-5 uppercase tracking-wider">
            Cấu trúc đường cong Bézier & Điểm neo (Node Tool - N) - SGK Trang 76
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5 flex flex-col items-center">
              <div className="text-4xl mb-2">◼️</div>
              <h4 className="text-[22px] font-bold text-white mb-2">Điểm neo góc (Corner)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Hai tay đòn điều khiển độc lập với nhau, tạo ra góc nhọn hoặc góc vuông sắc cạnh.
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-cyan-400 rounded-2xl p-5 flex flex-col items-center shadow-lg">
              <div className="text-4xl mb-2">🔷</div>
              <h4 className="text-[22px] font-bold text-cyan-200 mb-2">Điểm neo trơn (Smooth)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Hai tay đòn luôn nằm trên một đường thẳng, tạo ra đường cong lượn sóng mềm mại, không gãy khúc.
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-emerald-400 rounded-2xl p-5 flex flex-col items-center">
              <div className="text-4xl mb-2">🔄</div>
              <h4 className="text-[22px] font-bold text-emerald-200 mb-2">Điểm neo đối xứng (Symmetric)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Hai tay đòn vừa cùng phương thẳng hàng vừa có chiều dài bằng nhau tuyệt đối.
              </p>
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 16: KIẾN TRÚC THÔNG DỊCH PYTHON (SGK TRANG 88)
    // ==========================================
    case 'python-runtime':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-amber-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-amber-300 mb-6 uppercase tracking-wider">
            Cơ chế thông dịch và thực thi chương trình Python (SGK Trang 88)
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl items-center text-center">
            {/* 1. Source Code */}
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-4">
              <span className="text-3xl mb-1 block">📄</span>
              <span className="font-mono font-bold text-[20px] text-blue-300 block mb-1">Bai1.py</span>
              <p className="text-[17px] text-slate-300">Mã nguồn con người viết bằng lệnh Python</p>
            </div>

            {/* Arrow */}
            <div className="text-amber-400 font-bold text-[20px]">
              <span>Thông dịch</span>
              <span className="text-2xl block">➔</span>
            </div>

            {/* 2. Bytecode */}
            <div className="bg-amber-950/80 border-2 border-amber-400 rounded-2xl p-4 shadow-lg">
              <span className="text-3xl mb-1 block">⚙️</span>
              <span className="font-mono font-bold text-[20px] text-amber-300 block mb-1">Bytecode (.pyc)</span>
              <p className="text-[17px] text-slate-200">Mã trung gian tối ưu cho máy ảo</p>
            </div>

            {/* 3. PVM */}
            <div className="bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl p-4">
              <span className="text-3xl mb-1 block">🖥️</span>
              <span className="font-mono font-bold text-[20px] text-emerald-300 block mb-1">Máy ảo PVM</span>
              <p className="text-[17px] text-slate-200">Thực thi từng dòng lệnh và in kết quả</p>
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 17-21: LƯU ĐỒ THUẬT TOÁN PYTHON (SGK TRANG 98)
    // ==========================================
    case 'python-flowchart':
      return (
        <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-amber-300 mb-6 uppercase tracking-wider">
            3 Cấu trúc điều khiển kinh điển trong thuật toán & Python (SGK Trang 98)
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="text-[22px] font-bold text-blue-200 mb-2">Tuần tự (Sequence)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Thực thi lần lượt từng dòng lệnh từ trên xuống dưới theo thứ tự xuất hiện trong tệp mã nguồn.
              </p>
            </div>

            <div className="bg-slate-800/90 border-2 border-amber-400 rounded-2xl p-5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="text-[22px] font-bold text-amber-200 mb-2">Rẽ nhánh (if - else)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Kiểm tra biểu thức logic: Nếu <strong>Đúng (True)</strong> thực hiện lệnh A, nếu <strong>Sai (False)</strong> thực hiện lệnh B.
              </p>
            </div>

            <div className="bg-slate-800/90 border-2 border-emerald-400 rounded-2xl p-5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="text-[22px] font-bold text-emerald-200 mb-2">Lặp (for / while)</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Lặp lại khối lệnh với số lần biết trước (vòng lặp <strong>for</strong>) hoặc lặp theo điều kiện (vòng lặp <strong>while</strong>).
              </p>
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 22-24: DANH SÁCH MẢNG LIST TRONG PYTHON (SGK TRANG 116)
    // ==========================================
    case 'python-list':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-cyan-300 mb-5 uppercase tracking-wider">
            Cơ chế lập chỉ số 2 chiều trong danh sách List Python (SGK Trang 116)
          </div>
          <div className="bg-slate-800/90 border-2 border-cyan-400 rounded-2xl p-6 w-full max-w-4xl shadow-xl">
            <div className="font-mono text-[22px] text-amber-300 font-bold mb-4 text-center">
              A = ['Toan', 'Tin', 'Anh', 'Van', 'Su']
            </div>
            {/* Grid of Cells */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              {[
                { posIndex: '0', val: "'Toan'", negIndex: '-5' },
                { posIndex: '1', val: "'Tin'", negIndex: '-4' },
                { posIndex: '2', val: "'Anh'", negIndex: '-3' },
                { posIndex: '3', val: "'Van'", negIndex: '-2' },
                { posIndex: '4', val: "'Su'", negIndex: '-1' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-center flex flex-col justify-between">
                  <span className="text-[16px] text-blue-400 font-mono font-bold">Chỉ số xuôi: {item.posIndex}</span>
                  <div className="text-[22px] font-bold text-white font-mono my-2 bg-slate-850 py-1.5 rounded-lg border border-slate-750">
                    {item.val}
                  </div>
                  <span className="text-[16px] text-emerald-400 font-mono font-bold">Chỉ số ngược: {item.negIndex}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-[19px] text-slate-300">
              Ví dụ truy cập: <code className="text-cyan-300 font-mono font-bold">A[1]</code> cho ra <code className="text-amber-300 font-mono font-bold">'Tin'</code>, <code className="text-cyan-300 font-mono font-bold">A[-1]</code> cho ra phần tử cuối cùng <code className="text-amber-300 font-mono font-bold">'Su'</code>.
            </div>
          </div>
        </div>
      );

    // ==========================================
    // BÀI 29-30: KIỂM THỬ VÀ GỠ LỖI (SGK TRANG 149)
    // ==========================================
    case 'software-testing':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-850 to-purple-950 rounded-2xl text-white select-none border border-slate-700 shadow-xl">
          <div className="text-[22px] font-bold text-purple-300 mb-5 uppercase tracking-wider">
            3 Nhóm dữ liệu kiểm thử (Test Cases) toàn diện - SGK Trang 149
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5">
              <span className="text-3xl mb-2 block">📋</span>
              <h4 className="text-[22px] font-bold text-blue-200 mb-2">1. Dữ liệu thông thường</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Các giá trị nằm giữa khoảng hợp lệ thường gặp trong đời sống (ví dụ n = 5, n = 10).
              </p>
            </div>
            <div className="bg-purple-950/80 border-2 border-purple-400 rounded-2xl p-5 shadow-xl">
              <span className="text-3xl mb-2 block">🎯</span>
              <h4 className="text-[22px] font-bold text-purple-200 mb-2">2. Dữ liệu biên (Boundary)</h4>
              <p className="text-[18px] text-slate-200 leading-snug">
                Nằm sát ranh giới chuyển giao điều kiện (ví dụ điểm số = 0, 5.0, 8.0, 10.0; chuỗi rỗng "").
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-rose-400 rounded-2xl p-5">
              <span className="text-3xl mb-2 block">💥</span>
              <h4 className="text-[22px] font-bold text-rose-200 mb-2">3. Dữ liệu đặc biệt</h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                Số 0, số âm, số thực, dữ liệu cực lớn nhằm kiểm tra độ bền vững chống crash của hệ thống.
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
