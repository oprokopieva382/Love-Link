import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { StyledModalBox } from "../assets/style/loginModal.style";
import {
  StyledSubmitUploadButton,
  StyledUploadTypography,
} from "../assets/style/profile.style";

export const StartChatInTarget = ({ open, handleClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <StyledModalBox>
        <form onSubmit={handleSubmit}>
          <StyledUploadTypography variant="h5">
            Start your first chat. Good luck!
          </StyledUploadTypography>
          <TextField type="text" multiline rows={5} fullWidth />
          <StyledSubmitUploadButton
            type="submit"
            color="primary"
            variant="contained"
          >
            Chat
          </StyledSubmitUploadButton>
        </form>
      </StyledModalBox>
    </Modal>
  );
};
