import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successMessage = (message) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2500,
  });
};
