import React from 'react';
import {Box, Grid, Text} from '@chakra-ui/core'
import PostForm from './components/PostForm'
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';


function App() {

  return (
    <div className="App">
      <Box width={['60%', '75%', '100%'].reverse()} margin="2rem auto">
        <PostForm />
        <Grid templateColumns="50% 50%" gap={6}>
          <Box>
            <Text fontSize="xl">Sync Posts</Text>
            <Posts />
          </Box>
          <Box>
            <Text fontSize="xl">Async Посты</Text>
            <FetchedPosts />
          </Box>
          
          
        </Grid>
      </Box>
    </div>
  );
}

export default App;
