import React from 'react';
import ContactPage from "@/components/ContactPage";
import NavBar from '@/components/NavBar';

function Contact() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <ContactPage />
        </main>
        </>
    );
}

export default Contact;