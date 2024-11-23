import Image from "next/image";

export default function TechnologySection() {
    const technologies = [
        {
            name: "React",
            description: "A library for building fast, interactive user interfaces with modern features like Concurrent Rendering.",
            icon: "/react-icon.svg",
        },
        {
            name: "Next.js",
            description: "A React framework for building SEO-friendly and high-performance web apps with advanced server components.",
            icon: "/next-icon.svg",
        },
        {
            name: "Express.js",
            description: "A lightweight Node.js framework for flexible API development and robust routing.",
            icon: "/express-icon.svg",
        },
        {
            name: "MongoDB",
            description: "A NoSQL database for modern applications, offering flexibility and fast analytics.",
            icon: "/mongo-icon.svg",
        },
        {
            name: "Tailwind CSS",
            description: "A utility-first CSS framework for rapid styling with flexibility and responsiveness.",
            icon: "/tailwind-icon.svg",
        },
    ];


    return (
        <div className="py-16 bg-violet-100 text-center dark:bg-darkBackground">
            <h2 className="sm:text-3xl text-2xl border-2 border-primaryTextBlack dark:border-violet-500 dark:text-violet-500 inline-block px-5 py-2 rounded-full font-bold  text-primaryTextBlack mb-6">
                Technologies We Use
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl px-6 mx-auto mb-12">
                Harnessing the latest and most reliable technologies to deliver cutting-edge
                solutions tailored to your business needs.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 justify-between  md:px-16">
                <div className="w-full md:w-2/3 grid md:grid-cols-2 gap-2">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="p-3  flex items-start rounded-lg"
                        >
                            <div className="border-r-4 dark:bg-violet-100 border-b-4 p-3 border-l border-t border-violet-500">
                                <div className="w-12 md:w-16 md:h-16 h-12">
                                    <Image
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        width={200}
                                        height={200}
                                        className="mx-auto w-full h-full"
                                    />
                                </div>

                            </div>

                            <div className="px-3">
                                <h3 className="md:text-lg font-semibold text-left dark:text-white text-primaryTextBlack ">{tech.name}</h3>
                                <p className="text-gray-600 dark:text-gray-200 text-left text-sm">{tech.description}</p>
                            </div>

                        </div>
                    ))}
                    <div>

                        <div className="p-3  flex flex-col items-start rounded-lg">
                            <h3 className="md:text-lg font-semibold text-left dark:text-white text-primaryTextBlack ">And Many More</h3>
                            <p className="text-gray-600 dark:text-gray-200 text-left text-sm">Explore a wide range of modern tools and frameworks designed to boost development efficiency.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mb-8 text-red-400 md:mb-0">
                    <Image
                        src='/developer-icon.svg'
                        alt="multitasking" width={600}
                        height={400}
                        className="w-2/3 mx-auto text-red-400 md:w-full h-auto"
                        priority />
                </div>
            </div>
        </div>


    );
}
