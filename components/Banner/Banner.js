import { BannerCTA } from './BannerCTA'
import Container from '../container'
import { BannerIcon } from '../Icons'

import { StyledBanner } from './styled'


export const Banner = ({ title, inner, noSub }) => {
    return (
        <StyledBanner inner={inner}>
            <Container>
                <div className="banner__flex-row">
                    <div>
                        <h1>{title ? title : 'Built By'}</h1>
                        {!noSub && (
                            <h1>
                                <span>Luke</span>
                            </h1>
                        )}



                        <BannerCTA />

                    </div>

                    <div className="banner__icon-wrap">
                        <BannerIcon />
                    </div>
                </div>


            </Container>

        </StyledBanner>
    )
}