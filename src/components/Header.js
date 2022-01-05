import { useEffect, useState } from 'react';

function Header() {
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
    <div className="sticky top-0 z-50 flex bg-teal-700 h-8 w-full items-center justify-center">
      <div className="space-x-10">
        <button>Home</button>
        <button>ABOUT ME</button>
        <button>WORK</button>
        <button>PROJECT</button>
      </div>
    </div>
  );
}

export default Header;
