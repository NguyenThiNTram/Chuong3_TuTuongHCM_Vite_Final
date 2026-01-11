// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

import { 
  History, 
  ShieldCheck, 
  Heart, 
  Flag, 
  Zap, 
  Users, 
  Globe, 
  Hammer, 
  Target,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  Image as ImageIcon,
  Map,
  Scale,
  Mail,
  Sword,
  CheckCircle2,
  Utensils,
  Shirt,
  Home,
  GraduationCap,
  FileText,
  TrendingUp,
  Compass,
  Link as LinkIcon,
  Award,
  AlertCircle,
  Navigation,
  Rocket,
  Filter,
  ArrowLeftRight,
  CircleDot,
  Lightbulb,
  Bird // Added Bird icon
} from 'lucide-react';
import { TIMELINE_EVENTS, SOCIALIST_CHARACTERISTICS } from './constants';
console.log("Live source check");

// --- Component Khung Ảnh ---
const ImageFrame = ({ 
  label = "Ảnh minh họa", 
  aspectRatio = "aspect-video",
  src,
  className = "",
  fit = "cover"
}: { 
  label?: string; 
  aspectRatio?: string;
  src?: string;
  className?: string;
  fit?: "cover" | "contain";
}) => (
  <div className={`w-full ${aspectRatio} ${className} rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative`}>
    {src ? (
      <img
        src={src}
        className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
      />
    ) : (
      <div className="w-full h-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
        {label}
      </div>
    )}
  </div>
);

// --- Component Trích dẫn kèm Ảnh ---
const QuoteWithImage = ({
  text,
  author = "Hồ Chí Minh",
  subText = "",
  image,
  imageClass = ""
}: {
  text: string;
  author?: string;
  subText?: string;
  image?: string;
  imageClass?: string;
}) => (
  <div className="my-10 grid md:grid-cols-2 gap-8 items-center">
    <div className="order-2 md:order-1">
      <ImageFrame src={image} className={imageClass} />
    </div>
    <div className="order-1 md:order-2 border-l-4 border-red-700 pl-6 py-4 bg-red-50/50 rounded-r-2xl">
      <Quote className="text-red-200 w-10 h-10 mb-2" />
      <p className="text-xl font-medium text-red-950 italic leading-relaxed mb-4">"{text}"</p>
      <p className="text-red-700 font-bold">— {author}</p>
      {subText && <p className="text-xs text-red-600/70 mt-1 uppercase tracking-wider">{subText}</p>}
    </div>
  </div>
);


// --- 1. TRANG ĐẦU: GIỚI THIỆU ---
const HomePage = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center gradient-red text-white p-6 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-400 rounded-full blur-[120px]"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-black mb-4 text-yellow-300 uppercase tracking-[0.3em] drop-shadow-xl">
        Chương III
      </h2>

      <h3 className="text-3xl md:text-5xl font-semibold mb-3 text-red-100 uppercase tracking-wider">
        Tư tưởng Hồ Chí Minh
      </h3>

      <h1 className="text-5xl md:text-8xl font-playfair font-black mb-10 leading-tight drop-shadow-2xl">
        Độc lập Dân tộc <br /> &amp; Chủ nghĩa Xã hội
      </h1>
      <button 
        onClick={onStart}
        className="group relative inline-flex items-center gap-4 bg-white text-red-700 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:bg-yellow-400 hover:text-red-900 transition-all transform hover:scale-105"
      >
        Bắt đầu
        <ChevronRight className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  </div>
);

// --- 2. TRANG ĐỘC LẬP DÂN TỘC (I) ---
const IndependenceSection = ({ subPage, setSubPage }: { subPage: number, setSubPage: (n: number) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header trang I */}
      <div className="pt-24 pb-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-3">Phần I</h2>
          <h1 className="text-3xl md:text-5xl font-playfair font-black text-slate-900 mb-8">Tư tưởng Hồ Chí Minh về Độc lập Dân tộc</h1>
          
          <div className="flex flex-wrap justify-center bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 inline-flex">
            <button 
              onClick={() => setSubPage(0)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${subPage === 0 ? 'bg-red-700 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              1. Vấn đề Độc lập Dân tộc
            </button>
            <button 
              onClick={() => setSubPage(1)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${subPage === 1 ? 'bg-red-700 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              2. Cách mạng Giải phóng Dân tộc
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {subPage === 0 ? (
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar: Dòng thời gian */}
            <div className="lg:col-span-3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                    <History className="text-red-500" /> Tiến trình lịch sử
                  </h3>
                  <div className="space-y-8">
                    {TIMELINE_EVENTS.map((event, i) => (
                      <div key={i} className="flex gap-4 relative group">
                        {i !== TIMELINE_EVENTS.length - 1 && <div className="absolute left-[11px] top-6 bottom-[-32px] w-[2px] bg-white/10 group-hover:bg-red-500/30 transition-colors"></div>}
                        <div className="w-6 h-6 rounded-full bg-red-600 ring-4 ring-slate-900 flex-shrink-0 z-10 transition-transform group-hover:scale-125"></div>
                        <div>
                          <p className="text-red-400 font-black text-xs mb-1">{event.year}</p>
                          <h4 className="font-bold text-xs text-slate-200 leading-tight">{event.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nội dung chính a, b, c, d */}
            <div className="lg:col-span-9 space-y-24">
              
              {/* Mục a */}
              <section id="part-a">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">a</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc</h2>
                </div>
                
                <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
                  <p className="text-lg leading-relaxed">
                    Trong tư tưởng Hồ Chí Minh, độc lập dân tộc và tự do của nhân dân là giá trị thiêng liêng, tối thượng, không thế lực nào có quyền xâm phạm. Quan điểm này bắt nguồn từ truyền thống dựng nước và giữ nước hàng nghìn năm của dân tộc Việt Nam và việc tiếp thu tinh hoa tư tưởng nhân loại về quyền con người, quyền dân tộc.
                  </p>
                  
                  <QuoteWithImage 
                    text="Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, Tổ quốc tôi được độc lập."
                    subText="Lời khẳng định khát vọng từ thuở thiếu thời"
                    image="/images/tuyen-ngon.jpg"
                  />

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-8">
                    <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5" /> Năm 1919: Hội nghị Vécxây
                    </h4>
                    <p className="leading-relaxed text-slate-700">
                      Nhân cơ hội các nước đồng minh thắng trận trong Chiến tranh thế giới thứ nhất. Người thay mặt những người Việt Nam yêu nước gửi <strong>“Yêu sách của nhân dân An Nam”</strong>, đòi quyền bình đẳng về pháp lý và các quyền tự do, dân chủ cho Việt Nam. Đây là dấu mốc hình thành tư tưởng quyền dân tộc thuộc địa, đặt cơ sở cho đường lối cách mạng sau này.
                    </p>
                  </div>

                  <QuoteWithImage 
                    text="Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được"
                    subText="Dựa trên Tuyên ngôn Mỹ (1776) và Pháp (1791)"
                    image="/images/Bac-Ho-Tuyen-ngon-doc-lap.jpg"
                  />

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-8">
                    <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" /> Năm 1930: Chánh cương vắn tắt
                    </h4>
                    <p className="leading-relaxed text-slate-700">
                      Trong <strong>Chánh cương vắn tắt (1930)</strong>, mục tiêu hàng đầu của cách mạng Việt Nam được xác định rõ: <strong>Đánh đổ đế quốc và phong kiến, làm cho nước Nam được hoàn toàn độc lập.</strong>
                    </p>
                  </div>

                  <QuoteWithImage 
                    text="Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do và độc lập ấy"
                    subText="Tuyên ngôn Độc lập - 2/9/1945"
                    image="/images/Viet-nam-tu-do-doc-lap.jpg"
                  />

                  <div className="pt-10 space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 border-b-2 border-red-700 inline-block pb-2">
                      Tinh thần bảo vệ độc lập ấy tiếp tục được khẳng định qua:
                    </h3>

                    <div className="space-y-12">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Mail className="text-red-700 w-6 h-6" />
                          <h4 className="font-bold text-lg">Trong thư gửi Liên hợp quốc năm 1946:</h4>
                        </div>
                        <div className="my-10 border-l-8 border-red-700 bg-red-50/60 p-8 rounded-r-3xl shadow-lg">
                          <Quote className="text-red-200 w-10 h-10 mb-4" />
                          <p className="text-xl md:text-2xl font-medium text-red-950 italic leading-relaxed mb-4">
                            “Nhân dân chúng tôi thành thật mong muốn hoà bình. Nhưng nhân dân chúng tôi cũng kiên quyết chiến đấu đến cùng để bảo vệ những quyền thiêng liêng nhất: toàn vẹn lãnh thổ cho Tổ quốc và độc lập cho đất nước.”
                          </p>
                          <p className="text-red-700 font-bold text-right">— Hồ Chí Minh (1946)</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Sword className="text-red-700 w-6 h-6" />
                            <h4 className="font-bold">Kháng chiến chống Pháp (19/12/1946)</h4>
                          </div>
                          <ImageFrame 
                            src="/images/khang-chien-chong-Phap-1946.jpg"
                            label="Lời kêu gọi Toàn quốc kháng chiến 1946"
                          />
                          <div className="border-l-4 border-red-700 pl-4 py-2 bg-red-50/50 rounded-r-xl">
                            <p className="text-sm italic font-medium">“Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ”</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Zap className="text-red-700 w-6 h-6" />
                            <h4 className="font-bold">Kháng chiến chống Mỹ (1966)</h4>
                          </div>
                          <ImageFrame 
                            src="/images/khang-chien-chong-My-1966.jpg"
                            label="Chân lý Không có gì quý hơn độc lập, tự do (1966)"
                          />
                          <div className="border-l-4 border-red-700 pl-4 py-2 bg-red-50/50 rounded-r-xl">
                            <p className="text-sm italic font-medium">“Không có gì quý hơn độc lập, tự do.”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mục b */}
              <section id="part-b" className="pt-16 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">b</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Độc lập dân tộc gắn liền với tự do, cơm no, áo ấm và hạnh phúc</h2>
                </div>
                
                <div className="space-y-12 text-slate-700">
                  <p className="text-lg leading-relaxed">
                    Hồ Chí Minh khẳng định: độc lập dân tộc không phải khái niệm trừu tượng, mà phải mang lại lợi ích thiết thực là tự do cho nhân dân.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="h-full flex">
                      <ImageFrame 
                      src= "/images/Tam-dan-Ton-Trung-Son.jpg"
                      className="h-full [&_img]:object-left"
                      label="Ảnh minh họa: Hồ Chí Minh tiếp thu học thuyết Tam dân" />
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-center">
                      <h4 className="font-bold text-red-700 mb-6">
                        Người đánh giá cao học thuyết “Tam dân” (Tôn Trung Sơn)
                      </h4>
                      <div className="space-y-4">
                        {[
                          { title: "Dân tộc độc lập", color: "bg-red-700 text-white" },
                          { title: "Dân quyền tự do", color: "bg-red-700 text-white" },
                          { title: "Dân sinh hạnh phúc", color: "bg-red-700 text-white" }
                        ].map(item => (
                          <div key={item.title} className={`${item.color} p-4 rounded-xl text-center font-bold border border-red-800 shadow-sm shadow-red-100`}>
                            {item.title}
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 text-sm italic text-slate-500 text-center">
                        Hồ Chí Minh khẳng định dân tộc Việt Nam đương nhiên cũng phải được tự do và bình đẳng về quyền lợi.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-red-50 p-8 rounded-[2rem] shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-3">
                      <CheckCircle2 className="text-red-700 w-6 h-6" /> Trong Chánh cương vắn tắt, mục tiêu độc lập luôn gắn với:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {[
                        "Tự do cho dân chúng",
                        "Xóa bỏ sưu thuế nặng nề",
                        "Chia ruộng đất cho dân cày nghèo",
                        "Thực hiện ngày làm 8 giờ"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-red-50/30 rounded-xl border border-red-50">
                          <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                          <span className="font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-slate-100">
                      <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest font-bold">Sau Cách mạng Tháng Tám, Người nhấn mạnh:</p>
                      <div className="bg-slate-900 text-white p-6 rounded-2xl italic font-playfair text-xl text-center relative overflow-hidden">
                        <Quote className="absolute top-2 left-2 w-8 h-8 opacity-10" />
                        “Nước độc lập mà dân không hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì.”
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg">Sau 1945, Người yêu cầu Chính phủ phải thực hiện ngay 4 nhiệm vụ then chốt:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Dân có Ăn", icon: <Utensils className="w-5 h-5 mb-2" /> },
                        { label: "Dân có Mặc", icon: <Shirt className="w-5 h-5 mb-2" /> },
                        { label: "Dân có Chỗ ở", icon: <Home className="w-5 h-5 mb-2" /> },
                        { label: "Dân được Học", icon: <GraduationCap className="w-5 h-5 mb-2" /> }
                      ].map(task => (
                        <div key={task.label} className="p-5 bg-red-700 border border-red-800 rounded-2xl text-center text-white flex flex-col items-center transition-transform hover:scale-105">
                          {task.icon}
                          <span className="text-sm font-medium">{task.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <QuoteWithImage 
                    text="Tôi chỉ có một sự ham muốn, ham muốn tột bậc là làm sao cho nước ta hoàn toàn độc lập, dân ta hoàn toàn tự do, ai cũng có cơm ăn áo mặc, ai cũng được học hành."
                    subText="Lấy hạnh phúc nhân dân làm thước đo giá trị"
                    image="/images/Toi-chi-co-mot-ham-muon.jpg"
                  />
                </div>
              </section>

              {/* Mục c */}
              <section id="part-c" className="pt-16 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">c</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Độc lập dân tộc phải là độc lập thật sự, hoàn toàn và triệt để</h2>
                </div>
                <div className="space-y-10">
                  <p className="text-lg text-slate-700">Người kiên quyết bác bỏ mọi hình thức "độc lập giả hiệu" do thực dân dựng lên. Độc lập thật sự phải bao gồm:</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                    {[
                      { icon: <Globe />, label: "Chủ quyền Ngoại giao" },
                      { icon: <ShieldCheck />, label: "Quân đội riêng" },
                      { icon: <Zap />, label: "Tài chính độc lập" },
                      { icon: <Scale />, label: "Quyền tự quyết toàn diện" }
                    ].map(item => (
                      <div key={item.label} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-md transition-all">
                        <div className="text-red-700 mb-2">{item.icon}</div>
                        <span className="font-bold text-slate-900 text-xs text-center">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-4">
                        <h4 className="text-xl font-bold text-red-700 flex items-center gap-2">
                          <FileText className="w-6 h-6" /> Năm 1946: Hiệp định Sơ bộ 6/3
                        </h4>
                        <p className="text-slate-700 leading-relaxed italic">
                          Trong bối cảnh đất nước “ngàn cân treo sợi tóc”, Hồ Chí Minh ký Hiệp định Sơ bộ 6/3/1946, trong đó Chính phủ Pháp công nhận:
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Việt Nam là một quốc gia tự do",
                            "Có Chính phủ, Nghị viện, quân đội và tài chính riêng"
                          ].map((text, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                              <span className="font-semibold text-slate-800">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full md:w-2/5">
                        <ImageFrame 
                        src = "/images/Hiep-dinh-so-bo-1946.jpg"
                        label="Ảnh: Lễ ký kết Hiệp định Sơ bộ 6/3/1946" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mục d */}
              <section id="part-d" className="pt-16 border-t border-slate-100 pb-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">d</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-lg text-slate-700">Độc lập dân tộc không thể tách rời thống nhất đất nước. Toàn vẹn lãnh thổ là nguyên tắc bất biến xuyên suốt tư tưởng Hồ Chí Minh.</p>
                  
                  <div className="bg-red-900 text-white p-10 rounded-[2rem] relative overflow-hidden shadow-2xl">
                    <Map className="absolute top-[-20px] right-[-20px] w-64 h-64 opacity-10 rotate-12" />
                    <p className="text-2xl font-playfair italic mb-6 leading-relaxed">“Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.”</p>
                    <div className="h-px bg-white/20 mb-6"></div>
                    <p className="text-xl font-bold text-yellow-400">Thư gửi đồng bào Nam Bộ (1946)</p>
                  </div>

                  <QuoteWithImage 
                    text="Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà."
                    subText="Niềm tin sắt đá trong Di chúc (1969)"
                    image="/images/Di-chuc-cua-Bac-1.jpg"
                  />
                </div>
              </section>

            </div>
          </div>
        ) : (
          /* TRANG I.2: CÁCH MẠNG GIẢI PHÓNG DÂN TỘC */
          <div className="max-w-5xl mx-auto space-y-24">
            {/* Mục a */}
            <section id="part2-a">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">a</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Con đường cách mạng vô sản – con đường tất yếu để giải phóng dân tộc</h2>
              </div>
              
              <div className="space-y-10 text-slate-700 leading-relaxed">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <p className="text-lg mb-6">
                    Hàng loạt những phong trào yêu nước đã nổ ra tiêu biểu như các phong trào do <strong>Phan Bội Châu, Hoàng Hoa Thám và Phan Chu Trinh</strong> khởi xướng nhưng không thành công. Sự thất bại của những phong trào yêu nước trong thời kỳ này đã nói lên sự khủng hoảng, bế tắc về giai cấp lãnh đạo và đường lối cách mạng.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <ImageFrame 
                    src = "/images/Phan-Boi-Chau.jpg"
                    label="Ảnh: Phan Bội Châu & phong trào Đông Du" />
                    <ImageFrame 
                    src = "/images/Hoang-Hoa-Tham.jpg"
                    label="Ảnh: Hoàng Hoa Thám & khởi nghĩa Yên Thế" />
                    <ImageFrame 
                    src = "/images/Phan-Chu-Trinh.jpg"
                    label="Ảnh: Phan Chu Trinh & phong trào Duy Tân" />
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <Compass className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 group-hover:rotate-45 transition-transform duration-700" />
                  <p className="text-xl italic font-light leading-relaxed relative z-10">
                    "Vượt lên giới hạn của các khuynh hướng cứu nước đương thời, Hồ Chí Minh sớm xác định phải ra nước ngoài tìm con đường cứu nước mới. Qua khảo sát thực tiễn ở phương Tây, Người không lựa chọn con đường cách mạng tư sản, bởi theo Người, các cuộc cách mạng tư sản tuy mang danh dân chủ nhưng không giải phóng triệt để quần chúng lao động và các dân tộc thuộc địa."
                  </p>
                </div>

                {/* Sơ đồ nối quote */}
                <div className="py-12 relative">
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100 text-center shadow-sm">
                      <TrendingUp className="text-red-700 w-8 h-8 mx-auto mb-3" />
                      <h4 className="font-bold text-red-900">Thắng lợi của Cách mạng Tháng Mười Nga năm 1917</h4>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100 text-center shadow-sm">
                      <BookOpen className="text-red-700 w-8 h-8 mx-auto mb-3" />
                      <h4 className="font-bold text-red-900">Luận cương của Lênin về vấn đề dân tộc và thuộc địa</h4>
                    </div>
                  </div>

                  <svg
                    className="hidden md:block absolute left-0 top-[180px] w-full h-[140px] pointer-events-none"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
                      </marker>
                    </defs>

                    <path
                      d="M250,0 C250,90 380,140 500,180"
                      stroke="#dc2626"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrow)"
                    />

                    <path
                      d="M750,0 C750,90 620,140 500,180"
                      stroke="#dc2626"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrow)"
                    />
                  </svg>


                  <div className="max-w-3xl mx-auto border-l-8 border-red-700 bg-red-700 text-white p-8 rounded-r-3xl shadow-xl transform hover:-translate-y-1 transition-transform">
                    <p className="text-2xl font-playfair font-black italic text-center">
                      “Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.”
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-700 p-8 rounded-[2rem] shadow-sm">
                  <h4 className="font-bold text-red-700 mb-6 text-xl">Hồ Chí Minh vận dụng sáng tạo chủ nghĩa Mác – Lênin vào điều kiện Việt Nam, xác lập quan điểm:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                      <CheckCircle2 className="text-red-700 w-6 h-6 mt-1 flex-shrink-0" />
                      <p className="text-slate-900 text-lg tracking-tight">Giải phóng dân tộc là nhiệm vụ trước hết, trên hết</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                      <CheckCircle2 className="text-red-700 w-6 h-6 mt-1 flex-shrink-0" />
                      <p className="text-slate-900 text-lg tracking-tight">Giải phóng dân tộc gắn liền với giải phóng xã hội, giải phóng giai cấp và giải phóng con người</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mục b */}
            <section id="part2-b">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">b</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo</h2>
              </div>
              
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="order-2 lg:order-1 border-l-8 border-red-700 bg-slate-50 p-8 rounded-r-[2rem] shadow-lg relative">
                    <Quote className="absolute top-2 right-4 text-red-100 w-16 h-16 -z-0" />
                    <p className="text-lg font-medium text-slate-900 italic relative z-10 leading-relaxed">
                      "Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với các dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công.... "
                    </p>
                    <p className="mt-6 font-bold text-red-700 text-right">— Tác phẩm Đường Kách mệnh (1927), Hồ Chí Minh</p>
                  </div>
                  <div className="order-1 lg:order-2 bg-red-700 text-white p-8 rounded-[2rem] shadow-xl">
                    <h4 className="font-bold text-xl mb-6 border-b border-white/20 pb-4">Theo Người, Đảng Cộng sản là lực lượng:</h4>
                    <ul className="space-y-4">
                      <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                        <span className="font-medium text-lg">Tổ chức và giác ngộ quần chúng trong nước</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                        <span className="font-medium text-lg">Gắn bó cách mạng Việt Nam với phong trào cách mạng thế giới</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto">
                  <ImageFrame 
                  src = "/images/Dai-hoi-Dang-II.jpg"
                  label="Ảnh: Bác Hồ tại Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951)" />
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="border-l-8 border-red-700 bg-slate-50 p-8 rounded-r-[2rem] shadow-lg relative">
                    <Quote className="absolute top-2 right-4 text-red-100 w-16 h-16 -z-0" />
                    <p className="text-2xl font-playfair italic leading-relaxed mb-6 relative z-10 text-slate-900">
                      "Đảng của giai cấp công nhân đồng thời là Đảng của toàn dân tộc Việt Nam"
                    </p>
                    <p className="mt-6 font-bold text-red-700 text-right">— Báo cáo chính trị tại Đại hội II của Đảng (1951), Hồ Chí Minh</p>
                  </div>
                  <div className="bg-red-50 border-2 border-red-100 p-8 rounded-[2rem]">
                    <h4 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6" /> Ý nghĩa lý luận:
                    </h4>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Đây là luận điểm quan trọng, thể hiện sự phát triển sáng tạo lý luận Mác – Lênin về Đảng Cộng sản trong điều kiện một nước thuộc địa.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mục c */}
            <section id="part2-c">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">c</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Cách mạng giải phóng dân tộc phải dựa vào đại đoàn kết toàn dân tộc</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
                <div className="h-full flex">
                  <ImageFrame 
                  src = "/images/Kach-menh.jpg"
                  label="Ảnh: Đại đoàn kết dân tộc là nguồn sức mạnh quyết định thắng lợi" />
                </div>
                <div className="space-y-6">
                  <div className="border-l-8 border-red-700 bg-slate-50 p-8 rounded-r-2xl shadow-lg relative">
                    <Quote className="absolute top-2 right-4 text-red-100 w-16 h-16" />
                    <p className="text-xl font-medium text-slate-900 italic relative z-10 leading-relaxed">
                      “Cách mệnh là việc chung cả dân chúng chứ không phải việc một hai người”
                    </p>
                  </div>
                  <div className="bg-red-700 text-white p-8 rounded-[2rem] shadow-xl">
                    <h4 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">Theo Người, trong cách mạng giải phóng dân tộc:</h4>
                    <ul className="space-y-4">
                      <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                        <span className="font-medium text-lg">Mọi tầng lớp yêu nước đều có thể và cần được tập hợp</span>
                      </li>
                      <li className="flex gap-4 items-start">
                        <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                        <span className="font-medium text-lg">Đoàn kết toàn dân là điều kiện quyết định thắng lợi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-red-900 border-l-4 border-red-700 pl-4">Trong Sách lược vắn tắt (1930), Người xác định:</h3>
                <ImageFrame 
                src = "/images/Sach-luoc-van-tat.jpg"
                fit="contain"
                label="Ảnh minh họa: Liên minh công nông trong Sách lược vắn tắt" />
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "Công nhân và nông dân là lực lượng chủ lực",
                    "Liên minh công – nông là nền tảng vững chắc",
                    "Các tầng lớp khác (tiểu tư sản, trí thức, trung nông…) cần được tranh thủ, tập hợp"
                  ].map((text, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-center font-bold text-slate-800 shadow-sm hover:shadow-md transition-shadow">
                      {text}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <Award className="absolute -top-10 -right-10 w-48 h-48 opacity-5" />
                  <h4 className="text-2xl font-black text-red-500 mb-2 flex items-center gap-3 font-playfair italic">
                    “công nông là chủ cách mệnh.... là gốc cách mệnh”
                  </h4>
                  <p className="text-slate-400 mb-8 font-bold">Trong tác phẩm Đường cách mệnh, Hồ Chí Minh đặc biệt nhấn mạnh công – nông:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4 transition-transform hover:scale-105">
                      <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-lg shadow-red-900/50">1</div>
                      <p className="text-lg font-medium italic">Bị bóc lột nặng nề nhất</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4 transition-transform hover:scale-105">
                      <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-lg shadow-red-900/50">2</div>
                      <p className="text-lg font-medium italic">Có tinh thần cách mạng kiên định, bền bỉ</p>
                    </div>
                  </div>

                  <div className="bg-red-950/40 p-6 rounded-2xl border border-red-900/50 italic text-red-200 leading-relaxed relative">
                    <Quote className="absolute top-2 right-4 w-12 h-12 opacity-5" />
                    “lòng cách mệnh càng bền, chí cách mệnh càng quyết... công nông là tay không chân rồi, nếu thua thì chỉ mất một cái kiếp khổ, nếu được thì được cả thế giới, cho nên họ gan góc”
                  </div>
                </div>
              </div>
            </section>

            {/* Mục d */}
            <section id="part2-d">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">d</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Cách mạng thuộc địa phải chủ động, sáng tạo và có thể thắng lợi trước chính quốc</h2>
              </div>

              <div className="space-y-12">
                {/* Bối cảnh */}
                <div className="bg-slate-50 border-l-8 border-slate-900 p-8 rounded-r-[2rem] shadow-sm">
                  <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2 italic uppercase">
                    <Globe className="text-slate-500 w-6 h-6" /> Bối cảnh lịch sử
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Quốc tế cộng sản có lúc xem nhẹ vai trò của cách mạng thuộc địa, coi cách mạng thuộc địa phụ thuộc vào cách mạng vô sản ở chính quốc.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <ImageFrame 
                  src = "/images/Dai-hoi-Quoc-te-VI-1928.jpg"
                  fit ="contain"
                  label="Ảnh: Đại hội VI Quốc tế cộng sản năm 1928" />
                  <div className="bg-red-50 border-2 border-red-100 p-8 rounded-[2rem] relative">
                    <AlertCircle className="absolute -top-4 -left-4 w-10 h-10 text-red-700 bg-white rounded-full shadow-lg" />
                    <p className="text-slate-800 leading-relaxed italic text-lg">
                      "Đại hội VI Quốc tế cộng sản năm 1928 đã thông qua Những luận cương về phong trào cách mạng trong các nước thuộc địa và nửa thuộc địa, trong đó có đoạn viết rằng: chỉ có thể thực hiện hoàn toàn công cuộc giải phóng các nước thuộc địa khi giai cấp vô sản giành được thắng lợi ở các nước tư bản tiên tiến."
                    </p>
                  </div>
                </div>

                {/* Phê phán của Hồ Chí Minh */}
                <div className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="h-1 w-24 bg-red-700 mx-auto rounded-full mb-4"></div>
                    <h3 className="text-2xl font-bold text-red-800">
                      Hồ Chí Minh phê phán quan điểm coi cách mạng thuộc địa phụ thuộc vào cách mạng vô sản ở chính quốc
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center transition-all hover:-translate-y-1">
                      <p className="text-lg">
                        "Chỉ rõ mối quan hệ khắng khít, tác động qua lại lẫn nhau - mối quan hệ bình đẳng, không lệ thuộc, phụ thuộc vào nhau."
                      </p>
                    </div>
                    <div className="bg-red-700 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center transition-all hover:-translate-y-1">
                      <p className="text-lg">
                        "Cách mạng thuộc địa không những không phụ thuộc vào cách mạng vô sản ở chính quốc mà có thể giành thắng lợi trước."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bản án chế độ thực dân Pháp */}
                <div className="bg-slate-50 border-2 border-slate-200 p-10 rounded-[3rem] shadow-sm relative overflow-hidden">
                   <FileText className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-100 -rotate-12" />
                   <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
                      <div className="lg:col-span-4 self-stretch">
                        <ImageFrame 
                        src = "/images/sach-ban-an-Phap.jpg"
                        label="Tác phẩm Bản án chế độ thực dân Pháp (1925)" aspectRatio="aspect-[3/4]" />
                      </div>
                      <div className="lg:col-span-8 space-y-6">
                        <h3 className="text-2xl font-bold text-red-800 leading-tight">
                          Trong <span className="italic">"Bản án chế độ thực dân Pháp (1925)"</span>, Người ví chủ nghĩa tư bản như:
                        </h3>
                        <div className="bg-red-700 text-white p-6 rounded-2xl shadow-xl border-4 border-white inline-block">
                          <p className="text-3xl font-black uppercase italic tracking-tighter">“Con đỉa hai vòi”</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800 border-l-4 border-red-700 pl-4 py-2">
                           – bóc lột cả vô sản chính quốc và thuộc địa.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed bg-white/60 backdrop-blur p-6 rounded-2xl border border-slate-200">
                          Hồ Chí Minh kêu gọi các dân tộc thuộc địa tự mình đứng lên giải phóng, không trông chờ, ỷ lại: <span className="text-red-800 font-bold italic">"Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả hai vòi"</span>
                        </p>
                      </div>
                   </div>
                </div>

                {/* NỘI DUNG BỔ SUNG PHẦN d */}
                <div className="space-y-8 pt-10">
                   <div className="max-w-4xl mx-auto">
                      <ImageFrame 
                      src = "/images/HCM-phong-trao-quoc-te.jpg"
                      label="Ảnh: Hồ Chí Minh tại Pháp và phong trào công nhân quốc tế" />
                   </div>
                   <div className="border-l-8 border-red-700 bg-red-50 p-8 rounded-r-3xl shadow-xl">
                      <Quote className="text-red-200 w-12 h-12 mb-4" />
                      <p className="text-xl font-medium text-slate-900 italic leading-relaxed">
                        “Hỡi anh em ở các thuộc địa... Anh em phải làm thế nào để được giải phóng? Vận dụng công thức của Các Mác, chúng tôi xin nói với anh em rằng, công cuộc giải phóng anh em chỉ có thể thực hiện được bằng sự nỗ lực của bản thân anh em”
                      </p>
                      <p className="mt-4 font-bold text-red-700">— Hồ Chí Minh</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Mục e */}
            <section id="part2-e" className="pb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">e</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Cách mạng giải phóng dân tộc phải sử dụng bạo lực cách mạng</h2>
              </div>

              <div className="space-y-16">
                <div className="bg-red-700 text-white p-10 rounded-[2.5rem] shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
                   <Sword className="absolute -top-10 -left-10 w-48 h-48 opacity-10 -rotate-45" />
                   <p className="text-2xl font-bold leading-relaxed relative z-10">
                      ‘‘Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và dân tộc, cần dùng bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền”
                   </p>
                   <div className="h-px bg-white/20 w-24 mx-auto my-6 relative z-10"></div>
                   <p className="font-bold relative z-10">— Hồ Chí Minh</p>
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-6">
                   <p className="text-2xl font-bold text-slate-800">
                      Người vạch rõ: <span className="text-red-700 italic">“Chế độ thực dân, tự bản thân nó, đã là một hành động bạo lực của kẻ mạnh đối với kẻ yếu rồi”</span>
                   </p>
                   {/* <ImageFrame label="Ảnh: Chế độ thực dân và bạo lực cai trị" /> */}
                </div>

                <div className="bg-white border-2 border-red-100 rounded-[3rem] p-10 shadow-xl overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-700/5 rounded-bl-[5rem]"></div>
                   <div className="relative z-10 space-y-10">
                      <div className="text-center">
                        <h3 className="text-3xl font-black text-red-800 mb-2 uppercase tracking-tighter">Hồ Chí Minh đã thấy rõ sự cần thiết phải sử dụng bạo lực cách mạng:</h3>
                        <p className="text-xl font-bold text-slate-900 italic">‘‘Trong cuộc đấu tranh gian khổ chống kẻ thù của giai cấp và dân tộc, cần dùng bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền”</p>
                      </div>

                      <div className="bg-red-50 p-6 rounded-2xl text-center border-l-4 border-red-700">
                        <p className="text-lg font-medium text-slate-800">Bạo lực cách mạng ở đây là <strong>bạo lực của quần chúng</strong></p>
                      </div>

                      <div className="space-y-8">
                         <div className="text-center">
                            <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-6">Với hai hình thức đấu tranh:</h4>
                            <div className="grid md:grid-cols-2 gap-8">
                               <div className="bg-red-700 text-white p-8 rounded-[2rem] shadow-lg transform hover:scale-105 transition-transform">
                                  <Users className="w-10 h-10 mx-auto mb-4" />
                                  <h5 className="text-xl font-bold mb-2">Đấu tranh chính trị</h5>
                                  <p className="text-sm opacity-90">Vận động quần chúng, đấu tranh đòi quyền lợi, biểu tình, bãi công...</p>
                               </div>
                               <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-lg transform hover:scale-105 transition-transform">
                                  <Sword className="w-10 h-10 mx-auto mb-4" />
                                  <h5 className="text-xl font-bold mb-2">Đấu tranh vũ trang</h5>
                                  <p className="text-sm opacity-90">Tiêu diệt sinh lực địch, giải phóng đất đai bằng lực lượng quân sự...</p>
                               </div>
                            </div>
                         </div>

                         <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                               <h5 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                                  <ShieldCheck className="w-5 h-5" /> Vai trò Chính trị:
                               </h5>
                               <p className="text-slate-700 leading-relaxed">
                                  Chính trị và đấu tranh chính trị là <strong>cơ sở, nền tảng</strong> cho xây dựng lực lượng vũ trang và đấu tranh vũ trang.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                               <h5 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                                  <Target className="w-5 h-5" /> Vai trò Vũ trang:
                               </h5>
                               <p className="text-slate-700 leading-relaxed">
                                  Đấu tranh vũ trang giữ <strong>vai trò quyết định</strong> khi thời cơ chín muồi với việc tiêu diệt lực lượng quân sự.
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-red-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                   <TrendingUp className="absolute -bottom-10 -left-10 w-64 h-64 opacity-5 group-hover:scale-110 transition-transform duration-700" />
                   <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4 leading-tight">Minh chứng lịch sử: Cách mạng Tháng Tám 1945</h3>
                   <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                      <div className="space-y-6 flex flex-col justify-center">
                        <p className="text-lg leading-relaxed italic opacity-90">
                          Thắng lợi của Cách mạng Tháng Tám năm 1945 là minh chứng sinh động cho việc vận dụng linh hoạt phương pháp bạo lực cách mạng của Bác:
                        </p>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 italic text-xl">
                          <Quote className="w-8 h-8 opacity-20 mb-2" />
                          “Tùy tình hình cụ thể mà quyết định những hình thức đấu tranh cách mạng thích hợp, sử dụng đúng và khéo kết hợp các hình thức đấu tranh vũ trang và đấu tranh chính trị để giành thắng lợi cho cách mạng”
                        </div>
                      </div>
                      <div className="h-full flex">
                        <ImageFrame 
                        src = "/images/CMT8.jpg"
                        label="Ảnh: Thắng lợi của Cách mạng Tháng Tám 1945" aspectRatio="h-full min-h-[350px]" />
                      </div>
                   </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 3. TRANG CHỦ NGHĨA XÃ HỘI (II) ---
const SocialismSection = () => (
  <div className="min-h-screen bg-white">
    {/* Header trang II */}
    <div className="pt-24 pb-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-3">Phần II</h2>
        <h1 className="text-3xl md:text-5xl font-playfair font-black text-slate-900 mb-8">Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội</h1>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* 1. Quan niệm về CNXH */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">1</div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Quan niệm của Hồ Chí Minh về chủ nghĩa xã hội</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="h-full flex">
          <ImageFrame 
            src="/images/HCM-nhan-dan.jpg"
            label="Ảnh minh họa: Quan niệm về chủ nghĩa xã hội"
            className="h-full [&_img]:object-left"
            fit="cover"
          />
        </div>

        <div className="bg-red-700 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group flex items-center">
          <Quote className="absolute -top-4 -left-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform" />
          <p className="text-xl md:text-2xl font-playfair italic font-normal leading-relaxed relative z-10 text-center">
            “Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc.”
          </p>
        </div>
      </div>

      </section>

      {/* 2. Tính tất yếu - NỘI DUNG CẬP NHẬT THEO YÊU CẦU */}
      <section className="space-y-12 pt-16 border-t border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">2</div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Tiến lên chủ nghĩa xã hội là một tất yếu khách quan</h2>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
          <p className="text-xl leading-relaxed">
            Hồ Chí Minh vận dụng sáng tạo học thuyết hình thái kinh tế – xã hội của C. Mác để khẳng định rằng sự phát triển của xã hội loài người là một <strong>quá trình lịch sử – tự nhiên</strong>, tuân theo những quy luật khách quan. Trong tiến trình đó, sự sụp đổ của chủ nghĩa tư bản và thắng lợi của chủ nghĩa xã hội là tất yếu.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-12">
            <h4 className="font-bold text-red-700 mb-8 text-center uppercase tracking-widest text-lg">Từ thực tiễn cách mạng Việt Nam, Người đặt ra một vấn đề mang tính căn bản:</h4>
            <div className="mb-10">
            <ImageFrame 
              src="/images/HCM-XHCN.jpg"
              label="Ảnh minh họa: Từ thực tiễn cách mạng Việt Nam"
              className="max-h-[360px]"
              fit="contain"
            />
          </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-4 font-bold">?</div>
                <h5 className="font-bold mb-2">Vì sao không thể dừng lại ở độc lập dân tộc?</h5>
                <p className="text-sm opacity-80 italic">Bởi vì nếu chỉ có độc lập chính trị mà nhân dân vẫn nghèo đói, bất công xã hội vẫn tồn tại, thì nền độc lập ấy không thể bền vững.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-4 font-bold">?</div>
                <h5 className="font-bold mb-2">Chủ nghĩa xã hội giải quyết triệt để vấn đề gì?</h5>
                <p className="text-sm opacity-80 italic">Chủ nghĩa xã hội giải quyết tận gốc vấn đề áp bức, bóc lột, bảo đảm quyền làm chủ thực sự của nhân dân, từ đó tạo nền tảng vững chắc cho độc lập dân tộc lâu dài.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mb-4 font-bold">✓</div>
                <h5 className="font-bold mb-2">Sự lựa chọn tất yếu</h5>
                <p className="text-sm opacity-80 italic">Tiến lên CNXH là con đường duy nhất để giải phóng con người và xã hội một cách toàn diện, triệt để.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 border-l-8 border-red-700 p-8 rounded-r-3xl">
              <h4 className="text-2xl font-bold text-red-900 mb-4 italic">Khẳng định mối quan hệ biện chứng:</h4>
              <p className="text-xl font-medium leading-relaxed">
                “Độc lập dân tộc là điều kiện tiên quyết, còn chủ nghĩa xã hội là con đường duy nhất để bảo đảm độc lập ấy một cách bền vững.”
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <h4 className="text-xl font-bold text-slate-900 border-l-4 border-red-700 pl-4">Về con đường quá độ, Hồ Chí Minh chỉ ra sự lựa chọn phù hợp:</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner italic font-semibold text-lg md:text-xl text-slate-900">
                  Có nước đi thẳng lên chủ nghĩa xã hội từ chủ nghĩa tư bản phát triển.
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner italic font-semibold text-lg md:text-xl text-slate-900">
                  Có nước phải trải qua thời kỳ dân chủ mới rồi tiến lên chủ nghĩa xã hội.
                </div>
              </div>

              <div className="bg-red-700 text-white p-10 rounded-[2.5rem] shadow-2xl transform hover:scale-[1.02] transition-all">
                 <h4 className="text-2xl font-black mb-4 flex items-center gap-3 italic">
                    <Flag className="w-8 h-8 text-yellow-400" /> Đối với Việt Nam:
                 </h4>
                 <p className="text-xl leading-relaxed font-medium">
                    Là một nước thuộc địa, nửa phong kiến – con đường phù hợp là <strong>quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa</strong>. Đây không phải là sự phủ nhận các thành tựu văn minh nhân loại, mà là sự lựa chọn phù hợp với yêu cầu giải phóng dân tộc và xu thế phát triển của thời đại.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12 pt-16 border-t border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-700 text-white rounded-2xl flex items-center justify-center font-black text-xl">3</div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Đặc trưng cơ bản của xã hội XHCN</h2>
        </div>

        <div className="bg-white border-2 border-red-700 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-4 bg-red-700 text-white font-bold p-6 text-center text-sm uppercase tracking-widest">
            <div className="hidden md:block">Lĩnh vực</div>
            <div className="md:col-span-3">Nội dung cốt lõi theo tư tưởng Hồ Chí Minh</div>
          </div>
          <div className="divide-y divide-slate-100">
            {SOCIALIST_CHARACTERISTICS.map((c, i) => (
              <div key={i} className="grid md:grid-cols-4 p-10 items-center gap-10 group hover:bg-red-50/30 transition-colors">
                <div className="font-black text-red-700 text-xl md:text-center border-b md:border-b-0 pb-2 md:pb-0">{c.field}</div>
                <div className="md:col-span-3 text-slate-900 leading-relaxed font-normal text-xl">
                  {c.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto pt-8">
          <div className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-xl text-center relative overflow-hidden">
            <p className="text-xl font-bold mb-4 uppercase tracking-widest text-red-500">Nguyên tắc phân phối:</p>
            <p className="text-3xl font-playfair italic text-white leading-tight">
              “Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm thì không hưởng”
            </p>
            <p className="mt-6 text-base md:text-lg opacity-60 italic">
              bảo đảm phúc lợi xã hội cho người già, trẻ em và những người còn khó khăn trong cuộc sống; mọi người đều có điều kiện để phát triển như nhau
            </p>
          </div>
        </div>

        {/* Khung nổi bật cho kết luận cuối cùng */}
        <div className="pt-24 max-w-4xl mx-auto pb-20">
          <div className="bg-red-50 border-4 border-double border-red-200 p-12 rounded-[3.5rem] text-center shadow-2xl relative">
            <Star className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-14 h-14 text-yellow-500 fill-yellow-500 shadow-xl" />
            <h3 className="text-3xl font-playfair font-black text-red-900 mb-8 uppercase tracking-tighter">Kết luận</h3>
            <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-relaxed italic">
              “Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội không phải là một mô hình giáo điều hay áp đặt, mà là một xã hội thực sự ưu việt, nhằm giải phóng con người một cách toàn diện.”
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

// --- 4. TRANG CQ: SÁNG TẠO & THANH NIÊN (MỚI) ---
const CQSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-20 left-0 h-1 bg-red-600 transition-all duration-100 z-[60]" style={{ width: `${scrollProgress}%` }} />

      <div className="pt-24 pb-0">
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-red-800 via-red-600 to-red-500 text-white p-12 sm:p-20 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-10 items-center overflow-hidden">
              <Globe className="w-[30rem] h-[30rem] -ml-24 transform -rotate-12" />
              <Navigation className="w-[25rem] h-[25rem] -mr-24 transform rotate-12" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-4 mb-8 opacity-80">
                <Compass className="w-6 h-6 animate-pulse" />
                <Globe className="w-6 h-6 animate-pulse delay-75" />
                <Target className="w-6 h-6 animate-pulse delay-150" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc</h1>
              <p className="text-2xl sm:text-3xl font-serif italic text-red-50 leading-relaxed drop-shadow-lg">
                “Học hỏi từ thế giới nhưng hành động phải dựa trên thực tiễn dân tộc.”
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-32 space-y-32">
          <section>
             <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg"><Lightbulb className="w-8 h-8" /></div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">I. TÍNH SÁNG TẠO ĐỘC ĐÁO</h2>
             </div>

             <div className="space-y-20">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-2/5 w-full">
                    <ImageFrame 
                    src = "/images/tat-ca-dan-toc-binh-dang.jpg"
                    label="Hồ Chí Minh tại Pháp 1919" aspectRatio="aspect-[4/5]" 
                    className="grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
                  </div>
                  <div className="lg:w-3/5 bg-red-50 p-10 rounded-[3rem] border border-red-100 shadow-sm relative">
                    <span className="absolute top-4 right-8 text-8xl font-black text-red-700/5 select-none">01</span>
                    <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">“Dân tộc hóa” quyền con người</h3>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">Hồ Chí Minh đã nâng quyền cá nhân thành quyền dân tộc, biến nhân quyền thành vũ khí chính trị chống thực dân.</p>
                    <blockquote className="bg-white p-6 rounded-2xl border-l-8 border-red-700 italic text-xl font-medium text-red-950 shadow-sm mb-6">
                      “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng...”
                    </blockquote>
                    <div className="inline-block px-4 py-2 bg-red-700 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-red-200">
                      SÁNG TẠO CỐT LÕI: Độc lập dân tộc là tiền đề của quyền con người.
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-10 rounded-[3rem] border border-amber-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <Bird className="text-amber-600 w-8 h-8" />
                    <h3 className="text-2xl font-black text-slate-900">Đổi mới con đường cách mạng</h3>
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    Trái với quan điểm "Châu Âu là trung tâm" của Quốc tế Cộng sản (cho rằng thuộc địa phải đợi chính quốc thắng lợi), Hồ Chí Minh khẳng định: Cách mạng thuộc địa có thể thắng trước.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 items-stretch mb-10">
                    <div className="bg-amber-600 p-8 rounded-2xl shadow-xl text-center text-white flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                      <span className="text-xs font-bold text-amber-200 uppercase tracking-widest mb-2">Mác - Lênin (Châu Âu)</span>
                      <p className="text-xl font-black">Giải phóng giai cấp</p>
                      <div className="my-4 flex justify-center"><ArrowLeftRight className="text-amber-300" /></div>
                      <p className="text-xl font-black">Giải phóng dân tộc</p>
                    </div>
                    <div className="bg-amber-600 p-8 rounded-2xl shadow-xl text-center text-white flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                      <span className="text-xs font-bold text-amber-200 uppercase tracking-widest mb-2">Hồ Chí Minh (Thuộc địa)</span>
                      <p className="text-xl font-black">Giải phóng dân tộc</p>
                      <div className="my-4 flex justify-center"><ArrowLeftRight className="text-amber-300 rotate-180" /></div>
                      <p className="text-xl font-black">Giải phóng giai cấp</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-2xl border border-amber-100">
                    <CircleDot className="w-12 h-12 text-amber-600 animate-spin-slow" />
                    <p className="text-lg text-slate-700 italic">Người ví chủ nghĩa tư bản là <strong>“con đỉa hai vòi”</strong>. Cắt vòi ở thuộc địa sẽ làm kẻ thù suy yếu tận gốc.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/50 p-10 rounded-[3rem] border border-emerald-100 shadow-sm overflow-hidden relative">
                   <Users className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-100" />
                   <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                     <div className="w-2 h-10 bg-emerald-600 rounded-full"></div>
                     Đảng của dân tộc – Khối Đại Đoàn Kết
                   </h3>
                   
                   <div className="space-y-4 mb-12 max-w-2xl text-slate-700 text-lg leading-relaxed relative z-10">
                     <p>Bác không xây dựng một Đảng "giai cấp cực đoan" mà xác định Đảng Lao động Việt Nam là Đảng của dân tộc.</p>
                     <div className="bg-emerald-100/30 p-6 rounded-2xl border-l-4 border-emerald-600 italic">
                       <p className="font-bold text-emerald-900 mb-2">Trong Đường cách mệnh (1927):</p>
                       <ul className="space-y-2 list-disc pl-5 text-slate-800 font-medium">
                         <li>“Cách mệnh trước hết phải có Đảng cách mệnh.”</li>
                         <li>“Đảng là người lãnh đạo, người tổ chức mọi thắng lợi của cách mạng.”</li>
                       </ul>
                     </div>
                   </div>

                   <div className="relative py-20 flex justify-center">
                      <div className="relative w-80 h-80 flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-dashed border-emerald-200 rounded-full animate-spin-slow"></div>
                        <div className="z-10 bg-emerald-600 text-white w-44 h-44 rounded-full flex items-center justify-center text-center font-black shadow-2xl border-4 border-white leading-tight text-2xl">
                          ĐẢNG<br/>DÂN TỘC
                        </div>
                        {[
                          {label: "Công", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},
                          {label: "Nông", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"},
                          {label: "Trí thức", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"},
                          {label: "Thanh niên", pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"},
                        ].map((node, idx) => (
                          <div key={idx} className={`absolute ${node.pos} w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-black uppercase text-emerald-700 border border-emerald-100 text-center px-1 group hover:scale-110 transition-transform duration-300`}>
                            {node.label}
                          </div>
                        ))}
                      </div>
                   </div>
                   <p className="mt-12 text-center text-slate-600 max-w-2xl mx-auto">Đại đoàn kết không biên giới, tập hợp mọi lực lượng yêu nước dưới ngọn cờ dân tộc.</p>
                </div>
             </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-14 h-14 bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg"><Users className="w-8 h-8" /></div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">II. GỢI MỞ CHO THANH NIÊN (3C)</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 {title: "Chủ động", icon: Zap, color: "red", lesson: "Tự lực cánh sinh, dám nghĩ, dám làm, không thụ động."},
                 {title: "Chọn lọc", icon: Filter, color: "blue", lesson: "Tư duy \"Hòa nhập nhưng không hòa tan\""},
                 {title: "Cộng đồng", icon: Users, color: "emerald", lesson: "Đoàn kết là sức mạnh - Gắn lợi ích cá nhân với lợi ích dân tộc, góp phần xây dựng đất nước giàu mạnh, văn minh"}
               ].map((c, i) => (
                 <div key={i} className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${c.color}-50 text-${c.color}-600 group-hover:bg-${c.color}-600 group-hover:text-white transition-colors duration-300`}><c.icon className="w-8 h-8" /></div>
                   <h4 className="text-2xl font-black text-slate-900 mb-4">{c.title}</h4>
                   <ul className="space-y-3">
                     <li className="flex items-start gap-2 text-slate-500 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                       <span>{c.lesson}</span>
                     </li>
                   </ul>
                 </div>
               ))}
            </div>
          </section>

          <div className="pt-20">
             <div className="relative p-12 sm:p-20 bg-red-50 rounded-[4rem] border-8 border-double border-red-200 text-center shadow-2xl">
                <Award className="w-16 h-16 text-red-600 mx-auto mb-8 animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-serif italic text-red-900 mb-8 leading-relaxed">
                  “Di sản Hồ Chí Minh không chỉ là độc lập dân tộc, mà là một phương pháp luận hành động cho thế hệ trẻ.”
                </h3>
                <div className="w-24 h-1 bg-red-300 mx-auto rounded-full mb-8"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP CHÍNH ---
export default function App() {
  const [page, setPage] = useState<'home' | 'independence' | 'socialism' | 'cq'>('home');
  const [subPage, setSubPage] = useState(0);

  const goToNext = () => {
    if (page === 'home') setPage('independence');
    else if (page === 'independence') {
      if (subPage === 0) setSubPage(1);
      else setPage('socialism');
    }
    else if (page === 'socialism') setPage('cq');
  };

  const goToPrev = () => {
    if (page === 'independence') {
      if (subPage === 1) setSubPage(0);
      else setPage('home');
    }
    else if (page === 'socialism') {
      setPage('independence');
      setSubPage(1);
    }
    else if (page === 'cq') setPage('socialism');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-red-200">
      {page !== 'home' && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-red-700 text-white rounded-xl flex items-center justify-center font-bold group-hover:bg-red-800 transition-all shadow-lg shadow-red-200">H</div>
              <span className="font-playfair text-xl font-black text-slate-900 hidden md:block uppercase tracking-tighter">Di Sản Hồ Chí Minh</span>
            </button>
            <nav className="flex items-center gap-8">
              <button onClick={() => {setPage('independence'); setSubPage(0);}} className={`text-sm font-bold transition-all ${page === 'independence' ? 'text-red-700 underline underline-offset-8 decoration-2' : 'text-slate-400 hover:text-slate-600'}`}>Phần I</button>
              <button onClick={() => setPage('socialism')} className={`text-sm font-bold transition-all ${page === 'socialism' ? 'text-red-700 underline underline-offset-8 decoration-2' : 'text-slate-400 hover:text-slate-600'}`}>Phần II</button>
              <button onClick={() => setPage('cq')} className={`text-sm font-bold transition-all ${page === 'cq' ? 'text-red-700 underline underline-offset-8 decoration-2' : 'text-slate-400 hover:text-slate-600'}`}>CQ</button>
            </nav>
          </div>
        </header>
      )}

      <main className="flex-grow">
        {page === 'home' && <HomePage onStart={() => setPage('independence')} />}
        {page === 'independence' && <IndependenceSection subPage={subPage} setSubPage={setSubPage} />}
        {page === 'socialism' && <SocialismSection />}
        {page === 'cq' && <CQSection />}
      </main>

      {page !== 'home' && (
        <div className="fixed bottom-10 left-0 right-0 z-50 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pointer-events-auto">
            <button onClick={goToPrev} className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-full shadow-2xl text-slate-900 font-bold hover:bg-slate-50 transition-all">
              <ArrowLeft className="w-5 h-5" /> Trước
            </button>
            <div className="flex gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <div className={`w-2.5 h-2.5 rounded-full ${page === 'independence' && subPage === 0 ? 'bg-red-700' : 'bg-slate-300'}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full ${page === 'independence' && subPage === 1 ? 'bg-red-700' : 'bg-slate-300'}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full ${page === 'socialism' ? 'bg-red-700' : 'bg-slate-300'}`}></div>
              <div className={`w-2.5 h-2.5 rounded-full ${page === 'cq' ? 'bg-red-700' : 'bg-slate-300'}`}></div>
            </div>
            {page !== 'cq' ? (
              <button onClick={goToNext} className="flex items-center gap-3 bg-red-700 text-white px-8 py-4 rounded-full shadow-2xl font-bold hover:bg-red-800 transition-all">
                Tiếp <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button onClick={() => setPage('home')} className="flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full shadow-2xl font-bold hover:bg-green-800 transition-all">
                Hoàn thành
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}