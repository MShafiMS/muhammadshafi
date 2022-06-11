import useProjects from "../../../Hooks/useProjects";
import Project from './Project';

const AllProjects = () => {
    const [projects, setProjects] = useProjects();
    
    
    return (
        <div className="bg-base-300">
      <h1 className="text-center text-5xl pt-24">My Projects</h1>
      <div className="divider">
      </div>
      <div className='py-10'>
                <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-8'>
                    {
                        projects.slice(0,6).map(project=><Project 
                            key={project.id}
                            project={project}
                            ></Project>)
                    }
                </div>
            </div>
    </div>
    );
};

export default AllProjects;