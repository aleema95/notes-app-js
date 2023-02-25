import React from 'react'
import s from './NoteCard.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NoteCard({id, title, body, rating, UserId }) {
  return (
      <motion.div className={s.card_container}>
        <div className={s.note_header}>
          <h4>{title}</h4>
          <h4>{rating}/5</h4>
        </div>
        <p className={s.note_body}>
          {body}
        </p>
        <h4 className={s.note_author}>
          - Seneca
        </h4>
      </motion.div>
  )
}
