import Product3D from "./Product3D";
import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center items-center px-4">

      <StarsBackground />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold 
      bg-gradient-to-r from-blue-500 to-purple-600 
      bg-clip-text text-transparent z-10 text-center">
        Ipriyxtech
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 z-10 text-center">
        Building Future with Code 🚀
      </p>

      {/* 3D Model */}
      <div className="mt-4 w-full flex justify-center items-center z-10">
        <Product3D />
      </div>

    </section>
  );
}