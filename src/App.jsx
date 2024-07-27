import './App.scss'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
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
