import {
  StyledAvatarImage,
  StyledAvatarPaper,
} from "../assets/style/profile.style";

export const Avatar = ({ avatar }) => {
  return (
    <StyledAvatarPaper>
      <StyledAvatarImage src={avatar} alt="Avatar" />
    </StyledAvatarPaper>
  );
};
