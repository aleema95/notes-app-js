import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_notes } from '../../redux/actions/notesActions'
import Nav from '../Nav/nav'
import MultipleWaves from '../../assets/svg/MultipleWaves'
import s from './UserProfile.module.scss'
import CardCarousel from '../CardCarousel/CardCarousel';

export default function UserProfile() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)

  useEffect(() => {
    dispatch(get_notes())
  }, [])

  return (
    <>
      <div className={s.main_container}>
      <Nav />
        <div className={s.hero_section}>
          <h1>Profile</h1>
          <button>Create Note</button>
        </div>
        <div className={s.notes_section}>
          <h1>My Notes</h1>
          <CardCarousel notes={notes} />
        </div>
        <div className={s.favourites_section}>
          <h1>Favourites</h1>
          <CardCarousel notes={notes} />
        </div>
        <div className={s.background_waves}>
          <MultipleWaves />
        </div>
      </div>
    </>
  )
}
