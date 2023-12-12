import MatchCard from "../components/MatchCard";
import { useQuery } from "@apollo/client";
import { GET_USERS, GET_ME } from "../utils/queries";
import { BoxContainer } from "../style/profile.style";
import { ProfileNavBar } from "../components/ProfileNavBar";
import Grid from "@mui/material/Grid"
import { useState, useEffect } from 'react';
import { Button } from "@mui/material";

export const Matches = () => {
  const { loading, data } = useQuery(GET_USERS)
  const { loading: myLoading, data: myData, error: myError, refetch: myRefetch } = useQuery(GET_ME);
  const [yourMatches, setYourMatches] = useState();
  let users;
  // let me;

  useEffect(() => {
    init();
  }, []);

  function containsAny(arr, elements) {
    return arr.some(item => elements.includes(item));
  }

  const init = () => {
    // setYourMatches(users);
    setYourMatches(data && data.users.filter(
      // Matches where their gender matches what you're looking for
      (user) => user.gender.toLowerCase() === myData.me.lookingFor.toLowerCase()
    )
    .filter(
      // Matches where your gender matches what they're looking for
      (user) => user.lookingFor.toLowerCase() === myData.me.gender.toLowerCase()
    )
    .filter(
      (user) => containsAny(user.hobbies, myData.me.hobbies)
    )
    .filter(
      (user) => containsAny(user.interests, myData.me.interests)
    ));
    console.log(yourMatches);
  }

  if (loading || myLoading) {
    return <h2>Loading...</h2>;
  } else {
    // init();
  }


  // console.log(yourMatches[0].gender.toLowerCase());


  // console.log(users);
  // console.log(myData.me);
  console.log(yourMatches);

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
