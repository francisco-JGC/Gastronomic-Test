import { HomeSection } from './components/HomeSection'
import { MenuSection } from './components/MenuSection'
import './index.scss'

export const HomePage = () => {
  return (
    <div className="home-page">
      <HomeSection />
      <MenuSection />
    </div>
  )
}
