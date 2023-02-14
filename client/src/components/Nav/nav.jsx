import React from "react";
import s from './nav.module.scss'
import { useNavigate } from "react-router-dom"

const Nav = () => {

  const navigate = useNavigate()

  return <div className={s.container}>
    <div className={s.leftOptions}>
      <div onClick={event => navigate('/')}>
      Note it
      </div>
    </div>

    <div className={s.centerOptions}>
      <div onClick={event => navigate('/about')}>
        About
      </div>
      <div onClick={event => navigate('/notes')}>
        Notes
      </div>
      <div onClick={event => navigate('/favourites')}>
        Favourites
      </div>
    </div>

    <div className={s.rightOptions}>
      <div onClick={event => navigate('/log_in')}>
      Log in
      </div>
    </div>
  </div>
}

export default Nav