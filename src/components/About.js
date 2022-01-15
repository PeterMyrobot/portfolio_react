import Image from 'next/image';
import Me from '../../public/images/me.jpg';

function About() {
  return (
    <div className="w-full bg-c1">
      <div className="grid grid-cols-4 md:grid-cols-6 ">
        <div className="hidden md:flex justify-center items-center col-span-1 md:col-span-2 bg-raisinblacklight">
          <div className="relative h-52 w-52 ">
            <Image src={Me} layout="fill" className="rounded-full object-cover" />
          </div>
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-3 bg-raisinblack p-6">
          <div>
            <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
              About Me
            </p>
            <p className="text-sm sm:text-xl text-bluedark">
              Dedicated to javascript with 6 years of experience in which I have acquired a wide
              range of technical skills ranging from the latest JavaScript frameworks to software
              architecture. Have experience with building products that have over 100,000 users. I
              am also familiar with the technologies related to mechanical and electrical, including
              the BLE communication between the software app and the real-world devices, having the
              ability to integrate software and hardware from a comprehensive perspective.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between py-4 ">
            <div>
              <p className="text-xl sm:text-2xl font-medium text-c2 border-l-2 border-c4 pl-4 mb-2">
                contact details
              </p>
              <ul className="text-sm sm:text-xl text-bluedark">
                <li>Peter yang </li>
                <li>123 Dev Lane</li>
                <li>London </li>
                <li>+886 961296288</li>
                <li>weiyang2016@gmail.com</li>
              </ul>
            </div>
            <div className="flex bg-bluedark h-9 cursor-pointer text-c2 leading-9 px-3 max-w-xs my-4">
              DOWNLOAD RESSUME
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
