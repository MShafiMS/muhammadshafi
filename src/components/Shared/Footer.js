import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to='about' className="link link-hover">About</Link>
          <Link to='allprojects'  className="link link-hover">Projects</Link>
          <Link to='skills'  className="link link-hover">Skills</Link>
          <Link to='blogs'  className="link link-hover">Blogs</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="text-2xl" href="https://web.facebook.com/ms.muhammadshafi/" target='_blank'>
            <FaFacebook />
            </a>
            <a className="text-2xl" href="https://twitter.com/MuhammadshafiSM/" target='_blank'>
            <FaTwitter />
            </a>
            <a className="text-2xl" href="https://github.com/MShafiMS/" target='_blank'>
            <FaGithub />
            </a>
            <a className="text-2xl" href="https://www.linkedin.com/in/developer-muhammad-shafi/" target='_blank'>
            <FaLinkedinIn />
            </a>
            <a className="text-2xl" href="https://www.instagram.com/ms_shafi75/" target='_blank'>
            <FaInstagram />
            </a>
            <a className="text-2xl" href="https://www.youtube.com/channel/UCr4-eFtC_XL0CiPH59pAidQ" target='_blank'>
            <FaYoutube />
            </a>
            <a className="text-2xl" href="https://stackoverflow.com/users/18770693/muhammad-shafi" target='_blank'>
            <FaStackOverflow />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
