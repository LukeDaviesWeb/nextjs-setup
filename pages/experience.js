import Head from 'next/head'

import Container from '../components/container'
import { Banner } from '../components/Banner'
import Layout from '../components/layout'

import { getAllProjects } from '../lib/api'

export default function Experience({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke | Experience</title>
                </Head>

                <Banner title="Experience By" inner={true} />

                <Container>
                    <div>
                        <h2>experience go here</h2>
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