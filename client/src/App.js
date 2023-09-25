import { Route } from "react-router-dom";

import Form from "./views/Form/Form";

function App() {
  return (
    <div>
      <Route exact path='/' component={Form}></Route>
    </div>
  );
}

export default App;
