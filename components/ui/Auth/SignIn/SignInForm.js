import React, { useState } from 'react';
import Link from 'next/link';
import { SocialIcon } from '../auth';
import { signIn } from 'next-auth/client';
import { Typography, Avatar, Box, Container, Grid, IconButton, InputAdornment, Paper } from '@mui/material';
import { CheckBox, CopyRight, Form, FormButton, InputField, UseForm } from "../../../components";
import { facebook_image, github_image, google_image, twitter_image } from '../../../../assets/assets';
import { SignInFormStyles } from "./SignInFormStyles";

const initialValues = {
    id: 0,
    email: '',
    password: '',
    rememberMe: false,
};

const SignInForm = (props) => {
    const { providers, csrfToken } = props;
    const styles = SignInFormStyles();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [signUp, setSignUp] = useState(false);

    /* validate form */
    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? "" : "Invalid Password";
        }

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? "" : "This Field is Required";
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const {
        values,
        setErrors,
        handleInputChange,
        handleResetForm,
        errors,
    } = UseForm(initialValues, true, validateForm);

    /* handle google auth */
    const handleLogIn = (providerId) => {
        signIn(providerId);
    }

    return (
        <>
            <Paper classes={{ root: styles.root }} component="main" className={styles.image}>
                <Container component="main" maxWidth="xs"
                    className="bg-white dark:bg-dark-900 shadow-md border border-gray-400 border-opacity-0 dark:border-opacity-70 p-4 flex flex-col justify-center items-center">
                    <div className={styles.paper}>
                        <div className="mb-6 flex flex-col items-center justify-center">
                            <Avatar className={styles.avatar} />
                            <Typography component="h1" variant="h5">
                                SIGN IN
                            </Typography>
                        </div>
                        <Form method="post" action="/api/auth/signin/email">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <InputField
                                required
                                label="Email Address"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                                inputIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                }
                            />

                            {/* password field */}
                            <InputField
                                required
                                label="Password"
                                name="password"
                                type={passwordVisible ? "text" : "password"}
                                value={values.password}
                                onChange={handleInputChange}
                                error={errors.password}
                                inputIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={handlePasswordVisible}>
                                            {
                                                passwordVisible ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {/* remember me check box */}
                            {
                                signUp &&
                                <CheckBox
                                    name="rememberMe"
                                    label="Remember Me"
                                    value={values.rememberMe}
                                    onChange={handleInputChange}
                                />
                            }

                            <div className="mb-4">
                                <FormButton
                                    type="submit"
                                    text="Sign In"
                                    color="secondary"
                                />
                            </div>

                            <div className="flex justify-center items-center my-2 mb-4">
                                {Object.values(providers).map((provider) => {
                                    if (provider.name === "Email") {
                                        return;
                                    }
                                    else if (provider.name === "Google") {
                                        return (
                                            <SocialIcon
                                                image={google_image}
                                                onTap={() => handleLogIn(provider.id)}
                                            />
                                        );
                                    }
                                    else if (provider.name === "Facebook") {
                                        return (
                                            <SocialIcon
                                                image={facebook_image}
                                                onTap={() => handleLogIn(provider.id)}
                                            />
                                        );
                                    }
                                    else if (provider.name === "Twitter") {
                                        return (
                                            <SocialIcon
                                                image={twitter_image}
                                                onTap={() => handleLogIn(provider.id)}
                                            />
                                        );
                                    }
                                    else if (provider.name === "GitHub") {
                                        return (
                                            <SocialIcon
                                                image={github_image}
                                                onTap={() => handleLogIn(provider.id)}
                                            />
                                        );
                                    }
                                })}
                            </div>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="/auth/forgot" variant="body2">
                                        <a className="text-brand hover:underline hover:text-brand-blue dark:text-brand dark:hover:text-brand-blue">
                                            Forgot password
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <div className="" onClick={() => setSignUp(!signUp)}>
                                        <p>
                                            {signUp ? "Already have an account ?" : "Don't have an account ?"}
                                            {" "}
                                            <span
                                                className="text-brand hover:underline hover:text-brand-blue dark:text-brand dark:hover:text-brand-blue">
                                                {signUp ? "Sign In" : "Sign Up"}
                                            </span>
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                            <Box mt={4}>
                                <CopyRight />
                            </Box>
                        </Form>
                    </div>
                </Container>
            </Paper>
        </>
    );
}

export default SignInForm;
