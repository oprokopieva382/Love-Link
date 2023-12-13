import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MatchCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={props.user.image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.user.userName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.user.about}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => props.setMatch(props.user._id)}
        >
          {props.me.matches.includes(props.user._id) ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};
