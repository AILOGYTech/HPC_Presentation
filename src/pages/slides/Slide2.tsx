import { ServerCrash, AlertTriangle, Users } from 'lucide-react';

export default function Slide2() {
  const issues = [
    {
      icon: <ServerCrash size={28} />,
      title: 'Lãng phí & Cát cứ Dữ liệu',
      desc: 'Đầu tư phân tán khiến không một hệ thống nào đủ công suất để huấn luyện AI quy mô lớn. Dữ liệu bị cô lập, không đồng nhất và khó phân tích.'
    },
    {
      icon: <AlertTriangle size={28} />,
      title: 'Lạc hậu Công nghệ',
      desc: 'Vòng đời thiết bị phần cứng rất ngắn. Các đầu tư nhỏ lẻ khiến hệ thống nhanh chóng lỗi thời do thiếu ngân sách nâng cấp liên tục.'
    },
    {
      icon: <Users size={28} />,
      title: 'Khủng hoảng Nhân sự',
      desc: 'Các hệ thống phức tạp đòi hỏi đội ngũ chuyên gia an ninh mạng và AI hàng đầu, điều mà chúng ta không thể rải đều cho mọi cơ quan quản lý.'
    }
  ];

  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-xl text-cyan font-bold tracking-[0.2em] uppercase mb-4 text-center">
          Thực trạng Bức thiết
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          KHỐI DỮ LIỆU KHỔNG LỒ & SỰ RỜI RẠC HẠ TẦNG
        </h3>

        <div className="bg-gray-50 border-l-4 border-cyan p-6 md:p-8 rounded-r-3xl mb-12 max-w-4xl mx-auto">
          <p className="text-xl text-dark/80 font-light leading-relaxed">
            Chuyển đổi số quốc gia tạo ra lượng dữ liệu khổng lồ nhưng đang thiếu hụt năng lực tính toán. Việc các Bộ, ngành <strong className="text-dark">tự đầu tư hệ thống máy chủ rời rạc</strong> đang trực tiếp dẫn đến:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-4">{item.title}</h4>
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
