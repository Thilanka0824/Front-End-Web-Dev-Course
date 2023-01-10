import React from 'react'
import HomePage from '../pages/HomePage'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default GlobalLayout