import React, { Component } from "react";

import Main from '../../Layout/Main';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Main>
          <div className="Hi">
            Hi! <br />
            I'm Arijit
          </div>
      </Main>
    );
  }
}

export default Home;
