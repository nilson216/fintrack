import './index.css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import NotFoundPage from './pages/not-found.jsx'
import SignupPage from './pages/signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
