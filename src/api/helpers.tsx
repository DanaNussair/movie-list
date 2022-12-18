export const getErrorMessage = (status_code: number) => {
  switch (status_code) {
    case 400: {
      return "Invalid request";
    }
    case 401: {
      return "User is not authorized to perform this action";
    }
    default: {
      return "Some error has occurred while fetching data";
    }
  }
};
