import styled from "styled-components";
import profileBackground from "../assets/img/profileBackground.jpeg";
import Box from "@mui/material/Box";

export const BoxContainer = styled(Box)`
  background-image: url(${profileBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
