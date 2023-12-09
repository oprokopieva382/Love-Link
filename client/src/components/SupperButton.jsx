import Button from "@mui/material/Button";

export const SupperButton = ({ title, callback }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        margin: "auto",
      }}
      onClick={callback}
    >
      {title}
    </Button>
  );
};
