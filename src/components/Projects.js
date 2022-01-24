import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ecomart from '../../public/images/projects/ecomart.png';
import aprd from '../../public/images/projects/aprd.png';
import flipaiot from '../../public/images/projects/flipaiot.png';
import flipcode from '../../public/images/projects/flipcode.png';
import flipras from '../../public/images/projects/flipras.png';
import hulu from '../../public/images/projects/hulu.png';
import metaverse from '../../public/images/projects/metaverse.png';

const projectList = [
  {
    Name: 'EcoMart',
    url: 'https://ecomart.hktvmall.com/#',
    description: `EcoMart is a free consumer-to-consumer (C2C) trading platform where HKTVmall members can find new owners for their new or used items. It helps to create a fully self-service circular trading system that redefines the value of items and brings environmental awareness into your life. \nMy main contrubution of this project is implement the upload items functionality, including form validation, get categories data from backend and post form data to the server`,
    img: ecomart,
    github: '',
    visibile: true,
    stack: ['React', 'axios', 'redux'],
  },
  {
    Name: 'APRD - React Native app',
    url: '',
    description:
      'I build this app with React Native for dispaly webview project, using webview and inapp communication to store auth data at native side to ensure user keep login after close the app, I also deal with ble, permissions, and other functionality related to native platform',
    img: aprd,
    github: '',
    visibile: true,
    stack: ['React Native', 'Webview', 'Inapp comminication', 'iOS', 'Android'],
  },
  // {
  //   Name: 'EESE',
  //   url: '',
  //   description:
  //     'Follow the tutorial on youtube to build my first dapp, can use metamask to login and chat with every one in the channel.',
  //   img: metaverse,
  //   github: 'https://github.com/PeterMyrobot/metaverse-challenge',
  //   visibile: false,
  //   stack: ['Next.js', 'Moralis.io', 'Tailwind CSS'],
  // },
  {
    Name: 'FlipAIoT',
    url: 'https://aiot.fliprobot.com/',
    description:
      'AIoT is a education purpose application allow kids using control-flow graph concept to control robot. Including AI Model Training List and DFP(Data Flow Programming ). AI Model Training List provides AI image recognition models. Through training image recognition, you can know how AI works comparing with traditional program writing process. DFP is an advanced linearization program tool. I design and implement the algorithm of this application from scratch, and have a lot fun to build it.',
    img: flipaiot,
    github: '',
    visibile: true,
    stack: ['Vue.js', 'Vuex', 'webBluetooth', 'BFS'],
  },
  {
    Name: 'FlipCode',
    url: 'https://tools.fliprobot.com/flipcode',
    description:
      'The first learning tool of FlipRobot is FlipCode which contains visualized Google puzzle to build up learners’ logic and programming language. Based on Arduino, Flipcode makes users swift Arduino Code freely. Learning FlipCode lays the foundation of learning robot.',
    img: flipcode,
    github: '',
    visibile: true,
    stack: ['Vue.js', 'Vuex', 'Blocky', 'webBluetooth'],
  },
  {
    Name: 'FlipRAS',
    url: 'https://ras.fliprobot.com/',
    description:
      'FlipRAS(Robot Action Script), for FlipRobot bionic serials robots to control the angles and the speed of multiple motors. You can separate the actions of your robot through frame. During the process of designing the action of your robot, try to apply the length of timeline to understand the relation between time length and speed and design series actions smoothly.。',
    img: flipras,
    github: '',
    visibile: true,
    stack: ['HTML', 'Javasript', 'CSS', 'Blockly'],
  },
  {
    Name: 'hulu-clone',
    url: '',
    description: 'First web app build using Nextjs and tailwind CSS, deployed it using Vercel',
    img: hulu,
    github: 'https://github.com/PeterMyrobot/hulu-clone',
    visibile: true,
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  },
];

SwiperCore.use([Pagination, Navigation]);
function Projects() {
  const Project = ({ project }) => {
    return (
      <div className="flex flex-col lg:flex-row justify-between border-2 bg-c2  p-8">
        <div className="w-full lg:w-1/2 px-2 flex flex-col justify-between ">
          <div>
            <h1 className="text-md md:text-2xl font-bold border-b-2 md:border-l-2 md:border-b-0 border-c4 pt-2 pl-2 my-2 flex flex-col ">
              {project.Name}
              {!!project.url && (
                <a
                  className="font-normal text-sm underline decoration-solid hidden md:block"
                  href={project.url}
                  target="_blank"
                >
                  Project Link
                </a>
              )}
            </h1>

            <div className="text-xs md:text-base p-2">{project.description}</div>
          </div>
          <div>
            {!!project.github && (
              <a href={project.github} className="text-c3 text-xs md:text-base" target="_blank">
                - Github link -
              </a>
            )}
            <div className=" text-xs md:text-base mt-4 flex flex-wrap ">
              {project.stack.map((tech) => {
                return (
                  <div className="border-2 rounded-md bg-c3 text-c2 p-2 mb-2 mr-2">{tech}</div>
                );
              })}
            </div>
          </div>
        </div>
        {project.img && (
          <div className="relative w-full lg:w-1/2 mt-4 lg:mt-0 h-[500px]">
            <Image layout="fill" className="object-contain rounded-xl" src={project.img} />
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="project" className="flex flex-col justify-around bg-c1 p-6">
      <h1 className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2 sm:text-center sm:border-l-0 ">
        Projects
      </h1>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        autoplay={true}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        // navigation={true}
        className="w-full lg:w-2/3 lg:h-[600px]"
      >
        {projectList.map((project) => {
          return (
            <SwiperSlide>
              <Project project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Projects;
