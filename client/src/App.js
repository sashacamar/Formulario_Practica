import { Route } from "react-router-dom";
import styles from './App.module.css';

import Form from "./views/Form/Form";
import Finished from "./views/Finished/Finished";
import Response from "./views/Response/Reponse";

import axios from 'axios';
axios.defaults.baseURL = "https://formulariopractica-production.up.railway.app/form";

function App() {
  return (
    <div>
      <Route exact path='/' component={Form}></Route>
      <Route path='/done' component={Finished}></Route>
      <Route path='/response' component={Response}></Route>

    </div>
  );
}

export default App;
