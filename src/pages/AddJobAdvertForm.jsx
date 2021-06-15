import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { SubmitButton, ResetButton, Form, Input, Select, TextArea } from 'formik-semantic-ui-react'
import { Grid, Header, Segment, FormGroup, FormField } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import FormikDatePicker from '../common/formik/FormikDatePicker'
import { subDays } from 'date-fns/esm'
import CityService from '../services/cityService'
import JobPositionService from '../services/jobPositionService'
import JobTypeService from '../services/jobTypeService'
import WorkLocationService from '../services/workLocationService'

export default function AddJobAdvertForm() {

    const history = useHistory()
    
    const [cityOptions, setCityOptions] = useState([])
    const [jobPositionOptions, setJobPositionOptions] = useState()
    const [jobTypeOptions, setJobTypeOptions] = useState()
    const [workLocationOptions, setWorkLocationOptions] = useState([])

    
    useEffect(() => {
        let cityService = new CityService()
        cityService.getall().then(
            result => setCityOptions(
                result.data.data.map(c => ({ key: c.id, value: c.id, text: c.name }))
            )
        )
        
        let jobPositionService = new JobPositionService()
        jobPositionService.getall().then(
            result => setJobPositionOptions(
                result.data.data.map(jp => ({ key: jp.id, value: jp.id, text: jp.name }))
            )
        )

        let jobTypeService = new JobTypeService()
        jobTypeService.getall().then(
            result => setJobTypeOptions(
                result.data.data.map(jt => ({ key: jt.id, value: jt.id, text: jt.name }))
            )
        )

        let workLocaitonService = new WorkLocationService()
        workLocaitonService.getall().then(
            result => setWorkLocationOptions(
                result.data.data.map(wl => ({ key: wl.id, value: wl.id, text: wl.name }))
            )
        )

    }, [])

    const initialValues = {
        city: "",
        jobPosition: "",
        jobType: "",
        workLocation: "",
        deadline: "",
        maxSalary: "",
        minSalary: "",
        openPositionCount: "",
        jobDefinition: ""
    }

    const validationSchema = Yup.object({
        city: Yup.string().required('Required'),
        jobPosition: Yup.string().required('Required'),
        jobType: Yup.string().required('Required'),
        workLocation: Yup.string().required('Required'),
        deadline: Yup.date().required('Required'),
        maxSalary: Yup.number().moreThan(Yup.ref("minSalary")),
        openPositionCount: Yup.string().required('Required'),
        jobDefinition: Yup.string().required('Required')
    })

    function handleSubmit(values, setSubmitting) {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        history.push("/user/employer")
    }

    return (
        <Grid style={{ height: '90vh' }}>
            <Grid.Row >
                <Grid.Column>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => { handleSubmit(values, setSubmitting) }}
                    >
                        <Form size='large'>
                            <Header as='h3' attached="top" block >ADD JOB ADVERT</Header>
                            <Segment attached>
                                <FormGroup widths="equal">
                                    <Select
                                        id="select-city"
                                        errorPrompt
                                        name="city"
                                        selectOnBlur={false}
                                        clearable
                                        placeholder="Select City"
                                        options={cityOptions}
                                        label='City'
                                    />
                                    <Select
                                        id="select-job-position"
                                        errorPrompt
                                        name="jobPosition"
                                        selectOnBlur={false}
                                        clearable
                                        placeholder="Select Job Position"
                                        options={jobPositionOptions}
                                        label='Job Position'
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <Select
                                        id="select-job-type"
                                        errorPrompt
                                        name="jobType"
                                        selectOnBlur={false}
                                        clearable
                                        placeholder="Select Job Type"
                                        options={jobTypeOptions}
                                        label='Job Type'

                                    />
                                    <Select
                                        id="select-work-location"
                                        errorPrompt
                                        name="workLocation"
                                        selectOnBlur={false}
                                        clearable
                                        placeholder="Select Work Location"
                                        options={workLocationOptions}
                                        label='Work Location'

                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <FormField
                                        control={Input} type="number" id="minSalary" placeholder="Minimum Salary"
                                        label="Minimum Salary" name='minSalary' errorPrompt
                                    />
                                    <FormField
                                        control={Input} type="number" id="maxSalary" placeholder="Maxium Salary"
                                        label="Maximum Salary" name='maxSalary' errorPrompt
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <FormField
                                        control={Input} id="openPositionCount" placeholder="Open position count"
                                        label="Open Position Count" name='openPositionCount' errorPrompt
                                    />
                                    <FormikDatePicker 
                                        name="deadline"
                                        label="Deadline"
                                        minDate={subDays(new Date(),0)}
                                        placeholderText="Select Deadline"
                                        dateFormat="dd.MM.yyyy"
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <FormField
                                        control={TextArea} id="jobDefinition" placeholder="Job Definition"
                                        label="Job Definition" name='jobDefinition' errorPrompt
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ResetButton size='large' fluid width={4}>
                                        Reset
                                    </ResetButton>
                                    <SubmitButton color="green" size='large' fluid width={4}>
                                        Add Job Advert
                                    </SubmitButton>
                                </FormGroup>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
