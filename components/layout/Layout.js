import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useStateValue } from '../../provider/AppState';
import actionTypes from '../../utils/Utils';

const Layout = (props) => {

    /* props */
    const { children } = props;
    /* data layer */
    const [{ theme, isDrawerOpen }, dispatch] = useStateValue();
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

    /* switch between dark and light mode */
    const handleTheme = () => {
        if (theme) {
            dispatch({
                type: actionTypes.SET_THEME,
                theme: false,
            });
        } else {
            dispatch({
                type: actionTypes.SET_THEME,
                theme: true,
            });
        }
    }

    // open drawer
    const handleOpenDrawer = () => {
        if (isDrawerOpen) {
            dispatch({
                type: actionTypes.OPEN_DRAWER,
                isDrawerOpen: false,
            });
        } else {
            dispatch({
                type: actionTypes.OPEN_DRAWER,
                isDrawerOpen: true,
            });
        }
    }

    return (
        <ThemeProvider theme={appTheme}>
            <div className={theme ? "dark" : ""}>
                <div className="bg-white dark:bg-dark-900">
                    {/*side bar*/}
                    <div>
                        {/* <Drawer handleOpenDrawer={handleOpenDrawer} /> */}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>

                {/* main global footer */}
                <div className="">

                </div>
            </div>
        </ThemeProvider>
    );
}

export default Layout;
