import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import CandidateList from '../pages/candidate/CandidateList'
import JobAdvertList from '../pages/jobAdvert/JobAdvertList'
import EmployerList from '../pages/employer/EmployerList'
import SideMenu from './SideMenu'
import JobPositionList from '../pages/jobPosition/JobPositionList'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import ResumeList from '../pages/resume/ResumeList'
import AddJobAdvertForm from '../pages/jobAdvert/AddJobAdvertForm'

export default function UserDashboard() {
    let match = useRouteMatch()

    return (
        <Container className="main">
            <Grid padded style={{height: '90vh'}} divided>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideMenu />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Switch>
                            <Route exact path={`${match.path}/staff/`} component={CandidateList} />
                            <Route exact path={`${match.path}/staff/job-positions`} component={JobPositionList} />
                            <Route exact path={`${match.path}/staff/candidates`} component={CandidateList} />
                            <Route exact path={`${match.path}/staff/employers`} component={EmployerList} />
                            <Route exact path={`${match.path}/staff/job-adverts`} component={JobAdvertList} />
                            <Route exact path={`${match.path}/employer/`} component={JobAdvertList} />
                            <Route exact path={`${match.path}/employer/job-adverts`} component={JobAdvertList} />
                            <Route exact path={`${match.path}/employer/add-job-advert`} component={AddJobAdvertForm} />
                            <Route exact path={`${match.path}/candidate/`} component={JobAdvertList} />
                            <Route exact path={`${match.path}/candidate/job-adverts`} component={JobAdvertList} />
                            <Route exact path={`${match.path}/candidate/resumes`} component={ResumeList} />
                            <Route path="*">
                                <Redirect to="/no-page" />
                            </Route>
                        </Switch>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
