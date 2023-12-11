import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledModalBox } from "../style/loginModal.style";

export const UploadModal = ({open, handleClose}) => {
    const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <StyledModalBox>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              margin: 3,
            }}
          >
            Show us your best photo
          </Typography>
          <TextField name="upload-photo" type="file" />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ display: "block", margin: "0 auto", marginTop: "10px" }}
          >
            Upload
          </Button>
        </form>
      </StyledModalBox>
    </Modal>
  );
};
