import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import HeroContainer from './HeroContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div className='flex justify-between'>
        <div className='w-full'>
          <Header/>
          <HeroContainer/>
        </div>
      </div>
    </div>
  )
}

export default Browse
