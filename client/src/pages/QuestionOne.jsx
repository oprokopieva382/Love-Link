import { BiSolidSkipNextCircle } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../style/general.style";
import { StyledTypography } from "../style/question.style";

export const QuestionOne = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const runNextPage = () => {
    console.log(selectedDate);
    navigate("/question2");
  };

  return (
    <BoxContainer>
      <StyledTypography variant="h4">
        What is your your date of birth?
      </StyledTypography>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
      />
      <BiSolidSkipNextCircle
        onClick={runNextPage}
        style={{ fontSize: "4rem" }}
      />
    </BoxContainer>
  );
};
