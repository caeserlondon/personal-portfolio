import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/HOME'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
