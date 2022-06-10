import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../../../Hooks/useProjects";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useProjects();
  return (
    <div>
      <h1 className="text-center text-5xl mt-10">My Portfolios</h1>
      <div className="divider">
        <span className="text-2xl text-secondary">my projects</span>
      </div>
      <div className='mt-16'>
                <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-8'>
                    {
                        projects.slice(0,3).map(project=><Project 
                            key={project.id}
                            project={project}
                            ></Project>)
                    }
                </div>
                <div className='text-center my-10'>
                <Link className='btn btn-secondary text-white' to="/allprojects">See All Projects</Link>
                </div>
            </div>
    </div>
  );
};

export default Projects;
