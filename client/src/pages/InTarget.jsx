import { BoxContainer } from "../style/profile.style";
import { ProfileNavBar } from "../components/ProfileNavBar";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import avatar from "../assets/img/placeholder.jpg";
import {
  AvatarBox,
  StyledAvatar,
  StyledCard,
  StyledCardContent,
  StyledTypography,
  TalkIcon,
  UnlikeIcon,
} from "../style/inTarget.style";
import { PiEyeClosed } from "react-icons/pi";
import { StartChatInTarget } from "../components/StartChatInTarget";
import { useState } from "react";

export const InTarget = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onUnlikeUser = (userId) => {
    console.log(`Removing user with ID: ${userId}`);
  };

  const onStartTalk = (userId) => {
    setOpen(true);
    console.log(`Messaging user with ID: ${userId}`);
  };

  const favorites = [
    "Bob Marley",
    "Lil Wayne",
    "Ólafur Arnalds",
    "Jan Blomqvist",
    "Ry Cuming",
    "Estas Tonne",
    "Wlad Roerich",
  ];

  return (
    <BoxContainer>
      <ProfileNavBar />
      <StyledTypography variant="h5">
        <PiEyeClosed style={{ paddingRight: "5px" }} />
        Catch my eye
      </StyledTypography>
      {favorites.map((favorite, i) => (
        <StyledCard key={i}>
          <StyledCardContent>
            <AvatarBox>
              <StyledAvatar alt="avatar" src={avatar} />
              <div>
                <Typography variant="h6">{favorite}</Typography>
                <Typography>I am exactly who you're looking for</Typography>
              </div>
            </AvatarBox>
            <CardActions>
              <IconButton onClick={() => onUnlikeUser("userId")}>
                <UnlikeIcon />
              </IconButton>
              <IconButton onClick={() => onStartTalk("userId")}>
                <TalkIcon />
              </IconButton>
            </CardActions>
          </StyledCardContent>
        </StyledCard>
      ))}
      <StartChatInTarget open={open} handleClose={handleClose} />
    </BoxContainer>
  );
};
