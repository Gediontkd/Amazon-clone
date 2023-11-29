import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import React, { useEffect } from "react";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe(
"pk_test_51OHZyvHBn6rTySCWA1zBDcZzdpKg4s9FJeUCp7OtewN5UJgapIyKVWOXw0vPhakKUVwJhOhwbZ2vNPJHooB6jTkW00GOyZfwFx"
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
          <div className="App">
      <Routes>
            <Route path="/" element={<><Header/> <Home/><Footer/></>}/>
            <Route path="/orders" element={<><Header/> <Orders/><Footer/></>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/payment" element={
            <>
            <Header/>
             <Elements stripe={promise}>
             <Payment/>
             </Elements>
             </>
            }/>


            <Route path="/checkout" element={<><Header/> <Checkout/></>}/>
            
      </Routes>
          </div>
    </Router>
  );
}

export default App;
