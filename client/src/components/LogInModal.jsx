import { useNavigate } from "react-router-dom";
import { SupperButton } from "./SupperButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import styled from "styled-components";

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
  const initialFormData = {
    email: "",
    password: "",
  };
  const formControlStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 2,
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleTextFieldChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    navigate("/profile");
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
              label="Enter your email"
              variant="outlined"
              value={formData.email}
              sx={{ width: "100%" }}
              onChange={handleTextFieldChange("email")}
            />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <TextField
              type="password"
              label="Enter your password"
              variant="outlined"
              value={formData.password}
              sx={{ width: "100%" }}
              onChange={handleTextFieldChange("password")}
            />
          </FormControl>
          <SupperButton title="Login" callback={handleSubmit} />
        </form>
      </StyledModalBox>
    </Modal>
  );
};
