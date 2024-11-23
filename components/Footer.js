import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About Us Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
                    <p className="text-sm">
                        We specialize in delivering cutting-edge web development solutions tailored to meet
                        your business needs. Our commitment to innovation drives everything we do.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                            <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                            123 WebDev Street, Innovation City
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-5 h-5 mr-3 text-blue-500" />
                            info@webdev.com
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 text-blue-500" />
                            +1 234 567 890
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:text-white">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-white">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2024 WebDev Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
}
