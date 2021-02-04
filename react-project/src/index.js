import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store'
import { Provider } from "react-redux" ;
// import reportWebVitals from './reportWebVitals';

// subscriber

let state = store.getState();
window.state=store.getState()
// export const renderPage = () => (
ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
    <App state={state}/>
    {/* // state={state}   
    // dispatch = {store.dispatch.bind(store)} 
    // changeMessage = {store.changeMessage.bind(store)}   
    // addPost = {store.addPost.bind(store)} 
    // updatePost = {store.updatePost.bind(store)} */}
   
    </BrowserRouter> 
    </Provider>  ,
  document.getElementById('root')
)
// )



// reportWebVitals();

// renderPage()


// store.subscribe(renderPage)
