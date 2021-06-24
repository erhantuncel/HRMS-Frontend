import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { Grid, Header, Segment, FormGroup, Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import HrmsSelect from '../../utilities/customFormControls/HrmsSelect'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import HrmsTextArea from '../../utilities/customFormControls/HrmsTextArea'
import { useHistory } from 'react-router-dom'
import CityService from '../../services/cityService'
import JobPositionService from '../../services/jobPositionService'
import JobTypeService from '../../services/jobTypeService'
import WorkLocationService from '../../services/workLocationService'
import JobAdvertService from '../../services/jobAdvertService'
import { useSelector } from 'react-redux'

export default function AddJobAdvertForm() {

    const {user} = useSelector(state => state.userInfo)
    const history = useHistory()

    
    const [cityOptions, setCityOptions] = useState([])
    const [jobPositionOptions, setJobPositionOptions] = useState([])
    const [jobTypeOptions, setJobTypeOptions] = useState([])
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
        employer: {id:user.id},
        city: {id:""},
        jobPosition: {id:""},
        jobType: {id:""},
        workLocation: {id:""},
        deadline: "",
        maxSalary: "",
        minSalary: "",
        openPositionCount: "",
        jobDefinition: ""
    }

    const validationSchema = Yup.object({
        city: Yup.object().shape({id:Yup.number().required('Required')}),
        jobPosition: Yup.object().shape({id:Yup.number().required('Required')}),
        jobType: Yup.object().shape({id:Yup.number().required('Required')}),
        workLocation: Yup.object().shape({id:Yup.number().required('Required')}),
        deadline: Yup.date().required('Required'),
        minSalary: Yup.number().nullable(),
        maxSalary: Yup.number().moreThan(Yup.ref("minSalary")).nullable(),
        openPositionCount: Yup.number().required('Required'),
        jobDefinition: Yup.string().required('Required')
    })

    function handleSubmit(values, setSubmitting, resetForm) {
        console.log(values)
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.add(values).then(
            result => {
                if(result.data.success) {
                    setSubmitting(false)
                    resetForm()
                    history.push("/user/employer")
                } else {
                    alert(result.data.message)
                }
            }
        )
    }

    return (
        <Grid style={{ height: '90vh' }}>
            <Grid.Row >
                <Grid.Column>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => { handleSubmit(values, setSubmitting, resetForm) }}
                    >
                        <Form className="ui form">
                            <Header as='h3' attached="top" block >ADD JOB ADVERT</Header>
                            <Segment attached>
                                <FormGroup widths="equal">
                                    <HrmsSelect 
                                        name="city.id" id="select-city" label='City' 
                                        options={cityOptions} placeholder="Select City" 
                                        selectOnBlur={false} clearable
                                    />
                                    <HrmsSelect 
                                        name="jobPosition.id" id="select-job-position" label='Job Position' 
                                        options={jobPositionOptions} placeholder="Select Job Position" 
                                        selectOnBlur={false} clearable
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <HrmsSelect 
                                        name="jobType.id" id="select-job-type" label='Job Type' 
                                        options={jobTypeOptions} placeholder="Select Job Type" 
                                        selectOnBlur={false} clearable
                                    />
                                    <HrmsSelect 
                                        name="workLocation.id" id="select-work-location" label='Work Location' 
                                        options={workLocationOptions} placeholder="Select Work Location" 
                                        selectOnBlur={false} clearable
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <HrmsTextInput 
                                        name="minSalary" id="minSalary" type="number"
                                        label="Minimum Salary" placeholder="Minimum Salary"
                                    />
                                    <HrmsTextInput 
                                        name="maxSalary" id="maxSalary" type="number"
                                        label="Maximum Salary" placeholder="Maximum Salary"
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <HrmsTextInput 
                                        name="openPositionCount" id="openPositionCount" type="number"
                                        label="Open position count" placeholder="Open position count"
                                    />
                                    <HrmsTextInput 
                                        name="deadline" id="deadline" type="date"
                                        label="Deadline" placeholder="Deadline"
                                        min={new Date().toISOString().split("T")[0]}
                                    />
                                </FormGroup>
                                <FormGroup widths="equal">
                                    <HrmsTextArea 
                                        name='jobDefinition' id="jobDefinition" 
                                        placeholder="Job Definition" label="Job Definition" 
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Button fluid width={4} size="large" type="reset">Reset</Button>
                                    <Button fluid width={4} size="large" color="green" type="submit">Add Job Advert</Button>
                                </FormGroup>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
