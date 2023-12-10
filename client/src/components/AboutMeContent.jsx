import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MdDeleteForever } from "react-icons/md";

export const AboutMeContent = ({ title, content, onDelete }) => {
  return (
    <Paper
      sx={{
        maxWidth: { xs: "100%" },
        flex: 1,
        m: 1,
        p: 2,
        borderRadius: "19px",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem" } }}
      >
        My {title}:
      </Typography>
      {content &&
        content.map((item) => (
          <Paper
            key={item}
            className="heartbeat-box"
            sx={{
              p: 1,
              m: 1,
              borderRadius: "15px",
              width: "100%",
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#a0e2ff",
                "& svg": {
                  color: "#ffffff",
                },
                "& .delete-icon-box": {
                  border: "2px solid #ffffff",
                },
              },
            }}
          >
            <span
              sx={{
                fontSize: "1rem",
              }}
            >
              {item}
            </span>
            <IconButton
              onClick={() => onDelete(item)}
              className="delete-icon-box"
              sx={{
                color: "#90d1ff",
                borderRadius: "50%",
                border: "2px solid #90d1ff",
                "&:hover": {
                  backgroundColor: "#426075",
                },
              }}
            >
              <MdDeleteForever />
            </IconButton>
          </Paper>
        ))}
    </Paper>
  );
};
