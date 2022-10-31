import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages";
import ErrorPage from "./pages/error";
import { createContext, useState } from "react";
import { AGENTS } from "@react95/clippy";
import { ThemeProvider } from "@react95/core";
import { themeAtom } from "./store/themeStore";
import { useAtom } from "jotai";
// import themes from "@react95/core/ThemeProvider/themes";

export const ClippyAgentContext = createContext<{
  agent: string;
  changeAgent?: (agent: string) => void;
}>({
  agent: AGENTS.MERLIN,
});
function App() {
  const [agent, changeAgent] = useState(AGENTS.MERLIN);
  const [theme] = useAtom(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <ClippyAgentContext.Provider value={{ agent, changeAgent }}>
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
      </ClippyAgentContext.Provider>
    </ThemeProvider>
  );
}

export default App;
