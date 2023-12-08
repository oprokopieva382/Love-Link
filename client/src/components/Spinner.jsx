import { Hearts } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <Hearts
      height="15rem"
      width="15rem"
      color="#90D1FF"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
