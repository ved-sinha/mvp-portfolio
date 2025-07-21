"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import SceneGif from "../../assets/Scene.gif";

const words = "You’ve had the idea long enough, It’s your time to build now, We help founders launch in 21 days, No delays no fluff just results, Real products shipped fast and clean."
 
export function AnimatedTextCards() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="text-left">
          <TextGenerateEffect 
            words={words} 
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans leading-relaxed"
          />
        </div>
        
        {/* GIF Column */}
        <div className="flex items-center justify-center">
          <img 
            src={SceneGif}
            alt="Scene animation"
            className="w-full h-auto max-h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
}