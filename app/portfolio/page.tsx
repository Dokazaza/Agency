import React from 'react';
import NavBar from '@/components/NavBar';
import {Services} from '@/components/ServicesPage';
import WhatWeDo from "@/components/WhatWeDo";
import Portfolio1 from "@/components/Portfolio1";
import Portfolio2 from "@/components/Portfolio2";

function Service() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Portfolio2 />
                <Portfolio1/>
            </main>
        </>
    );
}

export default Service;