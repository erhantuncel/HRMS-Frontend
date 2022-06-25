import { useField } from 'formik'
import React from 'react'
import { FormField, Dropdown, Label } from 'semantic-ui-react'

export default function HrmsDropDown({label, ...props}) {

    const [field, meta, helpers] = useField(props)

    function handleChange(event, data) {
        helpers.setValue(data.value)
    }

    return (
        <FormField error={meta.touched && !!meta.error}>
            {label ? (<label>{label}</label>) : null}
            <Dropdown {...props} 
                value={field.value || []}
                onChange={(event, data) => handleChange(event, data) }/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}/>
            ) : null}
        </FormField>
    )
}
