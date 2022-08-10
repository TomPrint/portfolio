import React from "react";


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#202020] text-gray-300 pt-11'>
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-10'>
          <div className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
          </div>
          <div className="py-4 flex group">
          <div className="border-2 px-6 py-3 my-2 flex items-center grow">
            <div>
              <p className="sm:text-2xl py-3 px-6 font-bold">
                Hi. I am Tomasz, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
                <p>I am passionate about building beautiful and functional websites.</p>
                <p className="font-bold">I specialize in creating responsive and accessible websites,
                    for both idividuals and businesses.</p>
                    </div>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
