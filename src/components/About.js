import React from "react";
import Typical from "react-typical";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-24 bg-base-300">
      <h1 className="text-center text-5xl mt-10">About Me</h1>
      <div className="divider"></div>
      <div className="hero lg:py-20 py-10">
        <div className="hero-content flex-col lg:flex-row lg:flex-row-reverse">
          <img
            src="https://avatars.githubusercontent.com/u/81031854?v=4"
            className="lg:mx-8 lg:max-w-lg lg:w-96 w-80 rounded-lg shadow-2xl"
          />
          <div className="lg:mx-20 lg:text-left">
            <h1 className="text-3xl font-bold text-secondary">
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
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <p className="py-6">
                I am a Front End Developer based in Bangladesh. I describe
                myself as a passionate developer who loves coding, Open Source,
                and the web platform, passion for responsive website design.
                Would like to build a successful career in the field of web
                development.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <div className="text- ">
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Name: </span>
                    Muhammad Shafi
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Age: </span>22
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">
                      Nationality:{" "}
                    </span>
                    Bangladeshi
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Status: </span>
                    Available
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Address: </span>
                    Chattogram, Bangladesh
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Email: </span>
                    dev.muhammadshafi@gmail.com
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Phone: </span>
                    0179*****13
                  </p>
                </div>
                <div className="flex-row mb-4">
                  <p>
                    <span className="text-xl text-secondary">Language: </span>
                    Bengali, English and Hindi
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              initiallyVisible={true}
              animateOnce={true}
              animateIn="animate__fadeInUp"
            >
              <a
                href="https://doc-04-2s-docs.googleusercontent.com/docs/securesc/f0bn557t1srmca93e1dshfjpjm2jlqna/ma3fo9sb6g7i92ippbjj0jvdehfe8do5/1654962450000/10359049682711853433/10359049682711853433/19N7T2C4mzHTiyufgVyvzrvfMPBZHyogH?e=download&ax=ACxEAsaynSQdBrdu2_c9SWhac7sjnkgXBpfrMBBovgiNmaz_lmLJWeJk7_JYaf73-ypNQr947_2uuRJDEJvXl_lpPfnjpsNscK4QZJwOJXJx3GAdwQirnVYBGvUQ3blwytnQpHzCfzO4RKHdtlNn0PhPj4wC8Pt4P1JcclBCEXwo4ebUcolJScxWOkaJCjird7RaojQZEdQk7avpD1ePfaVu7NeaXfpUx1Yjsv1DitInUJlRxbWIFLuN6-WTWEnXd4LHhyDTW9L6a88nPVBM8ZXZjGfehcMppgSSDRYyHbIkp0WBDk8t58oMddoDs2YWjAjvgDetovzBDScZvVk7dw8ov0QWLeEUb-YrIB80LA1pHIowobreJCIplP38ogczN5wf7p8YMJOOX1Q1pKl22y4IaW2ZBTvTpDGuhEnYf8QsocnHrlCggMJnuq4_jDGJhf4D9fNooh3QwTrf4Dic8lvMutCw8MJzgphP8BVIs07Ku5BTSksucg-8UbkQl8us4IYvtf0z4uFh7pM2D4VMg4vEfdQeKQVHiqyHHIXwO6qKOioc691afJ-XywanO7w7UZ7J6HQMNuphSTghr_19HTRDaD8VV0wWQyY4h_YAtUp3uj2m1aF4QEPsVwuPrlEw9JTdRfas1dVIJiN7ftpU9brimnwt5U3vXPAS2jdPVSVCibBzR23dCS-61dRUOIhFurjE8tK_ZxP3Yn8lAcudl-w5AwZl58WfFDkomV29gwGN67l8k0zxCGA&authuser=0&nonce=e4h1uprc98p8e&user=10359049682711853433&hash=1da2hkr6jonnuru56kbtoe054srjffnd"
                className="btn btn-secondary text-white"
                to="/"
              >
                Download Resume{" "}
                <span className="pl-4">
                  <FaDownload />
                </span>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
<h1>About Me</h1>;
