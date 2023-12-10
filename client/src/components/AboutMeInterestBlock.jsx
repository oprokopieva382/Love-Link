import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

export const AboutMeInterestBlock = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const user = data?.me || {};
  const { firstName, lastName, dob } = user;

  return (
    <Box>
      <Typography variant="h4">
        {firstName} {lastName}
      </Typography>
      <Typography variant="h6">Date of birth: {dob}</Typography>
      
    </Box>
  );
};
