import Box from "@mui/material/Box";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import background from "../assets/img/questionBackground.jpeg";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuestionOne = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const runNextPage = () => {
    console.log(selectedDate);
    navigate("/question2");
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
      <Typography sx={{ fontSize: "1.5rem", padding: "10px" }}>
        What is your your date of birth?
      </Typography>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
      />

      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </Box>
  );
};
