import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./containers/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron"


function App() {
  return (
    <>
    <Router>
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
