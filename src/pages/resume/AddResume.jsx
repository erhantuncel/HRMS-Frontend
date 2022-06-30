import React, { useEffect, useState } from 'react'
import { Header, Form, Segment } from 'semantic-ui-react'
import ResumeInformationForm from './AddResumeComponents/Forms/ResumeInformationForm'
import PersonalInformationForm from './AddResumeComponents/Forms/PersonalInformationForm'
import EducationForm from './AddResumeComponents/Forms/EducationForm'
import JobExperienceForm from './AddResumeComponents/Forms/JobExperienceForm'
import LanguageForm from './AddResumeComponents/Forms/LanguageForm'
import SocialMediaAndSkillForm from './AddResumeComponents/Forms/SocialMediaAndSkillForm'
import Confirmation from './AddResumeComponents/Forms/Confirmation'
import { addResumeFormModel } from './AddResumeComponents/FormModel/addResumeFormModel'
import { Formik } from 'formik'
import { addResumeFormInitialValues } from './AddResumeComponents/FormModel/addResumeFormInitialValues'
import StepButtonGroup from './AddResumeComponents/StepButtonGroup'
import AddResumeStep from './AddResumeComponents/AddResumeStep'
import PhotoService from '../../services/photoService'
import SkillService from '../../services/skillService'
import ResumeService from '../../services/resumeService'
import validationSchema from './AddResumeComponents/FormModel/validationSchema'
import JobPositionService from '../../services/jobPositionService'
import alertify from 'alertifyjs'
import { useHistory } from 'react-router'

export default function AddResume() {

    const initialSteps = [
        { id: 1, disabled: false, content: "Resume Information" },
        { id: 2, disabled: true, content: "Personal Information" },
        { id: 3, disabled: true, content: "Education" },
        { id: 4, disabled: true, content: "Job Experience" },
        { id: 5, disabled: true, content: "Language" },
        { id: 6, disabled: true, content: "Social Media & Skills" },
        { id: 7, disabled: true, content: "Confirm" }
    ]

    const [skillOptions, setSkillOptions] = useState([])
    const history = useHistory()

    useEffect(() => {
        let skillService = new SkillService()
        skillService.getall().then(
            result => setSkillOptions(
                result.data.data.map(s => ({ key: s.id, value: s.name, text: s.name }))
            )
        )
    }, [])

    const [jobPositionOptions, setJobPositionOptions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getall().then(
            result => setJobPositionOptions(
                result.data.data.map(jp => ({ key: jp.id, value: jp.id, text: jp.name }))
            )
        )
    }, [])

    const [steps, setSteps] = useState(initialSteps)
    const [activeStep, setActiveStep] = useState(1)
    const isLastStep = activeStep === steps.length
    const currentValidationSchema = validationSchema[activeStep-1]
    const { formId, formField } = addResumeFormModel
    const [selectedPhoto, setSelectedPhoto] = useState("")
    const [selectedPhotoUrl, setSelectedPhotoUrl] = useState("")

    function handleSetStep(steps) {
        setSteps(steps)
    }

    const sendPhoto = async () => {
        if (selectedPhoto !== "") { 
            const photoData = new FormData()
            photoData.append("photoFile", selectedPhoto)
            let photoService = new PhotoService()
            const response = await photoService.add(photoData)
            return {id: response.data.data.id};
        } else {
            return null;
        }
    }

    const handleSubmit = (values, actions) => {
        if (isLastStep) {   
            sendPhoto().then(photoObject => {
                let { skillStr, firstName, lastName, identityNumber, email, ...values2 } = values
                let data = {
                    "skills": values.skillStr.join(","),
                    "candidate": { id: 2},
                    ...values2
                }
                if(photoObject !== null) {
                    data.photo = photoObject;
                }
                let resumeService = new ResumeService()
                return resumeService.add(data)
            }).then(result => {
                console.log(result)
                history.push("/user/candidate/resumes");
                alertify.success(result.data.data.name + " is added successfully.")
            }).catch(error => {
                console.error(error)
            })
        } else {
            steps.find((step) => step.id === activeStep + 1).disabled = false;
            handleSetStep(steps)
            setActiveStep(activeStep + 1)
        }
    }

    const handlePreviousStep = (activeStep) => {
        setActiveStep(activeStep - 1)
    }

    const handleStepClick = (stepId) => {
        setActiveStep(stepId)
    }

    const renderStepContent = (activeStep) => {
        switch (activeStep) {
            case 1:
                return <ResumeInformationForm formField={formField} />;
            case 2:
                return <PersonalInformationForm
                    formField={formField}
                    selectedPhoto={selectedPhoto}
                    setSelectedPhoto={setSelectedPhoto}
                    selectedPhotoUrl={selectedPhotoUrl}
                    setSelectedPhotoUrl={setSelectedPhotoUrl} />;
            case 3:
                return <EducationForm formField={formField} />;
            case 4:
                return <JobExperienceForm formField={formField} jobPositionOptions={jobPositionOptions} />;
            case 5:
                return <LanguageForm formField={formField} />;
            case 6:
                return <SocialMediaAndSkillForm formField={formField} skillOptions={skillOptions} setSkillOptions={setSkillOptions}  />
            case 7:
                return <Confirmation selectedPhotoUrl={selectedPhotoUrl} jobPositionOptions={jobPositionOptions} />;
            default:
                break;
        }
    }
    return (
        <React.Fragment>
            <AddResumeStep
                steps={steps}
                activeStep={activeStep}
                handleStepClick={handleStepClick}
            />
            <Formik
                initialValues={addResumeFormInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={(values, actions) => { handleSubmit(values, actions) }}
            >
                <Form id={formId} >
                    <Segment attached style={{ height: '66vh', padding: '3rem 5rem 3rem 5rem', overflow: "auto" }}>
                        {renderStepContent(activeStep)}
                    </Segment>
                    <Header attached="bottom">
                        <StepButtonGroup
                            activeStep={activeStep}
                            isLastStep={isLastStep}
                            handlePreviousStep={handlePreviousStep} />
                    </Header>
                </Form>
            </Formik>
        </React.Fragment>
    )
}
