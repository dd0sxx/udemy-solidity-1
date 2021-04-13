const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = './compile.js';

const provider = new HDWalletProvider(
    'breeze shock pair shuffle pottery mean pair found kind scrub crane safe',
    'https://rinkeby.infura.io/v3/830023ae9bfc4c86ac5bb1d468b5cdc8'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hello world!']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to ', result);
};
deploy();