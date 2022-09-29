import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './PageNotFound.module.css'
const PageNotFound = () => {
  return (
    <div className={styles.container}>
    <Navigation/>
        <h1>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound