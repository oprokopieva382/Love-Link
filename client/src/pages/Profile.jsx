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
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const uploadProfilePicture = () => {
    setOpen(true);
    setTitle("Upload your profile picture");
  };

   const uploadPGalleryPictures = () => {
     setOpen(true);
     setTitle("Show us your best pictures");
   };

  return (
    <BoxContainer>
      <ProfileNavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center"}}>
              <StyledUploadButton onClick={uploadProfilePicture}>
                <TbPhotoPlus />
              </StyledUploadButton>
            </Box>
            <Avatar setOpen={setOpen} />
            <AboutMe />
          </Grid>
          <Grid item xs={8}>
            <AboutMeInterestHobbyBlock />
            <Typography variant="h5">
              Gallery{" "}
              <StyledUploadButton onClick={uploadPGalleryPictures}>
                <TbPhotoPlus />
              </StyledUploadButton>
            </Typography>
            <Gallery />
          </Grid>
        </Grid>
      </Box>
      <UploadModal open={open} handleClose={handleClose} title={title} />
    </BoxContainer>
  );
};
