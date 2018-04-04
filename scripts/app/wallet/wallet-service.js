administratorModule.factory("walletService", ['$resource', function ($resource) {

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

		return [{ date: '2018-04-03', amount: 70},
				{ date: '20180403T18:00:00', amount: -150},
				{ date: '2018-04-03', amount: -60},
				{ date: '2018-04-03', amount: 100},
				{ date: '2018-04-03', amount: 250}];
    }
}]);