import React from 'react'
import s from './CardCreation.module.scss'
import { Link } from 'react-router-dom'
import MultipleWaves from '../../assets/svg/MultipleWaves'
import CardCreationForm from './CardCreationForm/CardCreationForm'

export default function CardCreation() {
  return (
    <div>
      <div className={s.top_section}>
        <Link className={s.top_btns} to={'/'}>
          <h2>Home</h2>
        </Link>
        <Link className={s.top_btns} to={'/profile'}>
          <h2>Profile</h2>
        </Link>
      </div>
      <CardCreationForm />
      <div className={s.waves_container}>
        <MultipleWaves />
      </div>
    </div>
  )
}
