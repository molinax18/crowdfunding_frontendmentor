import style from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <picture className={style.hero}>
      <source
        srcSet='./images/image-hero-desktop.jpg'
        media='(min-width: 768px)'
      />
      <img
        src='./images/image-hero-mobile.jpg'
        alt='Descripción de la imagen'
        className={style.heroMobileImage}
      />
    </picture>
  )
}

export default Hero
