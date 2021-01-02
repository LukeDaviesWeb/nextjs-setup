import { useRouter } from 'next/router'

import { BannerCTA } from './BannerCTA'
import Container from '../container'
import { BannerIcon } from '../Icons'

import { StyledBanner } from './styled'


export const Banner = ({ title, inner, noSub }) => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <StyledBanner inner={inner}>
            <Container>
                <div className="banner__flex-row">
                    <div>
                        <h1>{title ? title : 'Built By'}</h1>
                        {!noSub && (
                            <h1>
                                <span class="banner__alt-title">Luke</span>
                            </h1>
                        )}

                        {currentRoute === '/' && (
                            <div className="banner__subheader">
                                <p>Luke is a passionate <span className="lead">web developer</span> based in <span className="lead">Perth Australia,</span> he has experience working with boutique agencies. Employed as a front end developer, Luke delivers <span className="lead">high quality content</span> for local and international clients.</p>
                                <p>Available for freelance work - technologies listed below</p>
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