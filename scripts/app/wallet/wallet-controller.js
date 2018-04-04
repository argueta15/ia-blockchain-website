administratorModule.controller("walletController", walletController);

walletController.$inject = ["$scope", "walletService"];

function walletController($scope, walletService) {
	$scope.wallet= walletService.get();

	var address = '02547746384c11e8a4e43f7fddbcc654';
	walletService.getTransactions(address).then(function(response){
		$scope.transactions = response;
	}, function(error){
		$scope.transactions =[];
	});
}