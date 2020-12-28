import Link from 'next/link'
import styled from 'styled-components'

const StyledBox = styled.div`
    border: 2px solid;
`
export default function HeroProject({
    heroProject
}) {
    console.log(heroProject)
    return (
        <StyledBox>
            <h1>{heroProject.title}</h1>
            <p>{heroProject.author.name}</p>
            <img src={heroProject.mainImage} alt="" height="250" />
        </StyledBox>
    )
}
