import './index.scss'

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`c-button ${className}`} {...props}>
      {children}
    </button>
  )
}
