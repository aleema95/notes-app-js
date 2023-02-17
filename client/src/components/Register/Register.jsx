import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { validation } from '../../utils/registerUtils'
import { setErrors } from '../../redux/slices/errorsSlice'
import MultipleWaves from '../../assets/svg/MultipleWaves'
import ValidatorMessage from '../ValidatorMessage/ValidatorMessage'
import s from './Register.module.scss'
import { useRef } from 'react'

export default function Register() {
  const dispatch = useDispatch()
  
  const [userInput, setUserInput] = useState({
    username:'',
    name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:'',
  })

  function onChange(e) {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    dispatch(setErrors(validation(userInput)))
  }, [userInput])

  return (
    <div className={s.main_container}>
      <Link to={'/'}><h1 className={s.back_btn}>Back</h1></Link>
      <h1 className={s.register_title}>Register</h1>
      <ValidatorMessage />
      <form className={s.registration_form_container}>
        <div className={s.form_header}>
          <label className={s.header_label} htmlFor="">Username </label>
          <input className={s.header_input} onChange={onChange} type="text" name="username"  />
        </div>
        <div className={s.body_input_container}>
          <div>
            <label className={s.header_label} htmlFor="">Name </label>
            <input onChange={onChange} type="text" name="name"  />
          </div>
          <div>
            <label className={s.header_label} htmlFor="">Last name </label>
            <input onChange={onChange} type="text" name="last_name"  />
          </div>
          <div>
            <label className={s.header_label} htmlFor="">Email </label>
            <input onChange={onChange} type="text" name="email"  />
          </div>
          <div>
            <label className={s.header_label} htmlFor="">Password </label>
            <input onChange={onChange} type="password" name="password"  />
          </div>
          <div>
            <label className={s.header_label} htmlFor="">Confirm password </label>
            <input onChange={onChange} type="password" name="confirm_password"  />
          </div>
          <button className={s.confirm_btn} type='submit'>Confirm</button>
        </div>
      </form>
      <MultipleWaves />
    </div>
  )
}
