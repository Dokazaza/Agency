"use client";

import React, { useState } from 'react';

const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "design.dokaza@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 50000);
    };

    return (
        <div className="mt-6 flex max-w-md gap-x-8">
            <label className="sr-only" htmlFor="email">
                Click to Copy Email
            </label>
            <div className="relative">
                <input
                    type="text"
                    id="email"
                    readOnly
                    value={email}
                    className="flex-auto flex-grow rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <button
                    onClick={copyToClipboard}
                    className="ml-6 mt-5 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    {copied ? 'Copied!' : 'Copy my mail'}
                </button>
            </div>
         </div>
    );
};

export default CopyEmail;
