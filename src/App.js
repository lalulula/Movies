import Home from "./routes/Home";
import Detail from "./routes/Detail"
import{
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

function App() {
  return <Router>
    <Switch>

      <Route path="/movie/:movieId">
        <Detail />
      </Route>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
  </Router>;
}

export default App;
