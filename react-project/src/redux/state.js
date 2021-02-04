// import messagePageReducer from "./reducers/messagePageReducer";
// import profilePageReducer from "./reducers/profilePageReducer";

// export let store = {
//   _state: {
//     profilePage: {
//       userInfo: {
//         photo: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         name: "John Wick",
//         city: "Baku",
//         position: "Devoloper",
//         birthday: "04:04:1992",
//         education: "BSU",
//       },

//       posts: [{
//           id: 1,
//           post: ["Today is weather getting snow.",
//             "I am very excited to be in here.",
//             "If you also want visit this attractive please",
//             "If you also want visit this attractive please",
//             "Today is weather getting snow."
//           ]
//         },
//         {
//           id: 2,
//           post: ["Today is weather getting snow.",
//             "I am very excited to be in here.",
//           ]
//         },
//         {
//           id: 3,
//           post: ["If you also want visit this attractive please",
//             "Today is weather getting snow."
//           ]
//         },
//         {
//           id: 4,
//           post: [
//             "I am very excited to be in here.",
//             "If you also want visit this attractive please",
//           ]
//         },
//       ],
//       updatedTextMessage: "",

//     },


//     news: [{
//         id: 1,
//         comments: [
//           [" Today we want to go out , very good weahter for walking"],
//           ["Tomorrow we want to go out , very good weaht for walking"],
//           ["after tomorrow we want to go out , very good weaht for walking"],
//         ]
//       },

//     ],
//     messagePage: {
//       users: [{
//           id: 1,
//           name: "John Wick"
//         },
//         {
//           id: 2,
//           name: "Ivar Boneless"
//         },
//         {
//           id: 3,
//           name: "Burn Ironside"
//         },
//         {
//           id: 4,
//           name: "capitan America"
//         },
//       ],

//       messages: [{
//           id: 1,
//           userMessages: [{
//             msg: "hello how are you?"
//           }, {
//             msg: "can we meet today"
//           }]
//         },
//         {
//           id: 2,
//           userMessages: [{
//             msg: "Are yow working now?"
//           }, {
//             msg: "did you rememember what i mean"
//           }]
//         },
//         {
//           id: 3,
//           userMessages: [{
//             msg: "have you time for meeting?"
//           }]
//         },
//         {
//           id: 4,
//           userMessages: [{
//             msg: "ok, lets see what happended?"
//           }]
//         },
//       ],

//       changedMessages: "",

//     }
//   },
// _renderPage() {},
// getState() {
//   return this._state
// },
// subscriber: function (observer) {
//   this._renderPage = observer
// },

// dispatch(action) {
//   console.log(action)
//   this._state.messagePage = messagePageReducer(this._state.messagePage, action)
//   this._state.profilePage = profilePageReducer(this._state.profilePage, action)
//   this._renderPage();
// switch (action.type) {
//   case 'ADD_MESSAGE':
//     let data = {
//       msg: this._state.messagePage.changedMessages,
//     }
//     let arr = this._state.messagePage.messages.find(el => el.id === action.id).userMessages
//     arr.push(data)
//     this._state.messagePage.changedMessages = "";
//     this._renderPage();
//     return ;
//   case 'CHANGE_MESSAGE':
//     this._state.messagePage.changedMessages = action.value
//     // this._state.messagePage.changedMessages = "";
//     this._renderPage();
//     return ;
//   case 'ADDPOST':
//     let data_post = {
//       id: this._state.profilePage.posts.length + 1,
//       post: this._state.profilePage.updatedTextMessage
//     }

//     this._state.profilePage.posts.push(data_post)
//     this._state.profilePage.updatedTextMessage = "";
//     this._renderPage();
//     return ;
//   case 'UPDATEPOST':

//     this._state.profilePage.updatedTextMessage = action.value;
//     this._renderPage();


//   default:
//     return;
// }



}

}












///  store
//  export const subscriber = (observer) =>{
//   renderPage = observer
//   }

//state
// export const state = { 
//   users: [  
//     {id :1,name:"John Wick"},
//     {id :2,name:"Ivar Boneless"},
//     {id :3,name:"Burn Ironside"},
//     {id :4,name:"capitan America"},

//        ],
//   userInfo: {
//     photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_rfwu9Fv9_1fyPgR4EneyLYmJPAILMaXEg&usqp=CAU",
//     name:"John Wick",
//     city:"Baku",
//     position:"Devoloper",
//     birthday:"04:04:1992",
//     education:"BSU",    
//            },

//   messages : [
//     {id:1,userMessages:[{msg :"hello how are you?"}, {msg:"can we meet today"}]},
//     {id:2,userMessages:[{msg :"Are yow working now?"}, {msg:"did you rememember what i mean"}]},
//     {id:3,userMessages:[{msg :"have you time for meeting?"}]},
//     {id:4,userMessages:[{msg :"ok, lets see what happended?"}]},
//              ],

//   changedMessages: " " ,

//   posts:     [
//     {id:1,post:["Today is weather getting snow.",
//                 "I am very excited to be in here.",
//                 "If you also want visit this attractive please",
//                 "If you also want visit this attractive please",
//                 "Today is weather getting snow."]},
//     {id:2,post:["Today is weather getting snow.",
//                "I am very excited to be in here.",]},
//     {id:3,post:["If you also want visit this attractive please",
//                 "Today is weather getting snow."]},
//     {id:4,post:[
//               "I am very excited to be in here.",
//               "If you also want visit this attractive please",]},
//                ],
//   updatedTextMessage: " " ,


// }
// addPost:function(id,value ){

//   let data = {
//     id:this._state.profilePage.posts.length+1,
//     post :this._state.profilePage.updatedTextMessage
//   }

//  this._state.profilePage.posts.push(data)

//   this._renderPage();

//  },
// updatePost:function (value) {

//  this._state.profilePage.updatedTextMessage = value


// },

//  addMessage:function (id)  {

//   // let data = {
//   //   msg:this._state.messagePage.changedMessages,
//   // }

//   // let arr = this._state.messagePage.messages.find(el => el.id === id).userMessages


//   // arr.push(data)
//   // this._state.messagePage.changedMessages = " "
//   // this._renderPage();

//  },

//  changeMessage:function(value) {

// this._state.messagePage.changedMessages = value

// this._renderPage()
// },