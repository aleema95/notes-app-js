import React from 'react'
import s from './Login.module.scss'

export default function Login() {
  return (
    <div className={s.main_container}>
      <form>
        <h1>Login</h1>
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
  )
}
