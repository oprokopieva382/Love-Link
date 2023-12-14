import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import intro from "../assets/video/intro.mp4";
import { StyledTypography } from "../assets/style/Intro.styles";

export const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
       navigate("/login");
    }, 4100);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <>
      <video
        autoPlay
        muted
        src={intro}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <StyledTypography variant="h4">
        <span style={{ color: "#90D1FF" }}>Love</span>
        <span style={{ color: "#EFBB96", paddingRight: "10px" }}>Link </span>
      </StyledTypography>
    </>
  );
};