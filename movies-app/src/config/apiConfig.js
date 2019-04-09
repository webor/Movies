const apiConfig = {
    movieList: {
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=b6b7ec9edfb1ca7bcc122c0c090bf3ef&language=en-US&page=1',
        protocol: 'https',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    }
};

export default apiConfig;