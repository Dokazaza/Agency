import React from 'react';
import Link from "next/link";

const ScheduleButton = () => {
    return (
        <Link
            href="/contact-us"
            className="fixed bottom-4 right-4 rounded-md bg-indigo-600 px-5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
        >
            Schedule Now
        </Link>
    );
};

export default ScheduleButton;

