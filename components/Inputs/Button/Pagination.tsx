import React, { useEffect } from 'react'

import styles from './styles.module.css'

type PaginationProps = {
  pageCount: number
}

const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
  const pages = []
  for (let index = 1; index <= pageCount; index++) {

    if (!(pageCount < 5) && index < Math.floor(pageCount / 2)) {
      pages.push(index)
    } else {
      pages.push('...')
      pages.push(pageCount)
      index = pageCount
    }
  }

  return (
    <div className={styles.pagination}>
      {
        pages.map((page: number | string, key: number) => (
          <a href="#" key={key}>{page}</a>
        ))
      }
    </div>
  )
}

export default Pagination