import Image from 'next/image'

import Container from '../container'
import { BannerIcon } from '../Icons'
import styled from 'styled-components';

const StyledBanner = styled.div`
    background: ${props => props.theme.colors.blockGrey};
    padding: 150px 0px 250px 0;;
    overflow: hidden;

    span{
        color: ${props => props.theme.colors.red};
    }

    .banner{
        &__flex-row{
            display: flex;
            >div{
                flex: 1 0 0;
            }
        }

        &__icon-wrap{
            display: flex;
            transform: scale(1.3);
            filter: grayscale(0.95);
            transform-origin: top left;
            position: absolute;
            top: -10px;
            right: 165px;
        }

    }
`

export const Banner = () => {
    return (
        <StyledBanner>
            <Container>
                <div className="banner__flex-row">
                    <div>
                        <h1>Built By</h1>
                        <h1>
                            <span>
                                Luke
                        </span>
                        </h1>
                    </div>

                    <div className="banner__icon-wrap">
                        <BannerIcon />
                    </div>
                </div>


            </Container>

        </StyledBanner>
    )
}