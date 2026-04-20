
export default function Slide12() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-950 to-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">

        {/* Label trên cùng — giống "THAM LUẬN" của Slide 1 */}
        <h2 className="text-xl md:text-2xl text-cyan/90 font-bold tracking-[0.3em] uppercase mb-6 drop-shadow-md">
          KẾT LUẬN
        </h2>

        {/* Nội dung chính */}
        <div className="max-w-5xl mx-auto flex flex-col gap-6 mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 tracking-widest uppercase drop-shadow-lg leading-normal py-2">
            Xin chân thành Cảm ơn!
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            Trung tâm HPC là bước ngoặt chiến lược, định hình vững chắc của Chính phủ số và bảo vệ <strong>Chủ quyền số</strong> trong kỷ nguyên AI.
          </p>
          <p className="text-base md:text-lg text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
            Cảm ơn Quý vị đã dành thời gian lắng nghe.
          </p>
        </div>

        {/* Logos — giống Slide 1 */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase">Đơn vị trình bày</p>
          <div className="flex items-center gap-6">
            <img src="./logo_ailogy.svg" alt="Ailogy Logo" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
            <div className="w-px h-10 bg-white/30"></div>
            <img src="./BK-Holding.png" alt="BK Holding Logo" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
          </div>
        </div>

      </div>
    </div>
  );
}
