import React, { useEffect, useState } from 'react'
import { Grid, Icon, Menu, Table, Button } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getall().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>Id</Table.HeaderCell>
                                <Table.HeaderCell>First Name</Table.HeaderCell>
                                <Table.HeaderCell>Last Name</Table.HeaderCell>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.HeaderCell>Identity</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Operations</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                candidates.map(candidate => (
                                    <Table.Row key={candidate.id}>
                                        <Table.Cell>{candidate.id}</Table.Cell>
                                        <Table.Cell>{candidate.firstName}</Table.Cell>
                                        <Table.Cell>{candidate.lastName}</Table.Cell>
                                        <Table.Cell>{candidate.email}</Table.Cell>
                                        <Table.Cell>{candidate.identityNumber}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Button primary size="mini">Update</Button>
                                            <Button primary size="mini">Delete</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='6'>
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
