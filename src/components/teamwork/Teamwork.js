import React, { useState, useEffect } from 'react';
import vectorIcon from '../../assets/images/vector-icon.svg';
import groupIcon from '../../assets/images/group-icon.svg';
import groupIcon2 from '../../assets/images/group-icon2.svg';
import plusSignIcon from '../../assets/images/plus-sign-icon.svg';
import Facu from '../../assets/images/facu.png';
import Guti from '../../assets/images/guti.png';
import Kemel from '../../assets/images/kemel.png';
import German from '../../assets/images/german.png';
import Maxi from '../../assets/images/maxi.png';
import Maxi2 from '../../assets/images/maxi_2.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './teamwork.css';

const Teamwork = () => {
  const [isPhoneSize, setIsPhoneSize] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsPhoneSize(window.innerWidth <= 600);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const team = [
    {
      name: 'Gerardo Gutierrez',
      pic: Guti,
      description: "CO-FOUNDER",
      linkedin: "https://www.linkedin.com/in/ggutz/",
      className: 'guti-style',
    },
    {
      name: 'Facundo Esquivel Fagiani',
      pic: Facu,
      description: "CO-FOUNDER",
      linkedin: "https://www.linkedin.com/in/facufref/",
      className: 'facu-style',
    },
    {
      name: 'Kemel Hallar',
      pic: Kemel,
      description: "CO-FOUNDER",
      linkedin: "https://www.linkedin.com/in/kemelhallar/",
      className: 'kemel-style',
    },
    {
      name: 'German Eliseo Vera',
      pic: German,
      description: "SOFTWARE DEVELOPER",
      linkedin: "https://www.linkedin.com/in/g-e-v/",
      className: 'german-style',
    },
    {
      name: 'Maximiliano David Lezano',
      pic: isPhoneSize ? Maxi2 : Maxi,
      description: "SOFTWARE DEVELOPER",
      linkedin: "https://www.linkedin.com/in/maxlezano/",
      className: 'maxi-style',
    },
  ];

  return (
    <div className='team-container'>
      <div className='container team-card-container'>
        <div className='row d-flex justify-content-center align-items-start'>
          {team.map((nn, index) => (
            <div className='col-10 col-md-6 col-xl-4 team-card' key={index}>
              <div className="guy-image-container">
                <img className="shape vector" src={vectorIcon} alt="vector shape" />
                <img className="shape circles" src={groupIcon} alt="circles shape" />
                <img className="shape triangle" src={groupIcon2} alt="triangle shape" />
                <img className="shape plus-sign" src={plusSignIcon} alt="plus sign shape" />

                <div className="background-square-frame"></div>
                <div className="invisible-holder">
                  <div className='square-frame'>
                    <img src={nn.pic} alt={nn.name} className={nn.className} />
                  </div>
                </div>
              </div>

              <div className='d-flex flex-column justify-content-center align-items-center text-center team-card-desc'>
                <h3 className='text-white m-0 regular-title'>{nn.name}</h3>
                <span className='text-white light-text'>{nn.description}</span>
                <a href={nn.linkedin} target='blank'>
                  <LinkedInIcon className='pt-2 linkedinIcon' sx={{ fontSize: '3em' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teamwork;