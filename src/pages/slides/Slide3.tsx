import { Target, ShieldAlert } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center relative overflow-hidden bg-white">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-xl text-cyan font-bold tracking-[0.2em] uppercase mb-4 text-center">
          Tầm nhìn Chiến lược
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-12 text-center">
          CHỦ QUYỀN TRÍ TUỆ NHÂN TẠO
        </h3>

        <div className="mb-12 border-l-4 border-cyan pl-6 mx-auto max-w-4xl">
          <p className="text-xl text-dark/80 font-light leading-relaxed">
            Trung tâm HPC <strong className="text-dark">không chỉ là một dự án hạ tầng kỹ thuật</strong>, mà đóng vai trò nền tảng để quốc gia bứt phá và làm chủ công nghệ chiến lược.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-red-500">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-700 mb-3">Rủi ro An ninh Phi truyền thống</h4>
                <p className="text-dark/70 font-light leading-relaxed text-lg">
                  Việc phụ thuộc vào các mô hình AI của nước ngoài tiềm ẩn nguy cơ rủi ro an ninh phi truyền thống, do hệ thống có thể bị cài cắm các <strong className="text-dark">định kiến sai lệch về văn hóa, lịch sử và tư tưởng</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 p-8 rounded-3xl border border-blue-800 shadow-xl relative overflow-hidden group transform md:-translate-y-2">
            <div className="flex items-start gap-4 relative z-10">
              <div className="mt-1 bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white">
                <Target size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Tự chủ Huấn luyện</h4>
                <p className="text-white/80 font-light leading-relaxed text-lg">
                  HPC là điều kiện tiên quyết để Việt Nam tự chủ huấn luyện các mô hình AI trên nền tảng dữ liệu sẵn có, đảm bảo <strong className="text-cyan font-semibold">tính độc lập và sự phù hợp</strong> với bối cảnh đặc thù của đất nước.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
