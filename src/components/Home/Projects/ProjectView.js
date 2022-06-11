import React, { useEffect, useState } from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";

const ProjectView = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const projectData = projects.find((project) => project.id === id);

  return (
    <div className="mt-24">
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content grid lg:grid-cols-2 grid-cols-1">
          <div className="container mx-auto">
          
            <div className="grid-cols-3 p-20 space-y-2 bg-secondary lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
              <div class="w-full rounded">
                <img src={projectData?.img} alt="image" />
              </div>
              <div class="w-full col-span-2 row-span-2 rounded">
                <img src={projectData?.img} alt="image" />
              </div>
              <div class="w-full rounded">
                <img src={projectData?.img} alt="image" />
              </div>
              <div class="w-full rounded">
                <img src={projectData?.img} alt="image" />
              </div>
              <div class="w-full rounded">
                <img src={projectData?.img} alt="image" />
              </div>
              <div class="w-full rounded">
                <img src={projectData?.img} alt="image" />
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-5xl mb-4 text-secondary font-bold">{projectData?.name}</h1>
            <p className="badge badge-accent mb-6 badge-outline">{projectData?.type}</p>
            <p className="mb-3">
              <span className="text-secondary">Used Technology: </span>
              {projectData?.tools}.
            </p>
            <p className="mb-6">
              <span className="text-secondary">Description: </span>
              {projectData?.description}
            </p>
            {!projectData?.server ? (
              <div className="text-center">
                <a
                  href={projectData?.live}
                  target="_blank"
                  className="btn btn-wide text-white btn-secondary mb-2"
                >
                  Live Site <span className="ml-2"><FaLocationArrow /></span>
                </a>
                <a
                  href={projectData?.client}
                  target="_blank"
                  className="mb-2 btn lg:ml-4 btn-wide text-white btn-secondary"
                >
                <span className="mr-2 text-3xl"><FaGithub /></span> Client<span className="ml-2"><FaLocationArrow /></span>
                </a>
              </div>
            ) : (
              <div>
                <a
                  href={projectData?.live}
                  target="_blank"
                  className="btn btn-wide text-white btn-secondary mb-2"
                >
                  Live Site<span className="ml-2 font-3xl"><FaLocationArrow /></span>
                </a>
                <a
                  href={projectData?.client}
                  target="_blank"
                  className="mb-2 btn lg:ml-4 btn-wide text-white btn-secondary"
                >
                  <span className="mr-2 text-3xl"><FaGithub /></span> Client<span className="ml-2 font-3xl"><FaLocationArrow /></span>
                </a>
                <a
                  href={projectData?.server}
                  target="_blank"
                  className="btn btn-wide text-white btn-secondary"
                >
                  <span className="mr-2 text-3xl"><FaGithub /></span> Server<span className="ml-2 font-3xl"><FaLocationArrow /></span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link to={'/allprojects'} className='btn btn-secondary text-white opacity-80 ml-6 mb-6'><IoIosArrowBack /></Link>
    </div>
  );
};

export default ProjectView;
