import Image from 'next/image';
import StarCanvas from './StarCanvas';
import TypeWriter from 'react-typewriter';
import downArrow from '../../public/icons/downArrow.svg';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

function Landling() {
  return (
    <div className="flex bg-black h-screen justify-center items-center">
      <div className="absolute">
        <StarCanvas />
      </div>
      <div className="flex justify-center z-10 w-full min-h-1/6">
        <div className="flex flex-col justify-center p-12 w-10/12 md:w-2/4  ">
          <h1 className="text-xl sm:text-4xl md:text-6xl text-gray-200 text-center">
            <TypeWriter typing={0.5}>I'm Peter Yang</TypeWriter>
          </h1>
          <p className="text-white text-sm sm:text-base mt-4 text-center">
            Software Engineer base in Taiwan, facing to world!
          </p>
          <div className="flex justify-center space-x-7 my-4">
            <a href="https://google.com" target="_blank">
              <IoLogoGithub size={30} color="white" />
            </a>
            <a href="https://google.com" target="_blank">
              <IoLogoLinkedin size={30} color="white" />
            </a>
          </div>
        </div>
      </div>

      {/* social media link icons */}
      <div className="animate-bounce absolute bottom-5">
        <Image src={downArrow} height={30} width={30} />
      </div>
    </div>
  );
}

export default Landling;
