import React, { Component } from "react";
import { CONSTANT } from "../constants";
import Comments from "./Comments";
import Moment from "react-moment";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: [],
      page: 1,
      currentCommentsLength: 0,
      previousCommentsLength: 0,
      voted_for_post: props.post.current_user.voted_for_post
    };
  }

  componentDidMount() {
    this.getCommentsWithPage();
  }

  getCommentsWithPage = () => {
    this.setState({
      previousCommentsLength: this.state.currentCommentsLength
    });
    const { id } = this.props.post;
    const { page, comments } = this.state;
    fetch(
      CONSTANT.getCommentsUrl(id, page, CONSTANT.per_page),
      CONSTANT.getGetObj()
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            comments: comments.concat(result.comments),
            page: page + 1,
            currentCommentsLength: comments.concat(result.comments).length
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  voteOrUnvote = () => {
    const { id } = this.props.post;
    fetch(
      CONSTANT.getVoteUrl(id),
      !this.state.voted_for_post
        ? CONSTANT.getPostObj()
        : CONSTANT.getDeleteObj()
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            voted_for_post: !this.state.voted_for_post
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    const {
      thumbnail,
      name,
      tagline,
      created_at,
      user,
      discussion_url,
      votes_count,
      comments_count
    } = this.props.post;

    const { comments } = this.state;
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          {/* Box Comment */}
          <div className="box box-widget">
            <div className="box-header with-border">
              <div className="user-block">
                <img
                  className="img-circle"
                  src={user.image_url["120px"]}
                  alt="User Image"
                />
                <span className="username">
                  <a href="#">{user.name}</a>
                </span>
                <span className="description">
                  Shared publicly - <Moment fromNow>{created_at}</Moment>
                </span>
              </div>
              {/* /.user-block */}
            </div>
            {/* /.box-header */}
            <div className="box-body">
              {/* post text */}
              <p>{""}</p>
              {/* Attachment */}
              <div className="attachment-block clearfix">
                <img
                  className="attachment-img"
                  src={thumbnail.image_url}
                  alt="Attachment Image"
                />
                <div className="attachment-pushed">
                  <h4 className="attachment-heading">
                    <a href={discussion_url}>{name}</a>
                  </h4>
                  <div className="attachment-text">{tagline}</div>
                  {/* /.attachment-text */}
                </div>
                {/* /.attachment-pushed */}
              </div>
              {/* /.attachment-block */}
              {/* Social sharing buttons */}
              {/* <button type="button" className="btn btn-default btn-xs">
                <i className="fa fa-share" /> Share
              </button> */}
              <button
                type="button"
                className={
                  this.state.voted_for_post
                    ? "btn btn-primary btn-xs"
                    : "btn btn-default btn-xs"
                }
                onClick={this.voteOrUnvote}
              >
                <i className="fa fa-thumbs-o-up" /> Like
              </button>
              <span className="pull-right text-muted">
                {votes_count} likes - {comments_count} comments
              </span>
            </div>
            {/* /.box-body */}
            <Comments
              comments={comments}
              onPage={this.getCommentsWithPage}
              moreComments={
                this.state.currentCommentsLength !==
                this.state.previousCommentsLength
              }
            />
            {/* /.box-footer */}
            <div className="box-footer">
              <form action="#" method="post">
                <img
                  className="img-responsive img-circle img-sm"
                  src="../dist/img/user4-128x128.jpg"
                  alt="Alt Text"
                />
                {/* .img-push is used to add margin to elements next to floating images */}
                <div className="img-push">
                  <input
                    type="text"
                    className="form-control input-sm"
                    placeholder="Press enter to post comment"
                  />
                </div>
              </form>
            </div>
            {/* /.box-footer */}
          </div>
          {/* /.box */}
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Post;
