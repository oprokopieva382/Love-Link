import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GiLoveLetter } from "react-icons/gi";
import { FaHeartBroken } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const ProfileNavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="relative"
      elevation={3}
      sx={{ background: "transparent", marginBottom: "2%" }}
    >
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
            { icon: <HiOutlineUser />, label: "profile" },
            { icon: <GiLovers />, label: "matches" },
            { icon: <GiBullseye />, label: "inTarget" },
            { icon: <GiLoveLetter />, label: "conversation" },
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
              onClick={() => navigate(`/${item.label}`)}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
        <IconButton
          onClick={() => Auth.logout()}
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
