import TextField from "@mui/material/TextField";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { BoxContainer } from "../style/general.style";
import { StyledTypography } from "../style/question.style";

const options = [
  "📽️ Movie Buffs",
  "🗺️ History",
  "👒 Fashion and Style",
  "🐈‍⬛ Pet Lover",
  "🎭 Comedy/ Humor",
  "✂️ Crafting",
  "🎮 Gamer",
  "🏕️ Outdoor Adventures",
  "🎻 Music Lover",
  "🏋️‍♂️ Fitness/Wellness",
  "✈️ Traveling",
  "🥞 Foodies",
  "📖 Bookworms",
  "🫂 Volunteering",
  "💻 Tech/Innovation",
  "🏎️ Motorcycle or Car Enthusiasts",
  "📸 Photography",
  "💃 Dance/Performing Arts",
];

export const QuestionThree = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  
  const runNextPage = () => {
    console.log(selectedOptions);
    navigate("/question4");
  };

  return (
    <BoxContainer>
      <StyledTypography variant="h4">
        Do you have any of this hobbies?
      </StyledTypography>
      <Autocomplete
        multiple
        id="interests"
        options={options}
        onChange={(event, value) => setSelectedOptions(value)}
        value={selectedOptions}
        renderInput={(params) => (
          <TextField
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
