"use client";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { motion } from "motion/react";
import { useState } from "react";

// Import images
import ideatoexecution from "../../assets/ideatoexecution.jpg";
import realengineers from "../../assets/realengineers.jpg";
import core from "../../assets/core.jpg";
import clarity from "../../assets/clarity.jpg";
import designDev from "../../assets/design-dev.jpg";
import launch from "../../assets/launch.jpg";

const whyUsData = [
  {
    id: "engineers",
    title: "Built by Real Engineers",
    subtitle: "We’re not just a bunch of freelancers stitched together. Every product we build comes from years of real engineering work — writing, breaking, fixing, and shipping code across stacks. We care about what we build. We ask questions, we think through edge cases, and we don’t cut corners. We're not in this just to check boxes or finish tickets. We’re in this because we genuinely enjoy building things. Honestly, even if no one paid us, we'd still be up at night writing code for fun.",
    description: "",
    color: "bg-black",
    image: realengineers
  },
  {
    id: "execution",
    title: "Idea to Execution, Fast",
    subtitle: "We take your idea and turn it into something real in just 21 days. Nothing fancy — just clear communication, quick decisions, and solid execution. We don’t overthink or overcomplicate things. We figure out what matters, and we build it fast. Founders like working with us because we actually listen, we move quickly, and we don’t waste their time. We care about speed, because momentum creates clarity. And we’re hoping you’re just as hungry to get things out into the world.",
    description: "",
    color: "bg-blue-500",
    image: ideatoexecution
  },
  {
    id: "core",
    title: "No Bloat, Just Core Features",
    subtitle: "We don’t add anything you don’t need, and we don’t waste your time chasing features that don’t serve your users. What you get is lean, focused, and built for validation, not vanity. We care about shipping things that work, not bloated products no one uses. Every decision is intentional, every feature has a reason. That’s how we move fast and help you find traction early. You’ll get exactly what’s needed to launch, learn, and grow, nothing more, nothing less.",
    color: "bg-black",
    image: core
  },
  {
    id: "clarity",
    title: "Clarity on Scope",
    subtitle: "We make things clear from the start. You’ll know what’s included and what’s not. No weird surprises later. Before we begin, we sit down, talk through what matters, and agree on exactly what we’re building. That way, there’s no second-guessing or scope creep halfway through. You’ll always know where things stand and what to expect. It’s just easier that way — for you and for us.",
    color: "bg-purple-500",
    image: clarity
  },
  {
    id: "design",
    title: "Design + Dev Included",
    subtitle: "You do not need to juggle three different teams for design, development, and product thinking. We handle everything in one place. That means the same team is thinking about your users, designing the interface, and writing the code to bring it all to life. No handoffs, no miscommunication, no delays. Just a tight feedback loop and one clear direction from start to finish. It is faster, smoother, and way less stressful for everyone involved.",
    description: "We do the UX, UI, and code — all under one roof.",
    color: "bg-pink-500",
    image: designDev
  },
  {
    id: "support",
    title: "Post-Launch Support",
    subtitle: "After we launch your product, we do not disappear. You get two full weeks of support to catch anything unexpected, make small adjustments, or polish up the details. This is the time to tighten things, smooth out rough edges, and make sure everything feels right. We stay close, listen to feedback, and help you go from launch to live with confidence. It is part of the process, and we are here to make sure your product actually works in the real world.",
    description: "",
    color: "bg-indigo-500",
    image: launch
  }
];

export default function WhyUs() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="min-h-screen py-20 px-4 flex items-center bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 via-gray-600 to-gray-900 bg-clip-text text-transparent mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're not just another agency. We're your strategic partner in digital transformation, 
            delivering exceptional results that drive real business growth.
          </motion.p>
        </div>

        {/* Chips Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {whyUsData.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCard(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCard === index
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {item.title.split(',')[0]}
            </motion.button>
          ))}
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeCard * 100}%)` }}
          >
            {whyUsData.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0.3, 
                    scale: activeCard === index ? 1 : 0.95 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <BackgroundGradient className="w-full h-full">
                    <Card className={`w-full min-h-[500px] bg-gradient-to-br ${item.color} border-0 shadow-2xl overflow-hidden relative`}>
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/20"></div>
                      </div>
                      
                      <CardHeader className="pb-6 pt-12 relative z-10">
                        <CardTitle className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-xl text-white/90 font-medium mb-4">
                          {item.subtitle}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-12 relative z-10">
                        {item.description && (
                          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                            {item.description}
                          </p>
                        )}
                        
                        {/* CTA Button */}
                        <motion.a
                          href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block mt-8 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Learn More
                        </motion.a>
                      </CardContent>
                    </Card>
                  </BackgroundGradient>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {whyUsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index ? 'bg-gray-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
