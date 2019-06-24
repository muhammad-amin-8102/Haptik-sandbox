import React, { Component } from "react";
import Post from "./Post";
import { CONSTANT } from "../constants";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    const getPostsObj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Host: "api.producthunt.com",
        Authorization: "Bearer " + CONSTANT.devToken
      }
    };
    fetch(CONSTANT.host + CONSTANT.posts, getPostsObj)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            posts: result.posts
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="animated-background">
              <div className="background-masker header-top" />
              <div className="background-masker header-left" />
              <div className="background-masker header-right" />
              <div className="background-masker header-bottom" />
              <div className="background-masker subheader-left" />
              <div className="background-masker subheader-right" />
              <div className="background-masker subheader-bottom" />
              <div className="background-masker content-top" />
              <div className="background-masker content-first-end" />
              <div className="background-masker content-second-line" />
              <div className="background-masker content-second-end" />
              <div className="background-masker content-third-line" />
              <div className="background-masker content-third-end" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </React.Fragment>
      );
    }
  }
}

export default Posts;
