import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CandidateRegisterationForm from '../pages/CandidateRegisterationForm'
import EmployerRegistrationForm from '../pages/EmployerRegistrationForm'
import LogInForm from '../pages/LogInForm'
import MainPage from '../pages/MainPage'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import NoPage from './NoPage'

export default function GuestDashboard() {
    let match = useRouteMatch()
    return (
        <Container className="main">
            <Grid padded style={{height: '100vh', width:'100%'}}>
                <Grid.Row>
                    <Grid.Column>
                        <Switch>
                            <Route exact path={`${match.path}login`} component={LogInForm} />
                            <Route exact path={`${match.path}register-candidate`} component={CandidateRegisterationForm} />
                            <Route exact path={`${match.path}register-employer`} component={EmployerRegistrationForm} />
                            <Route exact path={`${match.path}`} component={MainPage} />
                            <Route path="*" component={NoPage} />
                        </Switch>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
