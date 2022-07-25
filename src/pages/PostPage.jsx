import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Postcard from "../component/Postcard";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const removePost = (data) => {
    setPosts(posts.filter((post) => post.id != data.id));
  };

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Stack direction="column" gap={5} mt={5}>
        <Typography textAlign="center">PostPage</Typography>
        <button onClick={() => getPosts()}>Get Post</button>
        <Divider />
        <Typography textAlign="center">All of posts</Typography>
        <Divider />
        <Postcard posts={posts} removePost={removePost}/>
      </Stack>
    </div>
  );
};

export default PostPage;
