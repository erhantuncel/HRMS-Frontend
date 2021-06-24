import { useField } from 'formik'
import React from 'react'
import { FormField, Select, Label } from 'semantic-ui-react'

export default function HrmsSelect({label, ...props}) {

    const [field, meta, helpers] = useField(props)
    // console.log(meta)

    function handleChange(event, data) {
        // console.log(event)
        // console.log(data)
        helpers.setValue(data.value)
    }
    return (
        <FormField error={meta.touched && !!meta.error}>
            {label ? (<label>{label}</label>) : null}
            <Select {...field} {...props} 
                onChange={(event, data) => handleChange(event, data) }/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}/>
            ) : null}
        </FormField>
    )
}
