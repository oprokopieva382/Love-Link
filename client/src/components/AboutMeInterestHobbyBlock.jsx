import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { AboutMeContent } from "./AboutMeContent";
import {
  StyledFlexBox,
  StyledSubtitle,
  StyledTitle,
} from "../style/profile.style";
import { Spinner } from "./Spinner";


export const AboutMeInterestHobbyBlock = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const user = data?.me || {};
  const { firstName, lastName, dob, hobbies, interests } = user;

   if (loading) return <Spinner />;
   if (error) return <p>Error: {error.message}</p>;

  const handleDeleteHobby = (hobby) => {
    console.log(`Deleting hobby: ${hobby}`);
  };

  const handleDeleteInterest = (interest) => {
    console.log(`Deleting interest: ${interest}`);
  };

  return (
    <>
      <StyledTitle variant="h4" pb={1}>
        {firstName} {lastName}
      </StyledTitle>
      <StyledSubtitle variant="h6" >
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
    </>
  );
};
