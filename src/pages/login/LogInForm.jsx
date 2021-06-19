import React from 'react'
import { Formik } from 'formik'
import { SubmitButton, Form, Input } from 'formik-semantic-ui-react'
import { Grid, Header, Segment, Message } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/userActions'
import { Link, useHistory } from 'react-router-dom'

export default function LogInForm() {

    const dispatch = useDispatch()
    const history = useHistory()

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid E-mail'),
        password: Yup.string().required('Required')
    })

    const handleLogin = (values) => {
        console.log(values)
        if(values.email === 'erhan@abc.com' && values.password === '123456') {
            dispatch(logIn({id:1, role:"employer"}))
            history.push("/user/employer")
        } else {
            history.push("/login")
        }
    }

    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{ maxWidth: '410px' }}>
                    <Header as='h2' color='blue' textAlign='center'>Log In to your account</Header>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={(values) => handleLogin(values)}>
                        {/* onSubmit={(values) => alert(JSON.stringify(values, null, 2))}> */}
                        <Form size='large'>
                            <Segment>
                                <Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                                    name="email" errorPrompt />
                                <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                                    name="password" errorPrompt />
                                <SubmitButton color='blue' fluid size='large'>
                                    Login
                                </SubmitButton>
                            </Segment>
                        </Form>
                    </Formik>
                    <Message info>
                        New to us? <Link to="/register-employer">Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
