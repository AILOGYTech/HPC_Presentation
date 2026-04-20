import { MessageCircle } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-950 to-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Simplified Conclusion */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            HPC Quốc gia là bước ngoặt chiến lược, định hình vững chắc của Chính phủ số và bảo vệ <strong>Chủ quyền số</strong> trong kỷ nguyên AI.
          </p>
        </div>

        <div className="h-px w-32 bg-cyan/30 mx-auto mb-12"></div>

        {/* Thank You Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 tracking-widest uppercase shadow-cyan/50 drop-shadow-lg leading-normal py-2 mb-6">
            Xin chân thành Cảm ơn!
          </h1>
          <p className="text-base md:text-lg text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            Cảm ơn Quý vị đã dành thời gian lắng nghe.
          </p>
        </div>
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mt-12 bg-white/90 backdrop-blur-sm px-8 py-4 mx-auto w-fit shadow-xl hover:scale-105 transition-transform cursor-pointer">
          <img src="logo_ailogy.svg" alt="Ailogy Logo" className="h-8 md:h-10 w-auto object-contain" />
          <div className="w-px h-8 bg-gray-300"></div>
          <img src="BK-Holding.png" alt="BK Holding Logo" className="h-5 md:h-6 w-auto object-contain" />
        </div>

      </div>
    </div>
  );
}
