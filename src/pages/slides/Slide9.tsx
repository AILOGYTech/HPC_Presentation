import { TrendingDown, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Slide9() {
  const metrics = [
    {
      icon: <TrendingDown size={32} />,
      title: 'Tối ưu Ngân sách',
      desc: 'Giảm đáng kể ngân sách đầu tư vào công nghệ rải rác.',
      color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100'
    },
    {
      icon: <Zap size={32} />,
      title: 'Tốc độ Xử lý',
      desc: 'Giảm thời gian kết xuất các báo cáo đối soát/ mô phỏng xuống tối thiểu.',
      color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Độ tin cậy (SLA)',
      desc: 'Hệ thống vận hành tiêu chuẩn cao nhất, đảm bảo cam kết chất lượng dịch vụ hàng đầu.',
      color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Giá trị An ninh & AI',
      desc: 'Tạo thành công các Mô hình Nền tảng mang bản sắc Việt Nam, phục vụ trực tiếp Chính phủ và Quốc phòng.',
      color: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/20'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          ĐO LƯỜNG BẰNG CÁC CHỈ SỐ XÁC CHỨNG
        </h3>

        <p className="text-xl text-dark/70 font-light mb-12 text-center max-w-4xl mx-auto">
          Từ bỏ thói quen đo lường bằng "chỉ số ảo". Trung tâm HPC cam kết đánh giá hiệu quả bằng <strong className="text-cyan font-semibold">Chỉ số xác chứng</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {metrics.map((item, index) => (
            <div key={index} className={`bg-white p-8 rounded-3xl border ${item.border} shadow-sm flex items-start gap-6 hover:shadow-md transition-all`}>
              <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-dark/70 font-light leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
