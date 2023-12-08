import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import background from "../assets/img/questionBackground.jpeg";
import Typography from "@mui/material/Typography";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

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
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", padding: "15px" }}>
        What is interest you?
      </Typography>
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
    </Box>
  );
};
