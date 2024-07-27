import './index.scss'

export const TitleSection = ({ title }) => {
  return (
    <div className="title-section">
      <h2 data-title={title}>{title}</h2>
    </div>
  )
}
