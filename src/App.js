import React from "react";
//styles
import { GlobalStyle } from "./GlobalStyles";
//components
import Header from "./components/Header/Header";
import Home from "./components/Home";
//routing
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/MovieTracker/" exact component={Home} />
        <Route path="/MovieTracker/movie/:movieId" component={Movie} />
        <Route path="/MovieTracker/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
