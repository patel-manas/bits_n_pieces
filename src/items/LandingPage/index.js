import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Content from "./Content";
import "./index.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="lp_wrapper">
        <div className="nv_wrapper">
          <NavBar>
            {["a", "b", "c", "a", "b", "c"].map(i => (
              <span style={{ margin: "20px" }}>{i}</span>
            ))}
          </NavBar>
        </div>
        <div className="sb_wrapper">
          <SideBar />
        </div>
        <div className="co_wrapper">
          <Content />
        </div>
      </div>
    );
  }
}

export default LandingPage;
