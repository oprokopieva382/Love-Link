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
        <Typography
          sx={{
            lineHeight: "1.5rem",
            padding: "4%",
            textAlign: "center",
            fontSize: {
              xs: "0.7rem", 
              sm: "0.8rem",
              md: "1rem",
              lg: "1.2rem",
            },
          }}
        >
          {about}
        </Typography>
      </TransparentPaper>
    </TransparentBox>
  );
};
