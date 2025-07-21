"use client"

import { useState } from "react"
import { Menu, MenuItem } from "../../components/ui/navbar-menu";
import { NavigationCardGrid } from "../../components/ui/navigation-cards-enhanced";
import { cn } from "../../../lib/utils";
import { FaApple } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

export default function Navigation() {
    return (
        <div className="relative w-full px-4 md:w-[80%] md:px-0 mx-auto">
            <Navbar className="top-2"/>
        </div>
    )
}

function Navbar({className}: {className?: string}) {
    const [active, setActive] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    return (
        <div className={cn("fixed top-4 md:top-10 inset-x-0 z-[100] px-4 md:px-0", className)}>
            <div className="relative">
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <Menu setActive={setActive}>
                        <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-row items-center space-x-20">
                                <a href="/" className="text-2xl font-bold text-black" title="WorkflowAI - Fast MVP Development">WorkflowAI</a>
                                <a href="/about-us" className="cursor-pointer text-black hover:opacity-[0.9] dark:text-black" title="Learn more about WorkflowAI team and mission">
                                    About Us
                                </a>
                                <MenuItem setActive={setActive} active={active} item="Services">
                                    <NavigationCardGrid 
                                        cards={[
                                            {
                                                title: "iOS Apps",
                                                description: "Native iOS applications with modern design",
                                                href: "/ios-apps",
                                                color: "bg-white",
                                                icon: <FaApple className="h-8 w-8 text-gray-800" />,
                                            },
                                            {
                                                title: "Android Apps",
                                                description: "Cross-platform Android solutions",
                                                href: "/android-apps",
                                                color: "bg-green-500",
                                                icon: <IoLogoAndroid className="h-8 w-8 text-white" />,
                                            },
                                            {
                                                title: "AI Solutions",
                                                description: "Intelligent automation and AI integration",
                                                href: "/ai",
                                                color: "bg-purple-500",
                                                icon: "openai",
                                            },
                                            {
                                                title: "Web Development",
                                                description: "Modern web applications and sites",
                                                href: "/web",
                                                color: "bg-gray-100",
                                                icon: <GrPersonalComputer className="h-8 w-8 text-gray-800" />,
                                            },
                                        ]}
                                        title="Our Services"
                                        description="Explore our comprehensive development solutions"
                                        layout="grid"
                                        variant="default"
                                        showBorder={false}
                                        background="white"
                                        fullWidth={true}
                                        containerClassName="bg-white dark:bg-black backdrop-blur-sm rounded-b-2xl border-x border-b border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                                        style={{ width: '100vw', margin: 0, padding: '1.5rem', borderTop: 'none' }}
                                    />
                                </MenuItem>
                                <button 
                                    onClick={() => {
                                        const pricingSection = document.getElementById('pricing-section');
                                        if (pricingSection) {
                                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="cursor-pointer text-black hover:opacity-[0.9] dark:text-black"
                                >
                                    Pricing
                                </button>
                            </div>
                            <a href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">Book a Call</a>
                        </div>
                    </Menu>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <nav className="relative bg-white flex items-center justify-between px-4 py-4 max-w-7xl mx-auto rounded-lg shadow-md">
                        <a href="/" className="text-xl font-bold text-black">WorkflowAI</a>
                        
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
                            aria-label="Toggle menu"
                        >
                            <span className={cn(
                                "w-6 h-0.5 bg-black transition-all duration-300",
                                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                            )}></span>
                            <span className={cn(
                                "w-6 h-0.5 bg-black transition-all duration-300",
                                mobileMenuOpen ? "opacity-0" : ""
                            )}></span>
                            <span className={cn(
                                "w-6 h-0.5 bg-black transition-all duration-300",
                                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            )}></span>
                        </button>
                    </nav>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                            <div className="py-2">
                                <a 
                                    href="/about-us" 
                                    className="block px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About Us
                                </a>
                                
                                {/* Services Expandable Section */}
                                <div className="border-t border-gray-100">
                                    <div className="px-4 py-3 text-black font-medium">Services</div>
                                    <div className="bg-gray-50">
                                        <a 
                                            href="/ios-apps" 
                                            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <FaApple className="h-4 w-4 mr-3 text-gray-600" />
                                            iOS Apps
                                        </a>
                                        <a 
                                            href="/android-apps" 
                                            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <IoLogoAndroid className="h-4 w-4 mr-3 text-green-600" />
                                            Android Apps
                                        </a>
                                        <a 
                                            href="/ai" 
                                            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div className="h-4 w-4 mr-3 bg-purple-500 rounded"></div>
                                            AI Solutions
                                        </a>
                                        <a 
                                            href="/web" 
                                            className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <GrPersonalComputer className="h-4 w-4 mr-3 text-gray-600" />
                                            Web Development
                                        </a>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => {
                                        const pricingSection = document.getElementById('pricing-section');
                                        if (pricingSection) {
                                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        setMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-3 text-black hover:bg-gray-50 transition-colors border-t border-gray-100"
                                >
                                    Pricing
                                </button>
                                
                                <div className="border-t border-gray-100 p-4">
                                    <a 
                                        href="https://cal.com/ved-sinha-ai-mvp/30min?overlayCalendar=true" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-black text-white text-center px-4 py-3 rounded-full hover:bg-gray-800 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Book a Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}