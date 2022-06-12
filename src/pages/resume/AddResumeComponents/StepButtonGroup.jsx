import { useFormikContext } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'

export default function StepButtonGroup({activeStep, isLastStep, handlePreviousStep}) {
    const {submitForm} = useFormikContext()

    const formikSubmit = () => {
        submitForm();
    }

    return (
        <React.Fragment>
            <Button type="button" color="blue"
                disabled={activeStep === 1}
                onClick={() => handlePreviousStep(activeStep)} >Previous</Button>
            <Button floated="right" color={isLastStep ? "green" : "blue"}
                onClick={() => formikSubmit()}
            >
                {isLastStep ? "Save Resume" : "Next"}
            </Button>
        </React.Fragment>
    )
}
