import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Placeholder from "../assets/img/placeholder.jpg"
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';

export default function MatchCard(props) {
  console.log("test");
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        borderRadius: "20px" }}
      raised="true">
      <CardMedia
        component="img"
        height="194"
        image={props.user.image}

      />
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
          onClick={() => props.setMatch(props.user._id)}>
          {props.me.matches.includes(props.user._id) ?
            <FavoriteIcon style={{color: "red"}}/>
            :
            <FavoriteIcon/>}

        </IconButton>
      </CardActions>
    </Card>
  );
}

