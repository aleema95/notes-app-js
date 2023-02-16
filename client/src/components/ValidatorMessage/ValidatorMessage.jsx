import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from './ValidatorMessage.module.scss'

export default function ValidatorMessage() {
  const formErrors = useSelector((state) => state.errors.form_errors)


  return (
    <div className={s.main_container}>
      <div>
        <h4>Username:</h4>
        <p className={`${formErrors.username ? s.invalidField : s.validField}`}>*This field is required</p>
      </div>
      <div>
        <h4>Name:</h4>
        {/* create invalid field class, with red text */}
        <p className={`${formErrors.name ? s.invalidField : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.name_only_Letters ? s.invalidField : s.validField}`}>*Only letters</p>
      </div>
      <div>
        <h4>Last Name:</h4>
        <p className={`${formErrors.last_name ? s.invalidField : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.last_name_only_Letters ? s.invalidField : s.validField}`}>*Only letters</p>
      </div>
      <div>
        <h4>Email:</h4>
        <p className={`${formErrors.email ? s.invalidField : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.invalid_email ? s.invalidField : s.validField}`}>*Email is invalid</p>
      </div>
      <div>
        <h4>Password:</h4>
        <p className={`${formErrors.password ? s.invalidField : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.confirm_password ? s.invalidField : s.validField}`}>*Passwords must match</p>
      </div>
    </div>
  )
}
