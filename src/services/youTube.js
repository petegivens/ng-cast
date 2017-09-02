angular.module('video-player')
.service('youTube', function($http) {
  this.getVideos = function(query, callback) {
    console.log(window.YOUTUBE_API_KEY);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet',
        q: query,
        maxResults: 5
      }
    }).then(function successCallback(response) {
      callback(response.data.items);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('lol fucked up');
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }
});
