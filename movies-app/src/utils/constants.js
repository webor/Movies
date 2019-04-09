const konstants = (() => {
    return {
        ROUTER: {
            CHANGE_ROUTE: 'ROUTER:CHANGE_ROUTE',
            RESET_STATE_DATA: 'ROUTER:RESET_STATE_DATA',
        },
        ERROR_HANDLER: {
            DISPLAY_ERROR_MESSAGE: 'ERROR_HANDLER:DISPLAY_ERROR_MESSAGE',
            HIDE_ERROR_MESSAGE: 'ERROR_HANDLER:HIDE_ERROR_MESSAGE'
        },
        GLOBAL_ERROR_EVENT: 'GLOBAL_ERROR_EVENT',
        REMOVE_GLOBAL_ERROR_EVENT: 'REMOVE_GLOBAL_ERROR_EVENT',
        MOVIE_LIST: {
            FETCHING_LIST: 'MOVIE_LIST:FETCHING_LIST',
            GET_DATA: 'MOVIE_LIST:GET_DATA'
        }
    };
})();

export default konstants;
