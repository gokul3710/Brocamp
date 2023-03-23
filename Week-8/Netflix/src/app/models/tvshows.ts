import { Genre, ProductionCompany, ProductionCountry, SpokenLanguage } from './movies';

export interface TVShowModel {
    backdrop_path: string ;
    created_by: TVShowCreator[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: TVShowEpisode;
    name: string;
    networks: TVShowNetwork[];
    next_episode_to_air: null;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: TVShowSeason[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface TVShowCreator {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
}

export interface TVShowEpisode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
}

export interface TVShowNetwork {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

export interface TVShowSeason {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

