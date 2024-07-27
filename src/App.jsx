import './App.scss'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
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
