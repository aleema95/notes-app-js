import React from 'react'
import Navbar from '../Navbar/Navbar'
import Wave from '../../assets/svg/Wave'
import s from './Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className={s.hero_container}>
          <div className={s.hero_title_container}>
            <h1 className={`${s.hero_title} ${s.first_title}`}>NOTE IT.</h1>
            <h1 className={`${s.hero_title} ${s.second_title}`}>SHARE IT.</h1>
            <h1 className={`${s.hero_title} ${s.third_title}`}>FIND IT.</h1>
          </div>
          <div className={s.hero_card_component_container}>
            <h1 className={s.hero_card_component}>card component</h1>
          </div>
        </div>
      </section>
      <section className={s.middle_section_container}>
        <h1>Find notes from other users or create your own and share them.</h1>
        <div className={s.call_to_action_container}>
          <div>
            <h1>Start taking notes!</h1>
            <button>Create Note</button>
          </div>
          <h1>OR</h1>
          <div>
            <h1>Find notes!</h1>
            <button>Look for notes</button>
          </div>
        </div>
      </section>
      <Wave />
      <footer>
        <div className={s.footer_developer_name_container}>
          <h2>Website developed by </h2>
          <h2>Alejandro Manouellian</h2>
        </div>
        <div className={s.footer_contact}>
          <h2>Contact me</h2>
          <h3>LinkedIn</h3>
          <h3>Email</h3>
        </div>
      </footer>
    </div>
  )
}
