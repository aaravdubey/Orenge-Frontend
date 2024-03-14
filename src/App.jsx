import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Event from './pages/Event'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='*' element={<Home />} />
          <Route path='/event' element={<Event />} />
          {/* <Route index path='/home' element={<Home />} />
          <Route index path='/blog' element={<Blog />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}