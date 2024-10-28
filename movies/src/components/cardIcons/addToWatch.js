import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; 

const AddToWatchlistIcon = () => {
  return (
    <IconButton aria-label="add to watchlist">
      <PlaylistAddIcon color="primary" fontSize="large" /> 
    </IconButton>
  );
};

export default AddToWatchlistIcon;
