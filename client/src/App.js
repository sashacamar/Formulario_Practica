import { Route } from "react-router-dom";

import Form from "./views/Form/Form";

import axios from 'axios';
axios.defaults.baseURL = "https://formulariopractica-production.up.railway.app/form";

function App() {
  return (
    <div>
      <Route exact path='/' component={Form}></Route>
    </div>
  );
}

export default App;
