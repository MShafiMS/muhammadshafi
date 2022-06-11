import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Contact from './Contact';
import Client from './Client';
import { BiUpArrow } from "react-icons/bi";

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            {/* <Client></Client> */}
            <a href='#top' className='btn btn-secondary fixed bottom-4 right-4 text-white opacity-60'><BiUpArrow /></a>
            <Contact></Contact>
        </div>
    );
};

export default Home;