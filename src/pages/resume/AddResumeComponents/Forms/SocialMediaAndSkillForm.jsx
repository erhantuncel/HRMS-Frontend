import React from 'react'
import { FormGroup } from 'semantic-ui-react'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'
import HrmsDropdown from '../../../../utilities/customFormControls/HrmsDropdown'

export default function SocialMediaAndSkillForm(props) {
    const {
        formField: {
            githubUrl,
            linkedinUrl,
            skillStr
        },
        setSkillOptions,
        skillOptions
    } = props

    const handleAddition = (e, { value }) => {
        setSkillOptions([{ key: value, text: value, value: value }, ...skillOptions])
    }

    return (
        <React.Fragment>
            <FormGroup widths="equal" className="ui form">
                <HrmsTextInput
                    name={githubUrl.name} id={githubUrl.name} icon="github"
                    iconPosition="left" type="text" label={githubUrl.label}
                />  
            </FormGroup>
            <FormGroup widths="equal" className="ui form">
                <HrmsTextInput
                    name={linkedinUrl.name} id={linkedinUrl.name} icon="linkedin"
                    iconPosition="left" type="text" label={linkedinUrl.label}
                />
            </FormGroup>

            <FormGroup widths="equal" className="ui form">
                <HrmsDropdown
                    name={skillStr.name}
                    options={skillOptions}
                    label={skillStr.label}
                    search
                    selection
                    fluid
                    multiple
                    allowAdditions
                    onAddItem={handleAddition}
                />
            </FormGroup>

        </React.Fragment>
    )
}
