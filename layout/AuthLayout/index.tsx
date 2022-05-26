import * as React from 'react';

import Image from 'next/image'
import { useTheme } from '@mui/material/styles';

import { Box, Typography } from '@mui/material';

interface AuthProps {
    children: any
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
            <Box sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down('md')]: {
                    padding: "16px"
                },
            }}>
                {children}
            </Box>
            <Box sx={{
                flex: 1,
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: "0px 0px 0px 150px",
                background: "url(/assets/images/background-gradienta.png) no-repeat",
                [theme.breakpoints.down('md')]: {
                    display: "none"
                },
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <Image src={"/assets/icons/ic-logo.svg"} alt={"ic-logo"} height={"120px"} width={"120px"} />
                    <Typography variant={"h3"} sx={{ color: "white" }}>
                        Client Eye
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthLayout;