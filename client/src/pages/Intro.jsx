import intro from "../assets/video/intro.mp4";
import  Typography  from "@mui/material/Typography";
export const Intro = () => {
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
          fontSize: "180%"
        }}
      >
        LoveLink
      </Typography>
    </>
  );
};
