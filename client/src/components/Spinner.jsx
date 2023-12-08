import { Hearts } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <Hearts
      height="20%"
      width="20%"
      color="#90D1FF"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
