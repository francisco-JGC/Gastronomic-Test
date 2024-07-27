import './index.scss'
import { ROUTES } from '../../configurations/router.conf'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'

export const MobileNavbar = () => {
  return (
    <div className="mobile-navbar-menu">
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
    </div>
  )
}
