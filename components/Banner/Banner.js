import Image from 'next/image'

import Container from '../container'

import styled from 'styled-components';

const StyledBanner = styled.div`
    background: ${props => props.theme.colors.blockGrey};
    padding: 150px 0px;
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
            transform: scale(1.9);
            filter: grayscale(0.95);
            transform-origin: top left;
            position: relative;
            
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
                        <Image
                            src="/code-icon.png"
                            alt="Picture of the author"
                            className="banner__icon-image"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>


            </Container>

        </StyledBanner>
    )
}