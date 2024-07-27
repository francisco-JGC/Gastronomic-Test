import './index.scss'
import { SectionPage } from '../../../../components/LayoutSectionPage'
import { TitleSection } from '../../../../components/TitleSection'
import { BURGUERMENU } from '../../../../constants/burguerMenu'
import { BurguerMenuItem } from '../../../../components/BurguerMenuItem'

export const MenuSection = () => {
  return (
    <SectionPage noBlur className={'menu-section'}>
      <TitleSection title="Explora el Menú" />

      <div className="menu-container">
        {BURGUERMENU.map((item, index) => (
          <BurguerMenuItem key={index} {...item} />
        ))}
      </div>
    </SectionPage>
  )
}
