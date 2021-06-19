import React, { useEffect, useState } from 'react'
import { Grid, Icon, Menu, Table, Button } from 'semantic-ui-react'
import EmployerService from '../../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getall().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>Id</Table.HeaderCell>
                                <Table.HeaderCell>Company Name</Table.HeaderCell>
                                <Table.HeaderCell>Web Page</Table.HeaderCell>
                                <Table.HeaderCell>E-mail</Table.HeaderCell>
                                <Table.HeaderCell>Phone</Table.HeaderCell>
                                <Table.HeaderCell width={5}>Operations</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                employers.map(employer => (
                                    <Table.Row key={employer.id}>
                                        <Table.Cell>{employer.id}</Table.Cell>
                                        <Table.Cell>{employer.companyName}</Table.Cell>
                                        <Table.Cell>{employer.webPage}</Table.Cell>
                                        <Table.Cell>{employer.email}</Table.Cell>
                                        <Table.Cell>{employer.phone}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Button primary size="mini" >Update</Button>
                                            <Button primary size="mini" >Confirm</Button>
                                            <Button primary size="mini" >Delete</Button>
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
