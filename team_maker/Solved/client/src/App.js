import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Teams from "./pages/Teams";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CreationForm from "./pages/CreationForm/CreationForm";
import Characters from "./pages/Characters/Characters";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Teams} />
        <Route exact path="/pages/CreationForm" component={CreationForm} />
        <Route exact path="/pages/Characters" component={Characters} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
