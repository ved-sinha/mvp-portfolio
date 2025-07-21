import Hero from "./components/hero";
import Navigation from "./components/navigation";
import { AnimatedTextCards } from "./components/animatedTextCards";
import { TimelineSection } from "./components/timeline";
import { FAQ } from "./components/faq";
import WhyUs from "./components/why-us";
import { DrawCircleText } from "./components/feature2";
import PaymentSection from "./components/feature3";
import StatsSection from "./components/feature4";
import PricingCard from "./components/pricing";
export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <DrawCircleText />
            <PaymentSection />
            <StatsSection />
            <TimelineSection />
            <AnimatedTextCards />
            <WhyUs />
            <div id="pricing-section">
                <PricingCard />
            </div>
            <FAQ />
        </>
    )
}