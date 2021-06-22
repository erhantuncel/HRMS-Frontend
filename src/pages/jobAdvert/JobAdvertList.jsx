import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Grid, Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertService from '../../services/jobAdvertService'

export default function JobAdvertList() {

    const {user} = useSelector(state => state.userInfo)
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getallActive().then(result => setJobAdverts(result.data.data))
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    {user.role === "employer" ?
                        <Button primary as={NavLink} to="/user/employer/add-job-advert" >Add Job Advert</Button>
                        : null
                    }
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Company Name</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Position</Table.HeaderCell>
                                <Table.HeaderCell width={2}>Open Positions</Table.HeaderCell>
                                <Table.HeaderCell width={2}>Job Posting Date</Table.HeaderCell>
                                <Table.HeaderCell width={1}>Deadline</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Operations</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                jobAdverts.map(jobAdvert => (
                                    <Table.Row key={jobAdvert.id}>
                                        <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                        <Table.Cell>{jobAdvert.jobPosition.name}</Table.Cell>
                                        <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                                        <Table.Cell>{jobAdvert.createdDate}</Table.Cell>
                                        <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Button primary size="mini">Apply</Button>
                                            <Button primary size="mini">Disable</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='7'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
