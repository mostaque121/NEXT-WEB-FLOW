/* eslint-disable react/no-unescaped-entities */
import ContactForm from '@/components/ContactForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ServiceHero from './components/ServiceHero'
import ServicesPage from './components/ServiceTypes'
import WebsiteTypesPage from './components/WebsiteTypes'
export default function Page() {
    return (
        <div className='max-w-7xl mx-auto'>
            <ServiceHero />
            <ServicesPage />
            <WebsiteTypesPage />
            <div className=" bg-violet-100  dark:bg-black text-center py-16 px-4">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                    Let’s Build Something Amazing Together
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                    Have a project in mind? Whether it's a portfolio, e-commerce, or a unique custom solution, we can bring your vision to life.
                    Let's start the conversation and turn ideas into reality.
                </p>
                <Button asChild size="lg" className="rounded-full text-white hover:bg-transparent border-violet-500 border-2 transition-all duration-200 hover:text-violet-500 bg-violet-500">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>

            <ContactForm />
        </div>
    )
}