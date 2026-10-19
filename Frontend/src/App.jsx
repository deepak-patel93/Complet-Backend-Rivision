import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateFeed from './Feed/CreateFeed.jsx'
import Feed from './Feed/feed.jsx'
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/create-feed" element={<CreateFeed />} />
            <Route path="/feeds" element={<Feed />} />
        </Routes>
    </Router>
  )
}

export default App