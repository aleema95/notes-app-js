import React from 'react'
import s from './Navbar.module.scss'


export default function Navbar() {
  return (
    <div className={s.main_container}>
      <h2 className={s.nav_item}>Note it</h2>
      <div className={s.nav_center_items}>
        <h2 className={s.nav_item}>About</h2>
        <h2 className={s.nav_item}>Notes</h2>
        <h2 className={s.nav_item}>Favourites</h2>
      </div>
      <h2 className={s.nav_item}>Log in</h2>
    </div>
  )
}
