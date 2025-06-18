import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MyMap } from './Route/Map'
import AuthContex from './Context/AuthContext'

const App = () => {
  return (
    <>
    <AuthContex>
    <RouterProvider router={MyMap}/>
    </AuthContex>
    </>
  )
}

export default App