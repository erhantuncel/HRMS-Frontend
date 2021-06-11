import React, { useState, useEffect } from 'react'
import { Button, Grid, Icon, Menu, Table } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getall().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>Id</Table.HeaderCell>
                                <Table.HeaderCell >Name</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Operations</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                jobPositions.map(jobPosition => (
                                    <Table.Row key={jobPosition.id} >
                                        <Table.Cell>{jobPosition.id}</Table.Cell>
                                        <Table.Cell>{jobPosition.name}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Button primary size="mini">Edit</Button>
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
