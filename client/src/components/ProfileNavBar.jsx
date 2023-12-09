import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GiLoveLetter } from "react-icons/gi";
import { FaHeartBroken } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";

export const ProfileNavBar = () => {
  return (
    <AppBar position="sticky" elevation={3} sx={{ background: "transparent" }}>
      <Toolbar>
        <Typography variant="h5">
          <span style={{ color: "#90D1FF" }}>Love</span>
          <span style={{ color: "white", paddingRight: "10px" }}>Link </span>
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: 15,
          }}
        >
          {[
            { icon: <HiOutlineUser />, label: "Profile" },
            { icon: <GiLovers />, label: "Matches" },
            { icon: <GiBullseye />, label: "InTarget" },
            { icon: <GiLoveLetter />, label: "Message History" },
          ].map((item, index) => (
            <IconButton
              key={index}
              sx={{
                borderRadius: "50%",
                backgroundColor: "#90D1FF",
                "&:hover": {
                  backgroundColor: "#98C5E6",
                  color: "inherit",
                },
                margin: "0 5px",
              }}
              aria-label={item.label}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
        <IconButton
          sx={{
            borderRadius: "50%",
            backgroundColor: "#90D1FF",
            "&:hover": {
              backgroundColor: "#98C5E6",
              color: "inherit",
            },
          }}
          aria-label="Logout"
        >
          <FaHeartBroken />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
