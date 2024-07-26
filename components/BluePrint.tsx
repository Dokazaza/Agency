import React from 'react';
import {CardStack} from "@/components/ui/CardStack";
import {cards} from '@/constants';
import Image from "next/image";
import {FaAnglesUp, FaClock} from "react-icons/fa6";
import {TiTick} from "react-icons/ti";
import {MdDesignServices} from "react-icons/md";
import {CiMobile1, CiTrophy} from "react-icons/ci";
import {FaShieldAlt} from "react-icons/fa";



const BluePrint = () => {
        return (
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 md:gap-y-16 gap-y-3 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Why choose US?</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    At Dowad Web. Agency, we know home service businesses inside and out. With our
                                    in-depth industry knowledge and technical expertise, we create websites that not
                                    only look amazing but also drive real results. We’re passionate about helping your
                                    business succeed online, and we’re committed to delivering top-notch, customized web
                                    solutions just for you. Trust us to take your online presence to the next level!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <div className="hidden md:block">
                                <CardStack items={cards} />
                            </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                {/*<p className="mt-6 text-xl leading-8 text-gray-700">*/}
                                {/*                                   </p>*/}
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <TiTick aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Industry Expertise:&nbsp;</strong>
                                            We specialize exclusively in home service websites, so we understand your business like no one else.
                  </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <MdDesignServices aria-hidden="true"
                                                          className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Custom Designs:&nbsp;</strong>
                                            Every website we create is tailored to meet your unique needs, ensuring a perfect fit for your brand.
                  </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <FaAnglesUp aria-hidden="true"
                                                    className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">SEO & Speed Optimization:&nbsp;</strong>
                                            Our sites are optimized for search engines and fast loading times, helping you attract and retain customers.
                  </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <CiMobile1 aria-hidden="true"
                                                   className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Mobile Responsive:&nbsp;</strong>
We design websites that look and function beautifully on all devices, giving your customers a seamless experience.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <FaClock aria-hidden="true"
                                                 className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">24/7 Support:&nbsp;</strong>
Our team is available around the clock to assist you with any issues or questions, ensuring your website runs smoothly at all times.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <CiTrophy aria-hidden="true"
                                                  className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Proven Results:&nbsp;</strong>
Our clients see real growth in their online presence and business, thanks to our effective web solutions.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <FaShieldAlt aria-hidden="true"
                                                     className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                                        <span>
                    <strong className="font-semibold text-gray-900">Top-notch Security:&nbsp;</strong>
We prioritize your website’s security, implementing the latest measures to protect your data and your customers' information.
                                        </span>
                                    </li>

                                    <li className="md:hidden flex gap-x-3 text-white">
                                        <FaShieldAlt aria-hidden="true"
                                                     className="mt-1 h-5 w-5 flex-none text-white"/>
                                        <span>
                    <strong className="font-semibold text-white">Top-notch Security:&nbsp;</strong>
We prioritize your website’s security, implementing the latest measures to protect your data and your customers' information.
                                        </span>
                                    </li>
                                </ul>
                                {/*<p className="mt-8">*/}
                                {/*    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id*/}
                                {/*    blandit molestie auctor*/}
                                {/*    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate*/}
                                {/*    et ultrices hac*/}
                                {/*    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.*/}
                                {/*</p>*/}
                                {/*<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>*/}
                                {/*<p className="mt-6">*/}
                                {/*    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.*/}
                                {/*    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed*/}
                                {/*    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam*/}
                                {/*    turpis ipsum eu a sed convallis diam.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <CardStack items={cards}/>
                </div>

            </div>
        )
}


export default BluePrint;