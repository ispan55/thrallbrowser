angular
  .module('thrallbro')
  .component('serverList', {
    templateUrl: 'server-list/server-list.template.html',
    controllerAs: 'the',
    controller: function serverListController($http, $location){
      var self = this;

      // this.serverId = 1337;
      // var addId = serverId;
      // this.serverString = "/server" + addId.toString();

      this.serverId = 1337;

      this.goServer = function() {
        $location.url("/server/" + self.serverId);
      }
    }
  });