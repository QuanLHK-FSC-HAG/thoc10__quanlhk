import React, { useState } from 'react';
import {
  Sparkles,
  BookmarkCheck,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react';
import { Slide, Lesson } from '../types';
import { SlideSvgIllustration } from './SlideSvgIllustrations';

interface SlideCardProps {
  slide: Slide;
  lesson: Lesson;
  totalSlides: number;
  fontScale?: 'normal' | 'large' | 'extra';
  isFullscreen?: boolean;
}

export const SlideCard: React.FC<SlideCardProps> = ({
  slide,
  lesson,
  totalSlides,
  fontScale = 'normal',
  isFullscreen = false,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

  // Content density check to dynamically optimize font sizes & layout structure
  const isDense = Boolean(
    (slide.bullets && slide.bullets.length >= 3) ||
    (slide.bullets && slide.bullets.length >= 2 && slide.highlightBox) ||
    (slide.cardsGrid && slide.cardsGrid.length >= 3) ||
    (slide.quiz && slide.quiz.options && slide.quiz.options.length >= 3) ||
    (slide.tableData && slide.tableData.rows && slide.tableData.rows.length >= 4) ||
    (slide.compareColumns && (slide.compareColumns.left.points.length >= 3 || slide.compareColumns.right.points.length >= 3)) ||
    slide.situation ||
    slide.mindmap ||
    (slide.imageUrl && slide.bullets && slide.bullets.length >= 2)
  );

  const titleClass =
    fontScale === 'extra'
      ? isDense ? 'text-[26px]' : 'text-[30px]'
      : fontScale === 'large'
      ? isDense ? 'text-[24px]' : 'text-[28px]'
      : isDense ? 'text-[23px]' : 'text-[26px]';

  const subtitleClass =
    fontScale === 'extra'
      ? isDense ? 'text-[18px]' : 'text-[20px]'
      : fontScale === 'large'
      ? isDense ? 'text-[17px]' : 'text-[19px]'
      : isDense ? 'text-[16px]' : 'text-[18px]';

  const bodyTextClass =
    fontScale === 'extra'
      ? isDense ? 'text-[18px]' : 'text-[20px]'
      : fontScale === 'large'
      ? isDense ? 'text-[17px]' : 'text-[19px]'
      : isDense ? 'text-[16px]' : 'text-[18px]';

  const headerItemClass =
    fontScale === 'extra'
      ? isDense ? 'text-[19px]' : 'text-[22px]'
      : fontScale === 'large'
      ? isDense ? 'text-[18px]' : 'text-[20px]'
      : isDense ? 'text-[17px]' : 'text-[19px]';

  const subItemClass =
    fontScale === 'extra'
      ? isDense ? 'text-[17px]' : 'text-[19px]'
      : fontScale === 'large'
      ? isDense ? 'text-[16px]' : 'text-[18px]'
      : isDense ? 'text-[15px]' : 'text-[17px]';

  const citationSource =
    slide.sourceCitation ||
    `Nguồn tham khảo: Sách giáo khoa Tin học 10 (trang ${lesson.pageStart} - ${lesson.pageEnd}) • Bộ Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam`;

  // =========================================================================
  // 1. TITLE SLIDE (1280 x 720)
  // =========================================================================
  if (slide.type === 'title') {
    return (
      <div
        id={`slide-${slide.id}`}
        className="w-[1280px] h-[720px] bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] text-[#1E293B] select-none flex flex-col justify-between p-10 relative overflow-hidden font-['Be_Vietnam_Pro',sans-serif]"
      >
        {/* Top Header of Title Slide */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3.5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-3 w-12 bg-[#2563EB] rounded-full" />
            <span className="text-[20px] font-extrabold uppercase tracking-wider text-[#2563EB]">
              Tin học 10 • Kết nối tri thức với cuộc sống
            </span>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#2563EB]/30 text-[#2563EB] text-[18px] font-bold">
            {lesson.title.split('.')[0]}
          </span>
        </div>

        {/* Center Title Content */}
        <div className="flex-1 min-h-0 flex flex-col justify-center max-w-5xl mx-auto w-full py-4 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#2563EB]/25 text-[#2563EB] text-[18px] font-bold w-fit">
            <Sparkles className="w-5 h-5 text-[#2563EB]" />
            <span>Bài giảng trình chiếu trực quan • KHBD Chuẩn</span>
          </div>

          <h1 className="text-[44px] font-black text-[#0F172A] tracking-tight leading-[1.2] uppercase">
            {slide.title}
          </h1>

          {slide.subtitle && (
            <p className="text-[25px] font-semibold text-[#475569] leading-snug">
              {slide.subtitle}
            </p>
          )}

          {slide.bullets && slide.bullets.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {slide.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs"
                >
                  <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white text-[19px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-[22px] font-bold text-[#1E293B] leading-snug">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info & Citation: Hidden in Fullscreen mode */}
        {!isFullscreen && (
          <div className="shrink-0 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[18px] text-[#475569] font-medium italic">
              <BookOpen className="w-5 h-5 text-[#2563EB] shrink-0" />
              <span>{citationSource}</span>
            </div>
            <div className="font-mono font-bold text-[19px] text-[#64748B]">
              Slide 01 / {String(totalSlides).padStart(2, '0')}
            </div>
          </div>
        )}

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E2E8F0]">
          <div
            className="h-full bg-[#2563EB]"
            style={{ width: `${(1 / totalSlides) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. STANDARD CONTENT SLIDE (1280 x 720)
  // =========================================================================
  return (
    <div
      id={`slide-${slide.id}`}
      className="w-[1280px] h-[720px] bg-white text-[#1E293B] select-none flex flex-col justify-between p-7 relative overflow-hidden font-['Be_Vietnam_Pro',sans-serif]"
    >
      {/* Slide Top Header (~46px) */}
      <div className="flex items-center justify-between gap-3 border-b border-[#F1F5F9] pb-2.5 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-2.5 w-9 bg-[#2563EB] rounded-full shrink-0" />
          <span className="text-[19px] font-extrabold text-[#2563EB] uppercase tracking-wider truncate">
            {slide.badge || lesson.shortTitle}
          </span>
        </div>
        <div className="font-mono text-[18px] font-bold text-[#64748B] shrink-0">
          Slide {String(slide.slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      </div>

      {/* Slide Main Content: Fitted with natural top-to-bottom flow & safe scrolling so elements NEVER collide */}
      <div className="flex-1 min-h-0 overflow-y-auto pr-1 flex flex-col justify-start py-1 space-y-3">
        {/* Slide Title & Subtitle */}
        <div className="space-y-0.5 shrink-0">
          <h2 className={`${titleClass} font-extrabold text-[#0F172A] tracking-tight leading-snug uppercase`}>
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className={`${subtitleClass} font-bold text-[#2563EB] leading-snug`}>
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Lead box (compact styling when not using 2-column image layout) */}
        {slide.lead && !slide.imageUrl && !slide.quiz && (
          <div className="text-[19px] font-medium text-[#1E293B] leading-relaxed shrink-0 bg-[#F8FAFC] px-4 py-2 rounded-xl border border-[#CBD5E1]">
            {slide.lead}
          </div>
        )}

        {/* ======================================================== */}
        {/* A. SVG TECHNICAL DIAGRAM                                 */}
        {/* ======================================================== */}
        {slide.svgType && (
          <div className="flex-1 min-h-0 w-full rounded-2xl overflow-hidden shadow-md border border-[#CBD5E1]">
            <SlideSvgIllustration type={slide.svgType} />
          </div>
        )}

        {/* ======================================================== */}
        {/* B. SLIDE WITH RELEVANT ILLUSTRATION / IMAGE (2-Column)   */}
        {/* ======================================================== */}
        {slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 grid grid-cols-12 gap-5 items-center">
            {/* Left Content Column (7 cols = ~58% width) */}
            <div className="col-span-7 flex flex-col justify-between space-y-3 min-h-0">
              {slide.lead && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[18px] font-medium text-slate-800 leading-snug">
                  {slide.lead}
                </div>
              )}

              {slide.bullets && slide.bullets.length > 0 && (
                <div className="space-y-2.5">
                  {slide.bullets.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] shadow-xs flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white text-[15px] font-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <div className="space-y-0.5 flex-1 min-w-0">
                        {b.title && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[18px] font-bold text-slate-900 leading-snug">
                              {b.title}
                            </span>
                            {b.badge && (
                              <span className="text-[13px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 shrink-0">
                                {b.badge}
                              </span>
                            )}
                          </div>
                        )}
                        <p className="text-[16px] text-slate-700 font-medium leading-snug">
                          {b.text}
                        </p>
                        {b.subtext && (
                          <p className="text-[14px] text-slate-500 italic pt-0.5">
                            {b.subtext}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {slide.highlightBox && (
                <div
                  className={`p-3 rounded-xl border-2 flex items-start gap-3 shadow-xs ${
                    slide.highlightBox.type === 'remember'
                      ? 'bg-blue-50 border-blue-300 text-blue-900'
                      : slide.highlightBox.type === 'warning'
                      ? 'bg-amber-50 border-amber-300 text-amber-900'
                      : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  }`}
                >
                  <BookmarkCheck className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[16px] font-bold uppercase tracking-wide block">
                      {slide.highlightBox.title}
                    </span>
                    <div className="text-[15px] font-medium leading-snug mt-0.5">
                      {Array.isArray(slide.highlightBox.content) ? (
                        <ul className="list-disc list-inside space-y-0.5">
                          {slide.highlightBox.content.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      ) : (
                        slide.highlightBox.content
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Image Column (5 cols = ~42% width) */}
            <div className="col-span-5 h-full max-h-[440px] flex flex-col justify-center">
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-50 flex flex-col relative group">
                {!imageError ? (
                  <img
                    src={slide.imageUrl}
                    alt={slide.imageAlt || slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full flex-1 object-cover object-center min-h-[220px]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-900 to-indigo-950 text-white text-center min-h-[220px]">
                    <ImageIcon className="w-12 h-12 text-blue-300 mb-2" />
                    <span className="text-[18px] font-bold text-white mb-1">{slide.title}</span>
                    <span className="text-[14px] text-blue-200">Hình ảnh trực quan sách giáo khoa</span>
                  </div>
                )}
                {slide.imageCaption && (
                  <div className="bg-white/95 backdrop-blur-xs px-3.5 py-1.5 border-t border-slate-200 text-[14px] font-medium text-slate-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span className="truncate">{slide.imageCaption}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* C. 2-COLUMN COMPARISON                                   */}
        {/* ======================================================== */}
        {slide.compareColumns && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
            {/* Cột Trái */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2 border-b border-[#CBD5E1] pb-2">
                  <h3 className={`${headerItemClass} font-black text-[#0F172A]`}>
                    {slide.compareColumns.left.title}
                  </h3>
                  {slide.compareColumns.left.badge && (
                    <span className="text-[16px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1D4ED8]">
                      {slide.compareColumns.left.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {slide.compareColumns.left.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                      <span className={`${subItemClass} font-medium text-[#1E293B] leading-snug`}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột Phải */}
            <div className="p-4 rounded-2xl bg-[#EFF6FF]/60 border-2 border-[#93C5FD] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2 border-b border-[#93C5FD] pb-2">
                  <h3 className={`${headerItemClass} font-black text-[#1E3A8A]`}>
                    {slide.compareColumns.right.title}
                  </h3>
                  {slide.compareColumns.right.badge && (
                    <span className="text-[16px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white">
                      {slide.compareColumns.right.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {slide.compareColumns.right.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                      <span className={`${subItemClass} font-medium text-[#1E293B] leading-snug`}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* D. CARDS GRID                                            */}
        {/* ======================================================== */}
        {slide.cardsGrid && !slide.imageUrl && !slide.svgType && !slide.compareColumns && (
          <div
            className={`flex-1 min-h-0 grid gap-3.5 ${
              slide.cardsGrid.length <= 2
                ? 'grid-cols-2'
                : slide.cardsGrid.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2'
            }`}
          >
            {slide.cardsGrid.map((card, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] hover:border-[#2563EB]/60 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className={`${headerItemClass} font-black text-[#0F172A]`}>
                      {card.title}
                    </h3>
                    {card.tag && (
                      <span className="text-[15px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#2563EB]/30 text-[#2563EB]">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <p className={`${subItemClass} font-medium text-[#334155] leading-snug mb-2`}>
                    {card.desc}
                  </p>
                  {card.points && (
                    <div className="space-y-1 pt-1 border-t border-slate-200">
                      {card.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span className="text-[17px] font-bold text-[#1E293B]">{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* E. BULLETS (Smart Multi-Column / Grid Layout)            */}
        {/* ======================================================== */}
        {slide.bullets &&
          slide.bullets.length > 0 &&
          !slide.imageUrl &&
          !slide.svgType &&
          !slide.compareColumns &&
          !slide.cardsGrid &&
          !slide.tableData &&
          !slide.diagram &&
          !slide.codeSnippet &&
          !slide.quiz &&
          !slide.situation &&
          !slide.mindmap && (
            <div
              className={`w-full shrink-0 ${
                slide.bullets.length === 2
                  ? 'grid grid-cols-2 gap-4'
                  : slide.bullets.length === 4
                  ? 'grid grid-cols-2 gap-3.5'
                  : 'space-y-3'
              }`}
            >
              {slide.bullets.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border-2 border-[#CBD5E1] shadow-xs shrink-0"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-[17px] font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      {b.title && (
                        <span className={`${headerItemClass} font-black text-[#0F172A] block leading-snug`}>
                          {b.title}
                        </span>
                      )}
                      {b.badge && (
                        <span className="text-[13px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 shrink-0">
                          {b.badge}
                        </span>
                      )}
                    </div>
                    <span className={`${bodyTextClass} font-medium text-[#1E293B] leading-relaxed block`}>
                      {b.text}
                    </span>
                    {b.subtext && (
                      <span className="text-[16px] text-[#64748B] italic block pt-0.5">
                        {b.subtext}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* ======================================================== */}
        {/* F. TABLE (Structured Data Matrix)                        */}
        {/* ======================================================== */}
        {slide.tableData && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 flex flex-col justify-center">
            {slide.tableData.caption && (
              <div className="text-[18px] font-bold text-[#475569] mb-1.5 italic">
                {slide.tableData.caption}
              </div>
            )}
            <div className="overflow-hidden rounded-2xl border-2 border-[#CBD5E1] shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#EFF6FF] border-b-2 border-[#CBD5E1]">
                    {slide.tableData.headers.map((h, i) => (
                      <th
                        key={i}
                        className="py-2.5 px-4 text-[20px] font-black text-[#1E3A8A] tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] bg-white">
                  {slide.tableData.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="py-2.5 px-4 text-[19px] font-medium text-[#1E293B] leading-snug"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* G. PROCESS / FLOW DIAGRAM STEPS                          */}
        {/* ======================================================== */}
        {slide.diagram && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 flex items-center justify-between gap-3.5">
            {slide.diagram.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] text-center flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="w-9 h-9 rounded-full bg-[#2563EB] text-white font-black text-[19px] flex items-center justify-center mx-auto mb-2 shadow-sm">
                      {step.stepNumber}
                    </span>
                    <h4 className="text-[20px] font-black text-[#0F172A] mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-[18px] font-medium text-[#334155] leading-snug">
                      {step.desc}
                    </p>
                  </div>
                  {step.tag && (
                    <span className="mt-2 text-[15px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 self-center">
                      {step.tag}
                    </span>
                  )}
                </div>
                {idx < slide.diagram!.steps.length - 1 && (
                  <ArrowRight className="w-7 h-7 text-[#2563EB] shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* H. CODE SNIPPET (Monospace Terminal)                     */}
        {/* ======================================================== */}
        {slide.codeSnippet && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 text-white shadow-lg">
              <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
                <span className="text-[17px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Mã nguồn Python: {slide.codeSnippet.language}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="p-4 font-mono text-[20px] text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre">
                {slide.codeSnippet.code}
              </div>
              {slide.codeSnippet.output && (
                <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 font-mono text-[19px] text-amber-300 flex items-center gap-3">
                  <span className="text-slate-400">Kết quả chạy:</span>
                  <span>{slide.codeSnippet.output}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* I. HIGHLIGHT / REMEMBER / WARNING BOX (Smart Fitted)     */}
        {/* ======================================================== */}
        {slide.highlightBox &&
          !slide.imageUrl &&
          !slide.svgType &&
          !slide.quiz &&
          !slide.situation &&
          !slide.mindmap && (
            <div
              className={`w-full shrink-0 p-3.5 sm:p-4 rounded-xl border-2 flex items-start gap-3.5 shadow-xs ${
                slide.highlightBox.type === 'remember'
                  ? 'bg-[#EFF6FF] border-[#2563EB] text-[#1E3A8A]'
                  : slide.highlightBox.type === 'warning'
                  ? 'bg-amber-50 border-amber-400 text-amber-900'
                  : 'bg-emerald-50 border-emerald-400 text-emerald-950'
              }`}
            >
              <BookmarkCheck className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
              <div className="space-y-0.5 flex-1 min-w-0">
                <span className="text-[19px] font-black tracking-wide uppercase block">
                  {slide.highlightBox.title}
                </span>
                <div className="text-[18px] font-medium leading-snug">
                  {Array.isArray(slide.highlightBox.content) ? (
                    <ul className="list-disc list-inside space-y-1">
                      {slide.highlightBox.content.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  ) : (
                    slide.highlightBox.content
                  )}
                </div>
              </div>
            </div>
          )}

        {/* ======================================================== */}
        {/* J. SITUATION / REAL-LIFE SCENARIO (Case Study)           */}
        {/* ======================================================== */}
        {slide.situation && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 flex flex-col justify-between p-4 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] shadow-xs space-y-2.5">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-2.5 rounded-r-xl">
              <span className="text-[16px] font-black uppercase text-amber-900 block mb-0.5">
                Tình huống thực tế (SGK):
              </span>
              <p className="text-[19px] font-medium text-[#1E293B] leading-snug">
                {slide.situation.context}
              </p>
            </div>
            <div className="font-bold text-[19px] text-[#0F172A] px-1">
              Câu hỏi: {slide.situation.question}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {slide.situation.options.map((opt, oIdx) => (
                <div
                  key={oIdx}
                  className={`p-3 rounded-xl border-2 flex flex-col justify-between ${
                    opt.isRecommended
                      ? 'bg-emerald-50/70 border-emerald-500 text-emerald-950'
                      : 'bg-white border-slate-300 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-[18px]">{opt.label}</span>
                      {opt.isRecommended ? (
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                          Nên thực hiện
                        </span>
                      ) : (
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Hạn chế / Cảnh báo
                        </span>
                      )}
                    </div>
                    <p className="text-[18px] font-semibold leading-snug mb-1">
                      {opt.action}
                    </p>
                  </div>
                  <p className="text-[16px] italic text-[#475569] leading-snug border-t border-slate-200 pt-1 mt-1">
                    Hệ quả: {opt.consequence}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* K. MINDMAP / TỔNG KẾT TƯ DUY                             */}
        {/* ======================================================== */}
        {slide.mindmap && !slide.imageUrl && !slide.svgType && (
          <div className="flex-1 min-h-0 flex flex-col justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] shadow-xs space-y-2.5">
            <div className="text-center p-2.5 rounded-xl bg-[#EFF6FF] border-2 border-[#2563EB] shadow-xs">
              <span className="text-[21px] font-black uppercase text-[#1E3A8A] block">
                {slide.mindmap.center}
              </span>
              {slide.mindmap.centerSubtitle && (
                <span className="text-[16px] font-medium text-[#2563EB]">
                  {slide.mindmap.centerSubtitle}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {slide.mindmap.branches.map((br, bIdx) => (
                <div
                  key={bIdx}
                  className="p-3 rounded-xl bg-white border-2 border-[#CBD5E1] flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <h4 className="font-black text-[18px] text-[#0F172A] border-b border-slate-200 pb-1 mb-1.5 text-center">
                      {br.title}
                    </h4>
                    <ul className="space-y-1">
                      {br.subItems.map((si, sIdx) => (
                        <li key={sIdx} className="text-[16px] font-medium text-[#334155] leading-snug flex items-start gap-1">
                          <span className="text-[#2563EB] font-bold">•</span>
                          <span>{si}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* L. QUIZ / CLASSROOM INTERACTIVE TEST                     */}
        {/* ======================================================== */}
        {slide.quiz && !slide.imageUrl && !slide.svgType && (
          <div className="shrink-0 p-3.5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] space-y-2 shadow-xs">
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
              <h3 className="text-[20px] font-black text-[#0F172A] leading-snug">
                {slide.quiz.question}
              </h3>
            </div>

            {slide.quiz.options && (
              <div className="grid grid-cols-2 gap-2 pl-4 sm:pl-6">
                {slide.quiz.options.map((opt, optIdx) => {
                  const isSelected = selectedQuizOption === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => setSelectedQuizOption(optIdx)}
                      className={`py-2 px-3 rounded-xl border-2 text-left text-[17px] font-bold cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#EFF6FF] border-[#2563EB] text-[#2563EB] ring-2 ring-[#2563EB]/40'
                          : 'bg-white border-[#CBD5E1] hover:border-[#2563EB] text-[#1E293B]'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="pl-4 sm:pl-6 flex items-center justify-between pt-0.5">
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE] text-[16px] font-bold transition-colors cursor-pointer border border-[#2563EB]/30"
              >
                {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showAnswer ? 'Ẩn đáp án' : 'Hiển thị đáp án'}</span>
              </button>

              {showAnswer && slide.quiz.answer && (
                <div className="text-[16px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-xl border border-emerald-300 max-w-xl">
                  {slide.quiz.answer}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Slide Footer: Mandatory Textbook Source Citation (Hidden in Fullscreen mode) */}
      {!isFullscreen && (
        <div className="shrink-0 pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[17px] text-[#475569] font-medium italic">
            <BookOpen className="w-4 h-4 text-[#2563EB] shrink-0" />
            <span>{citationSource}</span>
          </div>
          <div className="text-[17px] text-[#64748B] font-semibold">
            Giáo viên: <strong className="text-[#1E293B]">QuanLHK</strong>
          </div>
        </div>
      )}

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E2E8F0]">
        <div
          className="h-full bg-[#2563EB] transition-all duration-200"
          style={{ width: `${(slide.slideNumber / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};
