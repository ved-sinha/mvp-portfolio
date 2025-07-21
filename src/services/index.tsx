import Navigation from "../home/components/navigation";
import { FaApple } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

export default function Services() {
    return (
        <div className="min-h-screen bg-white mt-10">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
                        Complex MVP Development
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We don't just build basic prototypes. We create sophisticated, market-ready MVPs that handle real-world complexity—delivered in exactly 21 days.
                    </p>
                </div>
            </section>

            {/* MVP Services Grid */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* AI-Powered MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Machine learning models, NLP systems, computer vision, and intelligent automation integrated into user-friendly MVPs.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Custom ML Model Integration
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Real-time AI Processing
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Scalable AI Architecture
                                    </li>
                                </ul>
                                <a href="/ai" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start AI MVP
                                </a>
                            </div>
                        </div>

                        {/* Mobile App MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                <div className="flex space-x-4">
                                    <FaApple className="h-12 w-12 text-white" />
                                    <IoLogoAndroid className="h-12 w-12 text-white" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Native iOS and Android apps with complex features like real-time sync, payment processing, and advanced user flows.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Cross-Platform Development
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Advanced User Authentication
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Real-time Data Sync
                                    </li>
                                </ul>
                                <a href="/ios-apps" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start Mobile MVP
                                </a>
                            </div>
                        </div>

                        {/* Blockchain & Web3 MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain & Web3 MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    DeFi platforms, NFT marketplaces, crypto wallets, and smart contract applications with production-ready security.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Smart Contract Development
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Multi-Chain Integration
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Security Auditing
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start Web3 MVP
                                </a>
                            </div>
                        </div>

                        {/* IoT & Hardware MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">IoT & Hardware MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Connected devices, sensor networks, edge computing solutions with cloud integration and real-time monitoring.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Device Connectivity
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Cloud Data Pipeline
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Real-time Monitoring
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start IoT MVP
                                </a>
                            </div>
                        </div>

                        {/* SaaS Platform MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <GrPersonalComputer className="h-16 w-16 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">SaaS Platform MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Multi-tenant platforms with advanced dashboards, user management, billing systems, and enterprise integrations.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Multi-tenant Architecture
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Subscription Management
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Advanced Analytics
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start SaaS MVP
                                </a>
                            </div>
                        </div>

                        {/* Marketplace MVPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketplace MVPs</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Two-sided platforms with payment processing, vendor management, rating systems, and complex matching algorithms.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Payment Processing
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Vendor Management
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Matching Algorithms
                                    </li>
                                </ul>
                                <a href="/" className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Start Marketplace MVP
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 21-Day Process Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Our Proven 21-Day MVP Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-blue-600">Days 1-5</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategy & Architecture</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Deep requirements analysis, technical architecture design, and MVP scope definition with stakeholder alignment.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-green-600">Days 6-14</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Rapid Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Core feature development using proven frameworks, daily standups, and continuous client feedback integration.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-purple-600">Days 15-19</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing & Refinement</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Comprehensive testing, performance optimization, security hardening, and user experience refinement.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-orange-600">Days 20-21</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Launch & Handover</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Production deployment, documentation delivery, team training, and ongoing support setup.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Why Complex MVPs Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Traditional Agencies vs Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">3-6 month timelines</h4>
                                        <p className="text-sm text-gray-600">By the time they deliver, market opportunities are gone</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Avoid complex projects</h4>
                                        <p className="text-sm text-gray-600">Most agencies say "no" to technically challenging ideas</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Demo-focused builds</h4>
                                        <p className="text-sm text-gray-600">Beautiful prototypes that can't handle real users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Approach</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Guaranteed 21-day delivery</h4>
                                        <p className="text-sm text-gray-600">Market-ready MVP while the opportunity is hot</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Complex tech specialists</h4>
                                        <p className="text-sm text-gray-600">AI, blockchain, IoT - we thrive on technical challenges</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Production-ready from day one</h4>
                                        <p className="text-sm text-gray-600">Built to scale with real users, not just impress investors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Your Complex MVP?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Don't let technical complexity or tight timelines stop your vision. Let's turn your ambitious idea into a market-ready MVP in 21 days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/#pricing-section" 
                            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            View MVP Pricing
                        </a>
                        <a 
                            href="/" 
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