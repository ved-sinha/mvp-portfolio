import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PaymentSection() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Offer",
                        "name": "MVP Development Service",
                        "description": "Fast MVP development with flexible payment structure",
                        "seller": {
                            "@type": "Organization",
                            "name": "WorkflowAI"
                        },
                        "price": "5000",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock",
                        "paymentTerms": "50% upfront, 50% after delivery"
                    })
                }}
            />
            <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-black-900 bg-[#FAF9F7]">
            <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
                        No Results, <span className="text-violet-600">No Payment</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                        We sprint together, share the risk, and you only pay if we deliver.
                    </p>
                </div>

                {/* 3 Cards responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                    {/* Card 1 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#0160EE] sm:col-span-1">
                        <CardHeader className="pb-3 sm:pb-4 pt-6 sm:pt-8">
                            <CardTitle className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-white">
                                50%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-6 sm:pb-8">
                            <CardDescription className="text-base sm:text-lg md:text-xl font-medium text-white">
                                pay upfront
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#FFA0CB] sm:col-span-1">
                        <CardHeader className="pb-3 sm:pb-4 pt-6 sm:pt-8">
                            <CardTitle className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-white">
                                50%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-6 sm:pb-8">
                            <CardDescription className="text-base sm:text-lg md:text-xl font-medium text-white">
                                after delivery
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#FECE00] sm:col-span-2 md:col-span-1">
                        <CardHeader className="pb-3 sm:pb-4 pt-6 sm:pt-8">
                            <CardTitle className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-white">
                                10%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-6 sm:pb-8">
                            <CardDescription className="text-base sm:text-lg md:text-xl font-medium text-white">
                                Delay discount per week upto 50%
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        </>
    )
}
