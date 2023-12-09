import MatchCard from "../components/MatchCard";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";

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
      {tempUsers.map((user, i) => (
        <MatchCard user={user}  key={i}/>
      ))}
    </>
  );
};
