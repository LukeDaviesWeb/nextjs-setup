import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { BannerCTA } from './BannerCTA'
import Container from '../container'
import { BannerIcon } from '../Icons'

import { StyledBanner } from './styled'


export const Banner = ({ title, inner, noSub }) => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [activeHighlight, setActiveHighlight] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActiveHighlight(true)
        }, 500);
    })

    return (
        <StyledBanner inner={inner}>
            <Container>
                <div className="banner__flex-row">
                    <div>
                        <h1>{title ? title : 'Built By'}</h1>
                        {!noSub && (
                            <h1>
                                <span className="banner__alt-title">Luke</span>
                            </h1>
                        )}

                        {currentRoute === '/' && (
                            <div className="banner__subheader">
                                <p className="lead">Luke is a passionate web developer based in Perth Australia, he has experience working with both large and boutique agencies. Employed as a front end developer, Luke delivers high quality web products.</p>
                                <p><span className={activeHighlight ? 'highlight active' : 'highlight'}>Available for freelance work</span></p>
                            </div>
                        )}

                        <BannerCTA currentRoute={currentRoute} />

                    </div>

                    <div className="banner__icon-wrap">
                        <BannerIcon />
                    </div>
                </div>


            </Container>

        </StyledBanner>
    )
}