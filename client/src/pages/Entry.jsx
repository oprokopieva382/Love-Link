import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { SignUpFields } from "../components/SignUpFields";
import { useState } from "react";
import { FormControlRadio } from "../components/FormControlRadio";
import { EntryNavBar } from "../components/EntryNavBar";
import {
  BoxContainer,
  StyledFormContainer,
  StyledTypography,
  ButtonBox,
} from "../style/entry.style";

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
    <>
      <EntryNavBar />
      <BoxContainer>
        <StyledTypography variant="h4">Let's get start</StyledTypography>
        <form onSubmit={handleSubmit}>
          <StyledFormContainer>
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
          </StyledFormContainer>
          <SignUpFields
            formData={formData}
            onFirstNameChange={handleTextFieldChange("firstName")}
            onLastNameChange={handleTextFieldChange("lastName")}
            onPasswordChange={handleTextFieldChange("password")}
          />
          <ButtonBox>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ padding: "8px 26px" }}
            >
              Join
            </Button>
          </ButtonBox>
        </form>
      </BoxContainer>
    </>
  );
};
