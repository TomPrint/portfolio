import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#202020] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[900px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-6">
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="sm:text-right text-4xl font-bold">
                Hi. I am Tomasz, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
                <p className="">
                    I am passionate about building beautiful and functional websites.
                    I specialize in creating responsive and accessible websites,
                    for both idividuals and businesses.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
