import Container from './container'
import { ContactForm } from '../components/Forms/ContactForm'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    
    margin-top: 50px;

    .footer{
        &__inner{
            padding: 50px 0 75px 0;
            border-top: 2px solid ${props => props.theme.colors.blockGrey};
            margin: 0 auto;
        }

        &__content{
            padding: 0 50px;
            display: flex;
            >div{
                flex: 1 0 0;
            }
        }

        &__form-container{
            background: ${props => props.theme.colors.blockGrey};
            border-radius:30px;
            padding: 5px 25px;
        }

        &__contact-details{
            margin-top: 25px;
            &Section{
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;

                &:hover{
                    h2{
                        color: ${props => props.theme.colors.red};
                    }
                }
                h2{
                    color: ${props => props.theme.colors.btnGrey};
                    transition: color .3s ease;
                }

                span{
                    font-size: ${props => props.theme.fontSizes.lead};
                }
            }
        }

        &__copyright{
            opacity: 0.3;
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0 70px;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <div className="footer__inner">
                    <div className="footer__content">
                        <div>
                            <h1 className="banner">I'd love to chat.</h1>

                            <div className="footer__contact-details">
                                <a href="mailto:lukedaviesweb@gmail.com" className="footer__contact-detailsSection">
                                    <h2>Email </h2>
                                    <span>lukedaviesweb@gmail.com</span>
                                </a>
                                <a href="https://github.com/LukeDaviesWeb" className="footer__contact-detailsSection">
                                    <h2>Github </h2>
                                    <span>Luke Davies</span>
                                </a>
                                <a href="https://www.linkedin.com/in/luke-davies-3503aa13a/" className="footer__contact-detailsSection">
                                    <h2>Linkedin </h2>
                                    <span >Luke Davies</span>
                                </a>
                            </div>
                        </div>

                        <div className="footer__form-container">
                            <ContactForm />
                        </div>

                    </div>
                    <div className="footer__copyright">
                        <p className="label">Copyright 2021 - Built By Luke</p>
                    </div>
                </div>

            </Container>
        </StyledFooter>
    )
}
