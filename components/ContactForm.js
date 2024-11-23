import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="bg-gray-100 dark:bg-darkBackground px-6 py-16">
      <h2 className="text-4xl dark:text-violet-200 text-primaryTextBlack text-center font-bold leading-tight">Get in Touch</h2>
      <section id="contact-form" className="flex flex-col md:flex-row items-center justify-between py-12 md:px-16">

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/contact-us.svg"
            alt="Contact us illustration"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white dark:bg-violet-200 shadow-md rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Phone
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white font-medium py-2 px-4 rounded-md hover:bg-violet-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>

  );
}
