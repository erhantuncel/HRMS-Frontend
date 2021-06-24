import { useField } from 'formik'
import React from 'react'
import { FormField, TextArea, Label } from 'semantic-ui-react'

export default function HrmsTextArea({label, ...props}) {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            {label ? (<label>{label}</label>) : null}
            <TextArea {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}/>
            ) : null}
        </FormField>
    )
}
