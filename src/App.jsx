import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'

function App() {

  return (
    <>
       <Navbar />
       <Routes>
        <Route path='/' exact Component={Home} loader="lazy"/>
        <Route path='/about' exact Component={About} loader="lazy"/>
         <Route path='/resume' exact Component={Resume} loader="lazy"/>
          <Route path='/portfolio' exact Component={Portfolio} loader="lazy"/>
       </Routes>
    </>
  )
}

export default App
