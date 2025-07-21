import Navigation from "../home/components/navigation";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                        The MVP Specialists
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We're not just another development agency. We're the team that turns your most ambitious ideas into market-ready MVPs in exactly 21 days, no matter how complex.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our 21-Day Promise
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                In a world where time-to-market determines success, we've perfected the art of rapid MVP development. Our 21-day guarantee isn't just a marketing promise—it's our proven methodology refined through 200+ successful launches.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From AI-powered platforms to blockchain applications, from IoT solutions to complex marketplaces—we've mastered the balance between speed and sophistication that makes or breaks startup dreams.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-semibold mb-6">The Complex MVP Challenge</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <span className="text-sm font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Speed vs Quality</h4>
                                            <p className="text-sm opacity-90">Most agencies choose one. We deliver both.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <span className="text-sm font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Technical Complexity</h4>
                                            <p className="text-sm opacity-90">We thrive on challenges others avoid.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <span className="text-sm font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Market Validation</h4>
                                            <p className="text-sm opacity-90">Built for real user feedback, not just demo day.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        What Makes Us Different
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Execution</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our battle-tested 21-day framework turns complex requirements into working software faster than traditional development cycles.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Tech Mastery</h3>
                            <p className="text-gray-600 leading-relaxed">
                                AI, blockchain, IoT, machine learning—we've built MVPs across every cutting-edge technology stack you can imagine.
                            </p>
                        </div>
                        
                        <div className="text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Validation-Ready</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every MVP we build is designed for real user testing, market validation, and iterative improvement—not just investor demos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
                            <div className="text-gray-600">MVPs Launched</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">21</div>
                            <div className="text-gray-600">Day Guarantee</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">85%</div>
                            <div className="text-gray-600">Funding Success</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15+</div>
                            <div className="text-gray-600">Tech Stacks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Approach Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        How We Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 1: Foundation</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Requirements deep-dive
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Architecture design
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Core feature prioritization
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 2: Development</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Rapid prototyping
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Core functionality build
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Daily progress reviews
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 3: Launch</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Testing & refinement
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Deployment setup
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Market-ready launch
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Launch Your Complex MVP?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Don't let complexity slow you down. Get your sophisticated idea to market in 21 days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start Your MVP Project
                        </a>
                        <a 
                            href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Book Strategy Call
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}