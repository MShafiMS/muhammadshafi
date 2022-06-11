import React from 'react';
import construction from '../Assets/construction.webp'

const Blogs = () => {
    return (
        <div className='pt-24 bg-base-300'>
            <h1 className="text-center text-5xl mt-10">My Blogs</h1>
      <div className="divider"></div>
      <div className='w-96 opacity-80 mx-auto py-10 shadow-xl'>
      <img src={construction} alt="" />
      </div>
        </div>
    );
};

export default Blogs;