import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function NavBar() {

    return (
        <Stack direction="row" spacing={2} style={{ justifyContent: "center", paddingTop: 20 }}>
            <NavLink to="/reviews">
                <Button variant="contained">Reviews!</Button>
            </NavLink>
            <NavLink to="/submissions">
                <Button variant="contained">Submit an Item!</Button>
            </NavLink>
        </Stack>
    )
}

export default NavBar