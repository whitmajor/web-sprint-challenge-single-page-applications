import React from "react";
import {Route,Switch,Link} from "react-router-dom"
import OrderForm from "./components/OrderForm"
import "./App.css"

//Component used for route 




function App(){





  return (
    
    <div className = "App">
      <header>
      <nav>
        <h1 className = 'store-header'> Lamba's Pizza Palace </h1>
        <div className = 'navLinks'>
      <Link to ="/"> Home </Link>
      <Link to = "/pizza" id="pizza-form"> Order Here </Link>
          </div>
      </nav>

      </header>
      <main>

   
    <Switch>
      <Route exact path = "/">
       <h2>Home</h2>
       <Link to ="/pizza" id = "order-pizza">My Order</Link>
      
        </Route>
        <Route exact path = "/pizza" id ="pizza-form">
          <OrderForm id = "pizza-form"/>
        </Route>
      </Switch>
 
    </main>
    </div>

  );
};
export default App  