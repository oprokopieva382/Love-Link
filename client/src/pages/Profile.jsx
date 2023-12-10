import { AboutMe } from "../components/AboutMe";
import { AboutMeInterestBlock } from "../components/AboutMeInterestBlock";
import { Avatar } from "../components/Avatar";
import { ProfileNavBar } from "../components/ProfileNavBar";
import { BoxContainer } from "../style/profile.style";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const Profile = () => {
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
          <AboutMeInterestBlock/></Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
};
