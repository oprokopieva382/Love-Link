import MatchCard from "../components/MatchCard";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
import { BoxContainer } from "../style/profile.style";
import { ProfileNavBar } from "../components/ProfileNavBar";
import Grid from "@mui/material/Grid"

export const Matches = () => {
  //   const {loading, data} = useQuery(GET_USERS)
  //   const users = data?.users || []

  const tempUsers = [
    {
      id: 1,
      userName: "Vlad",
      img: "",
    },
    {
      id: 2,
      userName: "Jorlyna",
      img: "",
    },
    {
      id: 3,
      userName: "Betty",
      img: "",
    },
  ];

  // console.log(data);
  return (
    <>
      <BoxContainer>
        <ProfileNavBar />
        <Grid container spacing={2}>
          {tempUsers.map((user, i) => (
            <Grid item xs={4}>
              <MatchCard user={user} key={i} />
            </Grid>
          ))}
        </Grid>
      </BoxContainer>
    </>
  );
};
