/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import CopyMail from "@/components/ui/CopyMail";
import Link from "next/link";
import Image from "next/image";
import {FaFacebook, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
            <footer className="bg-white relative isolate overflow-hidden dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                {/*<Link href="/">*/}
                                {/*    <Image width={20} height={20} className="w-auto h-16"*/}
                                {/*           src="/Screenshot_2024-07-12_194121-removebg-preview.png" alt="Logo"/>*/}
                                {/*</Link>*/}

                                {/*<p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and*/}
                                {/*    never miss out on new tips, tutorials, and more.</p>*/}

                                <div className="flex mt-6 -mx-2">

                                    <Link href="#"
                                          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                          aria-label="Instagram">
                                        <FaInstagram />
                                    </Link>

                                    <Link href="https://www.facebook.com/profile.php?id=61557364734948"
                                       className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                       aria-label="Facebook">
                                        <FaFacebook />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Navigation</h3>
                                    <Link href="/"
                                          className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Home</Link>
                                    <Link href="services"
                                          className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Services</Link>
                                    <Link href="portfolio"
                                          className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Our Work</Link>
                                    <Link href="contact-us"
                                          className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact
                                        Us</Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Let's Connect</h3>
                                    <CopyMail/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">© Dokaza Web. Agency 2024 - All
                            rights
                            reserved</p>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute left-1/2 bottom-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                     <div
                             style={{
                                 clipPath:
                                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                             className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                     />
                     </div>
            </footer>


        //         </div>
        //     </div>
        //     <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        //         <div
        //             style={{
        //                 clipPath:
        //                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //             }}
        //             className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        //         />
        //     </div>
        // </footer>
    )
}
