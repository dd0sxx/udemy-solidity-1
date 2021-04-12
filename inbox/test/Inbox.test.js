const assert = require('assert');
const ganache = require('ganache-cli');
const internal = require('stream');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); 

beforeEach(() => {
    // get a list of all accounts
    web3.eth.getAccounts().then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });
    // use one account to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {});
});

