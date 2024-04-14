import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home.tsx'
import './index.css'

// Routes
import Layout from './routes/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
