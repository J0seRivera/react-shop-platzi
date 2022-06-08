import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import NotFound from '../pages/NotFound'
import RecoveryPassword from '../containers/RecoveryPassword'
import '../styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App