import type { NextPage } from 'next'  
import Layout from '../components/Layout'  
const Home: NextPage = () => {
  return ( 
      <Layout pageTitle="Home"> 
          <h1 style={{paddingLeft:'64px',}}>Home</h1> 
      </Layout> 
  )
}

export default Home
