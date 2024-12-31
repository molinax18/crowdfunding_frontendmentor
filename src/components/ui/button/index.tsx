import style from '../../styles/Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, onClick, disabled }: Props) => {
  const { button, buttonDisabled } = style

  return (
    <button
      className={`${button} ${disabled ? buttonDisabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
