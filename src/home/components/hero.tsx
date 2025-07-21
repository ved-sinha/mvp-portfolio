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
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-30">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                    {/* New feature tag */}
                    <div className="inline-flex items-center gap-2 bg-[#FF6900] px-4 py-2 rounded-lg text-sm">
                        <span className="text-gray-100">40% off this month</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-[#FF6900] px-4 py-2 rounded-lg text-sm ml-4">
                        <span className="text-gray-100">Pay after launch</span>
                    </div>
                    
                    {/* Main headline */}
                    <h1 className="text-[115px] font-extrabold text-[rgb(25,23,28)] leading-[103.5px] tracking-tight">
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
                    <div className="space-y-4">
                        <p className="text-gray-600 text-lg">
                        Backed by veteran engineers. Built for the kind of teams pushing ideas fast, just like these.
                        </p>
                        
                        {/* Company logos */}
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            <img src={indieHackersLogo} alt="IndieHackers" className="h-8 md:h-10 object-contain" />
                            <img src={ycLogo} alt="YC" className="h-8 md:h-10 object-contain" />
                            <img src={productHuntLogo} alt="Product Hunt" className="h-8 md:h-10 object-contain" />
                            <img src={replitLogo} alt="Replit" className="h-8 md:h-10 object-contain rounded-full" />
                            <img src={webflowLogo} alt="Webflow" className="h-8 md:h-10 object-contain rounded-full" />
                            <img src={framerLogo} alt="Framer" className="h-8 md:h-10 object-contain rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </WavyBackground>
    )
}