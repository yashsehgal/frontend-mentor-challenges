import React from 'react';
import './card.component.style.css';
import FetchImagesByImportPath from '../data/FetchImagesByImportPath';

export default function Card(CardProperties) {
  let CardBGColor = "";
  let CardFontColor = "white";
  switch (CardProperties.BGColor) {
    case 'purple': CardBGColor = "hsl(263, 55%, 52%)"; break;
    case 'very-dark-grayish-blue': CardBGColor = "hsl(217, 19%, 35%)"; break;
    case 'very-dark-blackish-blue': CardBGColor = "hsl(219, 29%, 14%)"; break;
    case 'white': CardBGColor = "hsl(0, 0%, 100%)"; break;
    default: CardBGColor = "black"; break;
  }
  if (CardBGColor === 'hsl(0, 0%, 100%)') {
    CardFontColor = 'hsl(219, 29%, 14%)';
  }
  return (
    <div className="card" style={{
      backgroundColor: `${CardBGColor}`,
      color: `${CardFontColor}`
    }}>
      <div className="card-header">
        <div className="card-header__user-profile-image-wrapper">
          <img src={FetchImagesByImportPath[CardProperties.UserProfileImage]} 
            alt="user-profile-display"
            className="user-profile-image"
          />
        </div>
        <div className="card-header__user-details-wrapper">
          <h3 className="user-details__username">{CardProperties.UserName}</h3>
          <p className="user-details__user-account-type">Verified Graduate</p>
        </div>
      </div>
      <div className="card-body-content">
        <h2 className="card-body-content__testimonial-title">{CardProperties.TestimonialTitle}</h2>
        <p className="card-body-content__testimonial-content">{CardProperties.TestimonialContent}</p>
      </div>
    </div>
  )
}