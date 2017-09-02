angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.service = youTube;
    this.videos = window.exampleVideoData;
    this.currentVideo = {};
    // methods
    this.selectVideo = function(video) {
      this.currentVideo = video;

    };

    youTube.getVideos('cats', function(videos){
      console.log('this inside onInit: ', this);
      this.videos = videos;
      this.currentVideo = videos[0];
    })

    this.boundSelectVideo = this.selectVideo.bind(this);

    this.onClick = function(query){
      this.service.getVideos(query, function(data){
        console.log('this.videos inside of getVideos function before we have updated it:', this.videos);
        console.log('this: ', this)
        this.videos = data;
        console.log('this.videos after setting it: ', this.videos)
        this.currentVideo = data[0];
        console.log('current video after function: ', this.currentVideo)
      });
    };

    this.boundOnClick = this.onClick.bind(this);

    this.searchResults = function() {

    };
  }
});
