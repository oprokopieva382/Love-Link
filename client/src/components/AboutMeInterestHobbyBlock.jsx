import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { AboutMeContent } from "./AboutMeContent";
import {
  StyledFlexBox,
  StyledSubtitle,
  StyledTitle,
} from "../assets/style/profile.style";
import { Spinner } from "./Spinner";

export const AboutMeInterestHobbyBlock = ({ isUser }) => {
  const { loading, error, data } = useQuery(GET_ME);
  const user = data?.me || {};
  const { firstName, lastName, dob, hobbies, interests } = user;

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  // console.log(props.show);
  console.log(dob);
  console.log(typeof dob);
  let date = new Date(parseInt(dob));
  console.log(date);

  return (
    <>
      <StyledTitle variant="h4" pb={1}>
        {firstName} {lastName}
      </StyledTitle>
      <StyledSubtitle variant="h6">
        Date of birth: {date.toLocaleString()}
      </StyledSubtitle>
      <StyledFlexBox>
        <AboutMeContent title="interests" content={interests} isUser={isUser} />
        <AboutMeContent title="hobbies" content={hobbies} isUser={isUser} />
      </StyledFlexBox>
    </>
  );
};
