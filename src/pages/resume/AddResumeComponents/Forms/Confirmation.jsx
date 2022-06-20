import { useFormikContext } from 'formik';
import React from 'react'
import { Grid, Segment, Header, Menu, Image, Table, Icon, FormGroup, Button, Label } from 'semantic-ui-react'


export default function Confirmation(props) {

    const {
        selectedPhotoUrl,
        jobPositionOptions
    } = props
    const {values} = useFormikContext();

    return (
        <div>
            {console.log(values)}
            <Segment color="blue" style={{ marginTop: 0, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Resume Information
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded columns={2} >
                    <Grid.Row>
                        <Grid.Column width={4} >
                            <strong>Resume Name:</strong>
                        </Grid.Column>
                        <Grid.Column width={12} >
                            {values.name}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4} >
                            <strong>Preface :</strong>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {values.preface}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment color="blue" style={{ marginTop: 10, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Personal Information
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded style={{height: '20vh'}} >
                    <Grid.Row columns={2}>
                        <Grid.Column width={4} padded>
                            <Segment basic style={{ margin: "0", padding: "0.4rem 0 0.6rem 0", height: "225px" }}>
                                <Image src={selectedPhotoUrl} width="70%" />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Grid columns={4} >
                                <Grid.Row>
                                    <Grid.Column>
                                        <strong>First Name:</strong>
                                    </Grid.Column>
                                    <Grid.Column>
                                        FirstName1
                                    </Grid.Column>
                                    <Grid.Column>
                                        <strong>Last Name:</strong>
                                    </Grid.Column>
                                    <Grid.Column>
                                        LastName1
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column >
                                        <strong>Identity Number:</strong>
                                    </Grid.Column>
                                    <Grid.Column >
                                        12345678910
                                    </Grid.Column>
                                    <Grid.Column >
                                        <strong>Year Of Birth:</strong>
                                    </Grid.Column>
                                    <Grid.Column >
                                        1984
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column >
                                        <strong>E-mail:</strong>
                                    </Grid.Column>
                                    <Grid.Column >
                                        candidate@abc.com
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            
            <Segment color="blue" style={{ marginTop: 10, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Education
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>School</Table.HeaderCell>
                                        <Table.HeaderCell>Department</Table.HeaderCell>
                                        <Table.HeaderCell>Start Date</Table.HeaderCell>
                                        <Table.HeaderCell>End Date</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {values.educations.map((education) => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{education.schoolName}</Table.Cell>
                                                <Table.Cell>{education.department}</Table.Cell>
                                                <Table.Cell>{education.startDate}</Table.Cell>
                                                <Table.Cell>{education.endDate}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment color="blue" style={{ marginTop: 10, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Job Experience
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Work Place</Table.HeaderCell>
                                        <Table.HeaderCell>Position</Table.HeaderCell>
                                        <Table.HeaderCell>Start Date</Table.HeaderCell>
                                        <Table.HeaderCell>End Date</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {values.jobExperiences.map((jobExperience) => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{jobExperience.workplaceName}</Table.Cell>
                                                <Table.Cell>
                                                    {jobPositionOptions.find(jp => {
                                                        return jp.key === jobExperience.jobPosition.id
                                                    }).text}
                                                </Table.Cell>
                                                <Table.Cell>{jobExperience.startDate}</Table.Cell>
                                                <Table.Cell>{jobExperience.endDate}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment color="blue" style={{ marginTop: 10, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Language
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Language</Table.HeaderCell>
                                        <Table.HeaderCell>Level</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {values.languages.map((languae) => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell>{languae.name}</Table.Cell>
                                                <Table.Cell>{languae.level}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment color="blue" style={{ marginTop: 10, padding: "0 2px 8px 2px" }}>
                <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                    <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                        <Menu.Item as="h3" style={{ fontWeight: "bold", color: "black" }}>
                            Social Media & Skills
                        </Menu.Item>
                    </Menu>
                </Header>
                <Grid padded columns={2}>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <strong>Github Url:</strong>
                        </Grid.Column>
                        <Grid.Column width={13} >
                            {values.githubUrl}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <strong>LinkedIn Url:</strong>
                        </Grid.Column>
                        <Grid.Column width={13} >
                            {values.linkedinUrl}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <strong>Skills :</strong>
                        </Grid.Column>
                        <Grid.Column width={13} >
                            {values.skillStr.map(skill => {
                                return skill + ", "
                            })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
