import * as React from 'react';
import { Typography } from '@mui/material';
import { Formik, Form, } from 'formik';
import AuthLayout from '../../layout/AuthLayout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import FormikFastField from '../../src/core/Formik/FastField'
import Link from 'next/link'

interface LoginProps {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

const Signup: React.FC<{}> = () => {
    const initialValues: LoginProps = { firstname: '', lastname: '', email: '', password: '' };

    const _handleLogin = (values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    return (
        <AuthLayout>
            <Box sx={{ maxWidth: "428px", width: "100%", margin: "0 auto" }}>
                <Box sx={{ marginBottom: "48px", textAlign: "center" }}>
                    <Typography variant={"h1"} >
                        Create an account
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'space-between', marginBottom: "36px" }}>
                    <Button
                        startIcon={<Image alt={"google-logo"} src={"/assets/icons/ic-google-logo.svg"} height={"22px"} width={"22px"} />}
                        fullWidth
                        variant='outlined'
                        sx={{ marginRight: "18px" }}>
                        Google
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        startIcon={<Image alt={"apple-logo"} src={"/assets/icons/ic-apple-logo.svg"} height={"22px"} width={"22px"} />}
                    >
                        Apple ID
                    </Button>
                </Box>
                <Box sx={{ marginBottom: '18px', height: 26, width: "100%" }}>
                    <Box sx={{ position: "relative", borderBottom: "1px solid" }}>
                        <Box sx={{ textAlign: "center", position: "absolute", top: "-11px", left: 0, right: 0, margin: "0 auto", width: "54px", background: "#FFFFFF" }}>
                            <Typography variant={"body1"}>
                                Or
                            </Typography>
                        </Box>

                    </Box>

                </Box>

                <Box>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={_handleLogin}
                        noValidate
                        autoComplete="off"
                    >
                        <Form style={{ display: "flex", flexDirection: "column" }}>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ marginRight: "16px" }}>
                                    <FormikFastField
                                        id="firstname"
                                        name="firstname"
                                        label="firstname"
                                        variant="outlined"
                                        placeholder={"Firstname"}
                                        startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-user.svg"} height={"24px"} width={"24px"} />}
                                    />
                                </Box>
                                <FormikFastField
                                    id="lastname"
                                    name="lastname"
                                    label="lastname"
                                    variant="outlined"
                                    placeholder={"Lastname"}
                                    startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-user.svg"} height={"24px"} width={"24px"} />}
                                />
                            </Box>
                            <FormikFastField
                                id="email"
                                name="email"
                                label="email"
                                variant="outlined"
                                placeholder={"eg: johndoe@gmail.com"}
                                startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-mail.svg"} height={"24px"} width={"24px"} />}
                            />
                            <FormikFastField
                                id="password"
                                name="password"
                                label="password"
                                variant="outlined"
                                placeholder={"eg: johndoe@gmail.com"}
                                startIcon={<Image alt={"ic-mail"} src={"/assets/icons/ic-lock.svg"} height={"24px"} width={"24px"} />}
                                endIcon={
                                    <Button sx={{ padding: "10px", minWidth: "39px", width: "39px" }} variant={"outlined"}>
                                        <Image alt={"ic-mail"} src={"/assets/icons/ic-eye.svg"} height={"18px"} width={"18px"} />
                                    </Button>
                                }
                            />
                            <Box sx={{ display: 'flex', justifyContent: "space-between", marginBottom: "24px" }}>
                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                    <input type={"checkbox"} />
                                    <Typography variant={"body1"}>
                                        I agree to the {" "}
                                        <Typography variant={"body1"} component={"strong"} style={{ fontWeight: 600 }} >Terms and Conditions</Typography>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginBottom: "42px", width: "100%" }}>
                                <Button fullWidth variant={"contained"} type="submit">
                                    Sign in to your account
                                </Button>
                            </Box>
                            <Box sx={{ width: "100%", textAlign: 'center' }}>
                                <Typography variant={"body1"}>
                                    Don’t have an account? {" "}
                                    <Link style={{ fontWeight: 600, cursor: "pointer" }} href={"/login"}>
                                        <Typography variant={"body1"} component={"strong"} sx={{ fontWeight: 600 }}> Sign in</Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </AuthLayout >
    )

}

export default Signup;    