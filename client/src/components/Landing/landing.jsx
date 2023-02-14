import React from "react";
import s from './landing.module.scss'
import Nav from "../Nav/nav";


const Landing = () => {

  return <div className={s.container}>
    <Nav/>
    
    <div className={s.homeContainer}>
    {/* NOTEIT + some random notes */}
    <div className={s.topSection}>
      <div className={s.leftDiv}>
      NOTE IT. <br/>
      SHARE IT. <br/>
      FIND IT.
      </div>

      <div>
        <div>

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
    </div>

    </div>
  {/* FOOTER */}
    <div className={s.footer}>

    </div>

  </div>
}

export default Landing