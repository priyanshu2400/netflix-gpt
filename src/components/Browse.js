import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import HeroContainer from './HeroContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  const viewGptSearch = useSelector((store) => store.gpt.viewSearch);
  return (
    <div>
      <div className='flex justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden'>
        <div className='w-full'>
          <Header/>
          {
            viewGptSearch ? <GptSearch/>
            :
            <>
              <HeroContainer/>
              <SecondaryContainer/>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Browse
