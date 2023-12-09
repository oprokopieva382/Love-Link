import { BiSolidSkipNextCircle } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../style/general.style";
import { StyledTypography } from "../style/question.style";
import { useMutation } from "@apollo/client";
import { ADD_DOB } from "../utils/mutations";
import Auth from "../utils/auth";

export const QuestionOne = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [addDOB] = useMutation(ADD_DOB);
  const navigate = useNavigate();

  const runNextPage = async () => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      await addDOB({
        variables: { dob: selectedDate },
      });
      console.log(selectedDate);
      navigate("/question2");

    } catch (error) {
      console.error("Mutation Error:", error);
    }
  };

  return (
    <BoxContainer>
      <StyledTypography variant="h4">
        What is your your date of birth?
      </StyledTypography>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </BoxContainer>
  );
};
