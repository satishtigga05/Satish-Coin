var SCDappToken = artifacts.require("SCDappToken");
var SCDappTokenSale = artifacts.require("SCDappTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(SCDappToken,1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SCDappTokenSale, SCDappToken.address, tokenPrice);
  });
};
