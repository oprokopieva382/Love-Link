import { TransparentBox, TransparentPaper } from "../style/profile.style";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";

export const AboutMe = () => {
  const { loading, error, data } = useQuery(GET_ME);
    const about = data?.me?.about;
  return (
    <TransparentBox>
      <TransparentPaper elevation={5}>
        <Typography sx={{lineHeight: "2rem", padding: "4%", textAlign: "center",}}>{about}</Typography>
      </TransparentPaper>
    </TransparentBox>
  );
};
