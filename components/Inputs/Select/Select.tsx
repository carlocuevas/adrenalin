import React, { ChangeEventHandler } from 'react'
import styles from './styles.module.css'

type OptionProps = {
  label: string
  value: string
}

type SelectProps = {
  options: OptionProps[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange

}) => {
  return (
    <select
      onChange={onChange}
      className={styles.select}
    >
      {
        options?.map((option: any, key: any) => (
          <option value={option.value} key={key}>{option.label}</option>
        ))
      }
    </select>
  )
}

export default Select

