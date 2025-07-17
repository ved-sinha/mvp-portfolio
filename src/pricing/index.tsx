import Navigation from "../home/components/navigation";

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

            {/* Pricing Plans */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter MVP</h3>
                                <p className="text-gray-600 mb-6">Perfect for validating your core idea quickly</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">$2,500</span>
                                    <span className="text-gray-600 ml-2">starting from</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Basic mobile app (iOS or Android)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Up to 5 screens/pages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Basic UI/UX design</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">21-day delivery guarantee</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Email support</span>
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-gray-900 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Professional Plan - Featured */}
                        <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-500 overflow-hidden relative hover:shadow-3xl transition-shadow duration-300">
                            <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                                Most Popular
                            </div>
                            <div className="p-8 pt-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Complex MVP</h3>
                                <p className="text-gray-600 mb-6">For sophisticated apps with advanced features</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">$7,500</span>
                                    <span className="text-gray-600 ml-2">starting from</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Cross-platform mobile app</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Up to 15 screens/pages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Custom UI/UX design</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Backend integration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">21-day delivery guarantee</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Priority support</span>
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-blue-500 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise MVP</h3>
                                <p className="text-gray-600 mb-6">For the most complex, AI-powered platforms</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">$15,000+</span>
                                    <span className="text-gray-600 ml-2">custom quote</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Full ecosystem (mobile + web + AI)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Unlimited screens/pages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">AI integration & automation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">Dedicated project manager</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">21-day delivery guarantee</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">24/7 dedicated support</span>
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-gray-900 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                    Contact Sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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