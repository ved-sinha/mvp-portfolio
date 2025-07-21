import Navigation from "../home/components/navigation";
import { GrPersonalComputer } from "react-icons/gr";

export default function WebDevelopment() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Modern Web Development
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                                Build powerful web applications that scale, perform, and deliver exceptional user experiences across all devices and platforms.
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
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 flex items-center justify-center">
                                <GrPersonalComputer className="h-32 w-32 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Why Choose Our Web Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast Performance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Optimized for speed with modern frameworks, efficient code, and CDN integration for blazing-fast load times.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsive Design</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mobile-first approach ensuring perfect functionality and beautiful design across all devices and screen sizes.
                            </p>
                        </div>
                        
                        <div className="text-center md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Scalable</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enterprise-grade security, cloud-native architecture, and scalable infrastructure to grow with your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Modern Web Technologies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-lg">R</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">React</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-bold text-lg">N</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Next.js</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-lg">T</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">TypeScript</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <span className="text-yellow-600 font-bold text-lg">N</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Node.js</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-bold text-lg">T</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Tailwind CSS</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-lg">P</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">PostgreSQL</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-orange-600 font-bold text-lg">A</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">AWS</h4>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-gray-600 font-bold text-lg">D</span>
                            </div>
                            <h4 className="font-semibold text-gray-900">Docker</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Web App Types Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Types of Web Applications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Platforms</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Full-featured online stores with payment processing, inventory management, and customer analytics.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">SaaS Applications</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Scalable software-as-a-service platforms with subscription management and multi-tenant architecture.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Dashboards</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Real-time analytics dashboards with data visualization, reporting tools, and KPI tracking.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Custom CMS solutions with advanced content editing, workflow management, and SEO optimization.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Platforms</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Interactive educational platforms with course management, progress tracking, and multimedia content.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">API-First Applications</h3>
                            <p className="text-gray-600 leading-relaxed">
                                RESTful APIs and microservices architecture for scalable, maintainable web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                        Our Web Development Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We analyze your requirements, user needs, and create detailed wireframes and technical specifications.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Create beautiful, intuitive designs with modern UI patterns and seamless user experiences.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Build responsive, interactive interfaces using modern frameworks and best practices.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend Development</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Develop robust APIs, database architecture, and server-side logic for optimal performance.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">5</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Testing & Deployment</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Comprehensive testing across browsers and devices, followed by cloud deployment and optimization.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">6</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance & Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ongoing maintenance, updates, security patches, and performance monitoring for your web application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Your Web Application?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                        Let's create a powerful, scalable web application that drives your business forward and delights your users.
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