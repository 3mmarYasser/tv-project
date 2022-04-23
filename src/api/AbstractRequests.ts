const API_KEY = "586fba5759dab044b8c9ff577d204557";
const AbstractRequests :object ={
    fetchTrending         : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated         : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies     : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies     : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies     : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries    : `/discover/movie?apikey=${API_KEY}&with_genres=99`,
}
export default AbstractRequests;

