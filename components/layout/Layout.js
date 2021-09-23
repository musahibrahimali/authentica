import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useStateValue } from '../../provider/AppState';
import actionTypes from '../../utils/Utils';

const Layout = (props) => {

    /* props */
    const { children } = props;
    /* data layer */
    const [{ theme }] = useStateValue();
    // Create a theme instance.
    const appTheme = createTheme({
        palette: {
            type: theme ? "dark" : "light", // toggle light and dark theme
            primary: {
                main: '#556cd6',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: red.A400,
            },
        },
    });

    return (
        <ThemeProvider theme={appTheme}>
            <div className={theme ? "dark" : ""}>
                <div className="bg-white dark:bg-col-dark-900">
                    <div className="max-w-screen-xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Layout;
