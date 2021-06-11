import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default function EmployerRegistrationForm() {
    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{maxWidth: '410px'}}>
                    <Header as='h2' color='blue' textAlign='center'>Register Employer</Header>
                    <Form size='large'>
                        <Segment>
                            <Form.Input fluid icon='building' iconPosition='left' placeholder='Company Name' />
                            <Form.Input fluid icon='globe' iconPosition='left' placeholder='Web Page' />
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input fluid icon='phone' iconPosition='left' placeholder='Phone' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password(repeat)' type='password'/>
                            <Button color='blue' fluid size='large'>
                                Register
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
