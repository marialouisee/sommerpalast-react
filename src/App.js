import React from "react";
import "./scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Side from "./components/Side";
import Content from "./components/content/Content";
import Datenschutz from "./components/footer/Datenschutz";
import Impressum from "./components/footer/Impressum";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="App">
      <Router>
        {/* left container */}
        <Side />
        {/* right container */}
        <div className="mainDiv">
          <Switch>
            <Route path="/datenschutzerklaerung" component={Datenschutz} />
            <Route path="/impressum" component={Impressum} />
            <Route path={["/", "/home"]} component={Content} />
          </Switch>
          <ToTop />
        </div>
      </Router>
    </div>
  );
}

export default App;
