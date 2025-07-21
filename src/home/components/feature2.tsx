import { motion } from "motion/react";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

export const DrawCircleText = () => {
  return (
    <div className="bg-[#FAF9F7] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-black-900">
      <div className="mx-auto max-w-7xl">
        {/* Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {/* First Column - Text (3/4 width) */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-4 sm:space-y-6">
            {/* Limited time offer tag */}
            <div className="inline-block bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
              Limited time offer
            </div>
            
            {/* Main headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              40% off this month on<br />
              <span className="text-violet-600">MVP Development</span>
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your ideas into reality with our expert MVP development services. 
              Get your product to market faster with professional design, development, and launch support.
            </p>
            
            {/* CTA Button */}
            <a 
              href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-700 transition-colors"
            >
              Get 40% off
            </a>
          </div>
          
          {/* Second Column - Floating Phone (1/4 width) */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <FloatingPhone />
          </div>
        </div>
      </div>
      <hr className="border-gray-200 mt-20 sm:mt-32 md:mt-40" />
    </div>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-violet-500 scale-75 sm:scale-90 md:scale-100"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-80 w-48 sm:h-96 sm:w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-violet-500"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-violet-500 backdrop-blur">
        Get Started
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" />
    </div>
  );
};