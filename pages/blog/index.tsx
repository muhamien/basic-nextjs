import Layout from '../../components/Layout';
import Image from 'next/image';
export default function index() {
    return (
        <Layout pageTitle="Blog"> 
            <h1 style={{paddingLeft:'64px',}}>Blog post</h1> 
            <Image src="/profilePicture.jpg" width={150} height={150} />
        </Layout>
    )
}   
