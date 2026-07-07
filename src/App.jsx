// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {

  return (


    <BrowserRouter>
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>

      </Routes>

    </BrowserRouter >

  )
}

export default App
