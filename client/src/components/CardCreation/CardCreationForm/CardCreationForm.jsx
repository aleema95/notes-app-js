import React, { useState, useEffect } from 'react'
import s from './CardCreationForm.module.scss'

export default function CardCreationForm() {
  const [noteData, setNoteData] = useState({title: '', body: ''})

  function onChange(e){
    setNoteData({...noteData, [e.target.name]: e.target.value})
  }

  function onSubmit(e){
    e.preventDefault()
    if (!noteData.title || !noteData.body) return
    //Create sendForm function
    alert('submitted')
  }

  return (
    <form onSubmit={onSubmit} className={s.form_container} action="">
      <div className={s.title_input_container}>
        <label htmlFor="">Title</label>
        <input onChange={onChange} name="title" type="text" />
      </div>
      <div className={s.body_input_container}>
        <label  htmlFor="">Body</label>
        <textarea onChange={onChange} name="body"  cols="19" rows="4"  class="text" />
      </div>
      <button className={s.submit_btn} type='submit'>Create Note</button>
    </form>
  )
}
