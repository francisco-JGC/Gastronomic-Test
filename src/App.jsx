import './App.scss'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AppRouter } from './router'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  )
}

export default App
