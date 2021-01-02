import styled from 'styled-components';

export const StyledBanner = styled.div`
background: ${props => props.theme.colors.blockGrey};
padding: ${props => props.inner ? '50px 0px 100px 0px' : '100px 0px 100px 0'};
overflow: hidden;

h1{
    color: ${props => props.theme.colors.white};

    font-size: ${props => props.inner ? props.theme.fontSizes.banner : props.theme.fontSizes.massive};

    line-height: ${props => props.inner ? '5rem' : '6rem'};
    position: relative;
    z-index: 1;
}



.banner{
    &__alt-title{
        color: ${props => props.theme.colors.btnGrey};
    font-size: ${props => props.theme.fontSizes.banner};
    }
    &__flex-row{
        display: flex;
        >div{
            flex: 1 0 0;
        }
    }

    &__icon-wrap{
        display: flex;
        transform: scale(1.3);
        filter: grayscale(0.95);
        transform-origin: top left;
        position: absolute;
        top: -10px;
        right: 165px;
        opacity: 0.3;
    }

    &__cta-container{
        margin-top: 40px;
        button{
            margin-right: 15px;
        }
    }

    &__subheader{
        margin-top: 20px;
        max-width: 40%;
    }

}
`