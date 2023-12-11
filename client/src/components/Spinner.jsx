import { Hearts } from "react-loader-spinner";
import { SpinnerContainer } from "../style/general.style";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <Hearts
        height="15rem"
        width="15rem"
        color="#90D1FF"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinnerContainer>
  );
};
