import Image from "next/image";

export default function TechnologySection() {
    const technologies = [
        {
            name: "React",
            description:
                "A powerful JavaScript library for building fast and interactive user interfaces. React 18 introduces Concurrent Rendering for smoother updates.",
            icon: "/react-icon.svg",
        },
        {
            name: "Next.js",
            description:
                "A React framework for building SEO-friendly and high-performance web applications. Next.js 13 includes a new App Router and improved server components.",
            icon: "/next-icon.svg",
        },
        {
            name: "Node.js",
            description:
                "A runtime environment that allows you to build scalable and efficient server-side applications. Node.js 20 includes support for ESM modules and enhanced performance.",
            icon: "/node-icon.svg",
        },
        {
            name: "Express.js",
            description:
                "A minimalist web framework for Node.js, providing robust routing and middleware support. Known for flexibility and simplicity in building APIs.",
            icon: "/express-icon.svg",
        },
        {
            name: "MongoDB",
            description:
                "A flexible NoSQL database solution, ideal for modern and dynamic applications. MongoDB 7 includes columnstore indexing for faster analytics.",
            icon: "/mongo-icon.svg",
        },
        {
            name: "TypeScript",
            description:
                "A strongly typed superset of JavaScript for building large applications with confidence. TypeScript 5.3 offers enhanced type-checking and ESNext compatibility.",
            icon: "/typescript-icon.svg",
        },
        {
            name: "Tailwind CSS",
            description:
                "A utility-first CSS framework that provides rapid styling capabilities with flexibility and responsiveness.",
            icon: "/tailwind-icon.svg",
        },
        {
            name: "Vercel",
            description:
                "A platform to build, deploy, and manage containerized applications, ensuring consistency across environments.",
            icon: "/vercel-icon.svg",
        },
    ];

    return (
        <section className="py-16 bg-violet-100 dark:bg-darkBackground">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold dark:text-bgColor text-violet-600 mb-8">
                    Technologies We Use
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12">
                    Harnessing the latest and most reliable technologies to deliver cutting-edge
                    solutions tailored to your business needs.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gray-100 dark:bg-gray-200 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                        >
                            <div className="mb-6">
                                <Image
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    width={64}
                                    height={64}
                                    className="mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-violet-600 mb-2">{tech.name}</h3>
                            <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
