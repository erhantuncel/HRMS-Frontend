import React from 'react'
import { Formik } from 'formik'
import { SubmitButton, Form, Input } from 'formik-semantic-ui-react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

export default function EmployerRegistrationForm() {

    const history = useHistory()

    const initialValues = {
        companyName: "",
        webPage: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    }

    const validationSchema = Yup.object({
        companyName: Yup.string().required('Required'),
        webPage: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Invalid E-mail'),
        phone: Yup.string().required('Required').length(10, 'Must be ten digits.'),
        password: Yup.string().required('Required').min(6, 'Must be at least 6 characters.'),
        password2: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match')
    })

    function handleSubmit(values, setSubmitting) {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        history.push("/user/employer")
    }

    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{ maxWidth: '410px' }}>
                    <Header as='h2' color='blue' textAlign='center'>Register Employer</Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting}) => {handleSubmit(values, setSubmitting)}}>
                        <Form size='large'>
                            <Segment>
                                <Input fluid icon='building' iconPosition='left' placeholder='Company Name'
                                    name='companyName' errorPrompt />
                                <Input fluid icon='globe' iconPosition='left' placeholder='Web Page'
                                    name='webPage' errorPrompt />
                                <Input fluid icon='mail' iconPosition='left' placeholder='E-mail address'
                                    name='email' errorPrompt />
                                <Input fluid icon='phone' iconPosition='left' placeholder='Phone'
                                    name='phone' errorPrompt />
                                <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                                    name='password' errorPrompt />
                                <Input fluid icon='lock' iconPosition='left' placeholder='Password(repeat)' type='password'
                                    name='password2' errorPrompt />
                                <SubmitButton color='blue' fluid size='large'>
                                    Register
                                </SubmitButton>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
