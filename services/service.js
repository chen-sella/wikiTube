// const YOUTUBE_API_KEY = 'AIzaSyA-CjECeF-aiE60MDH48vWiii6wPUpjVWI';

// const YOUTUBE_KEY = 'youtubeDB';
// var gYoutube = loadFromStorage(YOUTUBE_KEY) || {};

function getDataFromAPI(url) {
  return axios
    .get(url)
    .then((res) => {
      console.log('Service Got Res:', res);

      return res.data;
    })
    .catch((err) => {
      console.log('Service got Error:', err);
    });
}
