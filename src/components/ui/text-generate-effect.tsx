"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // Split text into sentences and then into words
  const sentences = words.split('. ').map(sentence => sentence.trim());
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {sentences.map((sentence, sentenceIdx) => {
          const wordsArray = sentence.split(" ");
          return (
            <div key={sentenceIdx} className="mb-4">
              {wordsArray.map((word, idx) => {
                return (
                  <motion.span
                    key={word + idx}
                    className="dark:text-white text-black opacity-0"
                    style={{
                      filter: filter ? "blur(10px)" : "none",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                );
              })}
              {sentenceIdx < sentences.length - 1 && "."}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-relaxed tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
