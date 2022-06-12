import React from 'react'
import { FormGroup } from 'semantic-ui-react'
import HrmsTextArea from '../../../../utilities/customFormControls/HrmsTextArea'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'

export default function ResumeInformationForm(props) {
    const {
        formField: {
            name,
            preface
        }
    } = props
    return (
        <React.Fragment>
            <FormGroup widths="equal" className="ui form">
                <HrmsTextInput
                    name={name.name} id={name.name} type="text"
                    label={name.label}
                />
            </FormGroup>
            <FormGroup widths="equal" className="ui form">
                <HrmsTextArea
                    style={{ minHeight: '30vh' }}
                    name={preface.name} id={preface.name}
                    label={preface.label}
                />
            </FormGroup>
        </React.Fragment>
    )
}
