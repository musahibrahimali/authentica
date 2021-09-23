import { Button } from '@mui/material';
import React from 'react';
import { FormButtonStyles } from './FormButtonStyles';

function FormButton(props) {

    const { text, size, color, variant, onClick, smallLetters = false, ...other } = props;

    const classes = FormButtonStyles();

    return (
        <Button
            classes={smallLetters ? { label: classes.label } : null}
            type="submit"
            fullWidth
            size={size || "large"}
            variant={variant || "contained"}
            color={color || "primary"}
            onClick={onClick}
            className={classes.submit}
            {...other}
        >
            {text}
        </Button>
    )
}

export default FormButton;
