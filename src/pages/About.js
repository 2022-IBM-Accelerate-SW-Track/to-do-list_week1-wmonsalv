import React, { Component } from 'react';
import "./About.css";
//import <profile_pic_name> from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
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