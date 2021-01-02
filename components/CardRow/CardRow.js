import Link from 'next/link'
import { Card } from '../Card'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledCardRow = styled.div`

.cardRow{
    &__row{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(330px, 1fr) );
        grid-column-gap: 25px;
        margin-top: 100px;
    }

    &__cta{
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }
}

`

export const CardRow = ({ projects }) => {
    return (
        <StyledCardRow>
            <div className="cardRow__row">
                {projects.map(proj => (
                    <Card project={proj} />
                ))}
            </div>
            <div className="cardRow__cta">
                <Link href="/projects">
                    <a>
                        <motion.button whileTap={{ scale: 0.85 }} type="submit" className="btn btn--submit btn--lg">
                            View All Projects
                        </motion.button>
                    </a>
                </Link>
            </div>
        </StyledCardRow>
    )
}