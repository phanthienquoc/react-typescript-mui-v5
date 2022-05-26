import { FastFieldProps, FastField } from 'formik';
import * as React from 'react';
import TextField from '../../TextField';

interface FormikFastField {
    id: string,
    name: string,
    label: string,
    variant: string,
    placeholder: any,
    Input?: any,
    props?: any,
    startIcon?: any,
    endIcon?: any
}

const FormikFastField: React.FC<FormikFastField> = ({ Input = TextField, ...props }) => {
    return (
        <FastField {...props}>
            {({ field, form, meta }) => (
                <div>
                    <Input fullWidth {...props} {...field} />
                    {meta.touched ? meta.error : null}
                    {
                        form.touched[field.name] && form.errors[field.name]
                            ? form.errors[field.name]
                            : null
                    }
                </div>
            )}
        </FastField>
    )
}

export default FormikFastField;