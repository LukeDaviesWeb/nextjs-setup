import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../../components/container'
import { Banner } from '../../components/Banner'
import Layout from '../../components/layout'

import { getProjectAndMoreProjects, getAllProjectsWithSlug } from '../../lib/api'

export default function Project({ project, moreProjects, preview }) {
    const router = useRouter()
    if (!router.isFallback && !project?.slug) {
        return <ErrorPage statusCode={404} />
    }

    console.log('more projects', moreProjects);
    console.log('this project', project);

    return (
        <Layout preview={preview}>
            <Head>
                <title>{project.title} | Built By Luke</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>

            <Banner title={project.title} noSub={true} inner={true} project={true} />

            <Container>
                <p>single project page {project.title}</p>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getProjectAndMoreProjects(params.slug, preview)
    return {
        props: {
            preview,
            project: data?.project || null,
            moreProjects: data?.moreProjects || null,
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlug()
    return {
        paths:
            allProjects?.map((project) => ({
                params: {
                    slug: project.slug,
                },
            })) || [],
        fallback: true,
    }
}