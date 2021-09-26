import React from 'react'
import styles from './styles.module.css'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <img alt={'adrenalin'} className={styles.footerBanner} src={`/icon.svg`} />
        <span className={styles.copyrightClaim}>Front-end developer test page – September 2021 Copy</span>
      </div>
    </footer>
  )
}

export default Footer