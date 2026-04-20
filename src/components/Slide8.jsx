import { PieChart, ActivitySquare, Shield } from 'lucide-react';

export default function Slide8() {
  const simulations = [
    {
      icon: <PieChart size={32} />,
      title: '1. Mô phỏng Chính sách',
      subtitle: 'Tài khóa & Thuế',
      desc: 'Giả lập kịch bản vĩ mô trước khi ban hành. Ví dụ: Tăng thuế GTGT 2% -> Sức mua giảm bao nhiêu? Chuỗi cung ứng đứt gãy điểm nào? Thu ngân sách sau 12 tháng?',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: <ActivitySquare size={32} />,
      title: '2. Cú sốc Vĩ mô',
      subtitle: 'Stress Testing Hệ thống',
      desc: 'Chạy kịch bản "Bão hoàn hảo": Tỷ giá tăng + Lãi suất neo cao + Đứt gãy logistic. Tính toán ngay ngân hàng nào thiếu thanh khoản, nhóm doanh nghiệp nào rủi ro nhất.',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      icon: <Shield size={32} />,
      title: '3. An ninh Mạng',
      subtitle: 'Mô phỏng Tấn công & Bảo vệ',
      desc: 'Sử dụng công suất HPC tạo ra các cuộc tấn công giả lập (DDoS, Ransomware) quy mô cực lớn để rà quét lỗ hổng hạ tầng số quốc gia và vá lỗi trước.',
      color: 'text-red-500',
      bg: 'bg-red-50'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          NĂNG LỰC MÔ PHỎNG VÀ DỰ BÁO VĨ MÔ
        </h3>

        <p className="text-xl text-dark/70 font-light mb-12 text-center max-w-4xl mx-auto">
          Thay vì quản trị thụ động, HPC cung cấp giải pháp <strong className="text-dark">nhìn trước tương lai</strong> thông qua các năng lực cốt lõi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {simulations.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
              <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">{item.title}</h4>
              <div className="text-sm font-semibold text-cyan uppercase tracking-wider mb-4">{item.subtitle}</div>
              <p className="text-dark/70 font-light leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
