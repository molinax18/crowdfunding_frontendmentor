import style from '../styles/Support.module.css'
import Button from '../ui/button'
import BookmarkIcon from '../ui/icons/BookmarkIcon'

const Support = () => {
  const { support, masterCraftLogo, supportFooter, bookmarkContainer } = style

  return (
    <section className={`${support} card`}>
      <header>
        <img
          src='./images/logo-mastercraft.svg'
          alt='Logo Mastercraft'
          className={masterCraftLogo}
        />
        <h2>Mastercraft Bamboo Monitor Riser</h2>
      </header>
      <p className='paragraph'>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={supportFooter}>
        <Button>Back this project</Button>
        <span className={bookmarkContainer}>
          <BookmarkIcon />
          <span>Bookmark</span>
        </span>
      </div>
    </section>
  )
}

export default Support
