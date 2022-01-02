import Image from 'next/image';
import StarCanvas from './StarCanvas';
import TypeWriter from 'react-typewriter';
import downArrow from '../../public/icons/downArrow.svg';

function Landling() {
  return (
    <div className="flex bg-black h-screen justify-center items-center">
      <div className="absolute">
        <StarCanvas />
      </div>
      <div className="flex flex-col z-10">
        <h1 className="text-4xl md:text-6xl text-gray-200">
          <TypeWriter typing={0.5}>
            I'm Peter Yang<p className="text-white text-base">Software Engineer</p>
          </TypeWriter>
        </h1>
      </div>
      {/* social media link icons */}
      <div className="animate-bounce absolute bottom-10">
        <Image src={downArrow} height={30} width={30} />
      </div>
    </div>
  );
}

export default Landling;
