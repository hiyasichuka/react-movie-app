const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "37ed43a4f8eaa2abd75f9283692947bc",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/originl/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
