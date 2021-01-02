import Head from 'next/head'

import Container from '../components/container'
import { Banner } from '../components/Banner'
import Layout from '../components/layout'

import { getAllProjects } from '../lib/api'

export default function Articles({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke | Articles</title>
                </Head>

                <Banner title="Articles By" inner={true} />

                <Container>
                    <div>
                        <h2>articles listed here</h2>
                    </div>

                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const allProjects = await getAllProjects(preview)
    return {
        props: { allProjects, preview },
    }
}