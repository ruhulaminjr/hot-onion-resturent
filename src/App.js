import NotFound from "./components/404/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProvderAuth from "./context/ProvderAuth";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <ProvderAuth>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home/>
             </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ProvderAuth>
  );
}

export default App;
