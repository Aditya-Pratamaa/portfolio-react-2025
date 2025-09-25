function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 relative overflow-hidden font-serif">
      {/* Background overlapping text */}
      <span className="absolute text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0 tracking-widest leading-none">
        SOFTWARE
      </span>
      <span className="absolute text-[15rem] font-bold text-red-100 opacity-60 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 select-none z-0 tracking-widest leading-none">
        ENGINEER
      </span>

      <div className="relative z-10 text-center">
        {/* Top text */}
        <p className="text-gray-700 text-lg mb-8 tracking-wide">
          Nita Ainun Nisa | <span className="font-semibold">Software Engineer & Infrastructure Enthusiast</span>
          <span className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"></span>
        </p>

        {/* Main title */}
        <h1 className="text-[10rem] font-extrabold text-gray-800 leading-none mb-10 tracking-tight">
          PORTOFOLIO
        </h1>

        {/* Bottom text */}
        <p className="text-gray-600 text-lg mt-8 tracking-wide">
          Let's explore my work
          <span className="block w-24 h-0.5 bg-gray-400 mx-auto mt-2"></span>
        </p>
      </div>
    </div>
  );
}

export default Home;
