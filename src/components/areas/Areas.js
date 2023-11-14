import React from 'react';
import Technologies from '../../assets/images/technologies/technologies';
import Knowledges from '../../assets/images/gifs/knowledges';
import { useTranslation } from 'react-i18next';
import './areas.css';


const Areas = () => {
  const [t] = useTranslation('global');
  
  const gifs = [
    {imageGif: Knowledges.Chart, name: t('areas.science')},
    {imageGif: Knowledges.Tool, name: t('areas.engineering')},
    {imageGif: Knowledges.ZoomSearch, name: t('areas.analysis')},
    {imageGif: Knowledges.Code, name: t('areas.softwareDev')},
    {imageGif: Knowledges.WindowLine, name: t('areas.architecture')},
    {imageGif: Knowledges.SoftwareInfrastructure, name: t('areas.infrastructure')},
    {imageGif: Knowledges.Integration, name: t('areas.collectIntegration')},
    {imageGif: Knowledges.BigData, name: t('areas.bigData')},
    {imageGif: Knowledges.ArtificialIntelligence, name: t('areas.ai')},
    {imageGif: Knowledges.ImageRecognition, name: t('areas.recognition')},
    {imageGif: Knowledges.GreatLanguageModels, name: t('areas.models')},
    {imageGif: Knowledges.ProjectManagement, name: t('areas.management')},
  ];
  
  const logos = [
    {name: 'Python', image: Technologies.Python},
    {name: 'Javascript', image: Technologies.Javascript},
    {name: 'Typescript', image: Technologies.Typescript},
    {name: 'HTML', image: Technologies.HTMLicon},
    {name: 'CSS', image: Technologies.CSSicon},
    {name: 'MySQL', image: Technologies.MySQL},
    {name: 'MongoDB', image: Technologies.MongoDB},
    {name: 'Parquet', image: Technologies.Parquet},
    {name: 'Neo4j', image: Technologies.Neo4j},
    {name: 'ReactJs', image: Technologies.ReactJs},
    {name: 'Redux', image: Technologies.Redux},
    {name: 'Django', image: Technologies.Django},
    {name: 'Flask', image: Technologies.Flask},
    {name: 'Bootstrap', image: Technologies.Bootstrap},
    {name: 'Material UI', image: Technologies.MaterialUI},
    {name: 'Spark', image: Technologies.Spark},
    {name: 'Superset', image: Technologies.Superset},
    {name: 'PowerBI', image: Technologies.PowerBI},
    {name: 'Ultralytics Yolo', image: Technologies.UltralyticsYolo},
    {name: 'Chat GPT', image: Technologies.ChatGPT},
    {name: 'Digital Ocean', image: Technologies.DigitalOcean},
    {name: 'AWS', image: Technologies.AWSicon},
    {name: 'Auth0', image: Technologies.Auth0},
  ];

  return (
    <div className='container-fluid d-flex flex-column justify-content-evenly align-items-center m-0 p-0 areas' id='areas'>
      <div className='col-lg-8 our-areas'>
        <h1 className='text-white bold-title text-center pb-0 mb-0'>{t('areas.knowledge')}</h1>
        <h3 className="text-white extra-light-text text-center fs-6 pt-0 mt-0">{t('areas.knowledgeDesc')}</h3>
        <div className='gifs-container'>
          {gifs.map((iconGif, index) => (
            <div className='gif-content' key={index}>
              <img src={iconGif.imageGif} alt={iconGif.name} />
              <p className='regular-text'>{iconGif.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center technologies">
        <h1 className="text-white bold-title text-center pb-0 mb-0">{t('areas.technologies')}</h1>
        <h3 className="text-white extra-light-text text-center fs-6 pt-0 mt-0">{t('areas.technologiesDesc')}</h3>
        <div className="slider">
          <div className="slide-track">
            {logos.map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div className="slide" key={index + logos.length}>
                <img src={logo.image} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Areas;