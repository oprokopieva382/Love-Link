import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import background from "../assets/img/questionBackground.jpeg";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuestionFour = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
 
  const runNextPage = () => {
    console.log(userInput);
    navigate("/profile");
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
        Do you have any of these hobbies?
      </Typography>
      <TextField
        multiline
        rows={4}
        label="Type your answer here"
        variant="outlined"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        sx={{ width: 300, margin: "15px" }}
      />
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </Box>
  );
};
