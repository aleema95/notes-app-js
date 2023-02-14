import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from './ValidatorMessage.module.scss'

export default function ValidatorMessage() {
  const formErrors = useSelector((state) => state.errors.form_errors)


  return (
    <div className={s.main_container}>
      <div>
        <h4>Name:</h4>
        <p className={`${formErrors.name ? null : s.validField}`}>*This field is required</p>
        <p>*Only letters</p>
      </div>
    </div>
  )
}
