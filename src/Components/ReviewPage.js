import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


// import Stack from '@mui/material/Stack';

function ReviewPage({ items, handleDeleteItem }) {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    function onDeleteItem(id) {
        fetch(`http://localhost:9292/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
    }


    const itemList = items.map(item => {
        return (
            <Box key={item.id} sx={{ margin: 4, flexGrow: 1 }} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} >
                    <Grid item xs={4}>
                        <Item >
                            <DeleteIcon onClick={() => onDeleteItem(item.id)}></DeleteIcon>
                            <br />
                            Product Name: {item.item_name}
                            <br />
                            Product Type: {item.item_type}
                            <br />
                            Reviews!
                            <br />
                            {item.reviews.map(i => {
                                return i.review
                            })}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        )
    })

    return (
        <Grid sx={{ margin: 4, flexGrow: 1 }}>
            {itemList}
        </Grid>
    )
}

export default ReviewPage