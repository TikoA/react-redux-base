import React from 'react'
import { Box, Text } from '@chakra-ui/core'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return (
            <Text mt={1} fontSize="3xl">Нет Постов</Text>
        )
    }
    else {
        return (
            <Box>
                {syncPosts.map(post => <Post post={post} key={post}/>)}
            </Box>
        )    
    }
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts,
        asyncPosts: state.posts.fetchedPosts
    }
}


export default connect(mapStateToProps, null)(Posts)