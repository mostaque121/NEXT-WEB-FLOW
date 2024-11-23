import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceHero() {
    return (
        <section className="relative bg-gray-100 dark:bg-darkBackground py-20 px-10">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-violet-500 text-primaryTextBlack">
                        Elevate Your Online Presence with Our Web Development Services
                    </h1>
                    <p className="text-lg dark:text-gray-200 text-gray-800">
                        From custom web design to robust development, SEO optimization, and beyond, we offer comprehensive solutions to take your business online.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Button asChild size="lg" className="bg-violet-500 border border-violet-500 text-white hover:bg-transparent hover:text-violet-500 transition-all duration-300">
                            <a href="#services">Explore Our Services</a>
                        </Button>
                        <Button asChild size="lg" className="bg-transparent border border-violet-600 dark:border-gray-200 text-violet-600 dark:text-gray-200 hover:bg-violet-500 hover:text-white hover:dark:bg-white hover:dark:shadow-2xl hover:dark:shadow-white hover:dark:text-primaryTextBlack transition-all duration-300">
                            <a href="/contact">Contact Us</a>
                        </Button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2">
                    <Image
                        src="/service-hero-icon.svg"
                        alt="Web development services illustration"
                        width={500}
                        height={400}
                        className="mx-auto md:w-2/3 md:h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
