import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CandidateRegisterationForm from '../pages/CandidateRegisterationForm'
import EmployerRegistrationForm from '../pages/EmployerRegistrationForm'
import LogInForm from '../pages/LogInForm'
import MainPage from '../pages/MainPage'

export default function GuestDashboard() {
    return (
        <Container className="main">
            <Grid padded style={{height: '100vh', width:'100%'}}>
                <Grid.Row>
                    <Grid.Column>
                        <MainPage />
                        {/* <LogInForm /> */}
                        {/* <CandidateRegisterationForm /> */}
                        {/* <EmployerRegistrationForm /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
