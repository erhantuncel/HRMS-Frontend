import React from 'react'
import { Step } from 'semantic-ui-react'

export default function AddResumeStep({steps, activeStep, handleStepClick}) {
    return (
        <React.Fragment>
            <Step.Group attached='top' widths={steps.length} fluid>
                {
                    steps.map(step => (
                        <Step
                            key={step.id}
                            active={activeStep === step.id}
                            disabled={step.disabled}
                            onClick={
                                !step.disabled ? () => handleStepClick(step.id)
                                    : null
                            } >
                            <Step.Content className="stepContent" >
                                <Step.Title>{step.content}</Step.Title>
                            </Step.Content>
                        </Step>
                    ))
                }
            </Step.Group>
        </React.Fragment>
    )
}
