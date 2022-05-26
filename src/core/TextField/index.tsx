import * as React from 'react';
import { TextField as TextFieldCore, TextFieldProps, InputAdornment } from '@mui/material';

type TextFieldCoreProps = TextFieldProps & {
    endIcon?: React.ReactNode,
    startIcon?: React.ReactNode,
}

const TextField: React.FC<TextFieldCoreProps> = ({ endIcon, startIcon, ...props }: TextFieldCoreProps) => {
    return <TextFieldCore  {...props}
        InputProps={{
            endAdornment: endIcon ? (
                <InputAdornment position="end">
                    {endIcon}
                </InputAdornment>
            ) : null,
            startAdornment: startIcon ? (
                <InputAdornment position="start">
                    {startIcon}
                </InputAdornment>
            ) : null,
        }}
    />
}

export default TextField;