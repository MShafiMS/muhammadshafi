import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;