import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts";
import { Suspense } from "react";
import Form from "./screens/Form";

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
