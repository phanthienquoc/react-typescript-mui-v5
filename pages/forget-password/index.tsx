import * as React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form, } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormikFastField from '../../src/core/Formik/FastField'
import Image from 'next/image';
import Link from 'next/link';

interface LoginProps {
    email: string,
}

const Signup: React.FC<{}> = () => {
    const initialValues: LoginProps = { email: '', };

    const _handleLogin = (values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    return (
        <AuthLayout>
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", marginTop: "104px" }}>
                <Box sx={{ marginBottom: "184px", display: "flex", justifyContent: "space-between" }}>
                    <Button
                        variant='outlined'
                        startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-arrow-left.svg"} height={"24px"} width={"24px"} />}
                    >
                        Go Back
                    </Button>
                    <Link style={{ fontWeight: 600, cursor: "pointer" }} href={"/reset-password"}>
                        <Typography variant={"body1"} component={"strong"} sx={{ fontWeight: 600, cursor: "pointer" }}>
                            Reset password page
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ maxWidth: "526px", width: "100%", margin: "0 auto" }}>
                        <Box sx={{ marginBottom: "48px" }}>
                            <Box sx={{ marginBottom: "32px" }}>
                                <Typography variant={"h1"} >
                                    Forgot Password ?
                                </Typography>
                            </Box>
                            <Typography variant={"body1"}>
                                Enter the email that you used when you joined & we’ll send you a verification code to your email
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
                                    <FormikFastField
                                        id="email"
                                        name="email"
                                        label="email"
                                        variant="outlined"
                                        placeholder={"eg: johndoe@gmail.com"}
                                        startIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-lock.svg"} height={"24px"} width={"24px"} />}
                                        endIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-check-circle.svg"} height={"24px"} width={"24px"} />}
                                    />
                                    <Box sx={{ marginBottom: "32px", width: "100%" }}>
                                        <Button fullWidth variant={"contained"} type="submit">
                                            Send Verification Code
                                        </Button>
                                    </Box>
                                    <Box sx={{ width: "100%", textAlign: 'center' }}>
                                        <Typography variant={"body1"}>
                                            Don’t have an account yet? {" "}
                                            <Link style={{ fontWeight: 600, cursor: "pointer" }} href={"/signup"}>
                                                <Typography variant={"body1"} component={"strong"} sx={{ fontWeight: 600, cursor: "pointer" }}>
                                                    Sign up now
                                                </Typography>
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Form>
                            </Formik>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AuthLayout >
    )
}

export default Signup;    