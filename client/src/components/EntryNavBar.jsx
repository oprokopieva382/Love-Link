import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StyledArrow, StyledFaHeart } from "../style/entryNavBar.style";
import { LogInModal } from "./LogInModal";
import { useState } from "react";

export const EntryNavBar = () => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

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
        Love<span style={{ color: "white", paddingRight: "10px" }}>Link </span>
      </Typography>
      <StyledFaHeart onClick={handleOpenModal} />
      <StyledArrow />
      <Typography sx={{ color: "white", marginTop: "4px" }}>Login</Typography>
      <LogInModal
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        modal={modal}
      />
    </Box>
  );
};
