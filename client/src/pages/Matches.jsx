import { MatchCard, ProfileNavBar, Spinner } from "../components";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, GET_ME } from "../utils/queries";
import { BoxContainer } from "../assets/style/profile.style";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { SAVE_MATCH } from "../utils/mutations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successMessage } from "../utils/helper/notifications";

export const Matches = () => {
  const { loading, data, error, refetch } = useQuery(GET_USERS);
  const {
    loading: myLoading,
    data: myData,
    error: myError,
    refetch: myRefetch,
  } = useQuery(GET_ME);

  const [addMatch, { loading: matchLoading, error: matchError }] =
    useMutation(SAVE_MATCH);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    async () => {
      try {
        await refetch();
        await myRefetch();
        init();
      } catch (err) {
        errorMessage("Sorry, something went wrong.");
        console.err(err);
      }
    };
  }, [matchCount]);

  const containsAny = (arr, elements) => {
    return arr.some((item) => elements.includes(item));
  };

  const setMatch = async (userID) => {
    try {
      await addMatch({
        variables: {
          matchId: userID,
        },
      });
      successMessage("Successfully added.");
      setMatchCount(matchCount + 1);
    } catch (err) {
      console.error("Error!", err);
    }
  };

  const loadMatches = () => {
    let mappedData = data.users.filter((user) =>
      myData.me.matches.includes(user._id)
    );
  };

  if (loading || myLoading) {
    return <Spinner />;
  } else {
    loadMatches();
  }

  let users = [];
  const init = () => {
    if (data) {
      users = data.users
        .filter(
          // Matches where their gender matches what you're looking for
          (user) =>
            user.gender.toLowerCase() === myData.me.lookingFor.toLowerCase()
        )
        .filter(
          // Matches where your gender matches what they're looking for
          (user) =>
            user.lookingFor.toLowerCase() === myData.me.gender.toLowerCase()
        )
        .filter(
          // Gets users who share at least one hobbie
          (user) => containsAny(user.hobbies, myData.me.hobbies)
        )
        .filter(
          // Gets users who share at least one interest
          (user) => containsAny(user.interests, myData.me.interests)
        )
        .filter((user) => user._id !== myData.me._id);
    }
  };
  init();

  return (
    <BoxContainer>
      <ProfileNavBar />
      <Grid container spacing={2}>
        {users.map((user, i) => (
          <Grid item xs={4} key={i}>
            <MatchCard user={user} setMatch={setMatch} me={myData.me} />
          </Grid>
        ))}
      </Grid>
      <ToastContainer />
    </BoxContainer>
  );
};
