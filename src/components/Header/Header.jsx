import React from 'react'

import cat from '../../assets/cat.png'

import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.navbar}>
        <div className={styles.leftNav}>
            <p>Memory Card</p>
            <img src={cat} alt="" />
        </div>

        <div className={styles.rightNav}>
          <p>Get points by clicking on an image but don't click on any more than
          once!</p>
        </div>
    </div>
  )
}

export default Header
