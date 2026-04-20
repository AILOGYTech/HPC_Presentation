import { PlaySquare, Database, CheckSquare } from 'lucide-react';

export default function Slide10() {
  const steps = [
    {
      step: '01',
      icon: <Database size={24} />,
      title: 'Chọn bài toán & Đơn vị',
      desc: 'Chọn Bộ Tài chính (Tổng cục Thuế) hoặc NHNN làm đơn vị phối hợp. Cung cấp dữ liệu lịch sử đã ẩn danh tối thiểu 12 tháng.',
      color: 'bg-blue-600',
      border: 'border-blue-200'
    },
    {
      step: '02',
      icon: <PlaySquare size={24} />,
      title: 'Thiết lập Môi trường',
      desc: 'Thiết lập Sandbox. Mở kết nối API Read-only an toàn từ hệ thống gốc về phân khu thử nghiệm riêng biệt của HPC.',
      color: 'bg-cyan',
      border: 'border-cyan/30'
    },
    {
      step: '03',
      icon: <CheckSquare size={24} />,
      title: 'Mô phỏng & Đánh giá',
      desc: 'Huấn luyện AI phát hiện rủi ro. Đánh giá tỷ lệ chính xác.',
      color: 'bg-green-500',
      border: 'border-green-200'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-12 text-center">
          LỘ TRÌNH VÀ KẾ HOẠCH
        </h3>

        <p className="text-xl text-dark/70 font-light mb-16 text-center max-w-4xl mx-auto">
          Để đảm bảo tính khả thi và giảm thiểu rủi ro, dự án sẽ bắt đầu bằng một <strong className="text-dark">kế hoạch thử nghiệm </strong> nghiêm ngặt qua các bước:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-1 bg-gray-200 z-0"></div>

          {steps.map((item, index) => (
            <div key={index} className="relative z- 0 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 ${item.color} text-white rounded-full flex flex-col items-center justify-center mb-6 ring-8 ring-white shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="text-white/80 font-bold text-sm mb-1">BƯỚC {item.step}</div>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-4">{item.title}</h4>
              <p className="text-dark/70 font-light leading-relaxed text-base bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full w-full">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
