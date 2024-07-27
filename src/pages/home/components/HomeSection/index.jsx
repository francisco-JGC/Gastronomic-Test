import './index.scss'
import { SectionPage } from '../../../../components/LayoutSectionPage'
import BurgerIMG from '../../../../assets/images/burguer-home.webp'
import LazyImage from '../../../../components/LazyImage'
import { Button } from '../../../../components/Button'

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
          <Button className="home-section-button" alternative>
            Ver menú
          </Button>
        </div>

        <div className="social-media"></div>
      </div>
      <div>
        <LazyImage
          src={BurgerIMG}
          alt="Burger"
          className="home-section-image"
        />
      </div>
    </SectionPage>
  )
}
