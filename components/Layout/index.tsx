import {ReactNode} from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head';
interface LayoutProps {
    children:ReactNode;
    pageTitle:string;
}

export default function Layout(props:LayoutProps) {
    const {children,pageTitle} = props;
    return (
        <div>
            <Head>
                <title>NextJs Basic | {' '+pageTitle}</title>
            </Head>
            <Head> 
                <meta name="description" content="Next JS basic" />
            </Head>
            <Header/>
                <div>{children}</div>
            <Footer/>
        </div>
    )
}
