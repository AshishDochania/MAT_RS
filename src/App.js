import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import './App.css';
import HomePage from "./others/homepage";
import Registration from "./others/register";
import Speakers from "./others/speaker";
import Reach from "./others/howtoreach";
import Accomodation from "./others/accomodation";
import Contact from "./others/contactUs";


function App() {
  return <Router>
  <Routes>
  <Route path="/home" element={<HomePage />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/speakers" element={<Speakers />} />
  <Route path="/map" element={<Reach />} />
  <Route path="/accommodation" element={<Accomodation />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/" element={<Navigate to="/home" />} />
</Routes>
</Router>
}

export default App;
