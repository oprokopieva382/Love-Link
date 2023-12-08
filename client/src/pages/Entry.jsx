import entryBackground from "../assets/img/entryBackground.jpeg";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SignUpFields } from "../components/SignUpFields";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { FormControlRadio } from "../components/FormControlRadio";

export const Entry = () => {
  const initialFormData = {
    gender: "",
    lookingFor: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const boxStyle = {
    backgroundImage: `url(${entryBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "end",
  };

  const formContainerStyle = {
    marginRight: "30px",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    color: "white",
  };

  const handleRadioChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleTextFieldChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    navigate("/greeting");
    resetForm();
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h3" style={{ margin: "45px" }}>
        Let's get start
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box style={formContainerStyle}>
          <FormControlRadio
            title="I am"
            value={formData.gender}
            onChange={handleRadioChange("gender")}
          />
          <FormControlRadio
            title="I am looking for"
            value={formData.lookingFor}
            onChange={handleRadioChange("lookingFor")}
          />
        </Box>
        <SignUpFields
          formData={formData}
          onFirstNameChange={handleTextFieldChange("firstName")}
          onLastNameChange={handleTextFieldChange("lastName")}
          onPasswordChange={handleTextFieldChange("password")}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ padding: "8px 26px" }}
          >
            Join
          </Button>
        </Box>
      </form>
    </Box>
  );
};
