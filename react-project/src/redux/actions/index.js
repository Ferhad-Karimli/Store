import {
    ADDPOST,
    ADD_MESSAGE,
    CHANGE_MESSAGE,
    UPDATEPOST,
    GET_USERS,
    DELETEPOST,
    GET_MESSAGES,
    GET_MESSAGES_ID,
    REQUEST_START,
    DISABLE_INPUT
} from "./types"
import axios from 'axios';

export let addMessageAction = (value, id) => (dispatch) => {

    let data = {
        msg_content: value,
        sender: 11,
        reciever: id,
    };

    dispatch({
        type: DISABLE_INPUT,
        payload: true
    })
    axios
        .post(
            `https://tech-social-network.herokuapp.com/api/v1.0/messages/`,
            data)
        .then(response => dispatch({
            type: ADD_MESSAGE,
            payload: response.data
        }))
        .finally(() => dispatch({
            type: DISABLE_INPUT,
            payload: false
        }));


}

// User list

export let getMessages = (data) => (dispatch) => {

    axios
        .get("https://tech-social-network.herokuapp.com/api/v1.0/users/")
        .then((response) => {
            console.log(response);

            dispatch({
                type: GET_MESSAGES,
                payload: response.data
            })
            // .catch(err=>dispatch({type:"ERROR MESSAGE",payload:err.message}))
        });



}

export let getMessagesByUserIdAction = (id) => (dispatch) => {

    dispatch({
        type: REQUEST_START,
        payload: true
    })

    axios
        .get(
            `https://tech-social-network.herokuapp.com/api/v1.0/messages/11/${id}`
        )
        .then((resp) => {
            dispatch({
                type: GET_MESSAGES_ID,
                payload: resp.data
            })

        }).finally(() => dispatch({
            type: REQUEST_START,
            payload: false
        }))

}


export let updateMessageAction = (data) => ({
    type: CHANGE_MESSAGE,
    value: data
})


export const addPostAction = () => ({
    type: ADDPOST
})

export const updatePostAction = (value) => ({
    type: UPDATEPOST,
    value
})

export let getUsers = () => (dispatch) => {
    axios
        .get("https://tech-social-network.herokuapp.com/api/v1.0/users/11")
        .then((resp) => {
            dispatch({
                type: GET_USERS,
                payload: resp.data
            })
        })

}


export let deletePostAction = (data, id) => ({
    type: DELETEPOST,
    value: data,

})