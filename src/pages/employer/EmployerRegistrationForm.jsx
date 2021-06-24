import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Header, Segment, Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import AuthService from '../../services/authService'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

export default function EmployerRegistrationForm() {
    const initialValues = {
        companyName: "",
        webPage: "",
        email: "",
        phone: "",
        password: "",
        passwordForCheck: ""
    }

    const validationSchema = Yup.object({
        companyName: Yup.string().required('Required'),
        webPage: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Invalid E-mail'),
        phone: Yup.string().required('Required').length(10, 'Must be ten digits.'),
        password: Yup.string().required('Required').min(6, 'Must be at least 6 characters.'),
        passwordForCheck: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match')
    })

    const history = useHistory()


    function handleSubmit(values, setSubmitting, resetForm) {
        let authService = new AuthService()
        authService.registerEmployer(values).then(
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
                <Grid.Column style={{ maxWidth: '410px' }}>
                    <Header as='h2' color='blue' textAlign='center'>Register Employer</Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {handleSubmit(values, setSubmitting, resetForm)}}>
                        <Form className="ui form">
                            <Segment>
                                <HrmsTextInput 
                                    name="companyName" icon="building" iconPosition="left" 
                                    placeholder="Company Name" fluid
                                />
                                <HrmsTextInput 
                                    name="webPage" icon="globe" iconPosition="left" 
                                    placeholder="Web Page" fluid
                                />
                                <HrmsTextInput 
                                    name="email" icon="mail" iconPosition="left" 
                                    placeholder="E-mail address" fluid
                                />
                                <HrmsTextInput 
                                    name="phone" icon="phone" iconPosition="left" 
                                    placeholder="Phone" fluid
                                />
                                <HrmsTextInput 
                                    name="password" icon="lock" iconPosition="left" 
                                    placeholder="Password" fluid type="password"
                                />
                                <HrmsTextInput 
                                    name="passwordForCheck" icon="lock" iconPosition="left" 
                                    placeholder="Password(repeat)" fluid type="password"
                                />
                                <Button color="blue" fluid size="large">Register</Button>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
