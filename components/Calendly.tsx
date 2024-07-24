"use client"

import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        script.onload = () => {
            console.log('Calendly script loaded');
        };

        script.onerror = () => {
            console.error('Calendly script failed to load');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">Let&apos;s Connect</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 flex justify-center">
                    Got a project in mind or just want to learn more about our services? We're eager to hear from you. Use the form below to drop us a line, and let's start a conversation!
                </p>

        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/david-dokaza/call-with-david"
            style={{ minWidth: '320px', height: '700px' }}
        ></div>
        </section>
    );
};

export default CalendlyWidget;
