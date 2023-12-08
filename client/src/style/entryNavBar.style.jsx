import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export const StyledFaHeart = styled(FaHeart)`
  color: #90d1ff;
  font-size: 30px;
  margin-left: 10px;
  animation: heartbeat 1s infinite;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const StyledArrow = styled(IoIosArrowRoundBack)`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 5px;
`;