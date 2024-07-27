import './index.scss'
import { SectionPage } from '../../../../components/LayoutSectionPage'
import BurgerIMG from '../../../../assets/images/burguer-home.webp'
import LazyImage from '../../../../components/LazyImage'
import facebookIcon from '../../../../assets/icons/facebook.svg'
import instagramIcon from '../../../../assets/icons/instagram.svg'
import xIcon from '../../../../assets/icons/x.svg'
import { Link } from 'react-router-dom'

export const HomeSection = () => {
  return (
    <SectionPage className="home-section">
      <div className="home-section-text">
        <div className="home-section-text-content">
          <h2>Prueba nuestra nueva</h2>
          <h1>Hamburguesa</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tincidunt, nisl ac ultricies.
          </p>
        </div>
        <div>
          <Link to={'/catalogue'} className="c-button c-button__alternative">
            Ver menú
          </Link>
        </div>

        <div className="social-media">
          <a href="#">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={xIcon} alt="X" />
          </a>
        </div>
      </div>

      <div className="home-section-image">
        <LazyImage
          src={BurgerIMG}
          alt="Burger"
          className="home-section-image-burguer"
        />

        <div className="background-burguer"></div>
      </div>
    </SectionPage>
  )
}
