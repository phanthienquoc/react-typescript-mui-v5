import * as React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form, } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormikFastField from '../../src/core/Formik/FastField'
import Link from 'next/link'
import Image from 'next/image'
interface LoginProps {
    email: string,
}

const ResetPassword: React.FC<{}> = () => {
    const initialValues: LoginProps = { email: '', };

    const _handleLogin = (values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    return (
        <AuthLayout>
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", marginTop: "104px" }}>
                <Box sx={{ marginBottom: "184px" }}>
                    <Button
                        variant='outlined'
                        startIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-arrow-left.svg"} height={"24px"} width={"24px"} />}
                    >
                        Go Back
                    </Button>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ maxWidth: "526px", width: "100%", margin: "0 auto" }}>
                        <Box sx={{ marginBottom: "48px" }}>
                            <Box sx={{ marginBottom: "32px" }}>
                                <Typography variant={"h1"} >
                                    Reset Password
                                </Typography>
                            </Box>
                            <Typography variant={"body1"}>
                                Please enter the verification code that you have recieved to your registered email address
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
                                        id="verificationCode"
                                        name="verificationCode"
                                        label="verificationCode"
                                        variant="outlined"
                                        placeholder={"Enter your verification code"}
                                        startIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-shield.svg"} height={"24px"} width={"24px"} />}
                                        endIcon={
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "28px",
                                                width: "62px",
                                                background: "#00B976",
                                                borderRadius: "50px"
                                            }}>
                                                <Typography variant={"body1"} sx={{ color: "white" }}>02:54</Typography>
                                            </Box>
                                        }
                                    />
                                    <Box>
                                        <Typography
                                            sx={{ textAlign: "right" }}
                                            variant={'body1'}
                                        >
                                            Resend Code
                                        </Typography>
                                    </Box>
                                    <FormikFastField
                                        id="password"
                                        name="password"
                                        label="New Password"
                                        variant="outlined"
                                        placeholder={"Enter your new password"}
                                        startIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-lock.svg"} height={"24px"} width={"24px"} />}
                                        endIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-check-circle.svg"} height={"24px"} width={"24px"} />}
                                    />
                                    <FormikFastField
                                        id="confirm"
                                        name="confirm"
                                        label="confirm"
                                        variant="outlined"
                                        placeholder={"Confirm Password"}
                                        startIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-lock.svg"} height={"24px"} width={"24px"} />}
                                        endIcon={<Image alt={"ic-shield"} src={"/assets/icons/ic-check-circle.svg"} height={"24px"} width={"24px"} />}
                                    />
                                    <Box sx={{ marginBottom: "32px", width: "100%" }}>
                                        <Button fullWidth variant={"contained"} type="submit">
                                            Reset your password
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

export default ResetPassword;    