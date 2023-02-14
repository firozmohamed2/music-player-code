import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from './Favourites';
import Feed from './Feed';
import Library from './Library';
import Player from './Player';
import Trending from './Trending';


export default function Home() {
  return (
    <Router>
        <Routes>
            <Route  path="/" element={<Library  />} />
            <Route  path="/feed" element={<Feed  />} />
            <Route  path="/trending" element={<Trending  />} />
            <Route  path="/player" element={<Player  />} />
            <Route  path="/favourites" element={<Favourites />} />
        </Routes>
    </Router>
  )
}
