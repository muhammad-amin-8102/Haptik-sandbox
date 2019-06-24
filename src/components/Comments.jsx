import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
  render() {
    if (this.props.comments.length > 0) {
      const { onPage, comments, moreComments } = this.props;
      console.log(moreComments);
      return (
        <div className="box-footer box-comments">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
          {moreComments ? (
            <span className="text-primary cursor-pointer" onClick={onPage}>
              Show more comments...
            </span>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return "";
    }
  }
}

export default Comments;
