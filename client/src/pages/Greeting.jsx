import { BiSolidSkipNextCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GreetingSubText, GreetingText } from "../style/greeting.style";
import { BoxContainer } from "../style/general.style";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Spinner } from './../components/Spinner';

export const Greeting = () => {
   const { loading, error, data } = useQuery(GET_ME);
  const navigate = useNavigate();

   if (loading) return <Spinner/>
   if (error) return <p>Error: {error.message}</p>;

   const { firstName } = data.me;
  
  const runNextPage = () => {
    navigate("/question1");
  };

  return (
    <BoxContainer>
      <GreetingText variant="h3">
        Hi {firstName}, tell us about yourself.
      </GreetingText>
      <GreetingSubText variant="h5">
        Let's break it down, step by step
      </GreetingSubText>
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </BoxContainer>
  );
};
