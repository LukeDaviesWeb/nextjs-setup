import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    
`

export default function Container({ children }) {
    return <StyledContainer>{children}</StyledContainer>
}
