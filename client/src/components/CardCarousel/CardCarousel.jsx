import React, { useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion';
import NoteCard from '../NoteCard/NoteCard';
import s from './CardCarousel.module.scss'

export default function CardCarousel({ notes }) {
  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, 100)
  }, [])

  return (
      <motion.div ref={carousel} className={s.user_notes_carousel}>
        <motion.div drag='x' dragConstraints={{right:0, left: -width}} className={s.inner_carousel}>
          {
            notes?.map( (n, i) => {
              return <NoteCard {...n} key={i} />
            })
          }
        </motion.div>
      </motion.div>
  )
}
