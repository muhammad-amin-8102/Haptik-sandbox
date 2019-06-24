import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="main-header">
        {/* Logo */}
        <a href="#" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>P</b>HNT
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Product</b>HUNT
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
