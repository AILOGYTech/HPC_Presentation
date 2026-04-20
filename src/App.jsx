import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';
import Slide11 from './components/Slide11';
import Slide12 from './components/Slide12';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12
];

function App() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64; // h-16
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f8fafc] text-dark font-sans min-h-screen">
      {/* Header removed as requested */}

      <main className="flex flex-col gap-0 md:gap-0">
        {slides.map((SlideComponent, index) => {
          let id = '';
          if (index === 1) id = 'thuc-trang';
          if (index === 2) id = 'tam-nhin';
          if (index === 3) id = 'kien-truc';
          if (index === 4) id = 'van-hanh'; // Giao diện tương tác
          if (index === 8) id = 'do-luong'; // Đo lường chỉ số
          if (index === 9) id = 'lo-trinh'; // Lộ trình thử nghiệm
          
          return (
            <section key={index} id={id || undefined} className="w-full relative px-0 max-w-none">
              <SlideComponent />
            </section>
          );
        })}
      </main>

    </div>
  );
}

export default App;
