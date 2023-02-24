import React from 'react'
import s from './NoteCard.module.scss'

export default function NoteCard({id, title, body, rating, UserId }) {
  return (
    <>
      <div className={s.card_container}>
        <div className={s.note_header}>
          <h4>Marcus Aurelius</h4>
          <h4>4.8/5</h4>
        </div>
        <p className={s.note_body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea  nisi ut aliquip ex ea  nisi ut aliquip ex ea commodo consequat.
        </p>
        <h4 className={s.note_author}>
          - Seneca
        </h4>
      </div>
      <div className={s.card_container}>
        <div className={s.note_header}>
          <h4>Marcus Aurelius</h4>
          <h4>4.8/5</h4>
        </div>
        <p className={s.note_body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           aliquip ex ea commodo consequat.
        </p>
        <h4 className={s.note_author}>
          - Seneca
        </h4>
      </div>
    </>
  )
}
