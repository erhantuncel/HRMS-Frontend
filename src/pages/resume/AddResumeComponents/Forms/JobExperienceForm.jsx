import React, { useEffect, useState } from 'react'
import { FieldArray } from 'formik'
import { Grid, Segment, Header, Menu, Icon, FormGroup, Button } from 'semantic-ui-react'
import HrmsSelect from '../../../../utilities/customFormControls/HrmsSelect'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'
import JobPositionService from '../../../../services/jobPositionService'

export default function JobExperienceForm(props) {

    const {
        formField: {
            jobPosition,
            workplaceName,
            startDate,
            endDate
        }
    } = props

    const [jobPositionOptions, setJobPositionOptions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getall().then(
            result => setJobPositionOptions(
                result.data.data.map(jp => ({ key: jp.id, value: jp.id, text: jp.name }))
            )
        )
    }, [])

    return (
        <FieldArray name="jobExperiences" >
            {({ form, ...arrayHelpers }) => {
                const handleAddJobExperience = () => {
                    arrayHelpers.push({
                        jobPosition: {id:""},
                        workplaceName: "",
                        startDate: "",
                        endDate: ""
                    })
                }

                const handleRemoveJobExperience = (index) => {
                    arrayHelpers.remove(index)
                }

                return (
                    <React.Fragment>
                        {
                            form.values.jobExperiences.map((jobExperience, index) => (
                                <Segment
                                    key={index} color="blue"
                                    style={{ marginTop: 0, padding: "0 2px 8px 2px" }}
                                >
                                    <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                                        <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                                            <Menu.Item as="h4" style={{ fontWeight: "bold", color: "black" }}>
                                                Job Experience {index + 1}
                                            </Menu.Item>
                                            <Menu.Item style={{ fontWeight: "bold" }}
                                                onClick={() => handleRemoveJobExperience(index)} position="right">
                                                <Icon name='trash alternate' color="black" />
                                            </Menu.Item>
                                        </Menu>
                                    </Header>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column stretched verticalAlign="middle" width={16}>
                                                <FormGroup widths="equal" style={{ margin: 0 }}>
                                                    <HrmsSelect
                                                        name={`jobExperiences[${index}].jobPosition.id`} id="select-job-position" label={jobPosition.label}
                                                        options={jobPositionOptions} placeholder=""
                                                        selectOnBlur={false} clearable
                                                    />
                                                    <HrmsTextInput
                                                        name={`jobExperiences[${index}].workplaceName`} id={workplaceName.name}
                                                        label={workplaceName.label} type="text"
                                                    />
                                                </FormGroup>
                                                <FormGroup widths="equal" style={{ margin: 0 }}>
                                                    <HrmsTextInput
                                                        name={`jobExperiences[${index}].startDate`} id={startDate.name}
                                                        label={startDate.label} type="date"
                                                    />
                                                    <HrmsTextInput
                                                        name={`jobExperiences[${index}].endDate`} id={endDate.name}
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
                            onClick={handleAddJobExperience}>
                            Add New Job Experience
                        </Button>
                    </React.Fragment>
                )
            }}
        </FieldArray>
    )
}
