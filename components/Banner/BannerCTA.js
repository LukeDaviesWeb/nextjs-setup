import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
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
    '/work': [
        {
            title: 'contact',
            link: '#contact'
        }
    ],
    '/experience': [
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

export const BannerCTA = ({ currentRoute }) => {


    return (
        <div className="banner__cta-container">

            <>
                {links[currentRoute].map((link, index) => {
                    return (
                        <Link href={link.link} key={index}>
                            <a>
                                <motion.button whileTap={{ scale: 0.85 }} className={index == 0 ? "btn btn--submit btn--sm" : "btn btn--sm"}>
                                    {link.title}</motion.button>
                            </a>
                        </Link>
                    )
                })}
            </>


        </div>
    )
}