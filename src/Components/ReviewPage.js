import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';


function ReviewPage({ items }) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const itemList = items.map(item => {
        return (
            <Box key={item.item_id} sx={{ margin: 4, flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Item>
                            {item.item_name}
                            {item.item_type}
                            <DeleteIcon></DeleteIcon>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        )
    })

    return (
        <Grid >
            {itemList}
        </Grid>
    )
}

export default ReviewPage