import React, {Component} from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import MainContent from "./MainContent";
import NoMatchPage from "./NoMatchPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import your route components too


export default class App extends Component {
render () {
    return (
    <BrowserRouter>
    <NavBar />
    <div className="container-fluid">  
    <Routes>   
           
    <Route path="/" element={<Login />} />
    <Route path="cart" element={<ShoppingCart />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="content" element={<MainContent />} />
    <Route path="*" element={<NoMatchPage />} />

        </Routes>
        </div>
    </BrowserRouter> 
    );
}
}
