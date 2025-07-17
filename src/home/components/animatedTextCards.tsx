"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import SceneGif from "../../assets/Scene.gif";
 
const words = `You have been holding onto that idea for months, maybe years. Telling yourself you will start "someday," when you have more time, more money, or the perfect team. But here is the truth: you dont need perfect conditions. You need action. We help solo founders like you bring ambitious, complex ideas to life — in just 21 days, at a price that wont break you. No fluff, no bloat, just real progress. The difference between dreamers and doers? Doers ship.`;
 
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