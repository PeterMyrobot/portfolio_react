function About() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6">
      <div className="col-span-1 md:col-span-2 bg-cyan-400"></div>
      <div className="col-span-3 md:col-span-3 bg-cyan-700 p-6">
        <div>
          <p className="text-2xl">About Me</p>
          Dedicated to javascript with 6 years of experience in which I have acquired a wide range
          of technical skills ranging from the latest JavaScript frameworks to software
          architecture. Have experience with building products that have over 100,000 users. I am
          also familiar with the technologies related to mechanical and electrical, including the
          BLE communication between the software app and the real-world devices, having the ability
          to integrate software and hardware from a comprehensive perspective.
        </div>
        <div className="flex flex-col md:flex-row justify-between py-4 ">
          <div>
            <p className="text-2xl">contact details</p>
            <ul>
              <li>Peter yang </li>
              <li>123 Dev Lane</li>
              <li>London </li>
              <li>+886 961296288</li>
              <li>weiyang2016@gmail.com</li>
            </ul>
          </div>
          <div className="flex rounded-lg bg-blue-700 p-2 h-9 cursor-pointer ">
            DOWNLOAD RESSUME
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
