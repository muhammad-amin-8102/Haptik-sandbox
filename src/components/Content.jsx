import React, { Component } from "react";
import Posts from "./Posts";

class Content extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Posts />
      </div>
    );
  }
}

export default Content;
