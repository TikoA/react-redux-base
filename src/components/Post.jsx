import React from 'react'
import {Box, Text} from '@chakra-ui/core'

const Post = ({post}) => {
    return (
        <Box overflowWrap="break-word" maxW="95%" border="2px solid rgb(220,220,220)"  borderRadius={5} marginY="10px" p={2} color="black">
            <Text fontWeight={600} fontSize="md">{post.title}</Text>
        </Box>
    )
}

export default Post
