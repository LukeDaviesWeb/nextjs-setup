import Head from 'next/head'

import Container from '../components/container'
import { Banner } from '../components/Banner'
import { TextContent } from '../components/TextContent'
import { CardRow } from '../components/CardRow'
import Layout from '../components/layout'

import { getAllProjects, getAllArticles, getHomePageContent, getSiteContent } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { Card } from 'rebass'

export default function Index({ allProjects, allArticles, homePageContent, preview }) {
    const heroProject = allProjects[0]
    const heroArticle = allArticles[0]

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Built By Luke</title>
                </Head>

                <Banner />

                <Container>

                    <TextContent position="right" icon="code">
                        <h2 className="h1">Built to last</h2>

                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum lorem nec risus dignissim ultrices. Nam feugiat velit mattis dignissim congue. Sed efficitur, nunc feugiat tincidunt molestie, augue turpis lacinia leo, et elementum nisl nibh sed mi.</p>

                        <ul className="bullet-list">
                            <li>mi ornare pellentesque</li>
                            <li>Aenean ultricies quis nisl ut volutpat.</li>
                            <li>consectetur adipiscing elit</li>
                        </ul>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum lorem nec risus dignissim ultrices. Nam feugiat velit mattis dignissim congue. Sed efficitur, nunc feugiat tincidunt molestie, augue turpis lacinia leo, et elementum nisl nibh sed mi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum lorem nec risus dignissim ultrices. Nam feugiat velit mattis dignissim congue. Sed efficitur, nunc feugiat tincidunt molestie, augue turpis lacinia leo, et elementum nisl nibh sed mi.</p>
                    </TextContent>

                    <CardRow projects={allProjects} />

                    <TextContent className="mt-lg" position="left">
                        <h2 className="h1">Latest Project - Peddle Perth</h2>

                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum lorem nec risus dignissim ultrices. Nam feugiat velit mattis dignissim congue. Sed efficitur, nunc feugiat tincidunt molestie, augue turpis lacinia leo, et elementum nisl nibh sed mi.</p>

                        <ul className="bullet-list">
                            <li>mi ornare pellentesque</li>
                            <li>Aenean ultricies quis nisl ut volutpat.</li>
                            <li>consectetur adipiscing elit</li>
                        </ul>
                    </TextContent>


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