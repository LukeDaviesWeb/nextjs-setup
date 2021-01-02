import styled from 'styled-components'

export const StyledTextContent = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
                top: -50px;
                left: -100px;
                position: absolute;
                height: 440px;
            }
        }
    }
`