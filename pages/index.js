import Head from 'next/head'
import Login from './Login'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  let isAuthenticated = false

  if(!isAuthenticated) return <Login/>;

  return (
    <Login/>
  )
}
/*
<div className="w-1/2 px-20 py-12 mx-auto bg-slate-200">
            <h2 className="text-3xl font-bold mb-2"> Title</h2>
              <button className="border-2 border-slate-300 px-12 py-2">Google</button>

          </div>
*/