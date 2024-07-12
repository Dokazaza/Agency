import {FaCalendar} from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import {services} from "@/constants";
import Image from "next/image";
import {FlipWords} from "@/components/ui/FlipWords";
import Underline from "@/components/ui/Underline";



const Heading = () => {
    return (
        <div className="mt-15 relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Comprehensive Web Design for <FlipWords words={["Roofing", "Cleaning", "Fencing", "Landscaping", "Plumbing", "Gutter Cleaning","Furniture Assembly","HVAC", "Pressure Washing", "Carpet Cleaning","Drywall Repair","Handyman","Pool Maintenance","Window Wash","Chimney Sweep",]} /> & More
                        </h1>
                        <p className="mt-8 text-xl text-gray-500">
                            Need a website that works as hard as you? At Dokaza Web Agency, we craft custom designs that make your home service business shine online. From electricians to gardeners, we turn visitors into clients. Let's build a site that showcases your work and grows your business.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt=""
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptop-display-of-a-homeserv.jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt="Plumbing"
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptop-screen-presenting-a-w.jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt=""
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptopbased-website-for-a-ho.jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt=""
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptopbased-website-for-a-ho (1).jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt=""
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptopbased-website-for-a-ho (2).jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={256}
                                                    width={176}
                                                    alt=""
                                                    src="/pikaso_texttoimage_35mm-film-photography-Laptopbased-website-for-a-ho (4).jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    height={300}
                                                    width={200}
                                                    alt=""
                                                    src="/pikaso_texttoimage_website-design-for-home-service-business (1).jpeg"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <Link
                                    href="/contact-us"
                                    className="rounded-md inline-flex bg-indigo-600 px-5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
                                >
                                    Book Call
                                    <FaCalendar aria-hidden="true" className="ml-2"/>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


const MainBody = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl mt-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="uppercase flex justify-center text-2xl text-gray-900 font-bold mb-8">
                    <Underline>Home-Service Branches&nbsp;</Underline>we offer website development on
                </h2>

                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {services.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    alt={product.name}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            {/*<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>*/}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Services = () => {
    return (
        <>
            <header>
                <Heading/>
            </header>
            <main>
            <MainBody />
        </main>
        </>
    )
};


