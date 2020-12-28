import styled from 'styled-components'

export const StyledNav = styled.div`
    background: ${props => props.theme.colors.lightGrey};

    .nav{
        &__flex-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
        ul{
            display: flex;
            justify-content: flex-end;
            padding: 15px 0;
            flex-direction: row;
            li{
                margin-left: 15px;
                &:first-child{
                    margin-left: 0;
                }
            }
        }
`