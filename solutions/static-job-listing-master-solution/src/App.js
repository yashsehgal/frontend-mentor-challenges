import React from 'react';
import ApplicationHeaderBanner from './components/ApplicationHeaderBanner/ApplicationHeaderBanner';
import ApplicationViewContainer from './components/ApplicationViewContainer/ApplicationViewContainer';
import './styles/styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ApplicationHeaderBanner BannerType={'desktop'} />
        <ApplicationViewContainer />
      </div>     
    )
  }
}