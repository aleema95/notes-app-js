import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_notes } from '../../redux/actions/notesActions'
import { motion } from 'framer-motion'
import Nav from '../Nav/nav'
import MultipleWaves from '../../assets/svg/MultipleWaves'
import NoteCard from '../NoteCard/NoteCard'
import s from './UserProfile.module.scss'

export default function UserProfile() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    dispatch(get_notes())
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, 50)
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
          <motion.div ref={carousel} className={s.user_notes_carousel}>
            <motion.div drag='x' dragConstraints={{right:0, left: -width}} className={s.inner_carousel}>
              {
                notes?.map( (n, i) => {
                  return <NoteCard {...n} key={i} />
                })
              }
            </motion.div>
          </motion.div>
        </div>
        <div className={s.favourites_section}>
          <h1>Favourites</h1>
          <h2>You have no favourites!</h2>
        </div>
        <div className={s.background_waves}>
          <MultipleWaves />
        </div>
      </div>
    </>
  )
}
