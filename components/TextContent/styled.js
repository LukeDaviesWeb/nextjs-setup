import styled from 'styled-components'

export const StyledTextContent = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-direction: ${props => props.position === 'right' ? 'row-reverse' : 'row'};
    margin-top: 100px;
    .textContent{
        &__text{
            position: relative;
            z-index: 2;
            background: ${props => props.theme.colors.blockGrey};
            padding: 35px 50px;
            border-radius: 20px;
            max-width: 70%;
            margin-right: ${props => props.position === 'left' ? 'auto' : ''};
            margin-left: ${props => props.position === 'right' ? 'auto' : ''};
        }

        &__icon{
            position: relative;
            svg{
                top: 0px;
                left:${props => props.position === 'right' ? '-100px' : ''};
                right:${props => props.position === 'left' ? '-100px' : ''};
                position: absolute;
                height: 440px;
            }
        }
    }
`