import React from 'react'
import { useEffect } from 'react'
import s from './LoginModal.module.scss'

export default function LoginModal({onModalClick}) {
  
  return (
    <div onClick={onModalClick} className={s.modal}>
      <div className={s.main_container}>
          <h1>Login</h1>
        <form>
          <div className={s.label_input_container}>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className={s.label_input_container}>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button className={s.submit_btn} type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
