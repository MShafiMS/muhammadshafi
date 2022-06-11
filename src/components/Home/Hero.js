import React from "react";
import Typical from "react-typical";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="">
      <h1 className="text-center text-5xl mt-10">About Me</h1>
      <div className="divider">
        <span className="text-2xl text-secondary">who i am</span>
      </div>
      <div className="hero lg:my-20 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <AnimationOnScroll
            initiallyVisible={true}
            animateOnce={true}
            animateIn="animate__fadeInLeft"
          >
            <div className="">
              <div className="mask mask-hexagon">
                <img
                  src="https://avatars.githubusercontent.com/u/81031854?v=4"
                  className="lg:mx-8 lg:max-w-lg lg:w-96 w-80 rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            initiallyVisible={true}
            animateOnce={true}
            animateIn="animate__fadeInRight"
          >
            <div className="lg:mx-20 lg:text-left text-center">
              <h1 className="text-3xl font-bold">
                I'm Shafi and I'm a{" "} <br />
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
              </h1>
              <p className="py-6">
                I am Muhammad Shafi. I am a Front End Developer based in
                Bangladesh. I describe myself as a passionate developer who
                loves coding, Open Source, and the web platform, passion for
                responsive website design. Would like to build a successful
                career in the field of web development.
              </p>
              <a
                href="https://doc-0k-2s-docs.googleusercontent.com/docs/securesc/f0bn557t1srmca93e1dshfjpjm2jlqna/aoobr5720idggif30nsschohtui7rchl/1654770000000/10359049682711853433/10359049682711853433/17DQlCk0iA5-ZBktgnldZ0MiXIxxWFzoY?e=download&ax=ACxEAsbVckyUs16o2VaxsrfxeNkHuBupicot7K68-eQEt3mbuuoOtRKlkqbo8BNarKIQfTdey1jkvbdnez1X_b0hVt2LirSJmDCvPcs-LZZ9uJiWvor7DIC-YO5R_Rl4q6AsQH2_2gysbJva_L7SB9dNZLuAJKL67lh_66bV-6w4ukIX1cdVzpBhkM2pHXb_BT8UKMp8TURFm54nHIhlP-OazcQnjy0-zSeZ0dOQe3k9-xee7Ub-DcFzBp6Uc6gJP0pD5d0pBXma8lE4icVlLXGvghyNcD8VmTUzoUaniWkV0bYj3cAD35001baI_5SxoNSZIJRJrrsDNQ-k-xdunZu2bamuwFVARVOM1Y7z9b8NnyuvMgd8tB3ZGPqFO1jp_MWfXJXSw1WYB7eb53A7WLUqaDz5TtbepysA0DuEMq9ndcR4uQtNpKjz0e__2bnwKG6ee5ZOaUQJLC2TsFMVk6Mu4Uiq9Duv0gYkjawO6el5I4LmT1QoNjMQxlEHWAcFqnQMaKltU6-3ESZZ7o4Kty8eXbd4TcjQD8yPTOR94aOmlKrtnzZaFMmhspp3n9bBdEIo6myH8LIJQaiBRsFitdgQWonbzkZ4N7N30-L3xTGjqcgzX1wjvv9yteeE0F3urYT-7yFf_W0nPHrulMPb0M2zVyCShLr6CnlcwmLoURJx1sEQYd5ge3JdnlXuJWQPS4vonpEliTUZoTJfdOc2hhAIeHx9ORn0C6GLiTXX377kaydUBFzgd0A&authuser=0"
                className="btn btn-secondary text-white"
                to="/"
              >
                Download Resume <span className="pl-4"><FaDownload /></span>
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
<h1>About Me</h1>;
