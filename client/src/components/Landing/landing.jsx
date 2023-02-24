import React from "react";
import s from './landing.module.scss'
import Nav from "../Nav/nav";
import LandingSVG from '../../assets/svg/landingSVG'

const Landing = () => {

  return <div className={s.container}>
    <Nav />

    <div className={s.homeContainer}>
      {/* NOTEIT + some random notes */}
      <div className={s.topSection}>
        <div className={s.leftDiv}>
          NOTE IT. <br />
          SHARE IT. <br />
          FIND IT.
        </div>

        <div className={s.noteCardContainer}>
          <div className={s.noteHeader}>
            <p>Marcus Aurelius</p>
            <p>4.8</p>
          </div>
          <div className={s.noteText}>
            <p className={s.noteParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
          <div className={s.noteAuthor}>
          <p>- Seneca </p>
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className={s.middleSection}>
        <div>
          Find notes from other users or create your own and share them with others.
        </div>
      </div>

      {/* CREATE OR FIND NOTES */}
      <div className={s.bottomSection}>
        <div className={s.bottomSectionText}>
          <h2>Start noting!</h2>
          <h2>Or</h2>
          <h2>Find notes!</h2>
        </div>

        <div className={s.bottomSectionButton}>
          <div>Look for notes</div>
          <h2></h2>
          <div>Create note</div>
        </div>
      </div>

    </div>
    {/* FOOTER */}
    <LandingSVG />
    <footer>
      <div className={s.footer_developer_name_container}>
        <h2>Website developed by <br />
          Alejandro Manouellian <br />
          & Martin Morales
        </h2>
      </div>
      <div className={s.footer_contact}>
        <h2>Contact me</h2>
        <h3>LinkedIn</h3>
        <h3>Email</h3>
      </div>
    </footer>

  </div>
}

export default Landing