import Image from 'next/image';

function Project(props) {
  return (
    <div className="flex flex-col justify-between bg-c1 px-2 py-2 md:ml-4 mt-2 w-350px h-400px">
      <h1 className="text-2xl text-c2 border-c4 border-b-2">{props.Name}</h1>
      <div className="relative h-48 my-4">
        <Image src={props.img} layout="fill" className="object-cover" />
      </div>
      <div>{props.stack}</div>
      <div className="flex flex-row justify-end space-x-2">
        <a className="p-2 bg-amber-700" href={props.url}>
          DEMO
        </a>
        <a className="p-2 bg-amber-700" href={props.github}>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;

//  Name: 'metaverse-challenge',
//     url: '',
//     description: 'Web 3.0 - Next.js, Moralis.io, TailwindCSS 3.0, Blockchain',
//     img: '',
//     github: 'https://github.com/PeterMyrobot/metaverse-challenge',
//     visibile: true,
//     stack:
