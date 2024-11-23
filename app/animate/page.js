import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Home() {
    return (
        <main className="min-h-screen p-24">
            <h1 className="text-4xl font-bold mb-8">Scroll Animation Demo</h1>

            {[...Array(10)].map((_, i) => (
                <AnimateOnScroll key={i} className="mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
                        <p className="text-gray-600">
                            This is an example section that will animate as you scroll down the page.
                            It demonstrates how we can easily add scroll-based animations to our Next.js application.
                        </p>
                    </div>
                </AnimateOnScroll>
            ))}
        </main>
    )
}