import Link from 'next/link'
import Layout from '@/components/Layout'

export default function AboutPage (){
    return(
        <Layout title={"About Malaya"} description={"About page of malaya"} keywords={"About Malaya"}>
            <p>About Page</p>
            <Link href="/">Home</Link>
        </Layout>
    )
}