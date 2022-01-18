import life from '../../public/images/projects/life.png';

const EXPERIENCE = [
  {
    companyName: 'Shoalter Technology',
    location: 'Taiwan, Taipei',
    info: [
      {
        title: 'Analyst Programmer',
        during: 'October 2021 - Present',
        description: [],
      },
      {
        title: 'Senior Programmer',
        during: 'January 2021 - October 2021',
        description: [
          'Design and construct the structure of the project easy to maintain and scale',
          'Using React.js to develop several products related to the eCommerce system',
          'Using React Native to deploy web projects to mobile',
          'Implement an app that works with BLE devices using React Native.',
        ],
      },
    ],
  },
  {
    companyName: 'Actura',
    location: 'Taiwan, Taipei',
    info: [
      {
        title: 'Software Manager',
        during: 'April 2019 - June 2020',
        description: [
          'Planning, scheduling, and adjusting projects of the department',
          'Communicate and coordinate with other departments',
          'Evaluate new technologies to improve the quality and performance of the software',
          'Design and Implemented / created the full life cycle process for one software project.',
        ],
      },
      {
        title: 'Software Engineer',
        during: 'October 2017 - April 2019',
        description: [
          'Design and build cross-platform desktop apps using electron framework',
          'Developing and maintaining firmware of devices, including the libraries using C++',
          'Implemented and created three software products successfully to market',
          'Working on the communication between the device and app via BLE or USB serial port',
        ],
      },
    ],
  },
  {
    companyName: 'EAVE',
    location: 'UK, London',
    info: [
      {
        title: 'Software Engineer',
        during: 'August 2016 - July 2017',
        description: [
          'Developing mobile applications to enhance the user experience with headset',
          'Building websites using Javascript to display the data collected from headset produc',
          'Design and develop an indoor localization system using BLE for noise data collection',
          'Design and implement the protocol between the headsets product and the data receiver',
        ],
      },
    ],
  },
];

function WorkExperience() {
  const experience = EXPERIENCE.map((company) => {
    return (
      <div className=" flex flex-col text-bluedark mb-4" key={company.companyName}>
        <div className="flex justify-start sm:justify-center items-end">
          <div className="text-xs sm:text-xl lg:text-2xl text-center">{company.info[0].title}</div>
          <div className="ml-4 text-xs sm:text-base">{company.companyName}</div>
        </div>
        <div className="flex text-xs sm:text-base justify-start sm:justify-center items-end">
          <span className="text-bluedark/75">{company.info[0].during}</span>
          <span className="ml-4 text-c4/75 ">{company.location}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="p-6 bg-c2">
      <h1 className="text-xl text-left text-bluedark border-c4 border-b-2 sm:text-center font-medium">
        WORK
      </h1>
      <div className="flex flex-col w-full mt-4 bg-c2/10 p-2">{experience}</div>
    </div>
  );
}

export default WorkExperience;
