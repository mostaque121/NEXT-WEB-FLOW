import {
    Award,
    Clock,
    Code,
    DollarSign,
    LifeBuoy,
    Users,
} from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            title: "Expertise & Experience",
            description:
                "With years of experience in web development, we deliver innovative solutions tailored to your needs.",
            icon: <Award className="w-12 h-12 text-black mx-auto mb-4" />,
        },
        {
            title: "Customer-Centric Approach",
            description:
                "We prioritize understanding your goals to ensure our solutions align perfectly with your vision.",
            icon: <Users className="w-12 h-12 text-black mx-auto mb-4" />,
        },
        {
            title: "Cutting-Edge Technologies",
            description:
                "We utilize the latest tools and frameworks to build future-proof and scalable applications.",
            icon: <Code className="w-12 h-12 text-black mx-auto mb-4" />,
        },
        {
            title: "Dedicated Support",
            description:
                "Our team is always available to provide assistance and ensure your project’s ongoing success.",
            icon: <LifeBuoy className="w-12 h-12 text-black mx-auto mb-4" />,
        },
        {
            title: "Cost Efficiency",
            description:
                "Our streamlined processes and optimized solutions ensure you get the best value for your investment.",
            icon: <DollarSign className="w-12 h-12 text-black mx-auto mb-4" />,
        },
        {
            title: "Time Efficiency",
            description:
                "We deliver projects on time without compromising quality, so you can focus on growing your business.",
            icon: <Clock className="w-12 h-12 text-black mx-auto mb-4" />,
        },
    ];

    return (
        <section className="py-16 bg-bgColor dark:bg-black text-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold dark:text-violet-200 text-primaryTextBlack mb-6">
                    Why Choose Us
                </h2>
                <p className="text-lg md:text-xl text-gray-900 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
                    Partner with us for a seamless and successful journey in the digital landscape. Here’s why
                    businesses trust us.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gray-50 dark:bg-violet-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            {reason.icon}
                            <h3 className="text-xl font-bold text-primaryTextBlack mb-4">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
