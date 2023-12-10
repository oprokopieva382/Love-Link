import Box from "@mui/material/Box";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { AboutMeContent } from "./AboutMeContent";
import {
  StyledFlexBox,
  StyledSubtitle,
  StyledTitle,
} from "../style/profile.style";

export const AboutMeInterestHobbyBlock = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const user = data?.me || {};
  const { firstName, lastName, dob, hobbies, interests } = user;

  const handleDeleteHobby = (hobby) => {
    console.log(`Deleting hobby: ${hobby}`);
  };

  const handleDeleteInterest = (interest) => {
    console.log(`Deleting interest: ${interest}`);
  };

  return (
    <Box>
      <StyledTitle variant="h4" pb={2}>
        {firstName} {lastName}
      </StyledTitle>
      <StyledSubtitle variant="h6" pb={1}>
        Date of birth: {dob}
      </StyledSubtitle>
      <StyledFlexBox>
        <AboutMeContent
          title="interests"
          content={interests}
          onDelete={handleDeleteInterest}
        />
        <AboutMeContent
          title="hobbies"
          content={hobbies}
          onDelete={handleDeleteHobby}
        />
      </StyledFlexBox>
    </Box>
  );
};
