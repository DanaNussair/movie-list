import { createContext } from "react";

export type AppError = {
  status: number;
  message: string;
};

type ErrorContextType = {
  error: { status: number; message: string } | null;
  setError: (error: AppError | null) => void;
};

const defaultValue = {
  error: null,
  setError: (error: AppError | null) => {},
};

export const ErrorContext = createContext<ErrorContextType>(defaultValue);
export const ErrorProvider = ErrorContext.Provider;
