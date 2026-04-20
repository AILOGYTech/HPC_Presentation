

export default function Slide1() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-950 to-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-xl md:text-2xl text-cyan/90 font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-md">
          THAM LUẬN
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-10 tracking-tight py-2 text-shadow-sm max-w-5xl mx-auto flex flex-col gap-6">
          <span className="leading-loose">ĐỀ XUẤT XÂY DỰNG TRUNG TÂM TÍNH TOÁN HIỆU NĂNG CAO (HPC)</span>
          <span className="text-cyan block text-2xl md:text-4xl lg:text-5xl mt-2 leading-relaxed">TRUNG TÂM DỮ LIỆU QUỐC GIA</span>
        </h1>

        {/* Logos */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Đơn vị trình bày</p>
          <div className="flex items-center gap-6">
            <img src="logo_ailogy.svg" alt="Ailogy Logo" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
            <div className="w-px h-10 bg-white/30"></div>
            <img src="BK-Holding.png" alt="BK Holding Logo" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
          </div>
        </div>
      </div>
    </div>
  );
}
