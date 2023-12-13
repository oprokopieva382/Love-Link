import {MatchCard} from "../components/MatchCard";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_ME } from "../utils/queries";
import { BoxContainer } from "../style/profile.style";
import { ProfileNavBar } from "../components/ProfileNavBar";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { SAVE_MATCH } from "../utils/mutations";

export const Matches = () => {
  const { loading, data, error, refetch } = useQuery(GET_USERS);
  const {
    loading: myLoading,
    data: myData,
    error: myError,
    refetch: myRefetch,
  } = useQuery(GET_ME);
  const [yourMatches, setYourMatches] = useState();
  const [addMatch, { loading: matchLoading, error: matchError }] = useMutation(SAVE_MATCH);
  const [matchCount, setMatchCount] = useState(0);

  let users;
  // let me;

  useEffect(() => {
    (async () => {
      try {
        await refetch();
        await myRefetch();
      init();
      } catch (err) {
        console.log('Error occured when refetching');
      }
    })
  }, [matchCount]);

  function containsAny(arr, elements) {
    return arr.some(item => elements.includes(item));
  }

  const setMatch = async (userID) => {
    console.log(userID);
    try {
      const retData = await addMatch({
        variables: {
          matchId: userID,
        },
      });
      console.log(retData);
      alert('Match set!')
      setMatchCount(matchCount + 1);
    } catch (err) {
      console.error('Error!', err);
    }
  }

  const init = () => {
    // setYourMatches(users);
    // me = myData.me;
    if (data) {
      users = data.users.filter(
        // Matches where their gender matches what you're looking for
        (user) => user.gender.toLowerCase() === myData.me.lookingFor.toLowerCase()
      )
        .filter(
          // Matches where your gender matches what they're looking for
          (user) => user.lookingFor.toLowerCase() === myData.me.gender.toLowerCase()
        )
        .filter(
          // Gets users who share at least one hobbie
          (user) => containsAny(user.hobbies, myData.me.hobbies)
        )
        .filter(
          // Gets users who share at least one interest
          (user) => containsAny(user.interests, myData.me.interests)
        )
        .filter(
          // Filters yourself out =)
          // This isn't a platform for Narcissus
          (user) => user._id != myData.me._id
        );
      console.log(yourMatches);
    }

  };

  if (loading || myLoading) {
    return <h2>Loading...</h2>;
  } else {
    init();



    // console.log(yourMatches[0].gender.toLowerCase());

    // console.log(users);
    // console.log(myData.me);
    console.log(users);

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

    console.log(data.users);
    return (
      <>
        <BoxContainer>
          <ProfileNavBar />
          <Grid container spacing={2}>
            {users.map((user, i) => (
              <Grid item xs={4} key={i}>
                <MatchCard
                  user={user}
                  setMatch={setMatch}
                  me={myData.me} />
              </Grid>
            ))}
          </Grid>
        </BoxContainer>
      </>
    );
  }
};
