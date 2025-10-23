import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>

      <nav>

      </nav>
      <Routes>

        <Route path='/' element={<div>TODO!</div>} />
        <Route path='/about' element={<div>TODO!</div>} />
        <Route path='/contact' element={<div>TODO!</div>} />
        <Route path='/articles'>
          <Route index path='/' element={<div>TODO!</div>} />
          <Route path='/new' element={<div>TODO!</div>} />
          <Route path='/:articleId/edit' element={<div>TODO!</div>} />
          <Route path='/category/:categoryName' element={<div>TODO!</div>} />
          <Route path='/article/:articleId' element={<div>TODO!</div>} />

        </Route>
        <Route path='/' element={<div>TODO!</div>} />

      </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
