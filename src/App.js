import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Home from './components/HOME'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-link" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
