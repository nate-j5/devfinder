import React from "react";
import "../../src/App.css";
import { BsBriefcase } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Card(props) {
  // Format Date
  const timestamp = props.created_at;
  const time = new Date(timestamp).getTime();
  const day = new Date(time).getDate();
  const month = new Date(time).toLocaleString("default", { month: "long" });
  const year = new Date(time).getFullYear();
  const newDateFormat = `${month} ${day}, ${year}`;

  // Format Profile Url
  const profileLink = props.username.toString();
  const url = `https://github.com/${profileLink}`;

  return (
    <div className="container-0-card">
      <div className="container-img-card">{props.children}</div>
      <div className="container-1-card">
        <div className="container-1-card-top">
          <div className="container-1-card-top-text">
            {props.name ? (
              <h2>{props.name}</h2>
            ) : (
              <p className="empty-name-card">Name not listed</p>
            )}
            {props.bio ? (
              <h4>{props.bio}</h4>
            ) : (
              <p className="empty-bio-card">Bio not available</p>
            )}
            <div className="container-1-card-top-username-link">
              <a href={url}> {props.username}</a>
            </div>
          </div>

          <div className="container-1-card-top-date">
            <h5>First login:</h5>
            <h6>{newDateFormat}</h6>
          </div>
        </div>

        <div className="container-1-card-middle">
          <div className="container-1-card-middle-wrapper">
            <div className="container-1-card-middle-text">
              <h4>Repositories</h4>
              <h3>{props.public_repos}</h3>
            </div>

            <div className="container-1-card-middle-text">
              <h4>Following </h4>
              <h3>{props.following}</h3>
            </div>

            <div className="container-1-card-middle-text">
              <h4>Followers</h4>
              <h3>{props.followers}</h3>
            </div>
          </div>
        </div>

        <div className="container-1-card-bottom">
          <div className="container-1-card-bottom-wrapper">
            <div className="container-1-card-bottom-text-1">
              <div className="icon-container-upper-left">
                <FaMapPin />
                {props.location ? (
                  <h4 className="has-location"> {props.location}</h4>
                ) : (
                  <p className="empty-location">Location: Not listed</p>
                )}
              </div>

              <div className="icon-container-upper-right">
                <FaTwitter />
                {props.twitter_username ? (
                  <h4 className="has-twitter_username">
                    {props.twitter_username}
                  </h4>
                ) : (
                  <p className="empty-twitter_username">Twitter: Not listed</p>
                )}
              </div>
            </div>
            <div className="container-1-card-bottom-text-2">
              <div className="icon-container-lower-left">
                <BsBriefcase />
                {props.company ? (
                  <h4 className="has-company">{props.company}</h4>
                ) : (
                  <p className="empty-company">Company: Not listed</p>
                )}
              </div>

              <div className="icon-container-lower-right">
                <FaGithub />
                <h4 className="has-html_url">{props.html_url}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
