import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Header, Segment, Message, Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/userActions'
import { Link, useHistory } from 'react-router-dom'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

export default function LogInForm() {

    const dispatch = useDispatch()
    const history = useHistory()

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid E-mail'),
        password: Yup.string().min(6, 'Must be at least 6 characters.').required('Required')
    })

    const handleLogin = (values) => {
        if(values.email === 'staff@abc.com' && values.password === '123456') {
            dispatch(logIn({id:1, role:"staff"}))
            history.push("/user/staff")
        } else if (values.email === 'employer@abc.com' && values.password === '123456') {
            dispatch(logIn({id:4, role:"employer"}))
            history.push("/user/employer")
        } else if (values.email === 'candidate@abc.com' && values.password === '123456') {
            dispatch(logIn({id:14, role:"candidate"}))
            history.push("/user/candidate")
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
                        <Form className="ui form">
                            <Segment>
                                <HrmsTextInput 
                                    name="email" icon="user" iconPosition="left" 
                                    placeholder="E-mail address" fluid
                                />
                                <HrmsTextInput 
                                    name="password" icon="lock" iconPosition="left" 
                                    placeholder="Password" type="password" fluid
                                />
                                <Button color="blue" fluid size="large" type="submit">LogIn</Button>
                            </Segment>
                        </Form>
                    </Formik>
                    <Message info as="h3">
                        New to us? Sign Up <br />
                        <Link to="/register-candidate">Candidate</Link> | <Link to="/register-employer">Employer</Link>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
