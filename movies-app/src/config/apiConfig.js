const apiConfig = {
    movieList: {
        url: 'https://api.themoviedb.org/3/list/109582?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef&language=en-US&page=1',
        method: 'GET',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    },
    getRequestToken: {
        url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef',
        method: 'GET',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    },
    getSessionId: {
        url: 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/authentication/session/new?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef',
        method: 'POST',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    },
    getRatings: {
        url: 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/',
        method: 'POST',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    },
    removeMovie: {
        url: 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/list/109582/remove_item?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef&session_id=',
        method: 'POST',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }
};

export default apiConfig;