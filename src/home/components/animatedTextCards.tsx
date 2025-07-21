"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import SceneGif from "../../assets/Scene.gif";

const words = "You’ve had the idea long enough, It’s your time to build now, We help founders launch in 21 days, No delays no fluff just results, Real products shipped fast and clean."
 
export function AnimatedTextCards() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Text Column */}
        <div className="text-left order-2 lg:order-1">
          <TextGenerateEffect 
            words={words} 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-sans leading-relaxed"
          />
        </div>
        
        {/* GIF Column */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <img 
            src={SceneGif}
            alt="Animated scene showing fast MVP development process - coding, design, and deployment workflow"
            className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}