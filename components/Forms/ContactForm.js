import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Text } from '../Inputs/Text'

import styled from 'styled-components'


const StyledForm = styled.div`
    padding: 15px 0px  35px 0;

    .btn{
        margin-top: 25px;
    }
`
const StyledInputWrapper = styled.div`
    display: flex;

    >div{
        flex: 1 0 0;
    }

    >div:first-child{
        margin-right: 20px;
    }
`

export const ContactForm = () => {
    const validation = Yup.object({
        name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    })

    return (
        <StyledForm>
            <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <StyledInputWrapper>
                            <Text
                                label="Name"
                                name="name"
                                type="text"

                            />
                            <Text
                                label="Email"
                                name="email"
                                type="text"

                            />
                        </StyledInputWrapper>
                        <div>

                        </div>
                        <div>
                            <Text
                                label="Subject"
                                name="subject"
                                type="text"

                            />
                        </div>
                        <div>
                            <Text
                                label="Message"
                                name="message"
                                type="text"

                            />
                        </div>




                        <button type="submit" className="btn btn--submit btn--sm" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </StyledForm>
    )
}