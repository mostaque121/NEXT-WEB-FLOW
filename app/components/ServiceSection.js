import Image from "next/image";
import Link from "next/link";
export default function ServiceSection() {

    return (
        <div className=" px-6 py-16">
            <h2 className="text-4xl dark:text-violet-200 text-primaryTextBlack text-center font-bold leading-tight">
                Our Web Development Services
            </h2>
            <p className="text-lg md:text-xl text-primaryTextBlack dark:text-gray-200 text-center mb-12">
                We offer a range of services tailored to elevate your online presence.
            </p>
            <div className="flex md:flex-row md:items-center flex-col-reverse gap-8">
                <section className="w-full relative md:w-1/2">
                    <div className="container mx-auto text-center md:text-left">

                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="p-6 dark:bg-violet-200 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-2xl font-semibold dark:text-primaryTextBlack text-violet-500 mb-4">
                                    Custom Web Development
                                </h3>
                                <p className="text-gray-700">
                                    Build feature-rich and scalable websites tailored to your business.
                                </p>
                            </div>
                            <div className="p-6 dark:bg-violet-200 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-2xl font-semibold dark:text-primaryTextBlack text-violet-500 mb-4">
                                    E-commerce Solutions
                                </h3>
                                <p className="text-gray-700">
                                    Launch an online store with stunning design and seamless functionality.
                                </p>
                            </div>
                            <div className="p-6 dark:bg-violet-200 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <h3 className="text-2xl font-semibold dark:text-primaryTextBlack text-violet-500 mb-4">
                                    SEO Optimization
                                </h3>
                                <p className="text-gray-700">
                                    Enhance your website’s visibility on search engines to attract more traffic.
                                </p>
                            </div>
                            <div className="p-6 flex flex-col items-center gap-2 justify-center  bg-gray-100 dark:bg-violet-200 rounded-lg shadow-lg hover:shadow-2xl transform  transition-all duration-300">
                                <button className="bg-violet-500 w-full transition-all duration-200 ease-in-out dark:bg-violet-500 hover:dark:bg-violet-600 dark:text-white hover:bg-violet-600 hover:border-white border hover:scale-95 border-violet-500 text-white font-semibold py-3 px-6 rounded shadow-md">
                                    View All Service
                                </button>
                                <Link href={`#contact-form`} className="w-full">
                                    <button className="w-full transition-all duration-200 ease-in-out bg-white hover:border-violet-500 hover:text-violet-600 dark:bg-white dark:text-primaryTextBlack dark:border-violet-500 hover:scale-95 border border-violet-500 py-3 px-6 rounded font-semibold">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
                <div className='w-full relative flex-shrink-0 md:w-1/2'>
                    <Image
                        src="/service-section.svg"
                        alt="NEXT WEB FLOW Logo"
                        width={500}
                        height={500}
                        className="mx-auto w-2/3 h-auto"
                        priority
                    />
                </div>
            </div>
        </div>

    )
}