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
  console.log(projectData);

  return (
    <div className="mt-24">
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content grid lg:grid-cols-2 grid-cols-1">
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                src={projectData?.imgc}
                class="w-full"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle btn-secondary text-white">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle btn-secondary text-white">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img
                src={projectData?.imgd}
                class="w-full"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle btn-secondary text-white">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle btn-secondary text-white">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img
                src={projectData?.imge}
                class="w-full"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle btn-secondary text-white">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle btn-secondary text-white">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img
                src={projectData?.imgb}
                class="w-full"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle btn-secondary text-white">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle btn-secondary text-white">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-5xl mb-4 text-secondary font-bold">
              {projectData?.name}
            </h1>
            <p className="badge badge-accent mb-6 badge-outline">
              {projectData?.type}
            </p>
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
                  Live Site{" "}
                  <span className="ml-2">
                    <FaLocationArrow />
                  </span>
                </a>
                <a
                  href={projectData?.client}
                  target="_blank"
                  className="mb-2 btn lg:ml-4 btn-wide text-white btn-secondary"
                >
                  <span className="mr-2 text-3xl">
                    <FaGithub />
                  </span>{" "}
                  Client
                  <span className="ml-2">
                    <FaLocationArrow />
                  </span>
                </a>
              </div>
            ) : (
              <div>
                <a
                  href={projectData?.live}
                  target="_blank"
                  className="btn btn-wide text-white btn-secondary mb-2"
                >
                  Live Site
                  <span className="ml-2 font-3xl">
                    <FaLocationArrow />
                  </span>
                </a>
                <a
                  href={projectData?.client}
                  target="_blank"
                  className="mb-2 btn lg:ml-4 btn-wide text-white btn-secondary"
                >
                  <span className="mr-2 text-3xl">
                    <FaGithub />
                  </span>{" "}
                  Client
                  <span className="ml-2 font-3xl">
                    <FaLocationArrow />
                  </span>
                </a>
                <a
                  href={projectData?.server}
                  target="_blank"
                  className="btn btn-wide text-white btn-secondary"
                >
                  <span className="mr-2 text-3xl">
                    <FaGithub />
                  </span>{" "}
                  Server
                  <span className="ml-2 font-3xl">
                    <FaLocationArrow />
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link
        to={"/allprojects"}
        className="btn btn-secondary text-white opacity-80 ml-6 mb-6"
      >
        <IoIosArrowBack />
      </Link>
      <Link
        to={"/"}
        className="btn btn-secondary text-white opacity-80 ml-6 mb-6"
      >
        Home
      </Link>
    </div>
  );
};

export default ProjectView;
