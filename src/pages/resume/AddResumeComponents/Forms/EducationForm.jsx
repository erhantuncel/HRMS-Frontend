import React from 'react'
import { FieldArray } from 'formik'
import { FormGroup, Button, Grid, Segment, Header, Icon, Menu } from 'semantic-ui-react'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'

export default function EducationForm(props) {

    const {
        formField: {
            schoolName,
            department,
            startDate,
            endDate
        }
    } = props

    return (
        <FieldArray name="educations">
            {({ form, ...arrayHelpers }) => {
                const handleAddEducation = () => {
                    arrayHelpers.push({
                        schoolName: "",
                        department: "",
                        startDate: "",
                        endDate: ""
                    })
                };

                const handleRemoveEducation = (index) => {
                    arrayHelpers.remove(index)
                }

                return (
                    <React.Fragment>
                        {
                            form.values.educations.map((education, index) => (
                                <Segment 
                                    key={index} color="blue" 
                                    style={{ marginTop: 0, padding: "0 2px 8px 2px" }} 
                                >
                                    <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                                        <Menu size="small" text style={{ margin:0, padding:0 }}>
                                            <Menu.Item as="h4" style={{fontWeight:"bold", color:"black"}}>
                                                Education {index+1}
                                            </Menu.Item>
                                            <Menu.Item style={{fontWeight:"bold"}}
                                                onClick={() => handleRemoveEducation(index)} position="right">
                                            <Icon name='trash alternate' color="black"/>    
                                            </Menu.Item>
                                        </Menu>
                                    </Header>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column stretched verticalAlign="middle" width={16}>
                                                <FormGroup widths="equal" style={{ margin: 0 }}>
                                                    <HrmsTextInput
                                                        name={`educations[${index}].schoolName`} id={schoolName.name}
                                                        label={schoolName.label} type="text"
                                                    />
                                                    <HrmsTextInput
                                                        name={`educations[${index}].department`} id={department.name}
                                                        label={department.label} type="text"
                                                    />
                                                </FormGroup>
                                                <FormGroup widths="equal" style={{ margin: 0 }}>
                                                    <HrmsTextInput
                                                        name={`educations[${index}].startDate`} id={startDate.name}
                                                        label={startDate.label} type="date"
                                                    />
                                                    <HrmsTextInput
                                                        name={`educations[${index}].endDate`} id={endDate.name}
                                                        label={endDate.label} type="date"
                                                    />
                                                </FormGroup>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            ))
                        }

                        <Button type="button" color="blue"
                            onClick={handleAddEducation}>
                            Add New Education
                        </Button>
                    </React.Fragment>
                )
            }}
        </FieldArray>
    )
}
