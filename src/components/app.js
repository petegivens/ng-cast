angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
}).controller('appControl', function($scope){
  $scope.videos = window.exampleVideoData
});
