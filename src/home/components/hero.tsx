import { WavyBackground } from "../../components/ui/wavy-background";
import { Button } from "../../components/ui/moving-border";
import indieHackersLogo from "../../assets/indie-hackers.svg";
import ycLogo from "../../assets/yc.png";
import productHuntLogo from "../../assets/product-hunt.png";
import replitLogo from "../../assets/replit.jpg";
import webflowLogo from "../../assets/webflow.png";
import framerLogo from "../../assets/framer.png";

export default function Hero() {
    return (
        <WavyBackground className="min-h-screen w-full" backgroundFill="white">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 text-center pt-20 sm:pt-24 md:pt-30">
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
                    {/* New feature tags */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <div className="inline-flex items-center gap-2 bg-[#FF6900] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm">
                            <span className="text-gray-100">40% off this month</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-[#FF6900] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm">
                            <span className="text-gray-100">Pay after launch</span>
                        </div>
                    </div>
                    
                    {/* Main headline */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[115px] font-extrabold text-[rgb(25,23,28)] leading-tight sm:leading-[1.1] md:leading-[1.05] lg:leading-[1.02] xl:leading-[1.01] 2xl:leading-[103.5px] tracking-tight">
                        Super fast MVPs<br />
                        for real world ideas
                    </h1>
                    
                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button 
                            as="a"
                            href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            borderRadius="1.75rem"
                            className="bg-purple-600 text-white font-bold border-purple-600 hover:bg-purple-700"
                        >
                             Book Strategy Call
                         </Button>
                    </div>
                    
                    {/* Social proof */}
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4 sm:px-0">
                            Backed by veteran engineers. Built for the kind of teams pushing ideas fast, just like these. 
                            <a href="/about-us" className="text-purple-600 hover:text-purple-800 underline ml-1" title="Learn more about our team">Meet our team</a>.
                        </p>
                        
                        {/* Company logos */}
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-0">
                            <img src={indieHackersLogo} alt="IndieHackers logo - startup community platform trusted by entrepreneurs" className="h-6 sm:h-8 md:h-10 object-contain" loading="lazy" />
                            <img src={ycLogo} alt="Y Combinator logo - prestigious startup accelerator program" className="h-6 sm:h-8 md:h-10 object-contain" loading="lazy" />
                            <img src={productHuntLogo} alt="Product Hunt logo - platform for discovering new products and startups" className="h-6 sm:h-8 md:h-10 object-contain" loading="lazy" />
                            <img src={replitLogo} alt="Replit logo - collaborative coding platform for developers" className="h-6 sm:h-8 md:h-10 object-contain rounded-full" loading="lazy" />
                            <img src={webflowLogo} alt="Webflow logo - visual web development platform" className="h-6 sm:h-8 md:h-10 object-contain rounded-full" loading="lazy" />
                            <img src={framerLogo} alt="Framer logo - design and prototyping tool for creating interactive websites" className="h-6 sm:h-8 md:h-10 object-contain rounded-full" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </WavyBackground>
    )
}