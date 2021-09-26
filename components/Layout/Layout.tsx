import axios from 'axios'
import React, { ReactChild, ReactChildren, useState } from 'react'
import { useQuery } from 'react-query'
import AppProvider, { useAppContext } from '../../modules/dashboard/Provider'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Button, TextField } from '../Inputs'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './styles.module.css'

type MainLayoutProps = {
  children: ReactChild | ReactChildren
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { mountains, setSearch } = useAppContext()
  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal
      style={{ height: 'calc(100vh)' }}
    >
      <Header />
      <div className={styles.layoutContainer}>
        <main>{children}</main>
      </div>
      <Footer />
    </Scrollbars>
  )
}

export default MainLayout