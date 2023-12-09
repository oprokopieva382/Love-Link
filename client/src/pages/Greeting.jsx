import { BiSolidSkipNextCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GreetingSubText, GreetingText } from "../style/greeting.style";
import { BoxContainer } from "../style/general.style";

export const Greeting = () => {
  const navigate = useNavigate();
  
  const runNextPage = () => {
    navigate("/question1");
  };

  return (
    <BoxContainer>
      <GreetingText variant="h3">
        Hi Kurt, tell us about yourself.
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
