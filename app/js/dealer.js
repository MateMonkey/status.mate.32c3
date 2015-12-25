'use strict';

angular.module('status.mate.32c3.dealer',["ngSanitize", "relativeDate", "isoCurrency"])
.controller('DealerController', ['$scope', '$rootScope', '$http', 'urlfor',
            function($scope, $rootScope, $http, urlfor) {
  $scope.dealer_slugs = ["32c3-hall1", "32c3-lounge"]

  $scope.dealers = []

  $scope.loadStock = function(dealer) {
    $http({
      method: "GET",
      url: urlfor.get("stock", dealer.id),
      params: {
        current: true
      }
    }).success(function(data) {
      dealer.stock = data['entries'];
    }).error(function(data) {
    });
  }

  $scope.loadDealers = function() {
    angular.forEach($scope.dealer_slugs, function(entry, key) {
      $http({
        method: "GET",
        url: urlfor.get("dealersSlug", entry),
      }).success(function(data) {
        $scope.dealers.push(data);
        $scope.loadStock(data);
      });
    });
  }

  $scope.update = function(dealer, entry, status) {
    var data = {
      status: status,
      product: entry.product.id,
      quantity: entry.quantity
    }
    $http({
      url: urlfor.get("stock", dealer.id),
      method: "POST",
      data: data
    }).success(function(data) {
      $scope.loadStock(dealer);
    });
  }
  $scope.loadDealers();
}]);
