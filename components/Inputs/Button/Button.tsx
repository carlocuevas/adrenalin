import React from 'react'
import styles from './styles.module.css'

type ButtonProps = {
  label?: string
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >{label}</button>
  )
}

export default Button