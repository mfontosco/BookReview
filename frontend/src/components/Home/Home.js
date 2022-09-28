import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
    <Navigation/>
        <div className={styles.content}>
            <div className={styles.title}>
                <h1>BOOK REVIEW</h1>
            </div>
            <div className={styles.image}></div>
        </div>
    </div>
  )
}

export default Home