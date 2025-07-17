import Hero from "./components/hero";
import Navigation from "./components/navigation";
import VideoSection from "./components/video-section";
import { AnimatedTextCards } from "./components/animatedTextCards";
import { TimelineSection } from "./components/timeline";
import { TextReveal } from "./components/textReveal";
import { FAQ } from "./components/faq";
export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <VideoSection />
            <AnimatedTextCards />
            <TimelineSection />
            <TextReveal />
            <FAQ />
        </>
    )
}