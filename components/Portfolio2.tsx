import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {BellAlertIcon, CheckBadgeIcon, ChevronDoubleUpIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import {FaCalendar} from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import {LuMousePointerClick} from "react-icons/lu";
import {RocketLaunchIcon,} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Leads Explosion: Up 60%!',
        description:
            'Our bold redesign sparked a 60% boom in sales leads, supercharging growth in just three months.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Conversion Boost: 40% Increase!',
        description: 'Sleek forms and a user-friendly interface have lifted our conversion rate by an impressive 40%.',
        icon: BellAlertIcon,
    },
    {
        name: 'Traffic Surge: Up 50%!',
        description: 'Optimized SEO and engaging content have skyrocketed website traffic by 50%, connecting Dakos Group with more potential clients.',
        icon: ChevronDoubleUpIcon,
    },
]


export default function Portfolio2() {
    return (
        <div className="mt-10 overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Website Redesign</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Don Holding</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We took Don Holding’s website to new heights with a sleek, modern
                                design that highlights their top-tier services. The result? A stunning,
                                easy-to-navigate site that’s driving more traffic and converting clicks
                                into leads. With vibrant
                                visuals and a streamlined layout, Don Holding now shines brighter online.                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            <Link
                                href="https://dakosgroup.com.mk/index-en.html"
                                className="mt-8 inline-flex rounded-md bg-indigo-600 px-5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
                            >
                                See Online
                                <LuMousePointerClick aria-hidden="true" className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                    <Image
                        alt="Don Holding Picture Overview"
                        src="/pikaso_texttoimage_construction-website-design-featuring-a-modern-lay.jpeg"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
