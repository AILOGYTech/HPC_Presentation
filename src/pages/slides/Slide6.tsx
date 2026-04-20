import { Lock, FileSearch, ShieldOff } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="glass-panel p-10 md:p-16 h-full flex flex-col justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl md:text-5xl font-bold text-dark tracking-tight leading-[1.4] py-2 mb-10 text-center">
          CƠ CHẾ BẢO MẬT VÀ TÍNH MINH BẠCH
        </h3>

        <div className="mb-12 border-l-4 border-cyan pl-6 mx-auto max-w-4xl bg-gray-50 p-6 rounded-r-2xl">
          <p className="text-xl text-dark/80 font-light leading-relaxed">
            Rào cản lớn nhất của dùng chung hạ tầng là nỗi lo về dữ liệu. HPC giải quyết triệt để bằng các công nghệ lõi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 relative overflow-hidden">
            <div className="flex flex-col items-start mb-4">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Lock size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark">Học máy Liên kết &<br />Điện toán Bí mật</h4>
            </div>
            <p className="text-sm text-dark/70 font-light leading-relaxed">
              <strong className="text-cyan font-semibold italic">"Dữ liệu không di chuyển, không thể sao chép"</strong>. Đóng gói thuật toán, gửi đến CSDL gốc huấn luyện, sau đó chỉ mang "trọng số kinh nghiệm" quay về kho chung.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 relative overflow-hidden">
            <div className="flex flex-col items-start mb-4">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <ShieldOff size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark">Kiến trúc Không tin cậy<br />(Zero Trust)</h4>
            </div>
            <p className="text-sm text-dark/70 font-light leading-relaxed">
              Hệ thống không mặc định tin tưởng bất kỳ ai. Mọi truy cập (kể cả lãnh đạo/admin) đều phải xác thực liên tục nhiều lớp, cấp quyền tối thiểu đúng chức năng nhiệm vụ.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 relative overflow-hidden">
            <div className="flex flex-col items-start mb-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <FileSearch size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark">Nhật ký Kiểm duyệt &<br />Phân quyền</h4>
            </div>
            <ul className="space-y-2 text-sm text-dark/70 font-light leading-relaxed">
              <li><strong className="text-dark">Truy vết mọi lịch sử:</strong> Ghi nhận IP và các thao tác của người dùng.</li>
              <li><strong className="text-dark">Chống chối bỏ:</strong> Nhật ký mã hóa, không ai được xóa.</li>
              <li><strong className="text-dark">Phân quyền:</strong> Duyệt đa lớp để chạy kịch bản mô phỏng nhạy cảm.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
