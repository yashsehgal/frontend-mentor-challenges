import React, { useState } from 'react';
import Card from './components/Card';
import TestimonialData from './data/TestimonialData';
import './styles/page-styles/App.view.css';

function renderLayerTop(card_data) {
  return (
    card_data.map((data, key) => (
      <Card
        UserProfileImage={data.ImageID}
        UserName={data.UserName}
        TestimonialTitle={data.TestimonialTitle}
        TestimonialContent={data.TestimonialContent}
        BGColor={data.BGColor}
        key={key}
        className="card"
      />
    ))
  )
}

function renderLayerBottom(card_data) {
  return (
    card_data.map((data, key) => (
      <Card
        UserProfileImage={data.ImageID}
        UserName={data.UserName}
        TestimonialTitle={data.TestimonialTitle}
        TestimonialContent={data.TestimonialContent}
        BGColor={data.BGColor}
        key={key}
        className="card"
      />
    ))
  )
}

function renderCardAtSide(card_data) {
  return (
    card_data.map((data, key) => (
      <Card
        UserProfileImage={data.ImageID}
        UserName={data.UserName}
        TestimonialTitle={data.TestimonialTitle}
        TestimonialContent={data.TestimonialContent}
        BGColor={data.BGColor}
        key={key}
        className="card"
      />
    ))
  )
}

export default function App() {
  const [testimonialContentData] = useState(TestimonialData());
  return (
    <div className="App">
      <div className="testimonials-wrapper">
        <div className="testimonial-wrapper__container-01">
          <div className="testimonial-wrapper__top-layer">
            {renderLayerTop([testimonialContentData[0], testimonialContentData[1]])}
          </div>
          <div className="testimonial-wrapper__bottom-layer">
            {renderLayerBottom([testimonialContentData[2], testimonialContentData[3]])}
          </div>
        </div>
        <div className="testimonial-wrapper__container-02">
          {renderCardAtSide([testimonialContentData[4]])}
        </div>
      </div>
    </div>
  )
}