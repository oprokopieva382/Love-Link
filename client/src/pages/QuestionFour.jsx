import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import background from "../assets/img/questionBackground.jpeg";
import Typography from "@mui/material/Typography";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

export const QuestionFour = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const navigate = useNavigate();
  
  const runNextPage = () => {
    console.log(selectedOptions);
    // navigate("/question4");
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
        Do you have any of this hobbies?
      </Typography>
      <Autocomplete
        multiple
        id="interests"
        onChange={(event, value) => setSelectedSection(value)}
        value={selectedSection}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Interests"
            variant="outlined"
            multiline 
            rows={4}
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
