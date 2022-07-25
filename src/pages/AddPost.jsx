import { Box, Grid, Paper, Stack, Typography, TextField } from "@mui/material";
import React from "react";

const AddPost = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      bgcolor="#abcdef"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Stack component={Paper} p={2} gap={2}>
          <Typography>Add Post</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
      </Grid>
    </Grid>
  );
  s;
};

export default AddPost;
