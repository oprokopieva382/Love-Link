import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const SignUpFields = ({ formData, handleChange }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    marginRight: "30px",
    gap: 2,
  };

  const formControlStyle = {
    display: "flex",
    width: "100%",
    marginRight: 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "8px",
  };

  return (
    <Box sx={boxStyle}>
      <FormControl sx={formControlStyle}>
        <TextField
          label="What is your first name?"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={formControlStyle}>
        <TextField
          label="What is your last name?"
          variant="outlined"
          name="lastName"
          sx={{ color: "white" }}
          value={formData.lastName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={formControlStyle}>
        <TextField
          type="email"
          label="Enter your email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={formControlStyle}>
        <TextField
          type="password"
          label="Enter your password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};
