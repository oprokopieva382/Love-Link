import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Tooltip from '@mui/material/Tooltip';

export const MatchCard = ({ user, setMatch, me }) => {

  console.log(user);
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px" }} raised="true">
      <CardMedia
        component="img"
        height="194"
        image={user.image}
        sx={{ borderRadius: "20px" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "5px" }}
        >
          {`${user.firstName} ${user.lastName} `}
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
            <FavoriteIcon
              style={{ color: "#90D1FF", animation: "heartbeat 1.2s infinite" }}
            />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        {user.isToxic === "false" ?
          <Tooltip title="WARNING: this user is potentially toxic">
            <CoronavirusIcon
              sx={{ color: "green" }}></CoronavirusIcon>
          </Tooltip>

          :
          ""}
      </CardActions>
    </Card>
  );
};
