import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './components/Landing/landing'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Landing />,
//   },
// ])

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
