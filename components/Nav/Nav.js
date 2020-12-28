import Link from 'next/link'
import Container from '../container'

import { StyledNav } from './styled'


export const Nav = () => {
    return (
        <StyledNav>
            <Container>
                <div className="nav__flex-row">
                    <h2>
                        BBL
                </h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience">
                                    <a>Exp</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/work">
                                    <a>Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </Container>
        </StyledNav>

    )
}