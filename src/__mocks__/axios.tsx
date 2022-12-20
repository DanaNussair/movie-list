const axios = {
  get: jest.fn().mockResolvedValueOnce({
    data: {
      Search: [
        {
          Title: "kung fury",
          Year: "2015",
          imdbID: "1234",
          Type: "action, comedy",
          Poster: "",
        },
      ],
    },
    error: null,
  }),
};

export default axios;
