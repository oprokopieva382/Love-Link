import { useNavigate } from "react-router-dom";
import { SupperButton } from "./SupperButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import styled from "styled-components";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Button } from "@mui/material";

const StyledModalBox = styled(Box)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 16px;
`;

export const LogInModal = ({ modal, handleCloseModal, handleOpenModal }) => {
  const [login] = useMutation(LOGIN_USER);

  const formControlStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 2,
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    console.log("Form Data:", formData);

    try {
      const { data } = await login({
        variables: { ...formData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    resetForm();
  };
  return (
    <Modal open={modal} onClose={handleCloseModal}>
      <StyledModalBox>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              margin: 3,
            }}
          >
            Good to see you again
          </Typography>
          <FormControl sx={formControlStyle}>
            <TextField
              type="email"
              name="email"
              label="Enter your email"
              variant="outlined"
              value={formData.email}
              sx={{ width: "100%" }}
              onChange={handleTextFieldChange}
            />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <TextField
              type="password"
              label="Enter your password"
              name="password"
              variant="outlined"
              value={formData.password}
              sx={{ width: "100%" }}
              onChange={handleTextFieldChange}
            />
          </FormControl>
          <Button type="submit" color="primary" variant="contained">
            Login
          </Button>
        </form>
      </StyledModalBox>
    </Modal>
  );
};
