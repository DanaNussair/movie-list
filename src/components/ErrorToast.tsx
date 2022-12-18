import { useContext, useMemo } from "react";
import { ErrorContext } from "../contexts/ErrorContext";
import { ErrorToastWrapper } from "../styles/ErrorToastStyles";

const ErrorToast = () => {
  const { error, setError } = useContext(ErrorContext);

  const isDisplayed = useMemo(() => !!error, [error]);

  return (
    <ErrorToastWrapper onClick={() => setError(null)} isDisplayed={isDisplayed}>
      {error?.message}
    </ErrorToastWrapper>
  );
};

export default ErrorToast;
