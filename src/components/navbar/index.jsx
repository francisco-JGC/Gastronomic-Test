import './index.scss'
import { ROUTES } from '../../configurations/router.conf'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
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
        <button>Ordenar Ahora</button>
      </div>
    </nav>
  )
}
