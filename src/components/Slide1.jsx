import { Cpu } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-950 to-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-xl md:text-2xl text-cyan/90 font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-md">
          THAM LUẬN
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-10 tracking-tight py-2 text-shadow-sm max-w-5xl mx-auto flex flex-col gap-6">
          <span className="leading-loose">ĐỀ XUẤT XÂY DỰNG TRUNG TÂM TÍNH TOÁN HIỆU NĂNG CAO QUỐC GIA (HPC)</span>
          <span className="text-cyan block text-2xl md:text-4xl lg:text-5xl mt-2 leading-relaxed">TRUNG TÂM DỮ LIỆU QUỐC GIA</span>
        </h1>

        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mt-16 bg-white/100 backdrop-blur-sm px-8 py-4 mx-auto w-fit shadow-xl">
          <img src={`${import.meta.env.BASE_URL}logo_ailogy.svg`} alt="Ailogy Logo" className="h-8 md:h-10 w-auto object-contain" />
          <div className="w-px h-8 bg-gray-300"></div>
          <img src={`${import.meta.env.BASE_URL}BK-Holding.png`} alt="BK Holding Logo" className="h-5 md:h-6 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
