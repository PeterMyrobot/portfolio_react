import Project from './Project';
import { useState } from 'react';

import life from '../../public/images/projects/life.png';
import hulu from '../../public/images/projects/hulu.png';
import metaverse from '../../public/images/projects/metaverse.png';
import { AiFillLeftSquare, AiFillRightSquare } from 'react-icons/ai';

const projectList = [
  {
    Name: 'metaverse-challenge',
    url: '',
    description: 'Web 3.0 - Next.js, Moralis.io, TailwindCSS 3.0, Blockchain',
    img: life,
    github: 'https://github.com/PeterMyrobot/metaverse-challenge',
    visibile: true,
    stack: 'Next.js, Moralis.io, Tailwind CSS',
  },
  {
    Name: 'Whatsapp-clone',
    url: '',
    description: '1-1 Messaging, Live Status, Styled-Components, React.JS',
    img: hulu,
    github: 'https://github.com/PeterMyrobot/Whatsapp-clone',
    visibile: true,
    stack: 'React.js Firebase',
  },
  {
    Name: 'hulu-clone',
    url: '',
    description: '',
    img: metaverse,
    github: 'https://github.com/PeterMyrobot/hulu-clone',
    visibile: true,
    stack: 'Next.js, Tailwind CSS',
  },
  {
    Name: 'FlipCode',
    url: '',
    description: '',
    img: life,
    github: '',
    visibile: true,
    stack: 'Vue.js, Blocky, webBluetooth',
  },
  {
    Name: 'BFS',
    url: '',
    description: '',
    img: hulu,
    github: '',
    visibile: false,
    stack: '',
  },
  {
    Name: 'Other',
    url: '',
    description: '',
    img: metaverse,
    github: '',
    visibile: false,
    stack: '',
  },
];

function Projects() {
  const [curIdx, setCurIdx] = useState(0);
  return (
    <div className="flex flex-col justify-around bg-c1 p-6">
      <h1 className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2 sm:text-center sm:border-l-0 ">
        Projects
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div>
          <AiFillLeftSquare size={30} />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <AiFillRightSquare size={30} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
