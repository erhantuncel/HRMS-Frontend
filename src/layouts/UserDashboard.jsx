import React from 'react'
import { Container, Grid, Menu } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import JobAdvertList from '../pages/JobAdvertList'
import EmployerList from '../pages/EmployerList'
import SideMenu from './SideMenu'
import JobPositionList from '../pages/JobPositionList'

export default function UserDashboard() {
    return (
        <Container className="main">
            <Grid padded style={{height: '90vh'}} divided>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideMenu />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <JobPositionList />
                        {/* <JobAdvertList /> */}
                        {/* <CandidateList /> */}
                        {/* <EmployerList /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
