import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SvgIllustrationProps {
  type: string;
  lang?: 'vi' | 'en';
}

export const SlideSvgIllustration: React.FC<SvgIllustrationProps> = ({ type, lang: propLang }) => {
  const { language: contextLang } = useLanguage();
  const lang = propLang || contextLang || 'vi';
  const isEn = lang === 'en';

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
            {isEn
              ? '3-Step Computer Information Processing Cycle (Textbook p.7)'
              : 'Mô hình chu trình 3 bước xử lí thông tin bằng máy tính (SGK Trang 7)'}
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl items-center">
            {/* Bước 1: INPUT */}
            <div className="bg-slate-800/90 border-2 border-blue-500/60 rounded-2xl p-5 text-center flex flex-col items-center shadow-lg">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/30 text-blue-300 font-bold text-[18px] uppercase tracking-wide mb-3">
                {isEn ? '1. Capture (Input)' : '1. Thu nhận (Input)'}
              </span>
              <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400 flex items-center justify-center text-3xl mb-3">
                ⌨️
              </div>
              <h4 className="text-[22px] font-bold text-white mb-2">
                {isEn ? 'INPUT DATA' : 'DỮ LIỆU ĐẦU VÀO'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Keyboard, mouse, microphone, camera, temperature / GPS sensors'
                  : 'Bàn phím, chuột, micro, camera, cảm biến nhiệt độ / GPS'}
              </p>
            </div>

            {/* Bước 2: PROCESSING & MEMORY */}
            <div className="bg-gradient-to-b from-blue-900/80 to-indigo-900/80 border-2 border-cyan-400 rounded-2xl p-5 text-center flex flex-col items-center shadow-2xl relative">
              <div className="absolute -top-3.5 px-4 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-black text-[16px] uppercase tracking-wider">
                {isEn ? 'Core Processing' : 'Trọng tâm xử lí'}
              </div>
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-[18px] uppercase tracking-wide mb-3 mt-1">
                {isEn ? '2. Processing & Storage' : '2. Xử lí & Lưu trữ'}
              </span>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/30 border border-cyan-300 flex items-center justify-center text-3xl mb-3">
                ⚙️
              </div>
              <h4 className="text-[22px] font-bold text-cyan-200 mb-2">
                {isEn ? 'PROCESSOR (CPU)' : 'BỘ XỬ LÍ (CPU)'}
              </h4>
              <p className="text-[18px] text-slate-200 leading-snug">
                {isEn
                  ? 'ALU arithmetic, logic control, temporary cache in RAM & Storage'
                  : 'Tính toán số học ALU, điều khiển logic, lưu tạm trong RAM & Ổ đĩa'}
              </p>
            </div>

            {/* Bước 3: OUTPUT */}
            <div className="bg-slate-800/90 border-2 border-emerald-500/60 rounded-2xl p-5 text-center flex flex-col items-center shadow-lg">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-[18px] uppercase tracking-wide mb-3">
                {isEn ? '3. Output' : '3. Xuất tin (Output)'}
              </span>
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/30 border border-emerald-400 flex items-center justify-center text-3xl mb-3">
                🖥️
              </div>
              <h4 className="text-[22px] font-bold text-white mb-2">
                {isEn ? 'OUTPUT INFORMATION' : 'THÔNG TIN KẾT QUẢ'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Display screens, printers, audio speakers, machine actuators'
                  : 'Màn hình hiển thị, máy in, loa âm thanh, điều khiển máy móc'}
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
            {isEn
              ? 'Smart Device Ecosystem & Internet of Things (IoT) - Textbook p.12'
              : 'Hệ sinh thái thiết bị thông minh & Internet vạn vật (IoT) - SGK Trang 12'}
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              {
                icon: '📱',
                name: isEn ? 'Smartphone & Tablet' : 'Smartphone & Tablet',
                desc: isEn ? 'Personal digital assistant, central controller' : 'Trợ thủ số cá nhân, điều khiển trung tâm',
                tag: isEn ? 'Mobile' : 'Di động',
              },
              {
                icon: '⌚',
                name: isEn ? 'Health Smartwatch' : 'Smartwatch sức khỏe',
                desc: isEn ? 'Heart rate, SpO2 oxygen, 24/7 step tracking' : 'Đo nhịp tim, oxy SpO2, bước đi 24/7',
                tag: isEn ? 'Wearable' : 'Đeo tay',
              },
              {
                icon: '🤖',
                name: isEn ? 'Robotics & Automation' : 'Robot & Tự động hóa',
                desc: isEn ? 'Smart vacuum, automotive robotic assembly arms' : 'Hút bụi thông minh, cánh tay lắp ráp xe hơi',
                tag: isEn ? 'Industry' : 'Công nghiệp',
              },
              {
                icon: '🚗',
                name: isEn ? 'Autonomous Vehicles' : 'Xe tự hành & Smart Car',
                desc: isEn ? 'LiDAR sensors, lane detection cameras' : 'Cảm biến lidar, camera nhận diện làn đường',
                tag: isEn ? 'Transport' : 'Giao thông',
              },
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
            {isEn
              ? 'Local Area Network (LAN) Architecture & Global Internet (Textbook p.39)'
              : 'Kiến trúc mạng nội bộ (LAN) kết nối Internet toàn cầu (SGK Trang 39)'}
          </div>
          <div className="flex items-center justify-between w-full max-w-4xl gap-4">
            {/* Cụm thiết bị LAN */}
            <div className="bg-slate-800/90 border-2 border-blue-500/50 p-5 rounded-2xl flex flex-col gap-2.5 text-center flex-1">
              <span className="text-[18px] font-bold uppercase text-blue-400 bg-blue-500/20 py-1 rounded-lg">
                {isEn ? 'Local Area Network (LAN)' : 'Mạng nội bộ (LAN)'}
              </span>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                {isEn ? '💻 Classroom PCs' : '💻 Máy tính lớp học'}
              </div>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                {isEn ? '📱 Wi-Fi Phones' : '📱 Điện thoại Wi-Fi'}
              </div>
              <div className="text-[19px] font-semibold bg-slate-900 p-2.5 rounded-xl text-slate-200">
                {isEn ? '🖨️ Shared Printers' : '🖨️ Máy in dùng chung'}
              </div>
            </div>

            {/* Mũi tên kết nối Switch */}
            <div className="text-blue-400 font-bold text-[20px] flex flex-col items-center">
              <span>{isEn ? 'Cable / Wi-Fi' : 'Cáp / Wi-Fi'}</span>
              <span className="text-2xl">➔</span>
            </div>

            {/* Switch & Access Point */}
            <div className="bg-blue-950 border-2 border-blue-400 p-5 rounded-2xl text-center min-w-[170px] shadow-lg">
              <div className="text-3xl mb-1">🔀</div>
              <span className="text-[22px] font-bold text-blue-200 block">Switch / AP</span>
              <span className="text-[17px] text-slate-300 mt-1 block">
                {isEn ? 'Central Aggregation' : 'Tập trung kết nối'}
              </span>
            </div>

            {/* Mũi tên Router */}
            <div className="text-emerald-400 font-bold text-[20px] flex flex-col items-center">
              <span>{isEn ? 'Routing' : 'Định tuyến'}</span>
              <span className="text-2xl">➔</span>
            </div>

            {/* Đám mây Internet */}
            <div className="bg-emerald-950/80 border-2 border-emerald-400 p-5 rounded-2xl text-center flex-1 shadow-lg">
              <div className="text-3xl mb-1">🌐</div>
              <span className="text-[22px] font-bold text-emerald-300 block">INTERNET</span>
              <span className="text-[17px] text-slate-200 mt-1 block">
                {isEn
                  ? 'Web Servers, Email, Cloud Computing (SaaS, IaaS)'
                  : 'Máy chủ Web, Email, Điện toán đám mây Cloud (SaaS, IaaS)'}
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
            {isEn
              ? 'Digital Information Security Shield & Cyber Defense (Textbook p.45)'
              : 'Lá chắn an toàn thông tin số & Phòng thủ mạng (SGK Trang 45)'}
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              {
                icon: '🛡️',
                title: isEn ? 'Firewall' : 'Tường lửa (Firewall)',
                desc: isEn ? 'Block unauthorized intrusions, filter malicious packets' : 'Ngăn chặn truy cập trái phép, lọc gói tin độc hại',
                tag: isEn ? 'Defense' : 'Bảo vệ',
              },
              {
                icon: '🔑',
                title: isEn ? 'Two-Factor Auth (2FA)' : 'Xác thực 2 bước (2FA)',
                desc: isEn ? 'Strong password + OTP code to mobile phone' : 'Mật khẩu mạnh + Mã OTP gửi về điện thoại',
                tag: isEn ? 'Account' : 'Tài khoản',
              },
              {
                icon: '🔒',
                title: isEn ? 'HTTPS Data Encryption' : 'Mã hóa dữ liệu HTTPS',
                desc: isEn ? 'Encrypt banking transactions & passwords' : 'Mã hóa thông tin giao dịch ngân hàng & mật khẩu',
                tag: isEn ? 'Transit' : 'Đường truyền',
              },
              {
                icon: '⚠️',
                title: isEn ? 'Anti-Phishing Vigilance' : 'Cảnh giác lừa đảo (Phishing)',
                desc: isEn ? 'Avoid suspicious links impersonating awards / gifts' : 'Không bấm liên kết lạ mạo danh trúng thưởng, tặng quà',
                tag: isEn ? 'Awareness' : 'Nhận thức',
              },
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
            {isEn
              ? 'Creative Commons (CC) Digital Copyright License Symbols - Textbook p.58'
              : 'Các biểu tượng giấy phép bản quyền Creative Commons (CC) - SGK Trang 58'}
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              {
                code: 'BY',
                icon: '👤',
                title: isEn ? 'Attribution (BY)' : 'Ghi nhận tác giả (Attribution)',
                desc: isEn ? 'Must cite original author and publication source' : 'Bắt buộc phải dẫn tên tác giả gốc và nguồn xuất bản',
                color: 'border-blue-400 text-blue-300',
              },
              {
                code: 'NC',
                icon: '💲⃠',
                title: isEn ? 'Non-Commercial (NC)' : 'Phi thương mại (Non-Commercial)',
                desc: isEn ? 'For educational use only, commercial sale prohibited' : 'Chỉ được dùng cho học tập, không bán kiếm tiền',
                color: 'border-amber-400 text-amber-300',
              },
              {
                code: 'ND',
                icon: '🚫',
                title: isEn ? 'No-Derivatives (ND)' : 'Không phái sinh (No-Derivatives)',
                desc: isEn ? 'Preserve original work intact, no editing or remixing' : 'Giữ nguyên gốc tác phẩm, không được cắt ghép sửa đổi',
                color: 'border-rose-400 text-rose-300',
              },
              {
                code: 'SA',
                icon: '🔄',
                title: isEn ? 'Share-Alike (SA)' : 'Chia sẻ tương tự (Share-Alike)',
                desc: isEn ? 'Derivative works must be released under the same license' : 'Nếu tạo bản mới phải cấp cùng giấy phép ban đầu',
                color: 'border-emerald-400 text-emerald-300',
              },
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
              {isEn ? 'Raster Graphics (Bitmap - Pixels)' : 'Đồ họa Raster (Điểm ảnh - Bitmap)'}
            </span>
            <div className="my-4 h-28 flex flex-col items-center justify-center bg-slate-950 rounded-xl border border-rose-900/60 text-rose-400 font-mono text-[20px] p-2">
              <span className="text-3xl mb-1">🏁 █ ▓ ░</span>
              <span>{isEn ? '[ 500% ZOOM REVEALS JAGGED PIXELS ]' : '[ Phóng to 500% BỊ VỠ NÉT RĂNG CƯA ]'}</span>
            </div>
            <h4 className="text-[22px] font-bold text-white mb-2">
              {isEn ? 'Formats: JPG, PNG, GIF' : 'Định dạng: JPG, PNG, GIF'}
            </h4>
            <p className="text-[18px] text-slate-300 leading-snug">
              {isEn
                ? 'Composed of colored pixels. Large file size, suited for realistic photographs.'
                : 'Cấu tạo từ các hạt pixel màu. Dung lượng lớn, chỉ thích hợp ảnh chụp thực tế.'}
            </p>
          </div>

          <div className="text-cyan-400 font-black text-3xl px-4 animate-pulse">VS</div>

          {/* Vector side */}
          <div className="flex-1 max-w-md bg-slate-800/95 border-2 border-cyan-400 rounded-2xl p-6 text-center shadow-2xl">
            <span className="text-[18px] font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
              {isEn ? 'Vector Graphics (Inkscape - Math Paths)' : 'Đồ họa Vector (Inkscape - Đường toán học)'}
            </span>
            <div className="my-4 h-28 flex flex-col items-center justify-center bg-slate-950 rounded-xl border border-cyan-900/60 text-cyan-300 font-mono text-[20px] p-2">
              <span className="text-3xl mb-1">📐 ∿ ☍ ◯</span>
              <span>{isEn ? '[ INFINITE ZOOM REMAINS 100% SHARP ]' : '[ Phóng to vô hạn VẪN SẮC NÉT TUYỆT ĐỐI ]'}</span>
            </div>
            <h4 className="text-[22px] font-bold text-white mb-2">
              {isEn ? 'Formats: SVG, AI, EPS' : 'Định dạng: SVG, AI, EPS'}
            </h4>
            <p className="text-[18px] text-slate-300 leading-snug">
              {isEn
                ? 'Defined by mathematical formulas. Lightweight, designed for logos, banners, typography.'
                : 'Định nghĩa bằng phương trình toán học. Dung lượng nhẹ, chuyên thiết kế logo, banner, font chữ.'}
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
            {isEn
              ? '6 Path Operations in Inkscape - Textbook p.71'
              : '6 Phép toán ghép hình học (Path Operations) trong Inkscape - SGK Trang 71'}
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-4xl text-center">
            {[
              {
                name: isEn ? 'Union' : 'Hợp nhất (Union)',
                shortcut: 'Ctrl + +',
                desc: isEn ? 'Combine 2 or more shapes into a single object' : 'Gộp 2 hay nhiều hình thành 1 đối tượng duy nhất',
                icon: '⚪+⚪ ➔ 🔘',
              },
              {
                name: isEn ? 'Difference' : 'Hiệu (Difference)',
                shortcut: 'Ctrl + -',
                desc: isEn ? 'Subtract upper shape from lower shape (cut-out)' : 'Lấy hình dưới trừ đi phần giao với hình trên (cắt khoét)',
                icon: '⚪-⚫ ➔ 🌙',
              },
              {
                name: isEn ? 'Intersection' : 'Giao nhau (Intersection)',
                shortcut: 'Ctrl + *',
                desc: isEn ? 'Keep only the overlapping shared region' : 'Chỉ giữ lại phần chung chồng lên nhau giữa các hình',
                icon: '⚪∩⚪ ➔ 🕳️',
              },
              {
                name: isEn ? 'Exclusion' : 'Loại trừ (Exclusion)',
                shortcut: 'Ctrl + ^',
                desc: isEn ? 'Remove overlapping intersection, keep non-duplicates' : 'Xóa bỏ phần giao nhau, giữ lại phần không trùng lặp',
                icon: '⚪⊕⚪ ➔ 👓',
              },
              {
                name: isEn ? 'Division' : 'Chia cắt (Division)',
                shortcut: 'Ctrl + /',
                desc: isEn ? 'Cut lower shape into pieces using upper shape' : 'Dùng hình trên cắt hình dưới thành các mảnh rời',
                icon: '⚪/✂️ ➔ 🌗',
              },
              {
                name: isEn ? 'Cut Path' : 'Cắt đường (Cut Path)',
                shortcut: 'Ctrl + Alt + /',
                desc: isEn ? 'Cut stroke contour into open separate paths' : 'Cắt nét viền của hình thành các đoạn hở độc lập',
                icon: '◯➔‿ ⁀',
              },
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
            {isEn
              ? 'Bézier Curve Structure & Node Tool (N) - Textbook p.76'
              : 'Cấu trúc đường cong Bézier & Điểm neo (Node Tool - N) - SGK Trang 76'}
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5 flex flex-col items-center">
              <div className="text-4xl mb-2">◼️</div>
              <h4 className="text-[22px] font-bold text-white mb-2">
                {isEn ? 'Corner Node' : 'Điểm neo góc (Corner)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Two handles operate independently, creating sharp angles and straight edges.'
                  : 'Hai tay đòn điều khiển độc lập với nhau, tạo ra góc nhọn hoặc góc vuông sắc cạnh.'}
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-cyan-400 rounded-2xl p-5 flex flex-col items-center shadow-lg">
              <div className="text-4xl mb-2">🔷</div>
              <h4 className="text-[22px] font-bold text-cyan-200 mb-2">
                {isEn ? 'Smooth Node' : 'Điểm neo trơn (Smooth)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Two handles stay collinear on a straight line, producing smooth, continuous curves.'
                  : 'Hai tay đòn luôn nằm trên một đường thẳng, tạo ra đường cong lượn sóng mềm mại, không gãy khúc.'}
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-emerald-400 rounded-2xl p-5 flex flex-col items-center">
              <div className="text-4xl mb-2">🔄</div>
              <h4 className="text-[22px] font-bold text-emerald-200 mb-2">
                {isEn ? 'Symmetric Node' : 'Điểm neo đối xứng (Symmetric)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Two handles are collinear and have strictly equal length on both sides.'
                  : 'Hai tay đòn vừa cùng phương thẳng hàng vừa có chiều dài bằng nhau tuyệt đối.'}
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
            {isEn
              ? 'Python Code Interpretation & Execution Mechanism (Textbook p.88)'
              : 'Cơ chế thông dịch và thực thi chương trình Python (SGK Trang 88)'}
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-4xl items-center text-center">
            {/* 1. Source Code */}
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-4">
              <span className="text-3xl mb-1 block">📄</span>
              <span className="font-mono font-bold text-[20px] text-blue-300 block mb-1">Bai1.py</span>
              <p className="text-[17px] text-slate-300">
                {isEn ? 'Human-written Python source commands' : 'Mã nguồn con người viết bằng lệnh Python'}
              </p>
            </div>

            {/* Arrow */}
            <div className="text-amber-400 font-bold text-[20px]">
              <span>{isEn ? 'Compilation' : 'Thông dịch'}</span>
              <span className="text-2xl block">➔</span>
            </div>

            {/* 2. Bytecode */}
            <div className="bg-amber-950/80 border-2 border-amber-400 rounded-2xl p-4 shadow-lg">
              <span className="text-3xl mb-1 block">⚙️</span>
              <span className="font-mono font-bold text-[20px] text-amber-300 block mb-1">Bytecode (.pyc)</span>
              <p className="text-[17px] text-slate-200">
                {isEn ? 'Intermediate code optimized for VM' : 'Mã trung gian tối ưu cho máy ảo'}
              </p>
            </div>

            {/* 3. PVM */}
            <div className="bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl p-4">
              <span className="text-3xl mb-1 block">🖥️</span>
              <span className="font-mono font-bold text-[20px] text-emerald-300 block mb-1">
                {isEn ? 'Python VM (PVM)' : 'Máy ảo PVM'}
              </span>
              <p className="text-[17px] text-slate-200">
                {isEn ? 'Executes instructions & prints output' : 'Thực thi từng dòng lệnh và in kết quả'}
              </p>
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
            {isEn
              ? '3 Classic Control Structures in Algorithms & Python (Textbook p.98)'
              : '3 Cấu trúc điều khiển kinh điển trong thuật toán & Python (SGK Trang 98)'}
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="text-[22px] font-bold text-blue-200 mb-2">
                {isEn ? 'Sequence' : 'Tuần tự (Sequence)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Execute statements sequentially line by line in the order they appear in source code.'
                  : 'Thực thi lần lượt từng dòng lệnh từ trên xuống dưới theo thứ tự xuất hiện trong tệp mã nguồn.'}
              </p>
            </div>

            <div className="bg-slate-800/90 border-2 border-amber-400 rounded-2xl p-5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="text-[22px] font-bold text-amber-200 mb-2">
                {isEn ? 'Selection (if - else)' : 'Rẽ nhánh (if - else)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Evaluate condition: If True execute branch A, if False execute branch B.'
                  : 'Kiểm tra biểu thức logic: Nếu Đúng (True) thực hiện lệnh A, nếu Sai (False) thực hiện lệnh B.'}
              </p>
            </div>

            <div className="bg-slate-800/90 border-2 border-emerald-400 rounded-2xl p-5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono font-bold text-2xl flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="text-[22px] font-bold text-emerald-200 mb-2">
                {isEn ? 'Iteration (for / while)' : 'Lặp (for / while)'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Repeat block for known count (for loop) or while condition holds (while loop).'
                  : 'Lặp lại khối lệnh với số lần biết trước (vòng lặp for) hoặc lặp theo điều kiện (vòng lặp while).'}
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
            {isEn
              ? '2D Bidirectional Indexing in Python Lists (Textbook p.116)'
              : 'Cơ chế lập chỉ số 2 chiều trong danh sách List Python (SGK Trang 116)'}
          </div>
          <div className="bg-slate-800/90 border-2 border-cyan-400 rounded-2xl p-6 w-full max-w-4xl shadow-xl">
            <div className="font-mono text-[22px] text-amber-300 font-bold mb-4 text-center">
              A = ['Math', 'Informatics', 'English', 'Lit', 'History']
            </div>
            {/* Grid of Cells */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              {[
                { posIndex: '0', val: isEn ? "'Math'" : "'Toan'", negIndex: '-5' },
                { posIndex: '1', val: isEn ? "'Informatics'" : "'Tin'", negIndex: '-4' },
                { posIndex: '2', val: isEn ? "'English'" : "'Anh'", negIndex: '-3' },
                { posIndex: '3', val: isEn ? "'Lit'" : "'Van'", negIndex: '-2' },
                { posIndex: '4', val: isEn ? "'History'" : "'Su'", negIndex: '-1' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-xl p-3 text-center flex flex-col justify-between">
                  <span className="text-[16px] text-blue-400 font-mono font-bold">
                    {isEn ? `Forward Index: ${item.posIndex}` : `Chỉ số xuôi: ${item.posIndex}`}
                  </span>
                  <div className="text-[22px] font-bold text-white font-mono my-2 bg-slate-850 py-1.5 rounded-lg border border-slate-750">
                    {item.val}
                  </div>
                  <span className="text-[16px] text-emerald-400 font-mono font-bold">
                    {isEn ? `Backward Index: ${item.negIndex}` : `Chỉ số ngược: ${item.negIndex}`}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center text-[19px] text-slate-300">
              {isEn ? (
                <>
                  Access example: <code className="text-cyan-300 font-mono font-bold">A[1]</code> yields <code className="text-amber-300 font-mono font-bold">'Informatics'</code>, <code className="text-cyan-300 font-mono font-bold">A[-1]</code> yields last item <code className="text-amber-300 font-mono font-bold">'History'</code>.
                </>
              ) : (
                <>
                  Ví dụ truy cập: <code className="text-cyan-300 font-mono font-bold">A[1]</code> cho ra <code className="text-amber-300 font-mono font-bold">'Tin'</code>, <code className="text-cyan-300 font-mono font-bold">A[-1]</code> cho ra phần tử cuối cùng <code className="text-amber-300 font-mono font-bold">'Su'</code>.
                </>
              )}
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
            {isEn
              ? '3 Comprehensive Test Case Categories - Textbook p.149'
              : '3 Nhóm dữ liệu kiểm thử (Test Cases) toàn diện - SGK Trang 149'}
          </div>
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl text-center">
            <div className="bg-slate-800/90 border-2 border-blue-400 rounded-2xl p-5">
              <span className="text-3xl mb-2 block">📋</span>
              <h4 className="text-[22px] font-bold text-blue-200 mb-2">
                {isEn ? '1. Standard Data' : '1. Dữ liệu thông thường'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Values in the middle of expected valid domain (e.g. n = 5, n = 10).'
                  : 'Các giá trị nằm giữa khoảng hợp lệ thường gặp trong đời sống (ví dụ n = 5, n = 10).'}
              </p>
            </div>
            <div className="bg-purple-950/80 border-2 border-purple-400 rounded-2xl p-5 shadow-xl">
              <span className="text-3xl mb-2 block">🎯</span>
              <h4 className="text-[22px] font-bold text-purple-200 mb-2">
                {isEn ? '2. Boundary Data' : '2. Dữ liệu biên (Boundary)'}
              </h4>
              <p className="text-[18px] text-slate-200 leading-snug">
                {isEn
                  ? 'Values right on threshold boundaries (e.g. score = 0, 5.0, 8.0, 10.0; empty string "").'
                  : 'Nằm sát ranh giới chuyển giao điều kiện (ví dụ điểm số = 0, 5.0, 8.0, 10.0; chuỗi rỗng "").'}
              </p>
            </div>
            <div className="bg-slate-800/90 border-2 border-rose-400 rounded-2xl p-5">
              <span className="text-3xl mb-2 block">💥</span>
              <h4 className="text-[22px] font-bold text-rose-200 mb-2">
                {isEn ? '3. Special / Edge Data' : '3. Dữ liệu đặc biệt'}
              </h4>
              <p className="text-[18px] text-slate-300 leading-snug">
                {isEn
                  ? 'Zero, negative numbers, floats, huge inputs to test system robustness against crashes.'
                  : 'Số 0, số âm, số thực, dữ liệu cực lớn nhằm kiểm tra độ bền vững chống crash của hệ thống.'}
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
