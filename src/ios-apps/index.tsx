import Navigation from "../home/components/navigation";
import { FaApple } from "react-icons/fa6";

export default function IosApps() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                                iOS App Development
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                                Create stunning native iOS applications that deliver exceptional user experiences across all Apple devices.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl p-12 flex items-center justify-center">
                                <FaApple className="h-32 w-32 text-gray-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Why Choose Our iOS Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Native Performance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Built with Swift and SwiftUI for optimal performance, smooth animations, and native iOS feel that users love.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">App Store Ready</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We handle the entire App Store submission process, including optimization, review guidelines compliance, and launch strategy.
                            </p>
                        </div>
                        
                        <div className="text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Universal Design</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Responsive designs that work perfectly across all iOS devices - iPhone, iPad, and even Apple Watch compatibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Technologies We Use
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-lg">Swift</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Swift</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-lg">UI</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">SwiftUI</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-bold text-lg">CD</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Core Data</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-lg">CK</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">CloudKit</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-bold text-lg">FB</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Firebase</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-lg">RN</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">REST APIs</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600 font-bold text-lg">ML</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">CoreML</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                                <span className="text-pink-600 font-bold text-lg">AR</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">ARKit</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Our iOS Development Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We analyze your requirements, target audience, and create detailed wireframes and user journey maps.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Create beautiful, intuitive designs following Apple's Human Interface Guidelines for optimal user experience.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Build your app using native iOS technologies with clean, maintainable code and regular progress updates.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Comprehensive testing across multiple iOS devices and versions to ensure perfect functionality.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">5</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">App Store Launch</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Handle App Store submission, optimization, and launch strategy to maximize visibility and downloads.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">6</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Support & Updates</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ongoing maintenance, updates, and feature enhancements to keep your app current and competitive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Your iOS App?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Let's create an iOS app that stands out in the App Store and delights your users.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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