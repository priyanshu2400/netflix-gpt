export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_LOGO = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const MOVIE_URL = 'https://api.themoviedb.org/3/movie/now_playing';

export const POPULAR_MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular';

export const TRENDING_MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIE_URL = "https://api.themoviedb.org/3/movie/upcoming";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;