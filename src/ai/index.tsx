import Navigation from "../home/components/navigation";

export default function Ai() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                                AI Solutions
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                                Transform your business with intelligent automation, machine learning, and cutting-edge AI technologies that drive efficiency and innovation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="/pricing" 
                                    className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                                >
                                    Get Started
                                </a>
                                <a 
                                    href="/" 
                                    className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-12 flex items-center justify-center">
                                <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Services Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        AI Services We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Custom ML models for prediction, classification, and data analysis to uncover insights and automate decision-making processes.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Intelligent chatbots, sentiment analysis, and language understanding systems to enhance customer interactions and content processing.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Image recognition, object detection, and visual analysis systems for automated quality control and smart monitoring.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Automation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Intelligent workflow automation that reduces manual tasks, improves efficiency, and minimizes human error in business processes.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Advanced analytics and forecasting models to predict trends, optimize operations, and make data-driven business decisions.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Seamless integration of AI capabilities into existing systems and applications through APIs and custom solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        AI Technologies & Frameworks
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">TF</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">TensorFlow</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-bold text-sm">PT</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">PyTorch</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-bold text-sm">AI</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">OpenAI</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-sm">HF</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Hugging Face</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-sm">SK</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Scikit-learn</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600 font-bold text-sm">CV</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">OpenCV</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-sm">NL</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">spaCy</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                                <span className="text-pink-600 font-bold text-sm">LG</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">LangChain</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        AI Use Cases Across Industries
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Healthcare</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Medical image analysis and diagnosis
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Patient data analysis and treatment prediction
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Drug discovery and clinical trial optimization
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Finance</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Fraud detection and risk assessment
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Algorithmic trading and portfolio optimization
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Credit scoring and loan approval automation
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Retail & E-commerce</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Personalized product recommendations
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Inventory optimization and demand forecasting
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Customer service chatbots and support
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Manufacturing</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Predictive maintenance and equipment monitoring
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Quality control and defect detection
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Supply chain optimization and logistics
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
                        Ready to Harness the Power of AI?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Transform your business with intelligent AI solutions that drive efficiency, innovation, and competitive advantage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/pricing" 
                            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View AI Pricing
                        </a>
                        <a 
                            href="/" 
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Schedule Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}