import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Headline from '../components/Headline'
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple News App</title>
        <meta name="description" content="Simple News App created by Nextjs." />
      </Head>

      <Header />
      <Headline />
    
     
  
      
    </div>
  )
}
