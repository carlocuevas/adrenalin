import React from 'react'
import styles from './styles.module.css'

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img alt={'adrenalin'} className={styles.headerBanner} src={`/icon.svg`} />
        <span className={styles.title}>Mountains</span>
        <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod ex ut blandit condimentum.</p>
      </div>
    </header>
  )
}

export default Header