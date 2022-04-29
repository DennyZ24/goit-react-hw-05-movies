import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import MainWrapper from './MainWrapper/MainWrapper';
import Navigation from './Navigation/Navigation';
const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('../views/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));

const App = () => { 
  return (
    <>
      <Navigation />
      
      <Routes>
          <Route path='/' element={<MainWrapper/>}>
            <Route index element={<HomePage />}/>
            <Route path='movies' element={<MoviesPage />}/>
            <Route path='movies/:filmId' element={<MoviesDetailsPage />}>
              <Route path='cast' element={<Cast />} /> 
              <Route path='reviews' element={<Reviews/>}/>
            </Route>  
          </Route> 
      </Routes>
       
     </>
      
  );
};
export default App;

