import { WavyBackground } from "../../components/ui/wavy-background";
import { Button } from "../../components/ui/moving-border";

export default function Hero() {
    return (
        <WavyBackground className="min-h-screen w-full" backgroundFill="white">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                    <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-[0.9] tracking-tight">
                        We love building MVPs.
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button borderRadius="1.75rem"
                        className="bg-dark dark:bg-slate-900 text-black font-bold dark:text-white border-neutral-200 dark:border-slate-800">
                             Book a call for a free consultation
                         </Button>
                    </div>
                </div>
            </div>
        </WavyBackground>
    )
}