import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Header, Segment, Button } from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import AuthService from '../../services/authService'

export default function CandidateRegisterationForm() {

    const history = useHistory()

    const initialValues = {
        firstName: "",
        lastName: "",
        identityNumber: "",
        yearOfBirth: "",
        email: "",
        password: "",
        passwordForCheck: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        identityNumber: Yup.string().required('Required').length(11, 'Must be eleven digits.'),
        yearOfBirth: Yup.string().required('Required').length(4, 'Must be four digits.'),
        email: Yup.string().required('Required').email('Invalid E-mail'),
        password: Yup.string().required('Required').min(6, 'Must be at least 6 characters.'),
        passwordForCheck: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match')
    })

    function handleSubmit(values, setSubmitting, resetForm) {
        let authService = new AuthService()
        authService.registerCandidate(values).then(
            result => {
                if(result.data.success) {
                    console.log(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                    resetForm()
                    history.push("/verification/info")
                } else {
                    alert(result.data.message)
                }
            }
        )
    }

    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{maxWidth: '410px'}}>
                    <Header as='h2' color='blue' textAlign='center'>Register Candidate</Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                            onSubmit={(values, {setSubmitting, resetForm}) => {handleSubmit(values, setSubmitting, resetForm)}}>
                        <Form className="ui form">
                            <Segment>
                                <HrmsTextInput 
                                    name="firstName" icon="user" iconPosition="left" 
                                    placeholder="First Name" fluid
                                />
                                <HrmsTextInput 
                                    name="lastName" icon="user" iconPosition="left" 
                                    placeholder="Last Name" fluid
                                />
                                <HrmsTextInput 
                                    name="identityNumber" icon="id card" iconPosition="left" 
                                    placeholder="Identity Number" fluid
                                />
                                <HrmsTextInput 
                                    name="yearOfBirth" icon="calendar alternate" iconPosition="left" 
                                    placeholder="Year of Birth" fluid
                                />
                                <HrmsTextInput 
                                    name="email" icon="mail" iconPosition="left" 
                                    placeholder="E-mail address" fluid
                                />
                                <HrmsTextInput 
                                    name="password" icon="lock" iconPosition="left" 
                                    placeholder="Password" fluid type="password"
                                />
                                <HrmsTextInput 
                                    name="passwordForCheck" icon="lock" iconPosition="left" 
                                    placeholder="Password(repeat)" fluid type="password"
                                />
                                <Button color="blue" fluid size="large" type="submit">Register</Button>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
