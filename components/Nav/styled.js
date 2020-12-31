import styled from 'styled-components'

export const StyledNav = styled.div`
    background: ${props => props.theme.colors.lightGrey};

    .nav{
        &__flex-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__item{
            position: relative;
            a{
                position: relative;
                z-index: 2;
            }
            &__highlight{
                height: 30px;
                width: 30px;
                background: ${props => props.theme.colors.blue};
                border-radius: 50%;
                position: absolute;
                top: calc(50% - 15px);
                left: calc(50% - 15px);
             
            }
        }
    }
        ul{
            display: flex;
            justify-content: flex-end;
            
            flex-direction: row;
            li{
                
                margin-left: 15px;
                &:first-child{
                    margin-left: 0;
                }
            }
            a{
                display: block;
                padding: 15px 0;
            }
        }
`