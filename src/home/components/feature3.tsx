import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PaymentSection() {
    return (
        <section className="px-4 pt-18 pb-24 text-black-900 bg-[#FAF9F7]">
            <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        No Results, <span className="text-violet-600">No Payment</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        We sprint together, share the risk, and you only pay if we deliver.
                    </p>
                </div>

                {/* 3 Cards in single row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {/* Card 1 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#0160EE]">
                        <CardHeader className="pb-4 pt-8">
                            <CardTitle className="text-7xl lg:text-8xl font-bold leading-none text-white">
                                50%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-8">
                            <CardDescription className="text-xl font-medium text-white">
                                pay upfront
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#FFA0CB]">
                        <CardHeader className="pb-4 pt-8">
                            <CardTitle className="text-7xl lg:text-8xl font-bold  leading-none text-white">
                                50%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-8">
                            <CardDescription className="text-xl font-medium text-white">
                                after delivery
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-sm bg-[#FECE00]">
                        <CardHeader className="pb-4 pt-8">
                            <CardTitle className="text-7xl lg:text-8xl font-bold leading-none text-white">
                                10%
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-8">
                            <CardDescription className="text-xl font-medium text-white">
                                Delay discount per week upto 50%
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
