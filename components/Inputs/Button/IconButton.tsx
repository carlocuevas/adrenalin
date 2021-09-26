import React from 'react'
import styles from './styles.module.css'

type IconButtonProps = {
  label?: string
  onClick?: any
  href?: any
}

const IconButton: React.FC<any> = React.forwardRef<IconButtonProps>((props, ref) => {
  return (
    <button
      className={styles.iconButton}
      {...props}
    >
      <img src={'/button-icon.svg'} />
    </button>
  )
})

IconButton.displayName = 'IconButton'

export default IconButton