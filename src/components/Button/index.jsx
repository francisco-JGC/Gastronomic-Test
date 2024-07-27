import './index.scss'

export const Button = ({ children, className, alternative, ...props }) => {
  return (
    <button
      className={`c-button ${className} ${
        alternative ? 'c-button__alternative' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
