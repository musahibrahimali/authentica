import { SignInForm } from '../../components/components';
import { providers, getSession, csrfToken } from "next-auth/client";

const Auth = (props) => {
    const { providers, csrfToken } = props;
    return (
        <>
            <SignInForm
                providers={providers}
                csrfToken={csrfToken}
            />
        </>
    );
}

export default Auth;

Auth.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};