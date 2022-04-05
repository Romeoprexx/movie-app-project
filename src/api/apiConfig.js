const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3cfc5fcd831139a6f9c6801934533710',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;