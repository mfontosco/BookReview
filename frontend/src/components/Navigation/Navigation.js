import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className={styles.container}>
<div>
<Link to='/'>HOME</Link>
<Link to='/create'>ADD REVIEW</Link>
<Link to='/review'>REVIEW</Link>
<Link to='/review/about'>ABOUT</Link>
</div>
    </div>
  )
}

export default Navigation