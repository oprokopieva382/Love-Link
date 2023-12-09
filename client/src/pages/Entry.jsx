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

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

export const Entry = () => {
  const initialFormData = {
    gender: "",
    lookingFor: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [addUser] = useMutation(ADD_USER);

  const [formData, setFormData] = useState({
    gender: "",
    lookingFor: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //  const handleTextFieldChange = (event) => {
  //    const { name, value } = event.target;
  //    setFormData({ ...formData, [name]: value });
  //  };

  const resetForm = () => {
    setFormData({
      gender: "",
      lookingFor: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

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
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <FormControlRadio
              title="I am looking for"
              value={formData.lookingFor}
              name="lookingFor"
              onChange={handleChange}
            />
          </StyledFormContainer>
          <SignUpFields formData={formData} handleChange={handleChange} />
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
