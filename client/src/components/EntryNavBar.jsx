import Box from "@mui/material/Box";
import { FaHeart } from "react-icons/fa";
import Typography from "@mui/material/Typography";

export const EntryNavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 20px",
        background: "rgba(255, 255, 255, 0.1)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Typography variant="h5">
        Love<span style={{ color: "white" }}>Link </span>
      </Typography>
      <FaHeart
        style={{
          color: "#90D1FF",
          fontSize: 30,
          marginLeft: 10,
          animation: "heartbeat 1s infinite",
        }}
      />
    </Box>
  );
};
