import Head from 'next/head'
import Link from 'next/link'

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

                    <CardRow projects={allProjects.slice(0, 3)} />

                    <TextContent position="left" icon="binary">
                        <h2 className="h1">Experience</h2>

                        <p className="lead">Luke has over 3 years professional experience coding websites and web apps.</p>

                        <ul className="bullet-list">
                            <li>2017 --- 2018 | 1.5 year | Freelance Web developer </li>
                            <li>2018 --- 2019 | 1 year | Front End Web developer at OKMG</li>
                            <li>2019 --- Now  | 1.5 year | Web developer at Juicebox Creative</li>
                        </ul>

                        <div className="border-split">
                            <h4>React + NextJS</h4>
                            <p className="mt-5">Luke has experience in building web apps in React, check out the <Link href="/projects?category=react"><a className="text-link">React section of the projects page</a></Link> for more information.</p>
                            <p>This site has been built using Next.js : <a className="text-link" href="#">specs here</a></p>

                            <h4>Wordpress</h4>
                            <p className="mt-5">Luke is highly proficient in building custom Wordpress templates to match specific needs of the client to a pixel perfect level.</p>


                        </div>

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