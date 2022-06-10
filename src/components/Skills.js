import React from "react";
import construction from '../Assets/construction.webp'

const Skills = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-5xl mt-10">My Skills</h1>
      <div className="divider"></div>
      <div className='w-96 opacity-80 mx-auto my-10 shadow-xl'>
      <img src={construction} alt="" />
      </div>
    </div>
  );
};

export default Skills;
