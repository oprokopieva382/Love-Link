import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import entryBackground from "../assets/img/entryBackground.jpeg";

import styled from "styled-components";

export const BoxContainer = styled(Box)`
  background-image: url(${entryBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const StyledTypography = styled(Typography)`
  padding-right: 4.5%;
  padding-bottom: 1%;
`;

export const StyledFormContainer = styled(Box)`
  color: white;
  margin-right: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 8px;
`;

export const ButtonBox = styled(Box)`
  text-align: center;
`;
