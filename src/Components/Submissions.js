import React, { useState } from "react";
import '../index.css';


import { TextField, Select, MenuItem, FormControl, Button, Box, Container } from "@mui/material";


function Submissions({ onAddItem }) {

    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("Item Type")

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
        <div style={{width: 500, margin: "auto", background: "white", alignItems: "center", marginTop: 20, paddingBottom: 10, borderRadius: 6}}>
            <Container>
                <Box >
                    <FormControl sx={{alignItems: "center"}}>
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
            </Container>
        </div>
    )
}

export default Submissions