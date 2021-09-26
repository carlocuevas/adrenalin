import React, { ChangeEventHandler } from 'react'

import styles from './styles.module.css'

type TextFieldProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
}

const TextField: React.FC<TextFieldProps> = ({ onChange, ...props }) => {
  return (
    <input
      type={'text'}
      placeholder={'Search for Mountains'}
      className={styles.textField}
      onChange={onChange}
      {...props}
    />
  )
}

export default TextField
