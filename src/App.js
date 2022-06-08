import React, { useState } from "react";
import Card from "./Components/Card";
import Title from "./Components/Title";
import ErrorMessage from "./Components/ErrorMessage";
import "../src/App.css";

function App() {
  // Set GitHub Account States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [public_repos, setPublic_Repos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [twitter_username, setTwitter_Username] = useState("");
  const [created_at, setCreated_At] = useState("");
  const [html_url, setHtml_Url] = useState("");
  const [company, setCompany] = useState("");
  const [userInput, setUserInput] = useState("");
  // Set Error Message and Card Visibility
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio,
    location,
    twitter_username,
    created_at,
    html_url,
    company,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setPublic_Repos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
    setLocation(location);
    setTwitter_Username(twitter_username);
    setCreated_At(created_at);
    setHtml_Url(html_url);
    setCompany(company);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          setVisibility(false);
        } else {
          setData(data);
          setError(null);
          setVisibility(true);
        }
      });
  };

  return (
    <div className="container-0">
      <div className="container-1">
        <Title />
        <div className="container-0-searchForm">
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-searchbox"
              type="text"
              placeholder="Enter GitHub username"
              name="search"
              onChange={handleSearch}
            ></input>
            <button className="form-button" type="submit">
              Search
            </button>
          </form>
        </div>

        {error ? (
          <ErrorMessage message={error} />
        ) : visibility ? (
          <Card
            name={name}
            username={username}
            followers={followers}
            following={following}
            public_repos={public_repos}
            bio={bio}
            location={location}
            twitter_username={twitter_username}
            created_at={created_at}
            html_url={html_url}
            company={company}
          >
            <img
              alt=""
              className="dev-img"
              src={avatar}
              height={150}
              width={150}
            />
          </Card>
        ) : (
          ""
        )}

        {error ? (
          <div className="container-card-footer">
            <p> Try another username </p>
          </div>
        ) : visibility && name ? (
          <div className="container-card-footer">
            <p> Viewing {name}'s profile </p>
          </div>
        ) : visibility & !name ? (
          <div className="container-card-footer">
            <p> </p>
          </div>
        ) : (
          <div className="container-card-footer">
            <p> Search for GitHub developers</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
