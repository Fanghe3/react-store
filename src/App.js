import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ProductList  from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import  { BrowserRouter as Router, Route, Switch, Link}   from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={ProductList} />

        <Route path="/details" component={Details} />

        <Route path="/cart" component={Cart} />

        <Route path="/product" component={Product} />

        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
