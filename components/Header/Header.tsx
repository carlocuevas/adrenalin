import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <header className={styles.header}>
      <Image alt={'adrenalin'} className={styles.polygon2} src={`/triangle3.svg`} />
      <Image alt={'adrenalin'} className={styles.polygon4} src={`/triangle4.svg`} />
      <Image alt={'adrenalin'} className={styles.polygon5} src={`/triangle5.svg`} />
      <Image alt={'adrenalin'} className={styles.polygon3} src={`/triangle2.svg`} />
      <Image alt={'adrenalin'} className={styles.polygon6} src={`/triangle4.svg`} />

      <div className={styles.headerContainer}>
        <Image alt={'adrenalin'} className={styles.headerBanner} src={`/icon.svg`} />
        <span className={styles.title}>Mountains</span>
        <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod ex ut blandit condimentum.</p>
      </div>
    </header>
  )
}

export default Header
