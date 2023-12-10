import styled from "styled-components";
import profileBackground from "../assets/img/profileBackground.jpeg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled as styledMUI } from "@mui/system";

export const BoxContainer = styledMUI(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: auto;
  background-image: url(${profileBackground});
  background-size: cover;
  background-position: center;
  `;

export const StyledAvatarPaper = styledMUI(Paper)`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  margin: auto;
`;

export const StyledAvatarImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TransparentPaper = styledMUI(Paper)`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom:5%
`;

export const TransparentBox = styledMUI(Box)`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;
