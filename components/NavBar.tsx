"use client";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {navigation} from "@/constants";
import {Dialog, DialogPanel} from "@headlessui/react";
import React, {useState} from "react";
import {FaCalendar} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Dokaza Web. Agency</span>
                    <Image
                        width={52}
                        height={52}
                        alt=""
                        src="/3OTQHU-LogoMakr-enhanced-removebg-preview.png"
                        className="h-16 w-auto"
                    />
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href}
                       className="cursor-pointer text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link
                    href="/contact-us"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
                >
                    Book Call
                    <FaCalendar aria-hidden="true" className="ml-2"/>
                </Link>

            </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50"/>
            <DialogPanel
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Dokaza Web. Agency</span>
                        <Image
                            width={40}
                            height={40}
                            alt=""
                            src="/3OTQHU-LogoMakr-enhanced-removebg-preview.png"
                            className="h-16 w-auto"
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <Link
                                href="/contact-us"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
                            >
                                Book Call
                                <FaCalendar aria-hidden="true" className="ml-2"/>
                            </Link>

                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
    )
}

export default NavBar