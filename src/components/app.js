angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    // methods

    this.selectVideo = function(video) {
      this.currentVideo = video;
    };

    this.boundSelectVideo = this.selectVideo.bind(this);

    this.searchResults = function() {

    };
  }
});
