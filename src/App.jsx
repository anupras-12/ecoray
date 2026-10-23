import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import Homepage from './Pages/HomePage/Homepage'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route element={<Layouts/>}>
  <Route path='/' element={<Homepage/>}/>

  </Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App