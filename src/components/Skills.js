import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="pt-24 bg-base-300">
      <h1 className="text-center text-5xl mt-10">My Skills</h1>
      <div className="divider"></div>
      <AnimationOnScroll
        initiallyVisible={true}
        animateOnce={true}
        animateIn="animate__fadeInUp"
      >
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 content-center lg:mx-20 lg:py-10">
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaHtml5 />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">HTML5</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaCss3Alt />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">CSS3</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaBootstrap />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Bootstrap</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiTailwindcss />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">TailwindCSS</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiJavascript />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Javascript</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaReact />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">React</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiFirebase />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Firebase</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaNodeJs />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">NodeJs</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiExpress />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">ExpressJs</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiMongodb />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">MongoDB</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaGitAlt />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Git</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiVisualstudiocode />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">VS Code</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaGithub />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Github</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaFigma />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Figma</p>
          </div>
          <div className=" mx-auto my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiAdobephotoshop />
                </p>
              </div>
            </div>
            <p className="text-center text-xl mt-3 ">Photoshop</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Skills;
