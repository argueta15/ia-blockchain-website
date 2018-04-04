administratorModule.factory("walletService", ['$http', function ($http) {

    return {
        get: get,
        getTransactions: getTransactions       
    };

    function get(wallet) {
  //      return $resource('', {
  //          'param': wallet
  //      }).get();
        return { available: 5000, locked: 1500 };
    };

    function getTransactions(wallet){
        $http({
            url: 'https://lyobe9tmue.execute-api.us-east-1.amazonaws.com/hackaton/getbalance',
            method: "POST",
            data: { 'address': wallet }
        }).then(function (data) {
                return data; // how do pass this to $scope.persons?
            });




    }
}]);