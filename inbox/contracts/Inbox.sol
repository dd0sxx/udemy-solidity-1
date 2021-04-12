pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    constructor(string inititalMessage) public {
        message = inititalMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}