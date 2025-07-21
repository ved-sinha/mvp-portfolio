import Navigation from "../home/components/navigation";
import PricingCard from "../home/components/pricing";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                        MVP Pricing That Scales
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        From simple prototypes to complex AI-powered platforms—all delivered in 21 days. Choose the plan that matches your ambition.
                    </p>
                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <div className="flex items-center text-green-600">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">21-Day Guarantee</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Complex Tech Ready</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Liquid Glass Pricing Card */}
            <section className="py-16 md:py-20">
                <PricingCard />
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                What's included in the project scope?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Each package includes design, development, testing, and deployment. We also provide project documentation, source code, and deployment guides. Additional features can be added as needed.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                How do you deliver complex MVPs in just 21 days?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our proven process combines rapid prototyping, experienced teams, and pre-built components. We focus on core functionality first, then layer in complexity. Even our most sophisticated AI and blockchain projects are delivered in 21 days.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Do you provide ongoing maintenance?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Yes! We offer maintenance packages starting at $500/month for basic support and updates. Enterprise clients receive dedicated support as part of their package.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Can I upgrade my plan later?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Absolutely! You can upgrade your project scope at any time. We'll provide a clear quote for additional features and adjust timelines accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Book a free consultation to discuss your project and get a detailed quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/" 
                            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Book Free Consultation
                        </a>
                        <a 
                            href="/services" 
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}