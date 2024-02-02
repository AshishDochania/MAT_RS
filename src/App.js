import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./others/homepage";
import Registration from "./others/register";
import Speakers from "./others/speaker";
import Reach from "./others/howtoreach";
import Accomodation from "./others/accomodation";
import Contact from "./others/contactUs";


function App() {
  return <Router>
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/registration" component={Registration} />
    <Route path="/speakers" component={Speakers} />
    <Route path="/map" component={Reach} />
    <Route path="/accommodation" component={Accomodation} />
    <Route path="/contact" component={Contact} />
  </Switch>
</Router>
}

export default App;
