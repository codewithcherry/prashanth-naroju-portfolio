'client mode';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23c9c6ce' fill-opacity='0.28'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
      className="relative bg-white dark:bg-black min-h-screen p-8 flex flex-col items-center justify-center w-full"
    >
      {/* Top Circular Gradient */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[80vw] h-[120px] rounded-full bg-[radial-gradient(circle,_rgba(200,100,150,0.9)_10%,_rgba(50,100,200,0.9)_40%,_transparent_80%)] blur-3xl opacity-70"></div>

      {/* Content */}
     
       
      

      {/* Bottom Circular Gradient */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[80vw] h-[120px] rounded-full bg-[radial-gradient(circle,_rgba(200,100,150,0.9)_10%,_rgba(50,100,200,0.9)_40%,_transparent_80%)] blur-3xl opacity-70"></div>
    </div>
  );
}
