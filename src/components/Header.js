function Header() {
  return (
    <div className="fixed flex h-8 w-full items-center justify-center bg-sky-400 opacity-50 z-50 ">
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
