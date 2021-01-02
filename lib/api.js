import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
    const slugs = new Set()
    return posts.filter((post) => {
        if (slugs.has(post.slug)) {
            return false
        } else {
            slugs.add(post.slug)
            return true
        }
    })
}

const postFields = `
  title,
  'slug': slug.current,
  'technologies': technologies[],
  'mainImage': mainImage.asset->url,
  'body': body[0].children[0].text, 
  'testimonial': testimonial[0].children[0].text, 
  testimonialAuthor,
  url,
  'author': author->{name, 'image': image.asset->url},
`

const pageFields = `
    introduction
`

const siteFields = `
    email
    github
    linkedin
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
        { slug }
    )
    return data[0]
}

export async function getAllProjectsWithSlug() {
    const data = await client.fetch(`*[_type == "project"]{ 'slug': slug.current }`)
    return data
}

export async function getAllProjects(preview) {
    const results = await getClient(preview).fetch(`*[_type == "project"] | order(date desc, _updatedAt desc){
        ${postFields}
      }`);
    return getUniquePosts(results)
}

export async function getAllArticles(preview) {
    const results = await getClient(preview).fetch(`*[_type == "article"] | order(date desc, _updatedAt desc){
        ${postFields}
      }`);
    return getUniquePosts(results)
}

export async function getHomePageContent(preview) {
    const content = await getClient(preview).fetch(`*[_type == "pageContent" && title == "Home"] | order(date desc, _updatedAt desc){
        title,
        intro
      }`);
    return content
}

export async function getProjectAndMoreProjects(slug, preview) {
    const curClient = getClient(preview)
    const [project, moreProjects] = await Promise.all([
        curClient
            .fetch(
                `*[_type == "project" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
                { slug }
            )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
            { slug }
        ),
    ])
    return { project, moreProjects: getUniquePosts(moreProjects) }
}