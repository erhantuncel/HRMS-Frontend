import { useField, useFormikContext } from 'formik'
import React from 'react'
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Form } from 'semantic-ui-react';

export default function FormikDatePicker({ label, ...props }) {
    const [field, meta] = useField(props)
    const { setFieldValue, handleBlur } = useFormikContext();

    return (
        <Form.Field
            {...field}
            {...props}
            error={(meta.touched && meta.error) ? 
                { content: meta.error, pointing: 'above' }:null}
            label={label}
            control={DateView}
            selected={field.value}
            onBlur={handleBlur}
            onChange={(date) => setFieldValue(field.name, date)}
        />
            
    )
}