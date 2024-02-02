import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import HomePage from "./others/homepage";
import Registration from "./others/register";
import Speakers from "./others/speaker";
import Reach from "./others/howtoreach";
import Accomodation from "./others/accomodation";
import Contact from "./others/contactUs";


const rout=createBrowserRouter([
  {path:"/home",element:<HomePage />},
  {path:"/registration",element:<Registration />},
  {path:"/speakers",element:<Speakers />},
  {path:"/map",element:<Reach />},
  {path:"/accommodation",element:<Accomodation />},
  {path:"/contact",element:<Contact />}
]);

function App() {
  return <RouterProvider router={rout}></RouterProvider>
}

export default App;
