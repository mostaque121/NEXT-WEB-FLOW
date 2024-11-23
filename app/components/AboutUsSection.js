import Image from 'next/image';

export default function AbouteUsSection() {
    return (
        <div className='dark:bg-darkBackground bg-violet-100'>
            <div className='flex md:flex-row md:items-center flex-col gap-8 px-6 py-16'>
                <div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='w-full relative flex-shrink-0 md:w-1/2'>
                    <Image
                        src="/about-section.svg"
                        alt="NEXT WEB FLOW Logo"
                        width={500}
                        height={500}
                        className="mx-auto w-full h-auto"
                        priority
                    />
                </div>
                <div
                    className='w-full md:w-1/2'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className='text-violet-500 text-4xl font-semibold text-left'>Welcome to NEXT WEB FLOW</h1>
                    <p className='dark:text-gray-200 text-primaryTextBlack text-xl mt-8'>At NEXT WEB FLOW, we specialize in crafting modern, responsive, and user-friendly web solutions tailored to your business needs. From sleek designs to robust functionality, we bring ideas to life with cutting-edge technologies and innovative strategies. Let us help you flow seamlessly into the digital future!</p>
                    <button className="border mt-6 transition-all duration-200 ease-in-out dark:border-none border-white bg-violet-500 hover:bg-transparent dark:text-primaryTextBlack hover:border-violet-500 text-white  hover:shadow-2xl  hover:dark:bg-white hover:text-violet-600 py-3 px-6 rounded font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
