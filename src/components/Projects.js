import { useState } from 'react';

import hulu from '../../public/images/projects/hulu.png';
import metaverse from '../../public/images/projects/metaverse.png';
import flipaiot from '../../public/images/projects/flipaiot.png';
import { AiFillLeftSquare, AiFillRightSquare } from 'react-icons/ai';
import Image from 'next/image';

const projectList = [
  {
    Name: 'metaverse-challenge',
    url: '',
    description:
      'Follow the tutorial on youtube to build my first dapp, can use metamask to login and chat with every one in the channel.',
    img: metaverse,
    github: 'https://github.com/PeterMyrobot/metaverse-challenge',
    visibile: true,
    stack: 'Next.js, Moralis.io, Tailwind CSS',
  },
  {
    Name: 'hulu-clone',
    url: '',
    description: 'First web build using Nextjs and tailwind CSS, deployed it using Vercel',
    img: hulu,
    github: 'https://github.com/PeterMyrobot/hulu-clone',
    visibile: true,
    stack: 'Next.js, Tailwind CSS',
  },
  {
    Name: 'FlipTools',
    url: 'https://www.fliprobot.com.tw/tools',
    description:
      'Set of applications built with Vue.js blockly, and web-bluetooth api, using graphic interface programming the logic of robot and see the logic run at real world',
    img: flipaiot,
    github: 'https://www.fliprobot.com.tw/tools',
    visibile: true,
    stack: 'Vue.js, Blocky, webBluetooth',
  },
];

function Projects() {
  const [curIdx, setCurIdx] = useState(0);

  const changeIndex = (val) => {
    setCurIdx((curIdx + val + projectList.length) % projectList.length);
  };

  const gotoidex = (i) => {
    setCurIdx(i);
  };

  const Project = () => {
    const curProject = projectList[curIdx];
    return (
      <div className="flex flex-col lg:flex-row justify-between border-2 border-c3 bg-c2 rounded-xl p-8">
        <div className="w-full lg:w-1/2 px-2 flex flex-col justify-between ">
          <div>
            <h1 className="text-md md:text-2xl font-bold border-b-2 md:border-l-2 md:border-b-0 border-c4 p-2 my-2">
              {curProject.Name}
            </h1>

            <div className="text-xs md:text-base"> - {curProject.description}</div>
          </div>
          <div>
            <a href={curProject.github} className="text-c3 text-xs md:text-base" target="_blank">
              - Github link -
            </a>
            <div className="bg-c3 text-c2 text-xs md:text-base">
              <span className="mr-2">Texh Stack:</span>
              {curProject.stack}
            </div>
          </div>
        </div>
        {curProject.img && (
          <div className="relative w-full lg:w-1/2 mt-4 lg:mt-0">
            <Image layout="responsive" className="object-fill rounded-xl" src={curProject.img} />
          </div>
        )}
      </div>
    );
  };
  const Paginations = () => {
    return (
      <div className="flex flex-row space-x-1 justify-center mt-2">
        {projectList.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                gotoidex(i);
              }}
              className={`h-2 w-2 rounded-full cursor-pointer ${i === curIdx ? 'bg-c4' : 'bg-c2'}`}
            />
          );
        })}
      </div>
    );
  };
  return (
    <section id="project" className="flex flex-col justify-around bg-c1 p-6">
      <h1 className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2 sm:text-center sm:border-l-0 ">
        Projects
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="cursor-pointer hidden md:block" onClick={() => changeIndex(-1)}>
          <AiFillLeftSquare size={30} color="white" />
        </div>
        <div className="w-full">
          <Project></Project>
        </div>
        <div className="cursor-pointer hidden md:block" onClick={() => changeIndex(1)}>
          <AiFillRightSquare size={30} color="white" />
        </div>
      </div>
      <Paginations />
    </section>
  );
}

export default Projects;
