import React, { useEffect } from "react";
import "./activityCards.scss";

import iconDown from "../../images/icon-down.svg";
import iconUp from "../../images/icon-up.svg";
import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconYoutube from "../../images/icon-youtube.svg";

function ActivityCards(props) {
  const darkToggle = props.darkToggle;

  const activityCardData = [
    {
      activityType: "Page Views",
      total: 87,
      voteDirection: "up",
      votes: "3",
      media: "facebook",
    },
    {
      activityType: "Likes",
      total: 52,
      voteDirection: "down",
      votes: "2",
      media: "facebook",
    },
    {
      activityType: "Likes",
      total: 5462,
      voteDirection: "up",
      votes: "2257",
      media: "instagram",
    },
    {
      activityType: "Profile Views",
      total: 52000,
      voteDirection: "up",
      votes: "1375",
      media: "instagram",
    },
    {
      activityType: "Retweets",
      total: 117,
      voteDirection: "up",
      votes: "303",
      media: "twitter",
    },
    {
      activityType: "Likes",
      total: 507,
      voteDirection: "up",
      votes: "553",
      media: "twitter",
    },
    {
      activityType: "Likes",
      total: 107,
      voteDirection: "down",
      votes: "19",
      media: "youtube",
    },
    {
      activityType: "Total Views",
      total: 1407,
      voteDirection: "down",
      votes: "12",
      media: "youtube",
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
    <div className='activity-cards-container'>
      {activityCardData.map((person) => {
        return (
          <div
            className={
              darkToggle
                ? `activity-container dark-activity-container`
                : "activity-container"
            }
          >
            <div className='activity-title-total'>
              <h4>{person.activityType}</h4>
              <h4>{person.total}</h4>
            </div>
            <div className='social-media-stats'>
              <div className='social-media-icon'>
                <img src={socialMediaIcons[person.media]} />
              </div>
              <div className={`votes-container ${person.voteDirection}`}>
                <img
                  className='percent-icon'
                  src={socialMediaIcons[person.voteDirection]}
                />
                <p>{`${person.votes}%`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityCards;
