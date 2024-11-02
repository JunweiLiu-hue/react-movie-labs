import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom"; 
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  
    const [drawerOpen, setDrawerOpen] = useState(false);

    if (!actor) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <Typography variant="h4" component="h3">
                Individual Resume
            </Typography>
            <br></br>
            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>
            <br></br>
            <Typography variant="h4" component="h3">
                Magnum Opus
            </Typography>
            
            
        </>

            
    );
};

export default ActorDetails;
