require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note rural uncover good only swift since'; 
let testAccounts = [
"0x415f0b27d8148397f06ef7fbe94e0cda37fd8b4b7476e796e304bc965ae3ae67",
"0x2e902056ab82aecb5aafb47ad19bf6ced41ead76f132425e8c9824dacd4cbc28",
"0x956f3591c783b146be523fe00a65f302b333415896af8158fa5daa5cd9cff5e7",
"0x6f3549cd97871cbe8d80777cd8266a4e821e8af94a19e323f7c979a26aba188f",
"0x96e008be13b304d49d180b8639ecc73599a87522d2ec1d009a02ff85e56f7d60",
"0xfbbec3ecd80faecba6ac7d55c51f0dfa346643ae8ef67fa8e1a871be9ff6480e",
"0xeb1d8bc566708c2bb594d0f0f7cebb720aaa8cbdf4b45af7ee0dbc9cec415fc6",
"0xdd2f473a1f9d66f13ce89e615de651aca46d9f9c99be6c297308d68c8f2ade64",
"0xb0def770b05b23b3c1875d1d40cf20194ef5230e22d4c4c89d684152deb05ab7",
"0x722eba0a40f82543fa102395a90e0f8d7cf1188bd6ad032da86ba05434cab8ec"
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
            version: '^0.8.0'
        }
    }
};

