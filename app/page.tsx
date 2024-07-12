import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import {HeroParallax} from "@/components/ui/HeroParallax";
import {navItems, products} from "@/constants";
import WhatWeDo from "@/components/WhatWeDo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";
import {FloatingNav} from "@/components/FloatingNavBar";
import BluePrint from "@/components/BluePrint";


export default function Home() {
  return (
    <>
      {/*<Hero />*/}
        <FloatingNav navItems={navItems} />
        <HeroParallax products={products} />
        <Logos />
        <BluePrint />
        <FAQ />
    </>
  );
}
