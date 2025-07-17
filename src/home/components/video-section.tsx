import videoFile from "../../assets/website-jitter.gif";

export default function VideoSection() {
    return (
        <section className="w-full py-16 dark:bg-gray-900">
            <div className="max-w-9xl mx-auto px-4">
                <div className="relative max-w-8xl mx-auto">
                    <div className="">
                        <img 
                            src={videoFile}
                            alt="Website development workflow demonstration"
                            className="w-full h-auto max-h-[1000px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 