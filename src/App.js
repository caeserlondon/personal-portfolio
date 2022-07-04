import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/HOME'
import Error from './components/Error'
import Layout from './components/Layout'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
