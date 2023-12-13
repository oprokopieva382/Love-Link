import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MatchCard = ({ user, setMatch, me }) => {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={user.image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.userName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.about}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setMatch(user._id)}
        >
          {me.matches.includes(user._id) ? (
            <FavoriteIcon style={{ color: "#90D1FF", animation: "heartbeat 1.2s infinite" }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};
