import Link from 'next/link'
import { useRouter } from 'next/router'

const links =
{
    '/': [
        {
            title: 'projects',
            link: '/projects'
        },
        {
            title: 'contact',
            link: '/#contact'
        }
    ],
    '/projects': [
        {
            title: 'contact',
            link: '#contact'
        }
    ],
    '/projects/[slug]': [
        {
            title: 'back to projects',
            link: '/projects'
        }
    ]
}

export const BannerCTA = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className="banner__cta-container">

            <>
                {links[currentRoute].map((link, index) => {
                    return (
                        <Link href={link.link} key={index}>
                            <a>
                                <button className={index == 0 ? "btn btn--submit btn--sm" : "btn btn--sm"}>
                                    {link.title}</button>
                            </a>
                        </Link>
                    )
                })}
            </>


        </div>
    )
}