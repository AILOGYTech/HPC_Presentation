import { LayoutDashboard, Compass, Settings } from 'lucide-react';

export default function Slide5() {
  const portals = [
    {
      icon: <LayoutDashboard size={32} />,
      title: 'Dashboard Lãnh đạo',
      subtitle: 'Tầm nhìn Vĩ mô',
      desc: 'Cung cấp các biểu đồ trực quan phù hợp với các báo cáo và các cảnh báo khẩn cấp.',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Compass size={32} />,
      title: 'Cổng Khai thác',
      subtitle: 'Dành cho Bộ/Ngành',
      desc: 'Nơi cán bộ nghiệp vụ tải lên tham số dự báo, gửi thuật toán mô phỏng và theo dõi tiến trình. Tích hợp Trợ lý AI hướng dẫn thiết lập bài toán chuẩn xác.',
      borderColor: 'border-cyan',
      bgColor: 'bg-cyan/10'
    },
    {
      icon: <Settings size={32} />,
      title: 'Cổng Quản trị',
      subtitle: 'Admin Portal',
      desc: 'Giao diện dành riêng cho đội ngũ kỹ sư Trung tâm để theo dõi sức khỏe thiết bị, băng thông mạng, và thực thi các lệnh bảo mật khẩn cấp.',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          GIAO DIỆN TƯƠNG TÁC VÀ TRẢI NGHIỆM NGƯỜI DÙNG
        </h3>

        <p className="text-xl text-dark/70 font-light mb-12 text-center max-w-4xl mx-auto">
          Hệ thống HPC được số hóa quy trình tương tác thông qua <strong className="text-dark">các hệ thống Cổng chuyên biệt.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portals.map((item, index) => (
            <div key={index} className={`bg-white p-8 rounded-3xl border-t-4 ${item.borderColor} shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden`}>
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 text-dark`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">{item.title}</h4>
              <h5 className="text-sm font-medium text-dark/50 uppercase tracking-widest mb-4">{item.subtitle}</h5>
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
