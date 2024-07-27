import './index.scss'

export const SectionPage = ({ children, className }) => {
  return (
    <div className={`section-page`}>
      <section className={`section-page-content ${className}`}>
        {children}
      </section>
    </div>
  )
}
