import { BiSolidSkipNextCircle } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { BoxContainer } from "../style/general.style";
import { StyledTextField, StyledTypography } from "../style/question.style";

const options = [
  "🐕‍🦺 Animal Rescue",
  "💉 Vaccine Rights",
  "⛪ Faith",
  "👨‍👩‍👧‍👦 Family",
  "🧑‍💼 Politics",
  "🧘‍♀️ Mental health Awareness",
];

export const QuestionTwo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  
  const runNextPage = () => {
    console.log(selectedOptions);
    navigate("/question3")
  };

  return (
    <BoxContainer>
      <StyledTypography variant="h4">What is interest you?</StyledTypography>
      <Autocomplete
        multiple
        id="interests"
        options={options}
        onChange={(event, value) => setSelectedOptions(value)}
        value={selectedOptions}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label="Interests"
            variant="outlined"
            sx={{ width: 300, margin: "15px" }}
          />
        )}
      />
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </BoxContainer>
  );
};
