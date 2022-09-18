import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages";
import ErrorPage from "./pages/error";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
