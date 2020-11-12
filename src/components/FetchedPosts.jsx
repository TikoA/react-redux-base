import React from 'react'
import {Box, Button, Spinner} from '@chakra-ui/core'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'



export default () => {

    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.fetchedPosts)

    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        )
    }

    if (!posts.length) {
        return (
                <Button size="md" onClick={() => dispatch(fetchPosts())} variantColor="blue" mt={4}>Загрузить</Button>
        )
    }
    else {
        return (
            <Box>
                {posts.map(post => <Post post={post} key={post.id}/>)}
            </Box>
        )    
    }
}
