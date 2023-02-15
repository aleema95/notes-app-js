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
        <p className={`${formErrors.name ? null : s.validField}`}>*This field is required</p>
      </div>
      <div>
        <h4>Name:</h4>
        {/* create invalid field class, with red text */}
        <p className={`${formErrors.name ? null : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.name_only_Letters ? null : s.validField}`}>*Only letters</p>
      </div>
      <div>
        <h4>Last Name:</h4>
        <p className={`${formErrors.last_name ? null : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.last_name_only_Letters ? null : s.validField}`}>*Only letters</p>
      </div>
      <div>
        <h4>Email:</h4>
        <p className={`${formErrors.email ? null : s.validField}`}>*This field is required</p>
        <p className={`${formErrors.invalid_email ? null : s.validField}`}>*Email is invalid</p>
      </div>
      <div>
        <h4>Password:</h4>
        <p className={`${formErrors.password ? null : s.validField}`}>*This field is required</p>
      </div>
    </div>
  )
}
