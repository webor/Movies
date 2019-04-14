import Constants from './../utils/constants';
import Helper from '.././utils/helper';
import apiConfig from '../config/apiConfig';
import axios from 'axios';

export const fetchUserRequestToken = ( payload = {} ) => {
   
        return async ( dispatch, getState ) => {
            if( payload.requestToken ) {
                dispatch({
                    type: Constants.ACCOUNTS.SAVE_REQUEST_TOKEN,
                    payload: { request_token: payload.requestToken }
                });
            } else {
            const request = new Request( apiConfig.getRequestToken.url );
            var headers = new Headers( apiConfig.getRequestToken.header );
            fetch(request, headers ).then((response) => {
                return response.json();
              })
              .then((response ) => {
                  console.log( 'REQUESTED TOKEN IS', JSON.stringify( response ) );
                  dispatch({
                    type: Constants.ACCOUNTS.SAVE_REQUEST_TOKEN,
                    payload: response
                });
              });  
        }
    }
}

export const fetchUserSessionId = ( payload ) => {
    return async ( dispatch, getState ) => {
         const request = {
            url: apiConfig.getSessionId.url,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'crossDomain': true,
                'Access-Control-Allow-Origin': '*',
            }
         };
           axios(request).then((response) => {
            console.log( 'ALLOWED SESSION ID IS', JSON.stringify( response ) );
               dispatch({
                 type: Constants.ACCOUNTS.SAVE_SESSION_ID,
                 payload: response.data
             });
        }).catch((err) => {
            window.location.href =  'http://localhost:3000';
            Helper.showNotification( `Error: ${ err.message }`, 'error', 5000 );
        });
        } 
}

