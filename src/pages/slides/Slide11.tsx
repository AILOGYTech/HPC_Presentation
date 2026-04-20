import { Landmark, Briefcase, GraduationCap } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          CƠ CHẾ HUY ĐỘNG NGUỒN LỰC VÀ ĐÃI NGỘ NHÂN SỰ ĐẶC THÙ
        </h3>

        <div className="mb-12 text-center max-w-4xl mx-auto">
          <p className="text-xl text-dark/80 font-light leading-relaxed">
            Hạ tầng siêu máy tính cần cơ chế đầu tư và nhân sự linh hoạt để không bị tụt hậu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-blue-100 shadow-md p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
            <div className="flex flex-col mb-4">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Landmark size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">Vai trò Nhà nước</h4>
            </div>
            <p className="text-sm text-dark/70 font-light leading-relaxed">
              Giữ vai trò chủ đạo trong đầu tư hạ tầng lõi, xây dựng tiêu chuẩn, quản lý an ninh, bảo mật và chủ quyền dữ liệu quốc gia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-cyan/20 shadow-md p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
            <div className="flex flex-col mb-4">
              <div className="w-14 h-14 bg-cyan/10 text-cyan rounded-2xl flex items-center justify-center mb-4">
                <Briefcase size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">Doanh nghiệp (PPP)</h4>
            </div>
            <p className="text-sm text-dark/70 font-light leading-relaxed">
              Tham gia cung cấp giải pháp công nghệ, hỗ trợ kỹ thuật, chuyển giao tri thức vận hành và đồng hành trong đổi mới sáng tạo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-orange-100 shadow-md p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
            <div className="flex flex-col mb-4">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <GraduationCap size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-1">Cơ chế Nhân sự</h4>
            </div>
            <p className="text-sm text-dark/70 font-light leading-relaxed">
              Cần áp dụng cơ chế khoán quỹ lương đặc thù hoặc thuê chuyên gia theo dự án với mức đãi ngộ tiệm cận thị trường, quy tụ đội ngũ kĩ sư tinh hoa nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
