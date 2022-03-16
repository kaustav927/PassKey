import Head from 'next/head'
import Login from './Login'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let isAuthenticated = false

  if(!isAuthenticated) return <Login/>;

  return (
    <div className={styles.container}>
      <Head>
        <title>PassKey</title>
        <meta name="description" />
       
      </Head>

      
      <div>
        <button onClick={isAuthenticated=true}>Login</button> 
      </div>
    </div>
  )
}
