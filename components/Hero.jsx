import Product3D from "./Product3D";
import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center 
      bg-gradient-to-b from-white via-gray-200 to-white 
      dark:from-black dark:via-gray-900 dark:to-black 
      text-black dark:text-white overflow-hidden"
    >
      
      {/* 🌌 Stars Background */}
      <StarsBackground />

      {/* ✨ Glow effect */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 Title */}
      <h1 className="text-5xl md:text-6xl font-bold 
      bg-gradient-to-r from-blue-500 to-purple-600 
      dark:from-blue-400 dark:to-purple-500 
      bg-clip-text text-transparent z-10">
        Ipriyxtech
      </h1>

      {/* 📝 Subtitle */}
      <p className="text-gray-500 dark:text-gray-400 mt-2 z-10">
        Building Future with Code 🚀
      </p>

      {/* 🧑‍🚀 3D Model */}
      <div className="mt-10 w-full flex justify-center items-center z-10">
        <Product3D />
      </div>
    </section>
  );
}