import avatar from "../assets/img/placeholder.jpg";
import { StyledAvatarImage, StyledAvatarPaper } from "../style/profile.style";

export const Avatar = () => {
  return (
    <StyledAvatarPaper>
      <StyledAvatarImage src={avatar} alt="User Avatar" />
    </StyledAvatarPaper>
  );
};
