import Image from 'next/image'

import Container from '../container'
import { BannerIcon } from '../Icons'
import styled from 'styled-components';

const StyledBanner = styled.div`
    background: ${props => props.theme.colors.blockGrey};
    padding: ${props => props.inner ? '50px 0px 100px 0px' : '150px 0px 200px 0'};
    overflow: hidden;

    h1{
        color: ${props => props.theme.colors.white};
   
        font-size: ${props => props.inner ? props.theme.fontSizes.banner : props.theme.fontSizes.massive};

        line-height: ${props => props.inner ? '5rem' : '6rem'};
        position: relative;
        z-index: 1;
    }
    span{
        color: ${props => props.theme.colors.btnGrey};
        font-size: ${props => props.theme.fontSizes.banner};
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
            opacity: 0.3;
        }

        &__cta-container{
            margin-top: 40px;
            button{
                margin-right: 15px;
            }
        }

    }
`

export const Banner = ({ title, inner }) => {
    return (
        <StyledBanner inner={inner}>
            <Container>
                <div className="banner__flex-row">
                    <div>
                        <h1>{title ? title : 'Built By'}</h1>
                        {/* <h1>Created with</h1> */}
                        <h1>
                            <span>
                                Luke
                        </span>
                        </h1>

                        {!inner
                            ? <div className="banner__cta-container">
                                <button className="btn btn--submit btn--sm">projects</button>
                                <button className="btn btn--sm">contact</button>
                            </div>
                            : ''
                        }
                    </div>

                    <div className="banner__icon-wrap">
                        <BannerIcon />
                    </div>
                </div>


            </Container>

        </StyledBanner>
    )
}