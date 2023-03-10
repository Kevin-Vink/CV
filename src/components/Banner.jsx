import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Banner() {
  const handleClick = () => {
    const element = document.getElementById('experience');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-[35vh] xl:h-[55vh] 3xl:h-[30vh] flex relative bg-banner bg-cover shadow-xl border-b-2 border-sky-400">
      <div className="z-20 py-14 px-6 xl:px-10 xl:py-10 w-full h-full">
        <div className="w-full h-full flex flex-col items-center xl:items-start justify-between">
          <h1 className="text-3xl xl:text-6xl text-white font-black">Discover the Road of my Career!</h1>
          <div className="text-white flex gap-x-1 text-sm xl:text-lg items-center">
            <div>
              &lt;
              <span className="text-sky-400">code</span>
              &gt;
            </div>
            I build
            <TypeAnimation
              sequence={[
                'Web Applications',
                2000,
                'REST APIs',
                2000,
                'Design Mockups',
                2000,
              ]}
              speed={10}
              repeat={Infinity}
            />
            <div>
              &lt;
              <span className="text-sky-400">code</span>
              &gt;
            </div>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="bg-sky-500 text-white rounded-md font-bold tracking-wider px-6 py-4
              w-fit uppercase text-sm transition-all hover:-translate-y-1 hover:bg-sky-400"
          >
            Explore now
          </button>
        </div>
      </div>
      <div className="z-20 hidden w-full h-full xl:block relative flex">
        <img src="./standing.png" className="absolute bottom-0 right-12 xl:h-[67vh] 3xl:h-[37vh]" alt="me standing" />
      </div>
      <div className="w-full h-full bg-accent-500/80 top-0 left-0 absolute z-10" />
    </div>
  );
}

export default Banner;
