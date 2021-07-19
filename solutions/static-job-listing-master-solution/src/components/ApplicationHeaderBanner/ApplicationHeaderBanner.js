import React from 'react';
import './style.css';
import ApplicationHeaderBannerDesktop from '../../assets/bg-header-desktop.svg';
import ApplicationHeaderBannerMobile from '../../assets/bg-header-mobile.svg';

export default function ApplicationHeaderBanner(applicationHeaderBannerType) {
  if (applicationHeaderBannerType.BannerType === 'desktop') {
    return (
      <div className="ApplicationHeaderBanner" id="ApplicationHeaderBanner-desktop">
        <img src={ApplicationHeaderBannerDesktop} 
          alt="application-header-banner-desktop" 
          className="application-header-banner"
          id="application-header-banner-desktop"
        />
      </div>
    )
  } else if (applicationHeaderBannerType.BannerType === 'mobile') {
    return (
      <div className="ApplicationHeaderBanner" id="ApplicationHeaderBanner-mobile">
        <img src={ApplicationHeaderBannerMobile}
          alt="application-header-banner-mobile"
          className="application-header-banner"
          id="application-header-banner-mobile"
        />
      </div>
    )
  } else {
    return <div>Something went wrong!</div>
  }
}