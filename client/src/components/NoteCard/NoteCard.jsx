import React, { useState } from 'react'
import s from './NoteCard.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FavouriteIcon from '../../assets/svg/FavouriteIcon'
import FavouriteIconChecked from '../../assets/svg/FavouriteIconChecked'

export default function NoteCard({id, title, body, rating, UserId }) {
  const [favourite, setFavourite] = useState(false)

  function onFavClick(e) {
    setFavourite(!favourite)
  }

  // function onTitleClick(e) {
  //   e.preventDefault()
  // }

  return (
      <motion.div  className={s.card_container}>
        <Link to={'/'} className={s.title_link} >
          < div className={s.note_header}>
            <h4>{title}</h4>
            <h4>{rating}/5</h4>
          </div>
        </Link>  
        <p className={s.note_body}>
          {body}
        </p>
        <div className={s.bottom_container}>
          <div onClick={onFavClick}>
            {favourite ? <FavouriteIconChecked /> : <FavouriteIcon />}
          </div>
          <h4 className={s.note_author}>
            - Seneca
          </h4>
        </div>
      </motion.div>
  )
}
