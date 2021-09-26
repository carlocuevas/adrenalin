import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '../../modules/dashboard/Provider'
import axios from 'axios'
import { Button } from '../../components/Inputs'
import styles from '../../styles/Home.module.css'
import mountains from '../../stubs.json'

type MountainProps = {}

const getMountain = async (mountain: any) => {
  console.log(mountain)
  const { data } = await axios.get(`/api/mountain?mountain=${escape(mountain)}`)
  return data
}

export async function getStaticPaths() {
  return {
    paths: mountains?.map(({ slug }) => ({
      params: {
        mountain: slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  return {
    props: {
      data: mountains.filter(
        ({ slug }) => slug === context.params.mountain
      )[0]
    }
  }
}

const Mountain: React.FC<MountainProps> = ({ data }: any) => {
  const router = useRouter()

  return (
    data ?
      <div>
        <div
          className={styles.soloBackgroundImage}
          style={{
            backgroundImage: `url("/${data?.slug}.jpg")`,
            objectFit: 'cover',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px'
          }}
        >

        </div>
        <h3>{data?.title}</h3>
        <h5>{data?.title_long}</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus est soluta, iure nostrum hic fugit earum dicta eaque corrupti rem porro ea odio, pariatur laudantium necessitatibus, aut mollitia!</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          marginTop: '10%'
        }}>
          <Button
            label={'Back'}
            onClick={() => router?.back()}
          />
        </div>
      </div>
      : <></>
  )
}

export default Mountain