import Typography from "@mui/material/Typography";
import {
  StyledArrow,
  StyledContainer,
  StyledFaHeart,
  StyledTypography,
} from "../assets/style/entryNavBar.style";
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
    <StyledContainer>
      <Typography variant="h5">
        <span style={{ color: "#90D1FF" }}>Love</span>
        <span style={{ color: "#EFBB96", paddingRight: "10px" }}>Link </span>
      </Typography>
      <StyledFaHeart onClick={handleOpenModal} />
      <StyledArrow />
      <StyledTypography>Login</StyledTypography>
      <LogInModal
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        modal={modal}
      />
    </StyledContainer>
  );
};
