import { useState } from 'react'
import Button from '../ui/button'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import style from '../styles/Support.module.css'

const Support = () => {
  const [isMarked, setIsMarked] = useState(false)
  const toggleMarked = () => setIsMarked(!isMarked)
  const {
    support,
    masterCraftLogo,
    supportFooter,
    bookmarkContainer,
    bmMarked
  } = style

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

        <span
          className={`${bookmarkContainer} ${isMarked ? bmMarked : ''}`}
          onClick={toggleMarked}
        >
          <BookmarkIcon marked={isMarked} />

          <span>Bookmark</span>
        </span>
      </div>
    </section>
  )
}

export default Support
