'use strict';

function onInit() {
  getDataFromAPI(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyA-CjECeF-aiE60MDH48vWiii6wPUpjVWI&q=ed sheeran`
  ).then(renderYoutube);
  getDataFromAPI(
    `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&%20srsearch=ed sheeran&format=json`
  ).then(renderWiki);
}

function onSearchData() {
  const searchVal = document.querySelector('input[name="search"]').value;
  getDataFromAPI(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyA-CjECeF-aiE60MDH48vWiii6wPUpjVWI&q=${searchVal}`
  ).then(renderYoutube);
  getDataFromAPI(
    `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&%20srsearch=${searchVal}&format=json`
  ).then(renderWiki);
}

function renderYoutube(data) {
  console.log({ data });
  const topSearch = data.items;
  displayVideo(data.items[0].id.videoId);
  console.log({ topSearch });
  var strHtml = topSearch
    .map((video) => {
      return `<div class="video-info" onclick="displayVideo('${video.id.videoId}')">
                <img src="${video.snippet.thumbnails.default.url}">
                <h3>${video.snippet.title}</h3>
                </div>`;
    })
    .join('');
  document.querySelector('.videos-info-container').innerHTML = strHtml;
}

function renderWiki(data) {
  const searchInfo = data.query;
  console.log(searchInfo);
  console.log(searchInfo.search);
  var strHtml = searchInfo.search
    .map((result) => {
      return `<div class="search-result">
                <h2>${result.title}</h2>
                ${result.snippet}
            </div>`;
    })
    .join('');
  document.querySelector('.wiki-container').innerHTML = strHtml;
}

function displayVideo(videoId) {
  console.log(videoId);
  const elIFrame = document.querySelector('.play-vid-container');
  elIFrame.src = `https://www.youtube.com/embed/${videoId}`;
}
