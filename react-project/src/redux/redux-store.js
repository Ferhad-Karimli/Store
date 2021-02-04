import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import {
    messagePageReducer
} from './reducers/messagePageReducer';
import profilePageReducer from './reducers/profilePageReducer';
import newsPageReducer from "./reducers/newsPageReducer"
import thunk from 'redux-thunk'

let reducers = combineReducers({
    messagesPage: messagePageReducer,
    profilePage: profilePageReducer,
    newsPage: newsPageReducer

})

let store = createStore(reducers, [], applyMiddleware(thunk));


export default store