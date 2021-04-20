import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Review from './components/Review/Review';
// import Order from './components/Order/Order/Order';
import OrderedList from './components/OrderedList/OrderedList';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/PlaceOrder/PlaceOrder';
import AllOrders from './components/AllOrders/AllOrders';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          {/* <PrivateRoute path="/order/:orderName">
            <Order />
          </PrivateRoute> */}
          <Route path="/orderedList">
            <OrderedList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/allOrders">
            <AllOrders />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
