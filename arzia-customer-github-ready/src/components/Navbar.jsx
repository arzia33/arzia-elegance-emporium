import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){ return (
  <nav className="w-full shadow p-4 bg-white">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="header-logo"><img src=./assets/logo.png alt="logo" /></div>
        <div className="font-semibold">ARZIA Elegance Emporium</div>
      </div>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/cart">Cart</a>
        <a href="/catalogue">Catalogue</a>
        <a href="/settings">Settings</a>
      </div>
    </div>
  </nav>
); }