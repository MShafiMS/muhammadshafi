import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectView = () => {
    const { projectsId } = useParams();
    const [projects, setProjects] = useState([]);
    

    useEffect( () =>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    }, [projectsId]);
    return (
        <div>
            <h3>{projects?.name}</h3>
        </div>
    );
};

export default ProjectView;