import { useEffect, useState } from 'react';

function Header({ isLanding = false }) {
  // const [navStyle, setnavStyle] = useState('bg-blue-300');

  // const handleScroll = () => {
  //   if (window.scrollY > 500) {
  //     setnavStyle('bg-orange-300');
  //   } else if (window.scrollY > 200) {
  //     setnavStyle('hidden');
  //   } else {
  //     setnavStyle('bg-blue-300');
  //   }
  // };

  // "fixed flex h-8 w-full items-center justify-center bg-sky-400 opacity-50 z-50

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     handleScroll();
  //   });
  // });

  return (
    <div
      className={`sticky top-0 z-50 flex ${
        isLanding ? 'bg-c1 border-b-2 border-c4' : 'bg-c2/25'
      } h-8 w-full items-center justify-center`}
    >
      <div className="space-x-10 text-c2">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#work">WORK</a>
        <a href="#project">PROJECT</a>
      </div>
    </div>
  );
}

export default Header;
