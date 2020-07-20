import React from "react";
import "./followerCards.scss";

import iconDown from "../../images/icon-down.svg";
import iconUp from "../../images/icon-up.svg";
import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconYoutube from "../../images/icon-youtube.svg";

function FollowerCards(props) {
  const darkToggle = props.darkToggle;

  const followerArray = [
    {
      socialMedia: "facebook",
      followers: 1987,
      timeStamp: 12,
      voteDirection: "up",
      user: "@nathanf",
    },
    {
      socialMedia: "twitter",
      followers: 1044,
      timeStamp: 99,
      voteDirection: "up",
      user: "@nathanf",
    },
    {
      socialMedia: "instagram",
      followers: 11000,
      timeStamp: 1099,
      voteDirection: "up",
      user: "@realnathanf",
    },
    {
      socialMedia: "youtube",
      followers: 8239,
      timeStamp: 144,
      voteDirection: "down",
      user: "Nathan F.",
    },
  ];

  const socialMediaIcons = {
    facebook: iconFacebook,
    instagram: iconInstagram,
    youtube: iconYoutube,
    twitter: iconTwitter,
    up: iconUp,
    down: iconDown,
  };

  return (
    <div
      className={
        darkToggle
          ? `followers-container dark-followers-container`
          : "followers-container"
      }
    >
      {followerArray.map((person) => {
        return (
          <div className={`follower-card ${person.socialMedia}`}>
            <div className='social-user-container'>
              <img
                className='icon'
                alt='social media icon'
                src={socialMediaIcons[person.socialMedia]}
              ></img>
              <p>{person.user}</p>
            </div>
            <div className='followers-total-container'>
              <h4>{person.followers}</h4>
              <h4>FOLLOWERS</h4>
            </div>
            <div className={`time-container ${person.voteDirection}`}>
              <img
                className='icon'
                alt='up or down icon'
                src={socialMediaIcons[person.voteDirection]}
              />
              <h4>{person.timeStamp} Today</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FollowerCards;
