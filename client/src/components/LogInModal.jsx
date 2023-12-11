import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Button from "@mui/material/Button";
import { StyledModalBox } from "../style/loginModal.style";

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

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

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
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ display: "block", margin: "0 auto" }}
          >
            Login
          </Button>
        </form>
      </StyledModalBox>
    </Modal>
  );
};
