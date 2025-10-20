import React, { useState } from 'react';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
// toggle COMING_SOON to true to show splash instead of the full site
const COMING_SOON = true;

export default function App(){
  if(COMING_SOON) return <ComingSoon />;
  return <Home />;
}