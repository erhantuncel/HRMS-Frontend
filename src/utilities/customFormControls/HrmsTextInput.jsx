import { useField } from 'formik'
import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react'

export default function HrmsTextInput({label, ...props}) {

    const [field, meta] = useField(props)
    // console.log(field)
    // console.log(meta)
    return (
        <FormField error={meta.touched && !!meta.error}>
            {label ? (<label>{label}</label>) : null}
            <Input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}/>
            ) : null}
        </FormField>
    )
}
