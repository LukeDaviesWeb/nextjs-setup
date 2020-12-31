import Head from 'next/head'

import Container from '../components/container'
import { Banner } from '../components/Banner'
import Layout from '../components/layout'

import { getAllProjects } from '../lib/api'

export default function Word({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke | Work</title>
                </Head>

                <Banner title="Work With" inner={true} />

                <Container>
                    <div>
                        <h2>work availability goes here</h2>
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