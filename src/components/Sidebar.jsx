import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="https://img.icons8.com/color/100/000000/user.png"
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>Muhammad Amin</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active">
              <a href="">
                <i className="fa fa-wechat" /> <span>Posts</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-thumbs-o-up" /> <span>Likes</span>
              </a>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Sidebar;
