import React from 'react';
import './cardItem.css';

const CardItem = ({ icon, iconColor, content, image, expanded, onToggleExpand }) => {
  const handleClick = () => {
    onToggleExpand();
  };

  const cardWidth = expanded ? '100%' : '2%';

  const cardStyle = {
    backgroundImage: 
      expanded ? 
        `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})` 
      : 
        `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)), url(${image})`,
  };

  return (
    <div className={`d-flex align-items-center card-item justify-content-end ${expanded ? 'expanded' : ''}`} style={{ width: cardWidth, ...cardStyle }} onClick={handleClick}>
      {expanded ? 
        (<p className='text-white text-center m-0 shadow-text light-text'>{content}</p>)
      : 
        (<div className='icon-item'>{icon}</div>)
      }
    </div>
  );
};


export default CardItem;