import React from 'react';
import './styles/styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="intro-content-wrapper">
          <h1 className="intro-tagline">Learn to code by <br /> watching others</h1>
          <p className="intro-content">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think in invaluable.</p>
        </div>
        <div className="signup-form-wrapper">
          <div className="offer-notifier">
            <p className="offer-notifier-content">
              <b>Try is free for 7 days</b> then $20/mo. thereafter
            </p>
          </div>
          <form className="signup-form">
            <input type="text" name="first-name" id="first-name" className="signup-user-input" placeholder="First Name" />
            <input type="text" name="last-name" id="last-name" className="signup-user-input" placeholder="Last Name" />
            <input type="email" name="email-address" id="email-address" className="signup-user-input" placeholder="Email Address" />
            <input type="password" name="password" id="password" className="signup-user-input" placeholder="Password" />
            <button id="submit-button" className="button">CLAIM YOUR FREE TRIAL</button>
            <span className="info-text">By clicking the button, you are agreeing to our <span className="red-text">Terms and Services</span></span>
          </form>
        </div>
      </div>
    )
  }
}