import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a appTheme instance.
const appTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default appTheme;