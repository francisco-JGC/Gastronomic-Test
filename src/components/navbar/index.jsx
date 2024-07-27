import './index.scss'
import { ROUTES } from '../../configurations/router.conf'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-menu">
        {ROUTES.map((item, index) => (
          <li key={index} className="navbar-item">
            <Link to={item.path} className="navbar-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
