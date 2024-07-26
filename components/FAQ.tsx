"use client";

import React, { useState } from 'react';
import Underline from "@/components/ui/Underline";

type FAQProps = {
    title: string;
    content: string;
}

const Accordion = ({ title, content }: FAQProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between p-4 w-full text-left text-black"
                onClick={toggleAccordion}
            >
                <span className="text-lg font-medium">{title}</span>
                <span className="text-lg">
          {isOpen ? '-' : '+'}
        </span>
            </button>
            {isOpen && (
                <div className="p-4 text-black">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const FQA = () => {
    return (
        <section className="max-w-xl mx-auto p-4 bg-white pb-52 pt-10">
            <h2 className="flex justify-center text-2xl text-gray-900 font-bold mb-4">
                Frequently Asked&nbsp; Questions
            </h2>
            <Accordion
                title="What services does Dowad Web. Agency offer?"
                content="Dowad Web. Agency is your all-in-one web design partner. We create stunning websites with our proven design blueprint, handle all the technical stuff, provide hosting, keep your site running smoothly, and help you show up higher in search results with our SEO services."
            />
            <Accordion
                title="How does the website design proccess work with Dowad Web. Agency?"
                content="At Dowad Web. Agency, we make website design a collaborative adventure. We start by listening to your vision, then craft a tailored strategy just for you. From idea to launch, we keep you in the loop, ensuring transparency and your input at every turn."
            />
            <Accordion
                title="How long does it take to developer a website?"
                content="Our timeline adjusts based on project complexity. We prioritize quality and effectiveness, ensuring your website exceeds expectations within a reasonable timeframe—typically 2-3 weeks!"
            />
            <Accordion
                title="Could you assist me in updating my current website?"
                content="Certainly! We can definitely assist with updating your existing website."
            />
            <Accordion
                title="How do you ensure my website is optimized for search engines?"
                content="We integrate SEO seamlessly into our process, ensuring your website ranks high and attracts the right audience through strategic keyword placement and responsive design."
            />
            <Accordion
                title="How do I get started with Dowad Web. Agency"
                content="Getting started is easy! Reach out to us via email or schedule a meeting to arrange your initial consultation. We'll discuss your goals, outline a plan, and begin our journey together to transform your business."
            />
        </section>
    )
};

export default FQA;

