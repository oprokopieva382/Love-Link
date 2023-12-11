import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { StyledModalBox } from "../style/loginModal.style";
import {
  StyledSubmitUploadButton,
  StyledUploadTypography,
} from "../style/profile.style";

export const UploadModal = ({ open, handleClose, title }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <StyledModalBox>
        <form onSubmit={handleSubmit}>
          <StyledUploadTypography variant="h5">
            {title}
          </StyledUploadTypography>
          <TextField name="upload-photo" type="file" />
          <StyledSubmitUploadButton
            type="submit"
            color="primary"
            variant="contained"
          >
            Upload
          </StyledSubmitUploadButton>
        </form>
      </StyledModalBox>
    </Modal>
  );
};
