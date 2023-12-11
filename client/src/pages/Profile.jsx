import { useState } from "react";
import { AboutMe } from "../components/AboutMe";
import { AboutMeInterestHobbyBlock } from "../components/AboutMeInterestHobbyBlock";
import { Avatar } from "../components/Avatar";
import { ProfileNavBar } from "../components/ProfileNavBar";
import { BoxContainer, StyledUploadButton } from "../style/profile.style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Gallery } from "../components/Gallery";
import { TbPhotoPlus } from "react-icons/tb";
import { UploadModal } from "../components/UploadModal";

export const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BoxContainer>
      <ProfileNavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar />
            <AboutMe />
          </Grid>
          <Grid item xs={8}>
            <AboutMeInterestHobbyBlock />
            <Typography variant="h5">
              Gallery{" "}
              <StyledUploadButton onClick={() => setOpen(true)}>
                <TbPhotoPlus />
              </StyledUploadButton>
            </Typography>
            <Gallery />
          </Grid>
        </Grid>
      </Box>
      <UploadModal open={open} handleClose={handleClose} />
    </BoxContainer>
  );
};
