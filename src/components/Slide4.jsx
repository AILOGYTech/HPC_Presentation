import { Server, Activity, Users, Share2 } from 'lucide-react';

export default function Slide4() {
  const layers = [
    {
      layer: '1',
      title: 'Lớp Hạ tầng Vật lý',
      icon: <Server size={24} />,
      content: 'Sử dụng máy chủ có hiệu năng cao để huấn luyện mô hình AI; suy luận & Phân tích theo Chuẩn Tier III/IV và công nghệ tản nhiệt tối ưu để tiết kiệm chi phí sửa chữa và tính toán.',
      color: 'bg-blue-900',
      textColor: 'text-white'
    },
    {
      layer: '2',
      title: 'Lớp Vận hành Thông minh',
      icon: <Activity size={24} />,
      content: 'Tự động phân bổ tài nguyên theo ưu tiên, dự báo điểm nóng nhiệt độ, và phát hiện sớm nguy cơ hỏng hóc phần cứng.',
      color: 'bg-blue-800',
      textColor: 'text-white/90'
    },
    {
      layer: '3',
      title: 'Lớp Tổ chức',
      icon: <Users size={24} />,
      content: 'Xây dựng các đơn vị đầu mối chuyên môn, quản lý chất lượng, cập nhật công nghệ và ứng phó sự cố.',
      color: 'bg-blue-700',
      textColor: 'text-white/80'
    },
    {
      layer: '4',
      title: 'Lớp Nền tảng Chia sẻ và Hệ sinh thái Quốc gia',
      icon: <Share2 size={24} />,
      content: 'Phân bổ tài nguyên cho các tổ chức trong hệ sinh thái AI quốc gia.',
      color: 'bg-blue-600',
      textColor: 'text-white/80'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          KIẾN TRÚC KỸ THUẬT VÀ HẠ TẦNG LÕI
        </h3>

        <p className="text-xl text-dark/70 font-light mb-12 text-center max-w-4xl mx-auto">
          Áp dụng kiến trúc <strong className="text-dark">"Quản trị tập trung - Khai thác phân tán"</strong> đặt tại Trung tâm Dữ liệu quốc gia, bao gồm 4 lớp đồng bộ:
        </p>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {layers.map((item, index) => (
            <div key={index} className={`${item.color} rounded-2xl p-6 shadow-md border border-white/10 flex flex-col md:flex-row items-center gap-6 transform transition-all hover:scale-[1.01]`}>
              <div className="flex flex-col items-center justify-center min-w-[120px] border-r border-white/20 pr-6">
                <div className="text-white mb-2">{item.icon}</div>
                <div className="text-sm text-cyan font-bold uppercase tracking-wider">Lớp {item.layer}</div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <div className={`${item.textColor} font-light text-base leading-relaxed`}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
