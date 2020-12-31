import { useField } from 'formik';
import styled from 'styled-components'

const StyledTextInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9px;
    position: relative;
    label{
        color: ${props => props.theme.colors.blockGrey};
        position: relative;
        pointer-events: none;
        transform: translateY(30px) translateX(12px);
        font-size: ${props => props.theme.fontSizes.small};
        transition: all .3s ease;
        font-weight: 600;
        &.touched{
            transform: translateY(-5px) translateX(10px);
            color: ${props => props.theme.colors.white};
        }
    }
    .text-input{
        padding: 15px 10px;
        border-radius: 15px;
        border: none;
        font-weight: 600;
        outline:none;

        &:focus{
            outline: none;
        }
    }

    .error{
        font-size: ${props => props.theme.fontSizes.small};
        color: ${props => props.theme.colors.red};
        padding: 5px 0 5px 10px;
    }
`
export const Text = (props) => {
    const [field, meta] = useField(props);

    return (
        <StyledTextInput>
            <label className={meta.touched || meta.value !== '' ? "touched" : undefined} htmlFor={props.id || props.name}>{props.label}</label>
            <input className={meta.touched || meta.value !== '' ? "text-input touched" : "text-input"} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </StyledTextInput>
    )
}