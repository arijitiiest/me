import React, { Component, Fragment } from "react";

import Nav from "../../Components/Template/Nav/Nav";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="mx-5 my-5">
          <h1 style={{ textAlign: "center", paddingTop: 60 }}>Not Found</h1>
        </div>
      </Fragment>
    );
  }
}

export default Home;
