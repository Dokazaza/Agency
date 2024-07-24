import React from 'react';
import ContactPage from "@/components/ContactPage";
import NavBar from '@/components/NavBar';
import CalendlyWidget from "@/components/Calendly";

function Contact() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            {/*<ContactPage />*/}
            <CalendlyWidget />

        </main>
        </>
    );
}

export default Contact;