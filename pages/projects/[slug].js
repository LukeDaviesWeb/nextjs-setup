import { useRouter } from 'next/router'
import Link from 'next/link'
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
                <title>Built By Luke | Project | {project.title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>

            <Banner title={project.title} noSub={true} inner={true} project={true} />

            <Container>
                <h2>Single Project Page</h2>
                <p>title: {project.title}</p>
                <p>url: {project.url}</p>
                <p>slug: {project.slug}</p>
                <p>technologies: {project.technologies.map(tech => (<span>{tech},</span>))}</p>
                <p>body: {project.body}</p>
                <p>testimonial: {project.testimonial}</p>
                <p>testimonial Author: {project.testimonialAuthor}</p>
                <img height={500} src={project.mainImage} alt="project image" />
                <br />
                <br />
                <br />
                <p>next project:  {moreProjects[0].title}</p>
                <Link href={`/projects/${moreProjects[0].slug}`}>
                    <a className="text-link">{moreProjects[0].title}</a>
                </Link>
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