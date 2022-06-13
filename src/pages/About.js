import React, { Component } from 'react';
import "./About.css";
import profile_pic from "/Users/william_x1/Documents/GitHub/personal_website/to-do-list_week1-wmonsalv/src/assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">William Monsalve</div>
            <div className="brief_description">
            <p>I'm passionate about programming, chess, playing my guitar, and making new connections.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}