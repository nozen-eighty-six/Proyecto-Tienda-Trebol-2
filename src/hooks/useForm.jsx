import { useState } from "react";

export const useForm = (validationForm, form) => {
  const [error, setError] = useState({});

  const handleBlur = (e) => {
    setError(validationForm(form));
  };

  return {
    error,

    handleBlur,
    setError,
  };
};
