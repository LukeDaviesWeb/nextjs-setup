import Link from 'next/link'
import styled from 'styled-components'

const StyledCard = styled.div`
    background: ${props => props.theme.colors.blockGrey};
    border-radius: 20px;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: top;
        filter: grayscale(0.9);
        transition: transform 35s ease;
        transform: scale(1)
    }

    .card{
        
        &__image-wrap{
            overflow: hidden;
        }
        &__tech-label{
            background: ${props => props.theme.colors.blue};
            display: inline-block;
            position: absolute;
            top: 15px;
            left: 25px;
            padding: 5px 10px;
            border-radius: 20px;
            opacity: 1;
            transition: opacity .1s ease, transform 0.3s ease;
            p{
                margin: 0;
            }
        }
        &__content{
            padding: 15px 25px;

            p{
                max-width: 85%;
            }
        }
    }

    &:hover{
        img{
            filter: grayscale(0);
            transform: scale(3);
        }

        .card{
            &__tech-label{
                transform: translateX(-30px);
                opacity: 0;
            }
        }
    }

`

export const Card = ({ project }) => {
    console.log(project)
    return (
        <Link href={`/projects/${project.slug}`}>
            <a>
                <StyledCard >
                    <div className="card__image-wrap">
                        <img src={project.mainImage} alt="" />
                        {project.technologies && (
                            <div className="card__tech-label">
                                {project.technologies.map((tech, index) => (
                                    <p className="label">{tech}{index > 1 && ','}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="card__content">
                        <h3>{project.title}</h3>
                        <p>{project.body}</p>
                    </div>

                </StyledCard>
            </a>
        </Link>

    )

}