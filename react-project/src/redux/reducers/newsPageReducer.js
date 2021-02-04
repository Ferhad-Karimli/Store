let initialState = {


    news: [{
            id: 1,
            comments: [
                [" Today we want to go out , very good weahter for walking"],
                ["Tomorrow we want to go out , very good weaht for walking"],
                ["after tomorrow we want to go out , very good weaht for walking"],
            ]
        },

    ],



}


let newsPageReducer = (state = initialState, action) => {



    switch (action.type) {
        case "increment":
            return state + 1;
        case "incremen":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state


    }


}


export default newsPageReducer