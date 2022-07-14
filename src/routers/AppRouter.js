import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/login/Login'
import ListMovement from '../components/movement/ListMovement'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            } />

            <Route path="/movements" element={
                <PrivateRoute>
                    <ListMovement/>
                </PrivateRoute>
            } />    

        </Routes>
    </BrowserRouter>
    
  )
}

export default AppRouter