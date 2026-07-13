// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Details from './pages/Details'
import Admin from './pages/Admin'

function App() {

  return (


    <BrowserRouter>
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

      </Routes>

    </BrowserRouter >

  )
}

export default App
