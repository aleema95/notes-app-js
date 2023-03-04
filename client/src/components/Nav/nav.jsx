import React, { useState } from "react";
import s from './nav.module.scss'
import { useNavigate } from "react-router-dom"
import LoginModal from '../LoginModal/LoginModal'

const Nav = () => {
  const [isModalActive, setIsModalActive] = useState(false)

  const navigate = useNavigate()

  function onModalClick(e) {
    setIsModalActive(!isModalActive)
  }

  return (
    <>
      { isModalActive ? <LoginModal onModalClick={onModalClick} /> : null }
      <div className={s.container}>
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
          <div onClick={e => setIsModalActive(!isModalActive)}>
          Log in
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav