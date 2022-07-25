import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Postcard = ({ posts, removePost }) => {
  return (
    <Box>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Stack
            key={post.id}
            gap={1}
            sx={{ boxShadow: 5, mx: 20, p: 2, borderRadius: 5 }}
          >
            <Typography textAlign="center">{post.title}</Typography>
            <Button variant="contained" onClick={() => removePost(post)}>
              ลบข้อมูล
            </Button>
          </Stack>
        ))
      ) : (
        <Stack gap={1} sx={{ boxShadow: 5, mx: 20, p: 2, borderRadius: 5 }}>
          <Typography textAlign="center">data not found</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default Postcard;
