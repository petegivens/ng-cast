angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    // methods
    this.selectVideo = function() {
    };

    this.searchResults = function() {

    };
  }
});


// .controller('appControl', function($scope){
//   $scope.videos = window.exampleVideoData;
// });
