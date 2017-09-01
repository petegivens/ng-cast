angular.module('video-player')
.component('videoList', {
  // TODO

  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<'
  },
  controller: function() {
    this.videos = [];
  }
});
