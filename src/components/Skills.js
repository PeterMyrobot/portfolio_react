const skills = [
  { icon: '', label: 'React.js ' },
  { icon: '', label: 'Vue.js ' },
  { icon: '', label: 'React Native ' },
  { icon: '', label: 'Python' },
  { icon: '', label: 'Electron' },
  { icon: '', label: 'BLE' },
  { icon: '', label: 'Swift' },
  { icon: '', label: 'C++' },
  { icon: '', label: 'React.js ' },
  { icon: '', label: 'Vue.js ' },
  { icon: '', label: 'React Native ' },
  { icon: '', label: 'Python' },
  { icon: '', label: 'Electron' },
  { icon: '', label: 'BLE' },
  { icon: '', label: 'Swift' },
  { icon: '', label: 'C++' },
];

function Skills() {
  const skillList = skills.map((skill) => (
    <div
      key={skill.label}
      className="flex  items-center justify-center w-130px h-14 bg-orange-600  rounded-md mx-5px"
    >
      {skill.label}
    </div>
  ));
  return (
    <div className="flex flex-row overflow-hidden  py-4 relative h-20">
      <div className="animate-x-scrolling absolute flex flex-row ">{skillList}</div>
    </div>
  );
}

export default Skills;
