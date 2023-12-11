import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { StyledMediaCard } from "../style/profile.style";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

export const Gallery = () => {
  return (
    <Grid container padding="10px">
      {images.map((image, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3} padding={2}>
          <StyledMediaCard>
            <CardMedia component="img" height="140" image={image} />
          </StyledMediaCard>
        </Grid>
      ))}
    </Grid>
  );
};
