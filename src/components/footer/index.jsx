import './index.scss'
import { SectionPage } from '../LayoutSectionPage'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <SectionPage className="footer">
      <footer>
        <p>
          © {year} - Burguer. Todos los derechos reservados, Hecho por{' '}
          <a
            href="https://github.com/francisco-JGC"
            target="_blank"
            rel="noreferrer"
          >
            Francisco Garcia (Chico Dev 😎)
          </a>
        </p>
        <small>Disculpenme por el footer, espero no haya problema 😣❤️</small>
      </footer>
    </SectionPage>
  )
}
