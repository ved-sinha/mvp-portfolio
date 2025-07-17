import Navigation from "../home/components/navigation";
import { IoLogoAndroid } from "react-icons/io5";

export default function AndroidApps() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                                Android App Development
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                                Build powerful Android applications that reach billions of users worldwide with modern Material Design and cutting-edge functionality.
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
                                    View Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-12 flex items-center justify-center">
                                <IoLogoAndroid className="h-32 w-32 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Android Development Excellence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Design</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Beautiful, intuitive interfaces following Google's Material Design principles for consistent and engaging user experiences.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Play Store Ready</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete Google Play Store optimization, compliance, and launch support to maximize your app's success and visibility.
                            </p>
                        </div>
                        
                        <div className="text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Compatibility</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Optimized for all Android devices, from phones to tablets, ensuring consistent performance across different screen sizes and Android versions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Modern Android Technologies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-bold text-sm">Kt</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Kotlin</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-sm">JC</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Jetpack Compose</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-sm">RM</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Room DB</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-sm">RT</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Retrofit</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-bold text-sm">FB</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Firebase</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-sm">VM</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">MVVM</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600 font-bold text-sm">ML</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">ML Kit</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
                                <span className="text-pink-600 font-bold text-sm">AR</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">ARCore</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Types Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Types of Android Apps We Build
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Feature-rich shopping apps with payment integration, inventory management, and seamless user experiences.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Engaging social platforms with real-time messaging, content sharing, and community features.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Productivity tools, CRM systems, and enterprise solutions that streamline business operations.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Entertainment Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Gaming, media streaming, and interactive entertainment applications with immersive experiences.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Learning platforms, training modules, and educational tools that make knowledge accessible and engaging.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location-Based Apps</h3>
                            <p className="text-gray-600 leading-relaxed">
                                GPS navigation, delivery tracking, and location-aware services with real-time mapping integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Launch Your Android App?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Join millions of successful Android apps in the Google Play Store. Let's build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/pricing" 
                            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View Pricing
                        </a>
                        <a 
                            href="/" 
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}