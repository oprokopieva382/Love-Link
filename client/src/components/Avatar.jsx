import { StyledAvatarImage, StyledAvatarPaper } from "../style/profile.style";

export const Avatar = ({ avatar }) => {
  return (
    <StyledAvatarPaper>
      <StyledAvatarImage src={avatar} alt="Avatar" />
    </StyledAvatarPaper>
  );
};
