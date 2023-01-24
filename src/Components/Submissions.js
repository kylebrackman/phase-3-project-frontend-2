import React, { useState } from "react";

import { TextField, Select, MenuItem, FormControl, Button, Stack, Paper, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { margin } from "@mui/system";


function Submissions({ onAddItem }) {

    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("Item Type")

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 750
    }));

    function handleType(e) {
        setItemType(e.target.value);
    };

    function handleAddItem(e) {
        e.preventDefault();

        fetch("http://localhost:9292/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemName: itemName,
                itemType: itemType
            })
        })
            .then((r) => r.json())
            .then((newItem) => {
                onAddItem(newItem)
                setItemName("")
                setItemType("Item Type")
            })
    }

    return (
        <Stack sx={{ alignItems: "center" }}>
            <Item sx={{ marginTop: 10 }}>
                <Box>
                    <FormControl>
                        <p style={{ fontSize: 20 }}>Submit a New Item!</p>
                        <p>Item Name</p>
                        <TextField onChange={(e) => setItemName(e.target.value)}></TextField>
                        <p>Item Type</p>
                        <Select value={itemType} onChange={handleType}>
                            <MenuItem value={"Item Type"}>Item Type</MenuItem>
                            <MenuItem value={"Outerwear"}>Outerwear</MenuItem>
                            <MenuItem value={"Hardware"}>Hardware</MenuItem>
                            <MenuItem value={"Shoes"}>Shoes</MenuItem>
                            <MenuItem value={"Clothing"}>Clothing</MenuItem>
                            <MenuItem value={"Training Gear"}>Training Gear</MenuItem>
                            <MenuItem value={"Misc."}>Misc.</MenuItem>
                        </Select>
                        <br />
                        <Button variant="outlined" onClick={handleAddItem}>Submit!</Button>
                    </FormControl>
                </Box>
            </Item>
        </Stack>
    )
}

export default Submissions