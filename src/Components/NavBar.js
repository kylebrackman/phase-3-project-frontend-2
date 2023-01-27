import React from "react";

import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";




function NavBar() {

    return (
        <div>
            <p style={{
                color: "white",
                fontFamily: "monospace",
                fontSize: 50,
                textDecoration: "underline",
                textAlign: "center"
            }}> GEAR HEADS </p>
            <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
                <NavLink to="/reviews">
                    <Button variant="contained">Reviews!</Button>
                </NavLink>
                <NavLink to="/submissions">
                    <Button variant="contained">Submit an Item!</Button>
                </NavLink>
            </Stack>
        </div>
    )
}

export default NavBar