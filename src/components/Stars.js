import React from 'react';


const Stars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const activeStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      let starClass = 'fa fa-star';

      if (i <= activeStars) {
        starClass += ' active';
      } else if (i === activeStars + 1 && hasHalfStar) {
        starClass += ' active-half';
      }

      stars.push(<span key={i} className={starClass}></span>);
    }

    return stars;
  };

  return <div className="stars">{renderStars()}</div>;
};

export default Stars;