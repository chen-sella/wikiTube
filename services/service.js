
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
