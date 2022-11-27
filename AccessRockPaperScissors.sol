// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract AccessRockPaperScissors {
    event RegisterByCall(uint bet, bool success);
    
    function registerWithCall(address rps, uint bet) public returns (uint) {
        (bool success, bytes memory result) =
            rps.call{value: bet, gas: 5000}(abi.encodeWithSignature("register()"));
        emit RegisterByCall(bet, success);
        return abi.decode(result, (uint));
    }
}