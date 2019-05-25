import React from "react";
import { Header, Image } from "semantic-ui-react";
import chuckNorrisAvatar from "../images/chuck-norris-avatar.png";

const JokeHeader = () => {
  return (
    <Header
      className="header-bg"
      as="h1"
      icon
      textAlign="center"
      style={{ padding: "40px 0" }}
    >
      <Image centered style={{ width: "80px" }} src={chuckNorrisAvatar} />
      <Header.Content
        className="title"
        style={{ color: "#fff", paddingTop: " 20px" }}
      >
        Chuck Norris Jokes
      </Header.Content>
    </Header>
  );
};

export default JokeHeader;
