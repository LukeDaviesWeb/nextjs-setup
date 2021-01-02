import { useState } from "react";
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from "nprogress"
import { motion, AnimateSharedLayout } from "framer-motion";

import Container from '../container'

import { StyledNav } from './styled'
import { linear } from "popmotion";


Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()

}
Router.onRouteChangeError = () => {
    NProgress.done()
}

const links = [
    {
        name: 'Projects',
        url: '/projects'
    },
    {
        name: 'Articles',
        url: '/articles'
    },
    {
        name: 'Contact',
        url: '/#contact'
    },
];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};

export const Nav = () => {
    const [selected, setSelected] = useState();

    return (
        <StyledNav onMouseLeave={() => setSelected('')}>
            <Container>
                <div className="nav__flex-row">
                    <Link href="/">
                        <a>
                            <h2>
                                BBL
                            </h2>
                        </a>
                    </Link>

                    <nav>
                        <AnimateSharedLayout>
                            <ul>
                                {links.map(link => {
                                    return (
                                        <ListItem
                                            link={link}
                                            isSelected={selected == link.name}
                                            onMouseEnter={() => setSelected(link.name)}
                                        />
                                    )
                                })}
                            </ul>
                        </AnimateSharedLayout>
                    </nav>
                </div>

            </Container>
        </StyledNav>

    )
}

const ListItem = ({ link, isSelected, onMouseEnter }) => {
    return (
        <li onMouseEnter={onMouseEnter} className="nav__item">
            <Link href={link.url}>
                <a>{link.name}</a>
            </Link>

            {isSelected && (
                <motion.div
                    className="nav__item__highlight"
                    layoutId="highlight"
                    initial={false}
                    transition={spring}
                >

                </motion.div>
            )}
        </li>
    )
}