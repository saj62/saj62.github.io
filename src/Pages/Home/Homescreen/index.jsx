import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Footer from "../Footer";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function Home () {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.targetSection) {
        scroller.scrollTo(location.state.targetSection, {
            smooth: true,
            offset: -70,
            duration: 500,
        });
        }
    }, [location]);

    return (
        <>
            <HeroSection />
            <AboutMe />
            <Projects />
            <Footer />

            <div>
            <section id="heroSection"> {/* Hero section content */} </section>
            <section id="AboutMe"> {/* About me content */} </section>
            <section id="Skills"> {/* Skills content */} </section>
            <section id="Projects"> {/* Projects content */} </section>
            </div>
        </>
    )
}