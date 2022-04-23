export interface Requests {
    fetchTrending         : string
    fetchNetflixOriginals :string
    fetchTopRated         :string
    fetchActionMovies     :string
    fetchComedyMovies     :string
    fetchHorrorMovies     :string
    fetchRomanceMovies    :string
    fetchDocumentaries    : string

}
export interface TVShow {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date:string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export interface BannerResponse {
    loading:boolean
    data:TVShow[] |[]
    err:string
}