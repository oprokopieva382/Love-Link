import {
  StyledContentPaper,
  StyledContentTypography,
  StyledDeleteButton,
  StyledRiHeartAddFill,
  StyledTbHeartOff,
} from "../style/profile.style";
import Badge from "@mui/material/Badge";


export const AboutMeContent = ({ title, content, onDelete }) => {
  return (
    <StyledContentPaper>
      <StyledContentTypography variant="h6">
        Favorite {title}:
        <StyledRiHeartAddFill />
      </StyledContentTypography>
      {content &&
        content.map((item) => (
          <Badge
            key={item}
            badgeContent={<StyledTbHeartOff onClick={() => onDelete(item)} />}
            color="info"
            sx={{ margin: "2%" }}
          >
            <StyledDeleteButton>{item}</StyledDeleteButton>
          </Badge>
        ))}
    </StyledContentPaper>
  );
};
