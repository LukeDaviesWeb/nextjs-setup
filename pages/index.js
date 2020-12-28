import Container from '../components/container'
import HeroProject from '../components/hero-project'
import Layout from '../components/layout'
import { getAllProjects, getAllArticles, getHomePageContent } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allProjects, allArticles, homePageContent, preview }) {
    const heroProject = allProjects[0]
    const heroArticle = allArticles[0]
    const morePosts = allProjects.slice(1)

    console.log(allProjects);

    console.log('home page content', homePageContent);
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke</title>
                </Head>
                <div>
                    <h1>banner here</h1>
                </div>
                <Container>
                    <div>
                        <h4>{homePageContent[0].intro[0].children[0].text}</h4>
                    </div>

                    <div>
                        <h4>Projects section</h4>
                        {heroProject && (
                            <HeroProject
                                heroProject={heroProject}
                            />
                        )}
                    </div>


                    <div>
                        <h4>Articles section</h4>
                        {heroArticle && (
                            <HeroProject
                                heroProject={heroArticle}
                            />
                        )}
                    </div>

                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const allProjects = await getAllProjects(preview)
    const allArticles = await getAllArticles(preview)

    const homePageContent = await getHomePageContent(preview)
    return {
        props: { allProjects, allArticles, homePageContent, preview },
    }
}