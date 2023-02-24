import React from 'react'
import s from './NoteCard.module.scss'

export default function NoteCard({id, title, body, rating, UserId }) {
  return (
      <div className={s.card_container}>
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
      </div>
  )
}
