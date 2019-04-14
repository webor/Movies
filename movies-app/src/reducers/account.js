import Constants from './../utils/constants';

const _defaultState = {
    success: null,
    fetching: false,
    expiresAt: '',
    requestToken: '',
    sessionId: '',
    isAuthorized: false
};

const account = (state = _defaultState, action) => {
    const { type = '', payload = {} } = action;
    try {
        switch (type) {
            case Constants.ACCOUNTS.SAVE_REQUEST_TOKEN: {
               return {
                   ...state,
                   expiresAt: payload.expires_at,
                   requestToken: payload.request_token
                 }   
            }
            case Constants.ACCOUNTS.SAVE_SESSION_ID: {
                return {
                    ...state,
                    sessionId: payload.session_id
                  }   
            }
            default:
             return state
           }   
    } catch( err ) {
        console.log( err );
        return _defaultState;       
    }
};

export default account;