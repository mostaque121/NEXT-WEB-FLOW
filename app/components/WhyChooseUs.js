import {
    Award,
    Code,
    LifeBuoy,
    Users
} from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
    const reasons = [
        {
            title: "Expertise & Experience",
            description: "Years of experience delivering tailored, innovative solutions.",
            icon: <Award className="w-16 h-16 md:w-20 md:h-20  dark:text-violet-500 mx-auto p-2" />,
        },
        {
            title: "Customer-Centric Approach",
            description: "We align every solution perfectly with your unique vision.",
            icon: <Users className="w-16 h-16 md:w-20 md:h-20  dark:text-violet-500 mx-auto p-2" />,
        },
        {
            title: "Cutting-Edge Technologies",
            description: "Building scalable, future-proof apps with the latest tools.",
            icon: <Code className="w-16 h-16 md:w-20 md:h-20  dark:text-violet-500 mx-auto p-2" />,
        },
        {
            title: "Dedicated Support",
            description: "Always here to ensure smooth and successful project delivery.",
            icon: <LifeBuoy className="w-16 h-16 md:w-20 md:h-20  dark:text-violet-500 mx-auto p-2" />,
        },
    ];

    return (
        <section className="py-16 bg-gray-200 dark:bg-black text-gray-800">
            <div className=" mx-auto text-center">
                <h2 className="sm:text-3xl text-2xl border-2 border-primaryTextBlack dark:border-violet-500 dark:text-violet-500 inline-block px-5 py-2 rounded-full font-bold  text-primaryTextBlack mb-6">
                    Why Choose Us
                </h2>
                <p className="text-lg md:text-xl text-gray-900 dark:text-violet-200 px-6 mb-12 max-w-3xl mx-auto">
                    Partner with us for a seamless and successful journey in the digital landscape. Here’s why
                    businesses trust us.
                </p>
                <div>
                    <div className="flex flex-col md:flex-row items-center gap-5 justify-between  md:px-16">
                        <div className="w-full md:w-1/3 mb-8 md:mb-0">
                            <Image
                                src='/multitask-icon.svg'
                                alt="multitasking" width={600}
                                height={400}
                                className="w-2/3 mx-auto md:w-full h-auto"
                                priority />
                        </div>
                        <div className="w-full md:w-2/3 grid md:grid-cols-2 gap-2">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="p-3  flex items-start rounded-lg"
                                >
                                    <div className="border-r-4 border-b-4 border-l  border-t-violet-500 border-l-violet-500 border-t border-black dark:border-violet-500">
                                        {reason.icon}
                                    </div>

                                    <div className="px-3">
                                        <h3 className="md:text-lg font-semibold text-left dark:text-white text-primaryTextBlack ">{reason.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-200 text-left text-sm">{reason.description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
