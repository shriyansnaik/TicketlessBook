// import axios from 'axios';
// import {LOGIN_DATA_FROM_API,REGISTER_DATA_FROM_API,REGISTER_HANDLER} from './ActionTypes';
// import {LOGIN_SCREEN_DATA_API,REGISTER_SCREEN_DATA_API} from '../extras/APIS';
// import { CustomAlert } from '../components/common';

// import AsyncStore from '../extras/AsyncStore';
// import { getHomeScreenDataAPIThen } from '.';

// const loginDetailsSet = loginData => {
//   const asyncStore = new AsyncStore();
//   asyncStore.storeData('auth', JSON.stringify(loginData));
// };


// export const getRegisterScreenDataApi = (registerData) =>{
//   return dispatch=>{

//     axios({
//       method:'post',
//       url:REGISTER_SCREEN_DATA_API,
//       data:registerData
//     })
//     .then(response=>{
//       if(response.data.success){
//         const responseData = response.data
//         console.log('register successfull');
//         let authData = {
//           user_id: responseData.user_id,
//           user_token: responseData.user_token,
//           application_version: responseData.application_version,
//         };
//         loginDetailsSet(authData);
//         dispatch({
//           type:REGISTER_DATA_FROM_API,
//           payload:responseData
//         })
//       }else{

//       }
//     })
//     .catch(err=>{

//       CustomAlert.show(
//         err.response.data.message,
//         require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
//         'Ok',
//       )
//     })
//   }
// }


// export const getLoginScreenDataApi = (login_id, password,navigation) => {
//   return dispatch => {
//     var data = {
//       login_id: login_id,
//       password,
//     };
//     axios({
//       method: 'post',
//       url: LOGIN_SCREEN_DATA_API,
//       data,
//     })
//       .then(response => {
//         let responseData = response.data;
//         if (responseData.success) {
//           console.log('LOGGED IN:',responseData);
//           getHomeScreenDataAPIThen(dispatch,responseData);
//           getLoginDataApiThen(dispatch, responseData);
//           navigation.navigate('Welcome',{screen:"SignIn"})
//         } else {
//           console.log('wrong credentials',responseData);
//           CustomAlert.show(
//             response.data.message,
//             require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
//             'Ok',
//           )
//         }
//       })
//       .catch(err => {
//         console.log('login in catch');
//         CustomAlert.show(
//           err.response.data.message,
//           require('../assets/Icons/NewIcons/exclamation/exclamation.png'),
//           'Ok',
//         )
//       });
//   };
// };



// function getLoginDataApiThen(dispatch, responseData) {
//   var authData = {
//     user_id: responseData.result.user_details.user_id,
//     user_token: responseData.result.user_details.user_token,
//     user_name: responseData.result.user_details.user_name,
//     application_version: responseData.application_version,
//   };
//   // console.log('response data in login',responseData);
//   loginDetailsSet(authData);
//   // authData.user_name = responseData.result.user_details.user_name;
//   dispatch({
//     type: LOGIN_DATA_FROM_API,
//     payload: authData,
//   });
// }
