import * as React from 'react';
import { Typography, TextField } from '@mui/material';
import { Formik, Form, } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import FastField from '../../src/core/Formik/FastField';

interface LoginProps {
    email: string,
    password: string
}

const Login: React.FC<{}> = () => {
    const initialValues: LoginProps = { email: '', password: '' };

    const _handleLogin = (values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    return (
        <AuthLayout>
            <Box sx={{ maxWidth: "428px", width: "100%", margin: "0 auto" }}>
                <Box sx={{ marginBottom: "48px" }}>
                    <Typography variant={"h5"}>
                        Hi there ,
                    </Typography>
                    <Typography variant={"h1"}>
                        Welcome back
                        <Image src={"/assets/icons/ice-cream.svg"} alt={"icon"} height={50} width={50} />
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'space-between', marginBottom: "36px" }}>
                    <Button
                        fullWidth
                        variant='outlined'
                        sx={{ marginRight: "18px" }}
                        startIcon={<Image alt={"ic-google-logo"} src={"/assets/icons/ic-google-logo.svg"} height={"22px"} width={"22px"} />}
                    >
                        Google
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        startIcon={<Image alt={"ic-apple-logo"} src={"/assets/icons/ic-apple-logo.svg"} height={"22px"} width={"22px"} />}
                    >
                        Apple ID
                    </Button>
                </Box>
                <Box sx={{ marginBottom: '18px' }}>
                    <Typography variant={"body1"}>
                        Or Continue with email address
                    </Typography>
                </Box>
                <Box>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={_handleLogin}
                        noValidate
                        autoComplete="off"
                    >
                        <Form style={{ display: "flex", flexDirection: "column" }}>
                            <FastField
                                id="email"
                                name="email"
                                label="email"
                                variant="outlined"
                                placeholder={"eg: johndoe@gmail.com"}
                                startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-mail.svg"} height={"24px"} width={"24px"} />}
                            />
                            <FastField
                                id="password"
                                name="password"
                                label="password"
                                variant="outlined"
                                placeholder="Enter your password"
                                startIcon={<Image alt={"ic-lock"} src={"/assets/icons/ic-lock.svg"} height={"24px"} width={"24px"} />}
                            />
                            <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "24px" }}>
                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                    <input type={"checkbox"} />
                                    <Typography variant={"body1"} sx={{ fontWeight: 600 }}>Remember me</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                    <Box sx={{ marginRight: "8px", display: 'flex', alignItems: "center" }}>
                                        <Image alt={'ic-link'} src={"/assets/icons/ic-link.svg"} width={"18px"} height={"18px"} />
                                    </Box>
                                    <Link style={{ fontWeight: 600, cursor: "pointer" }} href={"/forget-password"}>
                                        <Typography variant={"body1"} component={"strong"} sx={{ fontWeight: 600, cursor: "pointer" }}>
                                            Forgot Password ?
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ marginBottom: "36px", width: "100%" }}>
                                <Button fullWidth variant={"contained"} type="submit">
                                    Sign in to your account
                                </Button>
                            </Box>

                            <Box sx={{ width: "100%", textAlign: 'center' }}>
                                <Typography variant={"body1"}>
                                    Don’t have an account? {" "}
                                    <Link style={{ fontWeight: 600, cursor: "pointer" }} href={"/signup"}>
                                        <Typography variant={"body1"} component={"strong"} sx={{ fontWeight: 600, cursor: "pointer" }}> Sign up for free</Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </AuthLayout>
    )

}

export default Login;    