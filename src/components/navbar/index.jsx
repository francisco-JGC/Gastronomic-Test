import './index.scss'
import { ROUTES } from '../../configurations/router.conf'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../Button'
import { useEffect, useState, useRef } from 'react'

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const prevScrollY = useRef(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (prevScrollY.current < currentScrollY && currentScrollY > 100) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }

    prevScrollY.current = currentScrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          Burguers.
        </Link>
      </div>
      <ul className="navbar-menu">
        {ROUTES.map((item, index) => (
          <li key={index} className="navbar-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}

        <li className="navbar-item">
          <a href="tel:+1234567890" className="navbar-link">
            + 1 234 567 890
          </a>
        </li>
      </ul>

      <div className="navbar-order">
        <Button>Ordenar Ahora</Button>
      </div>
    </nav>
  )
}
