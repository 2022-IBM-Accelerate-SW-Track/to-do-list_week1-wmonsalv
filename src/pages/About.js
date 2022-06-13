import React, { Component } from 'react';
import "./About.css";
import profilePicture from "/Users/william_x1/Documents/GitHub/personal_website/to-do-list_week1-wmonsalv/src/assets/profilePicture.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profilePicture}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">
              <h1>Wiliam Monsalve</h1>
              </div>
            <div className="brief_description">
              <p>I'm passionate about programming, chess, reading, and playing my guitar.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}