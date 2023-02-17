import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import s from './ValidatorMessage.module.scss'

export default function ValidatorMessage({form_errors, visibility}) {

  return (
    <AnimatePresence>
      {
        visibility &&
          <motion.div 
            key="validator"
            className={s.main_container}
            initial={{x:-400, rotate:180}}
            animate={{x:0, rotate: 360}}
            exit={{
              x:-400,
              rotate: 180,
              transition: { duration: 0.8 }
            }}
            transition={{duration: 0.8, delay: 0.3}}
            >
            <div>
              <h4>Username:</h4>
              <p className={`${form_errors.username ? s.invalidField : s.validField}`}>*This field is required</p>
            </div>
            <div>
              <h4>Name:</h4>
              <p className={`${form_errors.name ? s.invalidField : s.validField}`}>*This field is required</p>
              <p className={`${form_errors.name_only_Letters ? s.invalidField : s.validField}`}>*Only letters</p>
            </div>
            <div>
              <h4>Last Name:</h4>
              <p className={`${form_errors.last_name ? s.invalidField : s.validField}`}>*This field is required</p>
              <p className={`${form_errors.last_name_only_Letters ? s.invalidField : s.validField}`}>*Only letters</p>
            </div>
            <div>
              <h4>Email:</h4>
              <p className={`${form_errors.email ? s.invalidField : s.validField}`}>*This field is required</p>
              <p className={`${form_errors.invalid_email ? s.invalidField : s.validField}`}>*Email is invalid</p>
            </div>
            <div>
              <h4>Password:</h4>
              <p className={`${form_errors.password ? s.invalidField : s.validField}`}>*This field is required</p>
              <p className={`${form_errors.confirm_password ? s.invalidField : s.validField}`}>*Passwords must match</p>
            </div>
          </motion.div>
      }
    </AnimatePresence>
  )
}
