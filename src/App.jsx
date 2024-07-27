import './App.scss'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AppRouter } from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>

      <Toaster richColors position="bottom-center" />
    </div>
  )
}

export default App
