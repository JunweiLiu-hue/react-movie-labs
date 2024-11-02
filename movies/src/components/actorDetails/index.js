import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../spinner";

const ActorDetails = ({ actor, credits }) => {  
    const [drawerOpen, setDrawerOpen] = useState(false);

    if (!actor) {
        return <Spinner />; 
    }

    return (
        <>
            <Typography variant="h4" component="h3">
                Individual Resume
            </Typography>
            <br />
            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>
            <br />
            <Typography variant="h4" component="h3">
                Magnum Opus
            </Typography>

            <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                overflowY: 'hidden',
                padding: '10px', 
                whiteSpace: 'nowrap',
                maxWidth: '80%', 
                boxSizing: 'border-box', 
                height: '400px', 
            }}>
                {credits && credits.cast && credits.cast.map((movie) => (
                    <ImageListItem key={movie.id} style={{ 
                        minWidth: '150px',
                        marginRight: '10px', 
                    }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                            style={{ 
                                borderRadius: '0px', 
                                width: '150px',
                                height: '300px', 
                                objectFit: 'cover', 
                            }} 
                        />
                        <Typography variant="subtitle1" component="h4">
                            {movie.title}
                        </Typography>
                        <Chip label={`Role: ${movie.character}`} style={{ margin: '4px 0' }} />
                    </ImageListItem>
                ))}
            </div>
        </>
    );
};

export default ActorDetails;
