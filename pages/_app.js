import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { HeadTag, Layout } from '../components/components';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css'; // make use of tailwind utility classes
import { Provider } from 'next-auth/client' // next auth state session provider
import { StateProvider } from '../provider/AppState';
import reducer, { initialState } from '../provider/reducer';
import appTheme from '../provider/AppTheme';


function MyApp({ Component, pageProps }) {

  // handle server side rendering of material ui styles
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <HeadTag /> {/* head tag for all seo related content */}
      <ThemeProvider theme={appTheme}> {/* material ui theme provider to handle server side css rendering */}
        <CssBaseline />
        <StateProvider initialState={initialState} reducer={reducer}> {/* data layer using context api */}
          <Layout> {/* layout of the app */}
            <Provider session={pageProps.session}> {/*  handle next auth sessions */}
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </StateProvider>
      </ThemeProvider>
    </>
  );
}

// main prop types of most pages
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
