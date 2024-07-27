import './index.scss'

export const SectionPage = ({ children, className, noBlur }) => {
  return (
    <div className={`section-page`}>
      <section
        className={`section-page-content ${className}
      ${noBlur && `section-page-content__blur`}
      `}
      >
        {children}
      </section>
    </div>
  )
}
