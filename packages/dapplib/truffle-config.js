require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy release pitch purpose harvest oppose outer gaze'; 
let testAccounts = [
"0xecce571276819bbc6578e6edf2cb9e1d2d973c75ca2e14141d86c88971b2a767",
"0xad728e4b13f583b38165a580812df9a22916bd11a5957f9bee762abde5e0ac7f",
"0x32e4680508cc5f682c271ef3c32f0d3e479c17b55d8834f5f1b51367d2be1b24",
"0xf2db3650be10fa75d98f4ddb46f6bb465ceb162fa78c4c0c53a18acebf54b4f3",
"0x236e8e432e47f341dd5dc52861fb43310332261ab74079c4ff36dc43aa602e42",
"0x3398d7c8a06aa5a9fb722e3eb9c6e05c56e978574cb34420d4811e4d61a1942e",
"0x9af6ef4fe170b82977f35d1e1a8781dd30c9a08e3400fcf163b6da25efd51b02",
"0xf9904ce1ade7a91437d3fcdde89f59a39e706c4ebadb4a1a7561ecd3338f2dda",
"0x246c3b3c6df9f4d65d6304e8386db27e2d220808485fdfc3797c5c95c9c4e9d8",
"0x2406ca273f416eaf9d628ca2c83cf446b46a6e243da4fe1ad2746abb74af10fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
