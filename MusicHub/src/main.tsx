import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

// Routes
import Layout from './routes/Layout.tsx'
import CreatePost from './routes/CreatePost.tsx'
import Explore from './routes/Explore.tsx'
import Forum from './routes/Forum.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Forum/>} />
          <Route index={false} path="/create" element={<CreatePost/>} />
          <Route index={false} path="/explore" element={<Explore/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
