import './App.css'
import Header from './assets/Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './assets/Components/Hero/Hero'

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Hero type="home" />} />
          <Route path="/links" element={<Hero type="links" />} />
          <Route path="/blogs" element={<Hero type="blogs" />} />
          <Route path="/posts" element={<Hero type="posts" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

