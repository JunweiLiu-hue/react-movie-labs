import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination"; // 使用 MUI 的 Pagination 组件

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortOption, setSortOption] = useState("release_date");
  const [page, setPage] = useState(1);
  const moviesPerPage = 10; // 每页显示的电影数量
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true));

  displayedMovies = displayedMovies.sort((a, b) => {
    if (sortOption === "popularity") {
      return b.popularity - a.popularity;
    } else if (sortOption === "release_date") {
      return new Date(b.release_date) - new Date(a.release_date);
    } else if (sortOption === "rating") {
      return b.vote_average - a.vote_average;
    }
    return 0;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
    setPage(1); // 过滤条件改变时重置到第一页
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // 获取当前页的电影
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = displayedMovies.slice(startIndex, endIndex);

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
          <Select
            value={sortOption}
            onChange={handleSortChange}
            fullWidth
            sx={{ marginBottom: "20px" }}
          >
            <MenuItem value="popularity">Sort by Popularity</MenuItem>
            <MenuItem value="release_date">Sort by Release Date</MenuItem>
            <MenuItem value="rating">Sort by Rating</MenuItem>
          </Select>
        </Grid>
        <MovieList action={action} movies={currentMovies}></MovieList>
        <Grid size={12} sx={{ marginTop: "20px", textAlign: "center" }}>
          <Pagination
            count={Math.ceil(displayedMovies.length / moviesPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
