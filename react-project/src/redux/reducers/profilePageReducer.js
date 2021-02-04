import {
    ADDPOST,
    DELETEPOST,
    GET_USERS,
    UPDATEPOST
} from "../actions/types"

let initialState = {


    userInfo: {
        // photo: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

    },

    posts: [{
            id: 1,
            post: ["Today is weather getting snow.",
                "I am very excited to be in here.",
                "If you also want visit this attractive please",
                "If you also want visit this attractive please",
                "Today is weather getting snow."
            ]
        },
        {
            id: 2,
            post: ["Today is weather getting snow.",
                "I am very excited to be in here.",
            ]
        },
        {
            id: 3,
            post: ["If you also want visit this attractive please",
                "Today is weather getting snow."
            ]
        },
        {
            id: 4,
            post: [
                "I am very excited to be in here.",
                "If you also want visit this attractive please",
            ]
        },
    ],
    updatedTextMessage: "",



}


let profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDPOST:
            let newState = {
                ...state
            }
            let data_post = {
                id: newState.posts.length + 1,
                post: newState.updatedTextMessage
            }

            //   this._state.profilePage.posts.push(data_post)
            //   this._state.profilePage.updatedTextMessage = "";
            newState.posts.push(data_post)
            newState.updatedTextMessage = "";
            //   this._renderPage();
            return newState;

        case GET_USERS:
            console.log("Users", action.payload)
            return {
                ...state,
                userInfo: action.payload
            }
            case DELETEPOST:


                let newDeleteState = {
                    ...state
                }
                let delete_post = {
                    id: newDeleteState.posts.length - 1,
                    // post: newState.updatedTextMessage
                }
                newDeleteState.posts.pop(delete_post)

                // let arr = newDeleteState.profilePage.posts.filter(el => el.id !== action.value)

                // newDeleteState.profilePage.posts = arr
                // return newDeleteState
            case UPDATEPOST:

                return {
                    ...state, updatedTextMessage: action.value
                }

                default:
                    return state;


    }


}


export default profilePageReducer