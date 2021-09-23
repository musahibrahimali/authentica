import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        /* github */
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        /* google */
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        /* facebook */
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth",
        signUp: "/auth/signup",
    },
    database: {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
    },
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
