import "./App.css";
import Login from "./Components/AuthenticationComponents/Login";
import Registration from "./Components/AuthenticationComponents/Registration";
import Resume from "./Components/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";

function App() {
  return (
    <div>
      <Resume />
      {/* <Router basename="/resume">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signUp">
            <Registration />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
