import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

// Routes
import Layout from './routes/Layout.tsx'
import CreatePost from './routes/CreatePost.tsx'
import Explore from './routes/Explore.tsx'
import Forum from './routes/Forum.tsx'
import SeePost from './routes/SeePost.tsx'
import EditPost from './routes/EditPost.tsx'
// import EditPost from './routes/EditPost.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Forum/>} />
            <Route path="/post/:id" element={<SeePost/>} />
            <Route path="/edit/:id" element={<EditPost/>} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/explore" element={<Explore/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
