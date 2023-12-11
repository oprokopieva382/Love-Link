import avatar from "../assets/img/entryBackground.jpeg";
import { StyledAvatarImage, StyledAvatarPaper } from "../style/profile.style";

export const Avatar = () => {
  return (
    <StyledAvatarPaper>
      <StyledAvatarImage src={avatar} alt="User Avatar" />
    </StyledAvatarPaper>
  );
};
