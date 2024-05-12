import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import HeroContainer from './HeroContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <div className='flex justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden'>
        <div className='w-full'>
          <Header/>
          <HeroContainer/>
          <SecondaryContainer/>
        </div>
      </div>
    </div>
  )
}

export default Browse
