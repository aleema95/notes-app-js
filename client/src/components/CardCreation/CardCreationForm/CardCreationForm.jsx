import React from 'react'
import s from './CardCreationForm.module.scss'

export default function CardCreationForm() {
  return (
    <form className={s.form_container} action="">
      <div className={s.title_input_container}>
        <label htmlFor="">Title</label>
        <input name="title" type="text" />
      </div>
      <div className={s.body_input_container}>
        <label  htmlFor="">Body</label>
        <textarea name="body"  cols="19" rows="4"  class="text" />
        {/* <input name="body" type="text-area" /> */}
      </div>
      <button className={s.submit_btn} type='submit'>Create Note</button>
    </form>
  )
}
