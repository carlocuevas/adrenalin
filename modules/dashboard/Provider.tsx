import axios from 'axios'
import { createContext, ReactChild, ReactChildren, SetStateAction, useContext, useEffect, useState } from 'react'
import { QueryClient, useQuery } from 'react-query'

type AppContextProps = {
  mountains: any
  search: any,
  setSearch: any
  setSort: any
}

type AppProviderProps = {
  children: ReactChild | ReactChildren
}

const getMountains = async (mountain: any) => {
  const { data } = await axios.get(`/api/search?mountains=${escape(mountain)}`)
  return data
}

const AppContext = createContext({} as AppContextProps)

const AppProvider = ({ children }: AppProviderProps) => {
  const [search, setSearch] = useState<string>("")
  const [sort, setSort] = useState<string>("")
  const [mountainData, setMountainData] = useState<[]>([])
  const mountains = useQuery(['get-mountains', search], () => getMountains(search))
  useEffect(() => {
    setMountainData(mountains?.data)
  }, [mountains?.data])

  useEffect(() => {
    if (sort) {
      let mountains: []
      mountains = mountainData && mountainData.sort((a: any, b: any) => {
        const first = a.title.toUpperCase()
        const second = b.title.toUpperCase()
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }

        return 0
      }) || []

      if (sort === 'asc') {
        mountains.reverse()
      }

      console.log('mountains', mountains)

      setMountainData(mountains)
    }
  }, [sort])

  const value = {
    search,
    mountains: mountainData,
    setSort,
    setSearch,
  }

  return (
    <AppContext.Provider value={value as unknown as AppContextProps}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider Scope')
  }

  return context
}

export default AppProvider
