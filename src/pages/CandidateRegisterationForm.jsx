import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default function CandidateRegisterationForm() {
    return (
        <Grid style={{ height: '90vh' }} textAlign="center">
            <Grid.Row verticalAlign="middle">
                <Grid.Column style={{maxWidth: '410px'}}>
                    <Header as='h2' color='blue' textAlign='center'>Register Candidate</Header>
                    <Form size="large">
                        <Segment>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
                            <Form.Input fluid icon='id card' iconPosition='left' placeholder='Identity Number' />
                            <Form.Input fluid icon='calendar alternate' iconPosition='left' placeholder='Year of Birth' />
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
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
