import React from 'react';
import NavBar from '@/components/NavBar';
import {Services} from '@/components/ServicesPage';
import WhatWeDo from "@/components/WhatWeDo";

function Contact() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Services />
                <WhatWeDo />
            </main>
        </>
    );
}

export default Contact;