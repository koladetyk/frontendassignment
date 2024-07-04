//import statements
import React from "react";
import Blocks from "./Block";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Transactions from "./Transactions";
import Transfer from "./Transfer";
import Navigation from "./Navigation";

//using Navigation and showing path to other components
function App() {
  return (
    <Router>
      <div class="font-p">
        <Navigation /> 
        <Switch>
          <Route path="/" exact component={Blocks} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/transfer" component={Transfer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
