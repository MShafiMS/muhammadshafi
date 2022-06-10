import React from "react";
import Typical from "react-typical";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div className="">
      <h1 className="text-center text-5xl mt-10">About Me</h1>
      
      <div className="hero lg:my-20 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInLeft">
            <img
              src="https://avatars.githubusercontent.com/u/81031854?v=4"
              className="lg:mx-8 lg:max-w-lg lg:w-96 w-80 rounded-lg shadow-2xl"
            />
          </AnimationOnScroll>
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInRight">
            <div className="lg:mx-20 lg:text-left text-center">
              <h1 className="text-3xl font-bold">
                Hello, I'm Muhammad Shafi{" "}
                {/* <Typical
                  className="text-secondary"
                  steps={[
                    "Frontend Developer",
                    1000,
                    "MERN Stack developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="n"
                /> */}
              </h1>
              <p className="py-6">
                I am a Front End Developer based in
                Bangladesh. I describe myself as a passionate developer who
                loves coding, Open Source, and the web platform, passion for
                responsive website design. Would like to build a successful
                career in the field of web development.
              </p>
              <div className="flex-row mb-4">
                <p className="text-xl">Name</p>
                <p>Muhammad Shafi</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Address</p>
                <p>Chattogram, Bangladesh</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Email</p>
                <p>dev.muhammadshafi@gmail.com</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Phone</p>
                <p>0179*****13</p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default About;
<h1>About Me</h1>;
