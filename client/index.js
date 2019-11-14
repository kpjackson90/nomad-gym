import "./style/style.css";
import "./style/page.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SingleCountry from "./components/SingleCountry";
import SingleCity from "./components/SingleCity";
import SingleGym from "./components/SingleGym";

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/countries/:id" component={SingleCountry} />
          <Route path="/city/:id" component={SingleCity} />
          <Route path="/gym/:id" component={SingleGym} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
