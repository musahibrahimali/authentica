import { makeStyles } from "@mui/styles";

export const FormButtonStyles = makeStyles(
    theme => ({
        label: {
            textTransform: "none",
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }),
);