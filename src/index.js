import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./store/cart-context";
//import { initializeApp } from "firebase/app";

/*const firebaseConfig = {
  apiKey: "AIzaSyC_ZCnBkWFFMw5YGVB1nY7Ka2HZ-JEwnrU",
  authDomain: "proyecto-final-medina.firebaseapp.com",
  projectId: "proyecto-final-medina",
  storageBucket: "proyecto-final-medina.appspot.com",
  messagingSenderId: "18929460154",
  appId: "1:18929460154:web:56374b3765ab87cdf2f383"
};

initializeApp(firebaseConfig);*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
