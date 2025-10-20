import React from 'react';
export default function ComingSoon(){ return (
  <div className="coming-soon">
    <div className="coming-card bg-white">
      <div style={display:'flex', justifyContent:'center'}><img src={require('../assets/logo.png')} alt="logo" style={height:80} /></div>
      <h1 className="text-3xl font-bold mt-4">ARZIA Elegance Emporium</h1>
      <p className="mt-3 text-lg" style={color:'var(--gold)'}>We’re almost ready to serve you.</p>
      <p className="mt-4 text-sm text-gray-600">📞 08083831440 | 💬 07084582190 | ✉️ arziaeleganceemporium@gmail.com</p>
    </div>
  </div>
); }