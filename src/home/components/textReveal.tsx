"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function TextReveal() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Hover over me, I will tell you a secret.
          </p>
        }
        className="h-screen w-full text-white dark:text-black"
      >
        Your idea is closer to reality than you think.
      </MaskContainer>
    </div>
  );
}
