import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingPage from "./pages/UpcomingPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import WatchListPage from "./pages/watchListPage";
import Login from './pages/login.js'; 
import Register from './pages/register.js'; 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/homepage" element={<HomePage />} />
            <Route path="/movies/upcoming" element={<UpcomingPage />} />
            <Route path="/movies/nowplaying" element={<NowPlayingPage />} />
            <Route path="/movies/watchlist" element={<WatchListPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<Login />} />  {/* 设置默认路由为登录页面 */}
            <Route path="/register" element={<Register />} /> {/* 注册页面 */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
