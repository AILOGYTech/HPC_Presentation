import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';

import type { ReactElement } from 'react';

type SlideComponent = () => ReactElement;

const slides: SlideComponent[] = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12,
];

const slideIds: Record<number, string> = {
  1: 'thuc-trang',
  2: 'tam-nhin',
  3: 'kien-truc',
  4: 'van-hanh',
  8: 'do-luong',
  9: 'lo-trinh',
};

export function PresentationPage() {
  return (
    <div className="bg-[#f8fafc] font-sans">
      <main className="flex flex-col">
        {slides.map((SlideComponent, index) => {
          const id = slideIds[index];
          const isSlide4 = index === 3;
          return (
            <section
              key={index}
              id={id}
              className={`w-full relative overflow-hidden ${isSlide4 ? '' : 'h-screen'}`}
            >
              <SlideComponent />
            </section>
          );
        })}
      </main>
    </div>
  );
}
