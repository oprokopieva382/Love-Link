import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import intro from "../assets/video/intro.mp4";
import Typography from "@mui/material/Typography";

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
      <Typography
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "180%",
        }}
      >
        LoveLink
      </Typography>
    </>
  );
};
