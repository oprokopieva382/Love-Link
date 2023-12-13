import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { StyledMediaCard } from "../assets/style/profile.style";

export const Gallery = ({ gallery }) => {
  return (
    <Grid container padding="10px">
      {gallery &&
        gallery.map((image, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} padding={2}>
            <StyledMediaCard>
              <CardMedia component="img" height="140" image={image.imageUrl} />
            </StyledMediaCard>
          </Grid>
        ))}
    </Grid>
  );
};
