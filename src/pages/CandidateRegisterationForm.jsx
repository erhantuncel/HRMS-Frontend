import React from 'react'
import { Formik } from 'formik'
import { SubmitButton, Form, Input } from 'formik-semantic-ui-react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import * as Yup from 'yup'

export default function CandidateRegisterationForm() {
    const initialValues = {
        firstName: "",
        lastName: "",
        identityNumber: "",
        yearOfBirth: "",
        email: "",
        password: "",
        password2: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        identityNumber: Yup.string().required('Required').length(11, 'Must be eleven digits.'),
        yearOfBirth: Yup.string().required('Required').length(4, 'Must be four digits.'),
        email: Yup.string().required('Required').email('Invalid E-mail'),
        password: Yup.string().required('Required').min(6, 'Must be at least 6 characters.'),
        password2: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match')
    })

    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{maxWidth: '410px'}}>
                    <Header as='h2' color='blue' textAlign='center'>Register Candidate</Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}>
                        <Form size="large">
                            <Segment>
                                <Input fluid icon='user' iconPosition='left' placeholder='First Name' 
                                        name='firstName' errorPrompt />
                                <Input fluid icon='user' iconPosition='left' placeholder='Last Name' 
                                        name='lastName' errorPrompt />
                                <Input fluid icon='id card' iconPosition='left' placeholder='Identity Number' 
                                        name='identityNumber' errorPrompt />
                                <Input fluid icon='calendar alternate' iconPosition='left' placeholder='Year of Birth' 
                                        name='yearOfBirth' errorPrompt />
                                <Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' 
                                        name='email' errorPrompt />
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
