import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import {
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaStripe,
  FaStripeS,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiFirebase,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiNetlify,
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
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 content-center lg:mx-20 lg:py-10">
        <div className="mx-auto border p-10 mb-4">
          <p className="text-xl mb-8">Language</p>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiJavascript />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Javascript</p>
          </div>
        </div>
        <div className="mx-auto border p-10 mb-4">
          <p className="text-xl mb-8">Frontend</p>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaReact />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">React</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaHtml5 />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">HTML</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaCss3Alt />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">CSS</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaBootstrap />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Bootstrap</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiTailwindcss />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">TailwindCSS</p>
          </div>
        </div>
        <div className="mx-auto border p-10 mb-4">
          <p className="text-xl mb-8">Backend</p>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaNodeJs />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Node</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiExpress />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Express</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiMongodb />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">MongoDB</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <TbApi />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Rest Api</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaStripe />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Stripe</p>
          </div>
        </div>
        <div className="mx-auto border p-10 mb-4">
          <p className="text-xl mb-8">Platform</p>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiFirebase />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Firebase</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaGitAlt />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Git</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaGithub />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Github</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiHeroku />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Heroku</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiNetlify />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Netlify</p>
          </div>
        </div>
        <div className="mx-auto border p-10 mb-4">
          <p className="text-xl mb-8">Tools</p>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiVisualstudiocode />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">VS Code</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaChrome />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Dev Tool</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <FaFigma />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Figma</p>
          </div>
          <div className="my-3 ">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-0  ring-offset-1">
                <p className="text-5xl mx-6 my-6">
                  <SiAdobephotoshop />
                </p>
              </div>
            </div>
            <p className="text-center mt-3 ">Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
