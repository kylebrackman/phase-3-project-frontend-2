import React from "react";

import { TextField, Select, MenuItem, FormControl, Button, Box, Stack, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';


function Submissions() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 1000
    }));

    return (
        <Stack sx={{ alignItems: "center" }}>
            <FormControl>
                <Box>
                    <Item sx={{ marginTop: 10 }}>
                        <p style={{ fontSize: 20 }}>Submit a New Item!</p>
                        <TextField />
                    </Item>
                </Box>
            </FormControl>
        </Stack>
    )
}

export default Submissions