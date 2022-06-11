import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import "./Projects.css";

const Project = ({ project }) => {
  const { id, name, img, type, tools, description, live, client, server } =
    project;
  return (
    <div className="w-80 lg:w-full">
      {/* <AnimationOnScroll
            initiallyVisible={true}
            animateOnce={true}
            animateIn="animate__slideInDown"
          > */}
          <h2 class="card-title mb-1">{name}</h2>
          <div class="relative">
            <Link to={`/projects/${id}`}><img to={`/projects/${id}`} class="w-full rounded-xl" src={img} alt="dummy-image" /></Link>
  
  <Link
              to={`/projects/${id}`}
              className="absolute  top-24 left-12 btn btn-wide btn-secondary text-white p-2 m-2 opacity-0 hover:opacity-100"
            >
              Details
            </Link>
  
</div>
      {/* </AnimationOnScroll> */}
    </div>
  );
};

export default Project;
