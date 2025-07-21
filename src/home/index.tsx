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
            <header>
                <Navigation />
            </header>
            <main>
                <Hero />
                <section aria-label="MVP Development Services">
                    <DrawCircleText />
                </section>
                <section aria-label="Payment Structure">
                    <PaymentSection />
                </section>
                <section aria-label="Company Statistics">
                    <StatsSection />
                </section>
                <section aria-label="Development Timeline">
                    <TimelineSection />
                </section>
                <section aria-label="Company Introduction">
                    <AnimatedTextCards />
                </section>
                <section aria-label="Why Choose Us">
                    <WhyUs />
                </section>
                <section id="pricing-section" aria-label="Pricing Information">
                    <PricingCard />
                </section>
                <section aria-label="Frequently Asked Questions">
                    <FAQ />
                </section>
            </main>
        </>
    )
}