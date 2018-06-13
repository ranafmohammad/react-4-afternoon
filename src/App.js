import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div>WestSide University</div>
            <div className="link-wrap">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
            </div>
          </nav>
          <hr />
          {routes}
        </div>
      </HashRouter>
    );
  }
}
