import { useQuery } from "react-query";
import Spinner from "../spinner";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";

const TemplateActorPage = ({ actor, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: actor.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data.profiles || []; 

  return (
    <>

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <ImageList
              sx={{
                height: "100vh",
              }}
              cols={1}
            >
              {images.map((image) => (
                <ImageListItem key={image.file_path}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt="Actor"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;
