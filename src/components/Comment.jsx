import React, { Component } from "react";
import Moment from "react-moment";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }
  collapseComment = () => {
    const { body } = this.props.comment;
    if (this.state.collapsed === false) this.setState({ collapsed: true });
    return (
      <p>
        {body.substring(0, 100)}...
        <span
          className="text-primary cursor-pointer"
          onClick={this.expandComment}
        >
          Read more
        </span>
      </p>
    );
  };
  expandComment = () => {
    const { body } = this.props.comment;
    if (this.state.collapsed === true) this.setState({ collapsed: false });
    return (
      <p>
        {body}{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={this.collapseComment}
        >
          Read less
        </span>
      </p>
    );
  };
  render() {
    const { user, created_at, body } = this.props.comment;
    const { collapsed } = this.state;
    return (
      <div className="box-comment">
        {/* User image */}
        <img
          className="img-circle img-sm"
          src={user.image_url["120px"]}
          alt="User Image"
        />
        <div className="comment-text">
          <span className="username">
            {user.name}
            <span className="text-muted pull-right">
              <Moment fromNow>{created_at}</Moment>
            </span>
          </span>
          {/* /.username */}
          {body.length > 100 && collapsed
            ? this.collapseComment()
            : body.length < 100
            ? body
            : this.expandComment()}
        </div>
        {/* /.comment-text */}
      </div>
    );
  }
}

export default Comment;
