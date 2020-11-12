import React from 'react'
import { connect } from 'react-redux'
import {Button, CloseButton, Input, Text} from '@chakra-ui/core'
import { createPost } from '../redux/actions'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/core";

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            visibility: false
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeVisibility = () => {
        const {visibility} = this.state
        this.setState({
            visibility: !visibility
        })
    }

    submitHandler = () => {
        const {title} = this.state

        if (title.length) {

            const newPost = {
                title, id: Date.now().toString()
            }

            this.props.createPost(newPost)

            this.setState({
                title: ''
            })        
        }
        else {
            this.setState({
                visibility: true
            })
        }
    }

    inputHandler = (event) => {
        this.setState(prev => ({
            title: event.target.value
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Text fontSize='xl'>
                    Загаловок Поста
                </Text>
                <Input value={this.state.title} onChange={this.inputHandler = this.inputHandler.bind(this)} placeholder='Basic usage' />
                <Button onClick={this.submitHandler} size='sm' variantColor='green' margin='2rem 0'>
                    Submit
                </Button>
                <Alert display={this.state.visibility ? 'flex' : 'none'} marginBottom={4} status="warning">
                    <AlertIcon />
                    <AlertTitle mr={2}>Title is empty!</AlertTitle>
                    <AlertDescription>Fill Your Title to proceed</AlertDescription>
                    <CloseButton onClick={this.changeVisibility} position="absolute" right="8px" top="8px" />
                </Alert>
            </React.Fragment>
        ) 
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)