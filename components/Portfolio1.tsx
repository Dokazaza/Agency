import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {BellAlertIcon, CheckBadgeIcon, ChevronDoubleUpIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import {FaCalendar} from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import {LuMousePointerClick} from "react-icons/lu";
import Underline from "@/components/ui/Underline";
import {RocketLaunchIcon} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Leads Skyrocketed by 50%!',
        description:
            'Our fresh, innovative design has fueled a 50% surge in incoming sales leads within just three months.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Conversions Up by 35%!',
        description: 'Streamlined forms and intuitive design have boosted our lead-to-client conversion rate by an impressive 35%.',
        icon: BellAlertIcon,
    },
    {
        name: 'Traffic Soared by 40%!',
        description: 'Enhanced SEO and captivating content have driven a 40% increase in website traffic, connecting Dakos Group with a wider audience.',
        icon: ChevronDoubleUpIcon,
    },
    // {
    //     name: 'Local Leads Leap by 20%!',
    //     description: 'Targeted local search enhancements have resulted in a 20% increase in leads from the community.',
    //     icon: CheckBadgeIcon,
    // },
]

export default function Example() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Website Development</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dakos
                                Group</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We took Dakos Group's online presence to the next level with a sleek,
                                modern design that reflects their quality craftsmanship.
                                The result? A visually stunning site that's easy to navigate and
                                optimized to attract and engage visitors. Their new website isn’t
                                just eye-catching; it's a powerful tool that increased web traffic
                                and turned clicks into calls. With a polished portfolio, vibrant
                                visuals, and intuitive layout, we made sure Dakos Group shines online.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true"
                                                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"/>
                                            {feature.name}
                                        </dt>
                                        {' '}
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
                        alt="Dakos Group Picture Overview"
                        src="/DakosSS.png"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
