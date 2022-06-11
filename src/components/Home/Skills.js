import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-10">My Skills</h1>
      <div className="divider">
        <span className="text-2xl text-secondary">what i know</span>
      </div>
      <div className="hero lg:my-20 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInLeft">
            <div className="lg:ml-20">
              <p>HTML 90%</p>
              <progress
                className="progress progress-secondary w-80 lg:w-96"
                value="90"
                max="100"
              ></progress>
              <p>CSS 85%</p>
              <progress
                className="progress progress-secondary w-full lg:w-96"
                value="85"
                max="100"
              ></progress>
              <p>JAVASCRIPT 70%</p>
              <progress
                className="progress progress-secondary w-80 lg:w-96"
                value="70"
                max="100"
              ></progress>
              <p>REACT 85%</p>
              <progress
                className="progress progress-secondary w-80 lg:w-96"
                value="85"
                max="100"
              ></progress>
              <p>NODE 55%</p>
              <progress
                className="progress progress-secondary w-80 lg:w-96"
                value="55"
                max="100"
              ></progress>
              <p>MONGODB 55%</p>
              <progress
                className="progress progress-secondary w-80 lg:w-96"
                value="55"
                max="100"
              ></progress>
            </div>
          </AnimationOnScroll>
          <div className="divider lg:ml-28 lg:divider-horizontal">Skills</div>
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInRight">
            <div className="lg:mx-20 lg:text-left text-center">
              <h1 className="text-3xl font-bold">
                My creative skills & experiences.
              </h1>
              <p className="py-6">
                I am a Front End Developer. Now i am learning MERN stack
                Development. I have complete 2 MERN stack project and many
                simple react application. I always try to learn code, i love
                code and i want to make a successful career in this feild.
              </p>
              <Link className="btn btn-secondary text-white" to="/skills">
                Read More<span className="pl-4 "><GiArmoredBoomerang /></span>
              </Link>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Skills;
