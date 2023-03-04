import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { login } from '../../redux/actions/loginActions'
import s from './LoginModal.module.scss'

export default function LoginModal({onModalClick}) {
  const [userInput, setUserInput] = useState({username: '', password:''})

  function onChange(e){
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!userInput.username || !userInput.password) return
    login(userInput)
  }

  return (
    <div className={s.modal}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
        className={s.main_container}>
          <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className={s.label_input_container}>
            <label htmlFor="">Username</label>
            <input onChange={onChange} name='username' type="text" />
          </div>
          <div className={s.label_input_container}>
            <label htmlFor="">Password</label>
            <input onChange={onChange} name='password' type="password" />
          </div>
          <div className={s.btn_container}>
            <button onClick={onModalClick} className={s.cancel_btn} type='button'>Cancel</button>
            <button className={s.submit_btn} type='submit'>Login</button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
