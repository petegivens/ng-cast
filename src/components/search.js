angular.module('video-player')

.component('search', {
  bindings: {
    service: '=',
    onClick: '<'
  },
  templateUrl: 'src/templates/search.html'
});
