import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./component/Home";
import { Team } from "./component/Team";
import { About } from "./component/About";
import { NoMatch } from "./component/NoMatch";
import { Layout } from "./component/Layout";
import { NavNav } from "./component/NavNav";
import { Foot } from "./component/foot";
import { ModalDisplay1 } from "./component/ModalDisplay1";
import { ModalDisplay2 } from "./component/ModalDisplay2";
class App extends Component {
  render() {
    return (
      <div className="bg">
        <React.Fragment>
          <NavNav />
          <Layout>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/about" component={About} />
                <Route exact path="/cam" component={ModalDisplay1} />
                <Route exact path="/video" component={ModalDisplay2} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
        <div className="foott">
          <Foot />
        </div>
      </div>
    );
  }
}

export default App;
