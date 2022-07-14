import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop" element={<Shop />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
