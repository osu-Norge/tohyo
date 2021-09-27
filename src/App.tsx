import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Vote from "./pages/Vote";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/stats" exact component={Stats} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
