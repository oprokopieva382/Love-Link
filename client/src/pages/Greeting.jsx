import Box from "@mui/material/Box";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import background from "../assets/img/questionBackground.jpeg";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Greeting = () => {
  const navigate = useNavigate();
  
  const runNextPage = () => {
    navigate("/question1");
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
      <Typography sx={{ fontSize: "3rem", padding: "15px" }}>
        Hi Kurt, tell us about yourself.
      </Typography>
      <Typography sx={{ fontSize: "1.5rem", padding: "10px" }}>
        Let's break it down, step by step
      </Typography>
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </Box>
  );
};
