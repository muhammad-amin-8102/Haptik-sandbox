import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
