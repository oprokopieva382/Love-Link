import { BiSolidSkipNextCircle } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../style/general.style";
import { StyledTextField, StyledTypography } from "../style/question.style";

export const QuestionFour = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const runNextPage = () => {
    console.log(userInput);
    navigate("/profile");
  };

  return (
    <BoxContainer>
      <StyledTypography variant="h4">Tell us about yourself?</StyledTypography>
      <StyledTextField
        multiline
        rows={4}
        label="Be creative..."
        variant="outlined"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem", marginTop: 10 }}
      />
    </BoxContainer>
  );
};