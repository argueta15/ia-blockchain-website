administratorModule.controller("walletController", walletController);

walletController.$inject = ["$scope", "walletService"];

function walletController($scope, walletService) {
	$scope.wallet= walletService.get();
	$scope.transactions= walletService.getTransactions();

}