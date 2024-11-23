
import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
    return (
        <section className="dark:bg-black bg-bgColor  relative">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 py-16">
                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl dark:text-[#f3dadf] text-primaryTextBlack md:text-6xl font-bold leading-tight">
                        Build <span className=" text-violet-500">Future-Ready</span> Websites
                        That Impress
                    </h1>
                    <p className="mt-6 text-lg dark:text-bgColor text-[#413b61]">
                        We create stunning, scalable, and SEO-optimized websites tailored
                        for your business success. Let us bring your vision to life.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                        <button className="bg-violet-500 transition-all w-full duration-200 ease-in-out dark:bg-violet-500 hover:dark:bg-violet-600 dark:text-white hover:bg-transparent hover:border-white border  border-violet-500 text-white font-semibold py-3 px-6 rounded shadow-md">
                            View Portfolio
                        </button>
                        <Link href={`#contact-form`} className="w-full">
                            <button className="border transition-all w-full duration-200 ease-in-out dark:border-none border-white hover:bg-transparent dark:bg-bgColor dark:text-primaryTextBlack bg-white hover:shadow-2xl hover:border-violet-500 hover:dark:bg-white hover:text-violet-600 py-3 px-6 rounded font-semibold">
                                Request A Quote
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full flex-shrink-0 md:w-1/2">
                    <Image
                        src="/web-dev.svg" // Replace with your image path
                        alt="Web Development"
                        width={500}
                        height={500}
                        className="mx-auto w-auto h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
