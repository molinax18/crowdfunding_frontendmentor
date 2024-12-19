import style from '../../styles/Button.module.css'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return <button className={style.button}>{children}</button>
}

export default Button
