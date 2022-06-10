import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import "./Projects.css";

const Project = ({ project }) => {
  const { id, name, img, type, tools, description, live, client, server } =
    project;
  return (
    <div>
      {/* <AnimationOnScroll
            initiallyVisible={true}
            animateOnce={true}
            animateIn="animate__slideInDown"
          > */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          
            <img src={img} alt="Pic" />
          
        </figure>
        <div className="card-body">
          <h2 className="text-secondary card-title">{name}</h2>
          <p className="badge badge-outline">{type}</p>
          <p>
            <span className="text-secondary">Used Technology: </span>
            {tools}.
          </p>
          <p>
            <span className="text-secondary">Description: </span>
            <ReadMoreReact text={description} />
          </p>
          <div className="card-action text-center">
            {/* <Link to={`/projects/${id}`} className='btn btn-wide btn-outline btn-ghost'>Details</Link> */}
            {!project.server ? (
              <>
                <a
                  href={live}
                  target="_blank"
                  className="btn btn-sm btn-wide btn-outline btn-ghost mb-2"
                >
                  Live Site
                </a>
                <a
                  href={client}
                  target="_blank"
                  className="mb-2 btn btn-sm btn-wide btn-outline btn-ghost"
                >
                  Github(Client)
                </a>
              </>
            ) : (
              <>
                <a
                  href={live}
                  target="_blank"
                  className="btn btn-sm btn-wide btn-outline btn-ghost mb-2"
                >
                  Live Site
                </a>
                <a
                  href={client}
                  target="_blank"
                  className="mb-2 btn btn-sm btn-wide btn-outline btn-ghost"
                >
                  Github(Client)
                </a>
                <a
                  href={server}
                  target="_blank"
                  className="btn btn-sm btn-wide btn-outline btn-ghost"
                >
                  Github(Server)
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
};

export default Project;
