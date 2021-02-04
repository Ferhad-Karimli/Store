import {
    ADD_MESSAGE,
    CHANGE_MESSAGE,
    DISABLE_INPUT,
    GET_MESSAGES,
    GET_MESSAGES_ID,
    REQUEST_START
} from "../actions/types"

let initialState = {

    users: [],

    messages: [],
    isLoadingMsg: null,

    changedMessages: "",
    disableInput: false





}

export let messagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                messages: [
                    ...state.messages, action.payload
                ]
            }

            case GET_MESSAGES:
                console.log(action.payload)
                return {
                    ...state,
                    users: action.payload
                }
                case GET_MESSAGES_ID:
                    console.log(action.payload)
                    return {
                        ...state,
                        messages: action.payload
                    }
                    case REQUEST_START:
                        console.log("actionpayload", action.payload)
                        return {
                            ...state,
                            isLoadingMsg: action.payload
                        }

                        case DISABLE_INPUT:
                            console.log("actionpayload", action.payload)
                            return {
                                ...state,
                                disableInput: action.payload
                            }



                            case CHANGE_MESSAGE:
                                console.log(state)

                                return {
                                    ...state, changedMessages: action.value
                                }

                                default:
                                    return state;

    }

}

// export default messagePageReducer;