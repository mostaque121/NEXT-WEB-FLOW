import Image from 'next/image';

const services = [
    {
        title: "Web Design",
        description: "Crafting visually appealing, user-friendly, and responsive designs tailored to your brand.",
        icon: "/design-icon.svg", // Replace with your SVG path
    },
    {
        title: "Web Development",
        description: "Building fast, scalable, and feature-rich websites using the latest technologies.",
        icon: "/development-icon.svg", // Replace with your SVG path
    },
    {
        title: "SEO Optimization",
        description: "Optimizing your website to rank higher on search engines and attract organic traffic.",
        icon: "/seo-icon.svg", // Replace with your SVG path
    },
    {
        title: "E-Commerce Solutions",
        description: "Developing secure and scalable online stores to help grow your business.",
        icon: "/ecommerce-icon.svg", // Replace with your SVG path
    },
    {
        title: "Content Management",
        description: "Creating and managing dynamic content seamlessly with advanced CMS platforms.",
        icon: "/content-icon.svg", // Replace with your SVG path
    },
    {
        title: "Maintenance & Support",
        description: "Ensuring your website runs smoothly with regular updates and support.",
        icon: "/maintenance-icon.svg", // Replace with your SVG path
    },
];

export default function ServicesPage() {
    return (
        <div id='services' className="bg-violet-100 dark:bg-black mx-auto px-6 text-center py-16">
            <h2 className="sm:text-3xl text-2xl border-2 border-violet-600 dark:border-violet-300  dark:text-violet-300 inline-block px-5 py-2 rounded-full font-bold  text-violet-600 mb-6">
                Our Services
            </h2>
            <p className="text-center text-lg dark:text-violet-400 text-violet-700 mb-16">
                Explore our wide range of services designed to help you succeed online.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-16">
                {services.map((service, index) => (
                    <div key={index} className="p-6  bg-gray-50 dark:bg-darkBackground rounded-xl text-center shadow-sm hover:shadow-lg">
                        <Image
                            src={service.icon}
                            alt={service.title}
                            width={300}
                            height={200}
                            className="w-36 h-32 object-contain mx-auto mb-6"
                        />
                        <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-300 mb-4">{service.title}</h3>
                        <p className="text-violet-800 dark:text-gray-200">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
