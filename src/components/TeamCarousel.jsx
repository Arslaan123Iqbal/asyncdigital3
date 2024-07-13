
import Comma from '../images/icons/comma.svg'
import Image from 'next/image'
import TeamME from '../images/teamme.png'
const TeamCarousel = () => {
  return (
    <div className='relative'>
      <Image src={Comma} alt='comma' className='absolute top-[-20px] z-50'/>
      <div className='border shadow rounded-lg relative'>
      <div className='flex gap-5 p-6 relative'>
        <Image alt='teaeme' src={TeamME} width={50} height={50}/>
        <div>
          <h1>Jonathan System</h1>
          <p className='text-tgray text-[14px]'>Risiu duiss</p>
        </div>
      </div>
      <div className='pl-6'>⭐⭐⭐⭐⭐⭐</div>

      <p className='text-tgray text-[14px] w-[300px] p-6'>
      Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.
      </p>
      </div>
    
    </div>
  )
}




import React from 'react';
import './VerticalCardSlider.css';

const VerticalCardSlider = () => {
  const people = [
    { name: "Sumit Kapoor", role: "Frontend Developer" },
    { name: "Andrew Neil", role: "YouTuber & Blogger" },
    { name: "Jasmine Carter", role: "Freelancer & Vlogger" },
    { name: "Justin Chung", role: "Backend Developer" },
    { name: "Adrina Calvo", role: "Teacher & Advertiser" },
  ];

  return (
    <div className="wrapper">
      <div className="outer">
        {people.map((person, index) => (
          <div
            key={index}
            className="card"
            style={{ animationDelay: `${index * 3}s` }}
          >
            <div className="content">
              {/* <div className="img">
                <img src="#" alt="" />
              </div>
              <div className="details">
                <span className="name">{person.name}</span>
                <p>{person.role}</p>
              </div> */}
              <TeamCarousel/>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCardSlider;
