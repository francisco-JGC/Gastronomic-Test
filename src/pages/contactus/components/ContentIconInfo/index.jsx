import './index.scss'

export const ContentIconInfo = ({ icon, title, description }) => {
  return (
    <div className="content-icon-info">
      <div className="icon">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </div>
  )
}
