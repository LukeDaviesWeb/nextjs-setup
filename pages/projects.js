import Head from 'next/head'

import Container from '../components/container'
import { Banner } from '../components/Banner'
import Layout from '../components/layout'

import { getAllProjects } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Projects({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke | Projects</title>
                </Head>

                <Banner title="Projects By" inner={true} />

                <Container>
                    <div>
                        <h2>projects go here</h2>
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