import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const websiteTypes = [
    {
        title: "E-commerce Websites",
        description: "Powerful online stores with secure payment gateways, product management, and inventory tracking.",
        image: "/ecommerce-icon.svg",
        features: ["Product Catalogs", "Shopping Cart", "Secure Checkout", "Order Management"]
    },
    {
        title: "Corporate Websites",
        description: "Professional websites that represent your brand, showcase services, and provide company information.",
        image: "/corporate-icon.svg",
        features: ["Responsive Design", "Service Showcases", "Team Profiles", "Contact Forms"]
    },
    {
        title: "Portfolio Websites",
        description: "Elegant websites to showcase your work, attract clients, and highlight your skills and achievements.",
        image: "/portfolio-icon.svg",
        features: ["Project Galleries", "Case Studies", "Testimonials", "About Me Sections"]
    },
    {
        title: "Blog Websites",
        description: "Content-focused websites with easy-to-use CMS for publishing articles, news, and media content.",
        image: "/blog-icon.svg",
        features: ["Content Management", "Commenting Systems", "Social Sharing", "SEO Optimization"]
    },
    {
        title: "Educational Websites",
        description: "Interactive learning platforms with course management, student tracking, and multimedia content delivery.",
        image: "/education-icon.svg",
        features: ["Course Catalogs", "Student Dashboards", "Quiz Systems", "Progress Tracking"]
    },
    {
        title: "Membership Websites",
        description: "Exclusive content platforms with user registration, login systems, and access control.",
        image: "/membership-icon.svg",
        features: ["User Authentication", "Member Profiles", "Subscription Management", "Private Content Areas"]
    }
];

export default function WebsiteTypesPage() {
    return (
        <div className="dark:bg-darkBackground mx-auto px-4 md:px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Types of Websites We Create</h1>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                From e-commerce platforms to corporate sites, we build tailored web solutions to meet your specific needs.
            </p>


            <div className="grid gap-5 md:grid-cols-2 md:px-16 lg:grid-cols-3">
                {websiteTypes.map((type, index) => (
                    <WebsiteTypeCard key={index} {...type} />
                ))}
            </div>
        </div>
    );
}

function WebsiteTypeCard({ title, description, image, features }) {
    return (
        <Card className="flex dark:bg-black bg-gray-50 border-none flex-col">
            <CardHeader>
                <div className="h-64 w-full">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="rounded-lg object-contain w-full h-full"
                    />
                </div>

            </CardHeader>
            <CardContent className="flex-grow ">
                <CardTitle className="text-xl mb-2">{title}</CardTitle>
                <CardDescription className="mb-4">{description}</CardDescription>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </CardContent>

        </Card>
    );
}
