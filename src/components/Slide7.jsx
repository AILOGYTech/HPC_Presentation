import { BellRing, ShieldAlert, ArrowRightCircle } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          QUY TRÌNH QUẢN LÝ VỤ VIỆC<br />& CẢNH BÁO SỚM
        </h3>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-3xl mb-12 max-w-4xl mx-auto">
          <p className="text-xl text-dark/80 font-light leading-relaxed">
            Giá trị thực sự của HPC không nằm ở báo cáo tĩnh, mà là <strong>khả năng kiến tạo hành động</strong> dựa trên cơ chế bảo mật tuyệt đối. Ngay khi thuật toán được thực thi, kết quả lập tức chuyển hóa thành chuỗi hành động khép kín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-100 via-cyan/30 to-blue-100 -translate-y-1/2 z-0"></div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 ring-4 ring-white">
              <BellRing size={28} />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Kích hoạt Cảnh báo sớm</h4>
            <p className="text-dark/70 font-light text-sm leading-relaxed">
              Phát hiện bất thường, lập tức gửi cảnh báo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 ring-4 ring-white">
              <ShieldAlert size={28} />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Phân loại Rủi ro tự động</h4>
            <p className="text-dark/70 font-light text-sm leading-relaxed">
              AI tự động chấm điểm mức độ rủi ro và đưa ra cảnh báo phù hợp với từng tình huống cụ thể.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-cyan/10 text-cyan rounded-full flex items-center justify-center mb-6 ring-4 ring-white">
              <ArrowRightCircle size={28} />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Quản lý Vụ việc liên thông</h4>
            <p className="text-dark/70 font-light text-sm leading-relaxed">
              Hỗ trợ các cơ quan quản lý ra quyết định nhanh chóng và kịp thời với các quy trình hợp lý
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
