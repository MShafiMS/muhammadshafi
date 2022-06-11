import React from "react";
import "./Banner.css";
import Typical from "react-typical";
import hellow from "../../../Assets/hello3.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { DiSublime } from "react-icons/di";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="top" className="pt-24">
      <div className="hero bg-base-300">
        <div className="hero-content lg:mr-10 flex-col lg:flex-row">
          <div className="svg w-full">
          <img src={hellow} />
          </div>
          <div className="lg:ml-20">
            <h1 className="mb-5 mr-24 lg:mr-48 text-4xl font-bold">
              Hi, I'm <span className="text-secondary">Shafi</span>
            </h1>
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <p className="mb-5 text-3xl">
                I'm a <br />{" "}
                <Typical
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
                />
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <div className="flex gap-4 mb-8">
                <a
                  className="text-2xl"
                  href="https://web.facebook.com/ms.muhammadshafi/"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-2xl"
                  href="https://twitter.com/MuhammadshafiSM/"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  className="text-2xl"
                  href="https://github.com/MShafiMS/"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-2xl"
                  href="https://www.linkedin.com/in/developer-muhammad-shafi/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <a href="#contact" className="btn btn-secondary text-white" to="/">
                Get In Touch <span className="pl-4 text-xl"><IoIosSend /></span>
              </a>
              <Link className="btn btn-secondary ml-4 text-white" to="/about">
                About Me<span className="pl-4 text-xl text-white"><DiSublime /></span>
              </Link>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
