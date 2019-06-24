import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> v1
        </div>
        <strong>
          Copyright © <a href="https://adminlte.io">Product Hunt</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
