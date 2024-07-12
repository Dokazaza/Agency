import Link from "next/link";

export default function WhatWeDo() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Like an agency,
                            <br />
                            unlike any agency
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {/*Welcome to Your Home Service Web Solution! We specialize in expert web design and development for home-service businesses nationwide. Our handcrafted code ensures optimized speed, top Google rankings, and mobile responsiveness. Let’s attract more customers and boost your revenue together!*/}
                            As a web developer focused solely on home service websites, I really get what your business needs. I've worked with many home service companies, so I know the ins and outs of the industry. This helps me create awesome websites that not only look great but also help your business grow. Trust me to build a site that's just right for you and helps you stand out!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href="/video"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Watch Video Explanation
                            </Link>
                            {/*<a href="#" className="text-sm font-semibold leading-6 text-white">*/}
                            {/*    Learn more <span aria-hidden="true">→</span>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            alt="App screenshot"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            width={1824}
                            height={1080}
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
