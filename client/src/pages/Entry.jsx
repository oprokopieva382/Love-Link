import entryBackground from "../assets/img/entryBackground.jpeg"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export const Entry = () => {
  const containerStyle = {
    backgroundImage: `url(${entryBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  };

  return (
    <Box sx={containerStyle}>
      <Typography variant="h3">temp</Typography>
    </Box>
  );
};