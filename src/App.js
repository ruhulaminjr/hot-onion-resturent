import NotFound from "./components/404/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProvderAuth from "./context/ProvderAuth";
import "./App.css";
import Home from "./components/Home/Home";
import FoodDetails from "./components/Foods/FoodDetails/FoodDetails";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Delivery from "./components/Delivery/Delivery";
import CartContext from "./context/CartContext";
import PrivateRoute from "./components/PriveRoute/PrivateRoute";

function App() {
  return (
    <ProvderAuth>
      <CartContext>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/food/:id">
              <FoodDetails />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/delivery">
              <Delivery />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </ProvderAuth>
  );
}

export default App;
