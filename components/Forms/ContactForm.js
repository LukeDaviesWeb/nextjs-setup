import { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion'
import { Text } from '../Inputs/Text'
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { Check } from '../Icons'


const StyledForm = styled.div`
    padding: 15px 0px  35px 0;
    height: 100%;
    .btn{
        margin-top: 25px;
    }

    .form{
        &__success{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            >div{
                display: flex;
                align-items: center;

                svg{
                    margin-left: 25px;
                }
            }

            p{
                margin-top: 30px;
                max-width: 75%;
            }
        }
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
    const [formSentStatus, setFormSentStatus] = useState(false);
    const [formError, setFormError] = useState(false);

    const validation = Yup.object({
        name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    })

    const submitForm = (values, setSubmitting, resetForm) => {
        const templateParams = {
            to_name: values.name,
            to_email: values.email,
            subject: values.subject,
            from_name: 'Built By Luke',
            message: values.message,
            reply_to: 'lukedaviesweb@gmail.com'
        }

        emailjs.send('default_service', 'template_h73337b', templateParams,
            'user_SFp7n2cegNb70J3a7G37f')
            .then(function (response) {
                if (response.status === 200) {
                    setSubmitting(false);
                    resetForm();
                    setFormSentStatus(true);
                    setTimeout(() => {
                        setFormSentStatus(false);
                    }, 5000);
                }
                console.log(response)

            }, function (error) {
                setFormError(true)
            });
    }

    return (
        <StyledForm id="contact">
            {formSentStatus ? (
                <div className="form__success">
                    <div>
                        <h2>Thanks!</h2>

                        <Check fill="#2a5dfa" height={50} />
                    </div>

                    <p>An email has been sent to your inbox, ill get back to you within 24hrs</p>
                </div>

            ) : (
                    <Formik
                        initialValues={{ name: '', email: '', subject: '', message: '' }}
                        validationSchema={validation}
                        onSubmit={(values, { setSubmitting, resetForm }) => submitForm(values, setSubmitting, resetForm)}
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


                                <motion.button whileTap={{ scale: 0.85 }} type="submit" className="btn btn--submit btn--lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'submitting...' : 'submit'}
                                </motion.button>
                            </Form>
                        )}
                    </Formik>
                )
            }


        </StyledForm >
    )
}