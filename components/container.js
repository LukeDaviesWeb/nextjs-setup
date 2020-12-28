import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export default function Container({ children }) {
    return <StyledContainer>{children}</StyledContainer>
}
